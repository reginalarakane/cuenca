import Image from "next/image";
import Link from "next/link";

import { InterestLink } from "@/components/interest-link";
import { ProductCard } from "@/components/product-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { collectionIntro, products } from "@/content/catalog";
import { getContactEmail, withBasePath } from "@/lib/site-config";

export default function HomePage() {
  const featuredProduct = products[0];

  return (
    <>
      <SiteHeader />

      <main>
        <section className="hero">
          <div className="site-shell hero__grid">
            <div className="hero__content" id="coleccion">
              <p className="eyebrow">{collectionIntro.overline}</p>
              <h1>{collectionIntro.title}</h1>
              <p className="hero__lead">{collectionIntro.lead}</p>
              <p className="hero__body">{collectionIntro.body}</p>

              <div className="hero__actions">
                <Link className="button button--primary" href="#productos">
                  Explorar piezas
                </Link>
                <InterestLink
                  className="button button--ghost"
                  label="Solicitar interes de la coleccion"
                  productName="Coleccion 2026 CUENCA"
                />
              </div>
            </div>

            <div className="hero__media">
              <div className="hero__image-wrap">
                <Image
                  alt={featuredProduct.image.alt}
                  className="hero__image"
                  height={featuredProduct.image.height}
                  priority
                  sizes="(max-width: 899px) 100vw, 44vw"
                  src={withBasePath(featuredProduct.image.src)}
                  width={featuredProduct.image.width}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="intro-band">
          <div className="site-shell intro-band__grid">
            <div>
              <p className="eyebrow">Lectura de coleccion</p>
              <p className="intro-band__statement">
                Cuatro piezas nuevas para mesa y ritual: piedra volcanica, contrastes tactiles y una presencia
                escultorica que se comparte mejor como objeto que como simple SKU.
              </p>
            </div>

            <div className="intro-band__note">
              <p>
                Este micrositio muestra materiales, medidas aproximadas, acabados y notas relevantes para compartir la
                coleccion con claridad.
              </p>
              <a href={`mailto:${getContactEmail()}`}>{getContactEmail()}</a>
            </div>
          </div>
        </section>

        <section className="products-section" id="productos">
          <div className="site-shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Catalogo</p>
                <h2>Piezas disponibles para compartir, cotizar y medir interes.</h2>
              </div>
            </div>

            <div className="product-grid">
              {products.map((product, index) => (
                <ProductCard key={product.slug} priority={index < 2} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
