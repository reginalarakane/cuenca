import { getContactEmail, hasInterestFormConfigured } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contacto">
      <div className="site-shell site-footer__grid">
        <div>
          <p className="eyebrow">Contacto</p>
          <p className="site-footer__brand">CUENCA</p>
          <p className="site-footer__copy">
            Catalogo digital para compartir la nueva coleccion con clientes actuales y medir interes antes de definir
            produccion.
          </p>
        </div>

        <div>
          <p className="site-footer__label">Canal activo</p>
          <a className="site-footer__link" href={`mailto:${getContactEmail()}`}>
            {getContactEmail()}
          </a>
        </div>

        <div>
          <p className="site-footer__label">CTA de interes</p>
          <p className="site-footer__copy">
            {hasInterestFormConfigured()
              ? "Google Form configurado para captacion por pieza."
              : "Fallback operativo por correo mientras se conecta el Google Form final."}
          </p>
        </div>
      </div>
    </footer>
  );
}
