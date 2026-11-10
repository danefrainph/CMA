# Augussep – Sitio web (3 páginas)

Abre `index.html` (raíz): redirige a la página de inicio.

```
augussep-web/
├── index.html            → redirige a inicio/
├── images/               → imágenes compartidas (hero.jpg, harina.jpg, aceite.jpg, favicon)
├── inicio/               → index.html · index.css · index.js
├── sobre-nosotros/       → index.html · index.css · index.js
└── productos/            → index.html · index.css · index.js
```

Cada carpeta es independiente: su CSS trae los estilos comunes (encabezado, botones,
cotización, pie de página) y al final los propios de esa página. El JS es el mismo en las tres.

## Navegación
- INICIO / SOBRE NOSOTROS / PRODUCTOS → abren cada página.
- COTIZA AHORA → baja a "Solicita tu cotización", que está al final de las tres páginas.
- "Cotizar ahora" de cada producto → baja al formulario con ese producto ya elegido.

## Antes de publicar
1. WhatsApp: en `index.js` de las 3 carpetas, `WHATSAPP_NUMBER = "51943591748"`
   (tomado del saco de harina). Cámbialo si el número de ventas es otro.
2. Fichas técnicas: las de harina y aceite están en `fichas/` y enlazadas a sus botones
   "Descargar ficha técnica (PDF)" en la página Productos (rutas en `SHEETS` de los 3 `index.js`).
3. Productos → la harina y el aceite ya muestran los datos reales de sus fichas.
4. Redes sociales: completa los `href="#"` del pie de página en las 3 páginas.

## Fotos
- `images/hero.jpg`: foto original de la Costa Verde (del PDF), usada de fondo en las tres portadas.
- `images/harina.jpg` y `images/aceite.jpg`: fotos de los productos (del PDF).

## Idiomas
Español, inglés y chino mandarín (simplificado). El selector ES / EN / 中文 está en el pie de página.
El sitio se abre solo en inglés o chino si el navegador del visitante está en ese idioma, y recuerda la elección.
Los textos de inglés y chino están en `index.js` (objetos `EN` y `ZH`).
