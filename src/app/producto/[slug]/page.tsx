import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { InterestLink } from "@/components/interest-link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { products, productsBySlug, type ProductSlug } from "@/content/catalog";
import { buildProductMetadata } from "@/lib/seo";
import { withBasePath } from "@/lib/site-config";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getProduct(slug: string) {
  return productsBySlug[slug as ProductSlug];
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {};
  }

  return buildProductMetadata(product);
}

function SpecList({
  title,
  items,
}: {
  title: string;
  items: { label: string; value: string }[];
}) {
  return (
    <section className="detail-block">
      <h2>{title}</h2>
      <dl className="detail-list">
        {items.map((item) => (
          <div className="detail-list__row" key={`${title}-${item.label}`}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function BulletList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="detail-block">
      <h2>{title}</h2>
      <ul className="detail-bullets">
        {items.map((item) => (
          <li key={`${title}-${item}`}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <SiteHeader />

      <main className="product-page">
        <section className="product-hero">
          <div className="site-shell product-hero__grid">
            <div>
              <Link className="back-link" href="/">
                Volver a la coleccion
              </Link>
              <p className="eyebrow">{product.eyebrow}</p>
              <h1>{product.name}</h1>
              <p className="product-hero__lead">{product.intro}</p>
              <p className="product-hero__summary">{product.summary}</p>
            </div>

            <aside className="product-hero__aside">
              {product.priceLabel ? (
                <div className="product-pill">
                  <span>Precio</span>
                  <strong>{product.priceLabel}</strong>
                </div>
              ) : null}
              {product.moq ? (
                <div className="product-pill">
                  <span>MOQ</span>
                  <strong>{product.moq}</strong>
                </div>
              ) : null}
              {product.materials?.[0] ? (
                <div className="product-pill">
                  <span>Material principal</span>
                  <strong>{product.materials[0]}</strong>
                </div>
              ) : null}

              <div className="product-hero__actions">
                <InterestLink
                  className="button button--primary"
                  label={product.ctaLabel}
                  productName={product.ctaProductName}
                />
                <Link className="button button--ghost" href="/#productos">
                  Ver otras piezas
                </Link>
              </div>
            </aside>
          </div>
        </section>

        <section className="product-gallery">
          <div className="site-shell">
            <div className="product-gallery__frame">
              <Image
                alt={product.image.alt}
                className="product-gallery__image"
                height={product.image.height}
                priority
                sizes="100vw"
                src={withBasePath(product.image.src)}
                width={product.image.width}
              />
            </div>
          </div>
        </section>

        <section className="product-detail">
          <div className="site-shell product-detail__grid">
            <div className="product-detail__main">
              {product.concept ? <BulletList items={product.concept} title="Concepto" /> : null}
              {product.dimensions ? <SpecList items={product.dimensions} title="Medidas aproximadas" /> : null}
              {product.cavityDetails ? <SpecList items={product.cavityDetails} title="Cavidades y sistema" /> : null}
            </div>

            <div className="product-detail__side">
              {product.materials ? <BulletList items={product.materials} title="Materiales" /> : null}
              {product.finishes ? <BulletList items={product.finishes} title="Acabados" /> : null}
              {product.setDetails ? <BulletList items={product.setDetails} title="Composicion del set" /> : null}
              {product.productionNotes ? <BulletList items={product.productionNotes} title="Notas de produccion" /> : null}
              {product.accentMaterials ? <BulletList items={product.accentMaterials} title="Materiales de acento" /> : null}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
