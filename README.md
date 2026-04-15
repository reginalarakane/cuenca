# CUENCA Catalogo 2026

Micrositio catalogo en `Next.js` con export estatico y deploy a GitHub Pages, siguiendo el mismo patron de publicacion usado en `CATALIZA`.

## Incluye

- Home editorial para la coleccion 2026
- Fichas publicas por producto bajo `/producto/[slug]`
- Contenido tipado con informacion real tomada del PDF adjunto
- CTA compartida para medir interes por pieza con fallback operativo a correo
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

## Publicacion

- URL objetivo: `https://reginalarakane.github.io/cuenca/`
- El repo usa `output: "export"` y publica la carpeta `out/`
- Si el Google Form final aun no esta configurado, el CTA cae automaticamente a `mailto:regislaka@gmail.com`
