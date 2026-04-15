export const siteOrigin = "https://reginalarakane.github.io";
export const siteBasePath = "/cuenca";
export const siteName = "CUENCA";
export const siteLocale = "es-MX";

export const staticSiteConfig = {
  contactEmail: "regislaka@gmail.com",
  interestForm: {
    openUrl: "",
    productEntryId: "",
  },
} as const;

export function buildSiteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const sitePath = normalizedPath === "/" ? siteBasePath : `${siteBasePath}${normalizedPath}`;
  return new URL(sitePath, siteOrigin).toString();
}

export function getAssetPath(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
}

export function withBasePath(path: string) {
  const normalizedPath = getAssetPath(path);
  return `${siteBasePath}${normalizedPath}`;
}

export function getContactEmail() {
  return staticSiteConfig.contactEmail;
}

export function hasInterestFormConfigured() {
  return Boolean(staticSiteConfig.interestForm.openUrl);
}

export function buildInterestHref(productName: string) {
  if (hasInterestFormConfigured()) {
    const url = new URL(staticSiteConfig.interestForm.openUrl);

    if (staticSiteConfig.interestForm.productEntryId) {
      url.searchParams.set(staticSiteConfig.interestForm.productEntryId, productName);
    }

    return {
      href: url.toString(),
      mode: "form" as const,
    };
  }

  const subject = encodeURIComponent(`Interés en ${productName} | CUENCA`);
  const body = encodeURIComponent(
    [
      "Hola CUENCA,",
      "",
      `Me interesa recibir más información sobre: ${productName}.`,
      "",
      "Gracias.",
    ].join("\n"),
  );

  return {
    href: `mailto:${getContactEmail()}?subject=${subject}&body=${body}`,
    mode: "email" as const,
  };
}
