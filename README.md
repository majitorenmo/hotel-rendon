# Hotel Rendón — Cartagena

Landing page responsive para el concepto Hotel Rendón Caribe, con una identidad gráfica pop/cartoon original, catálogo de habitaciones y concierge virtual.

## Inventario y tarifas base propuestas

| Modelo | Habitaciones | Configuración | Tarifa base por noche |
|---|---:|---|---:|
| King Brick | 34 | 1 cama King, 2 huéspedes | $429.000 COP |
| Queen Duo | 33 | 2 camas Queen, hasta 4 huéspedes | $499.000 COP |
| Suite Master | 33 | Suite con cama King y zona de estar | $749.000 COP |
| **Total** | **100** | | |

La distribución 34/33/33 es una propuesta equilibrada que suma 100. Las tarifas son valores iniciales sugeridos, no una cotización ni un estudio tarifario formal; deben validarse con el inventario, categoría, ubicación exacta, servicios, impuestos y temporadas del hotel antes de ofrecerlas al público.

Como referencias públicas consultadas para orientar el rango: KAYAK reporta un promedio de habitación doble en Cartagena y ofertas recientes; un resultado de Google Hotels para Sonesta Cartagena mostraba opciones de King/Queen y suites en distintos rangos; y el portafolio de tarifas hoteleras 2026 de Comfamiliar Cartagena muestra tarifas para habitación doble y junior suite. Los precios cambian por fecha y disponibilidad:
- https://www.kayak.com.co/Hoteles-en-Cartagena-de-Indias.26923.hotel.ksp
- https://www.google.com/travel/hotels/
- https://comfamiliar.org.co/wp-content/uploads/2026/04/Portafolio-Actualizado-10-de-abril-2026.pdf

## Concierge AI 24/7

La interfaz llama a `/api/concierge`. El endpoint de servidor usa la API de OpenAI y mantiene la clave fuera del navegador. Si el endpoint no está configurado o no está disponible, la interfaz usa respuestas FAQ locales como respaldo.

Para activarlo en Vercel:
1. Importa este repositorio en Vercel.
2. En **Project Settings → Environment Variables**, configura `OPENAI_API_KEY` con una clave privada de API. Opcionalmente define `OPENAI_MODEL`.
3. Despliega el proyecto. No pongas la clave en `index.html`, en variables `VITE_*` ni en el repositorio.

## WhatsApp

Antes de publicar para huéspedes, configura el número oficial del hotel en los enlaces `wa.me` de `index.html`. Usa el indicativo de país y el número, solo dígitos. Los enlaces actuales abren WhatsApp con el mensaje preparado, pero no identifican una línea del hotel porque el número oficial aún no fue proporcionado.

## Publicación

El sitio está en `index.html` y puede desplegarse en Vercel (recomendado para incluir la función AI) o en GitHub Pages. GitHub Pages sirve el sitio estático, pero **no ejecuta** `api/concierge.js`; en ese caso el chat funciona con las respuestas FAQ de respaldo. No se ha configurado un dominio ni un número de WhatsApp.

## Identidad visual

Diseño original con colores brillantes, formas geométricas y humor visual de caricatura. No incluye personajes, logotipos ni imágenes oficiales de The Simpsons y no está afiliado ni patrocinado por sus titulares.
