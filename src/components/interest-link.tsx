import { buildInterestHref } from "@/lib/site-config";

type InterestLinkProps = {
  productName: string;
  label: string;
  className?: string;
};

export function InterestLink({ productName, label, className }: InterestLinkProps) {
  const action = buildInterestHref(productName);

  return (
    <a
      className={className}
      href={action.href}
      target="_blank"
      rel="noreferrer"
      data-cta-mode={action.mode}
    >
      {label}
    </a>
  );
}
