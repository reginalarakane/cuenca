import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-shell site-header__inner">
        <Link className="site-header__brand" href="/">
          CUENCA
        </Link>

        <nav aria-label="Principal" className="site-header__nav">
          <Link href="/#coleccion">Coleccion</Link>
          <Link href="/#productos">Productos</Link>
          <Link href="/#contacto">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}
