import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/content/catalog";
import { InterestLink } from "@/components/interest-link";
import { withBasePath } from "@/lib/site-config";

type ProductCardProps = {
  product: Product;
  priority?: boolean;
};

export function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <article className="product-card">
      <Link className="product-card__image-link" href={`/producto/${product.slug}`}>
        <div className="product-card__image-wrap">
          <Image
            alt={product.image.alt}
            className="product-card__image"
            height={product.image.height}
            priority={priority}
            sizes="(max-width: 799px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={withBasePath(product.image.src)}
            width={product.image.width}
          />
        </div>
      </Link>

      <div className="product-card__body">
        <p className="eyebrow">{product.eyebrow}</p>
        <div className="product-card__header">
          <h2>
            <Link href={`/producto/${product.slug}`}>{product.name}</Link>
          </h2>
        </div>

        <p className="product-card__summary">{product.summary}</p>

        <dl className="product-card__meta">
          {product.materials?.[0] ? (
            <>
              <dt>Material</dt>
              <dd>{product.materials[0]}</dd>
            </>
          ) : null}
        </dl>

        <div className="product-card__actions">
          <Link className="button button--ghost" href={`/producto/${product.slug}`}>
            Ver detalle
          </Link>
          <InterestLink
            className="button button--primary"
            label={product.ctaLabel}
            productName={product.ctaProductName}
          />
        </div>
      </div>
    </article>
  );
}
