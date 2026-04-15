import Link from "next/link";

import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="not-found">
        <div className="site-shell not-found__content">
          <p className="eyebrow">Ruta no encontrada</p>
          <h1>Esta ficha no existe o ya no está disponible.</h1>
          <p>Vuelve a la colección para seguir recorriendo las piezas activas del catálogo.</p>
          <Link className="button button--primary" href="/">
            Ir al inicio
          </Link>
        </div>
      </main>
    </>
  );
}
