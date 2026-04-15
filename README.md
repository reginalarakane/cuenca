# CUENCA Catálogo 2026

Micrositio catálogo en `Next.js` con export estático y deploy a GitHub Pages, siguiendo el mismo patrón de publicación usado en `CATALIZA`.

## Incluye

- Home editorial para la colección 2026
- Fichas públicas por producto bajo `/producto/[slug]`
- Contenido tipado con información real tomada del PDF adjunto
- CTA compartida para medir interés por pieza con fallback operativo a correo
- Metadata y Open Graph por pieza
- Workflow de GitHub Pages que publica desde `main`

## Correr local

```bash
npm install
npm run dev
```

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Publicación

- URL objetivo: `https://reginalarakane.github.io/cuenca/`
- El repo usa `output: "export"` y publica la carpeta `out/`
- Si el Google Form final aún no está configurado, el CTA cae automáticamente a `mailto:regislaka@gmail.com`
