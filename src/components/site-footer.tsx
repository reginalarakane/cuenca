import { getContactEmail, hasInterestFormConfigured } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contacto">
      <div className="site-shell site-footer__grid">
        <div>
          <p className="eyebrow">Contacto</p>
          <p className="site-footer__brand">CUENCA</p>
          <p className="site-footer__copy">
            Catálogo digital para compartir la nueva colección con clientes actuales y medir interés antes de definir
            producción.
          </p>
        </div>

        <div>
          <p className="site-footer__label">Canal activo</p>
          <a className="site-footer__link" href={`mailto:${getContactEmail()}`}>
            {getContactEmail()}
          </a>
        </div>

        <div>
          <p className="site-footer__label">CTA de interés</p>
          <p className="site-footer__copy">
            {hasInterestFormConfigured()
              ? "Google Form configurado para captación por pieza."
              : "Fallback operativo por correo mientras se conecta el Google Form final."}
          </p>
        </div>
      </div>
    </footer>
  );
}
