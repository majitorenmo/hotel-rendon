export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const key = process.env.OPENAI_API_KEY;
  if (!key) return res.status(503).json({ error: "Concierge AI is not configured yet" });
  const message = typeof req.body?.message === "string" ? req.body.message.trim().slice(0, 1200) : "";
  if (!message) return res.status(400).json({ error: "Message is required" });
  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": "Bearer " + key },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
        instructions: "Eres el concierge virtual 24/7 del Hotel Rendón en Cartagena de Indias, Colombia. Responde en español, con amabilidad y brevedad. Datos de referencia: 100 habitaciones: 34 King Brick (1 cama King, 2 huéspedes, COP 429.000/noche), 33 Queen Duo (2 camas Queen, hasta 4 huéspedes, COP 499.000/noche), 33 Suite Master (suite con cama King y zona de estar, 2-3 huéspedes, COP 749.000/noche). Las tarifas son orientativas y varían por fecha, temporada, impuestos y disponibilidad. No inventes dirección, servicios, políticas, disponibilidad ni confirmaciones de reserva. Para disponibilidad y reservas, invita a contactar al hotel por WhatsApp. Si no sabes algo, dilo claramente.",
        input: message,
        max_output_tokens: 220
      })
    });
    if (!response.ok) return res.status(502).json({ error: "AI provider error" });
    const data = await response.json();
    const reply = (data.output || []).flatMap(item => item.content || []).filter(part => part.type === "output_text").map(part => part.text).join("\n").trim();
    return res.status(200).json({ reply: reply || "Puedo ayudarte con habitaciones y tarifas. Para más detalles, contacta al equipo del hotel." });
  } catch (error) {
    return res.status(500).json({ error: "Concierge temporarily unavailable" });
  }
}