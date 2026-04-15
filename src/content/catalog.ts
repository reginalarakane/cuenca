export type ProductSlug =
  | "salero-pimentero-totem"
  | "portavasos"
  | "portavelas-esculturales"
  | "difusor-aromatico";

export type LabeledValue = {
  label: string;
  value: string;
};

export type Product = {
  slug: ProductSlug;
  name: string;
  eyebrow: string;
  summary: string;
  intro: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  concept?: string[];
  materials?: string[];
  dimensions?: LabeledValue[];
  cavityDetails?: LabeledValue[];
  setDetails?: string[];
  finishes?: string[];
  productionNotes?: string[];
  accentMaterials?: string[];
  priceLabel?: string;
  moq?: string;
  productionNote?: string;
  ctaLabel: string;
  ctaProductName: string;
};

export const collectionIntro = {
  overline: "Colección 2026",
  title: "Objetos para la mesa y el ritual, definidos por la presencia del material.",
  lead:
    "Esta selección reúne cuatro piezas nuevas pensadas para compartir con clientes actuales, medir interés y afinar producción antes de abrir lotes definitivos.",
  body:
    "La colección se apoya en piedra volcánica, maderas nobles y piedras de acento para proponer una mesa más escultórica, táctil y contemporánea.",
};

export const collectionHighlights = [
  "Catálogo digital shareable con información real de producto.",
  "Fichas limpias para compartir la pieza y captar interés sin fricción comercial.",
  "CTA de interés por pieza con fallback confiable a correo.",
] as const;

export const products: Product[] = [
  {
    slug: "salero-pimentero-totem",
    name: "Salero / Pimentero Tótem",
    eyebrow: "Mesa / Piedra volcánica",
    summary:
      "Pieza tallada en piedra volcánica sólida con silueta de tótem, recarga inferior con tapón de corcho y acabado pulido suave que conserva la textura natural.",
    intro:
      "Una pieza compacta y antropomorfa para mesa, pensada como figura escultórica funcional.",
    image: {
      src: "/products/salero-pimentero-totem-20260415.jpg",
      alt: "Salero y pimentero Tótem de CUENCA en piedra volcánica con tapas metálicas.",
      width: 1536,
      height: 1024,
    },
    materials: ["Piedra volcánica sólida", "Tapón removible de corcho"],
    dimensions: [
      { label: "Altura total", value: "8.5 - 9.5 cm" },
      { label: "Ancho del cuerpo", value: "4 - 4.5 cm" },
      { label: "Diámetro de la base", value: "4.5 - 5 cm" },
      { label: "Diámetro de la cabeza", value: "Aprox. 4.5 cm" },
      { label: "Capacidad aproximada", value: "25 - 35 g de sal o pimienta" },
    ],
    cavityDetails: [
      { label: "Diámetro interno", value: "2.5 - 3 cm" },
      { label: "Profundidad", value: "5.5 - 6.5 cm" },
      { label: "Salero", value: "5 - 7 orificios de 1.5 - 2 mm" },
      { label: "Pimentero", value: "3 orificios de 2 - 2.5 mm" },
      { label: "Orificio inferior", value: "2 - 2.5 cm" },
    ],
    finishes: ["Acabado pulido suave", "Textura natural de la piedra"],
    productionNotes: [
      "Espesor mínimo de pared: 8 - 10 mm.",
      "Base estable y plana.",
      "Escultura tipo tótem / figura antropomorfa.",
    ],
    priceLabel: "MX$360 + IVA",
    moq: "50 pares",
    ctaLabel: "Me interesa este producto",
    ctaProductName: "Salero / Pimentero Tótem",
  },
  {
    slug: "portavasos",
    name: "Portavasos",
    eyebrow: "Mesa / Set de 4",
    summary:
      "Set de 4 portavasos en piedra volcánica natural con acabado negro, bordes suavemente redondeados y una pieza de acento en piedra distinta por lote.",
    intro:
      "Un set pensado para sumar textura mineral a la mesa, manteniendo una lectura sobria y contemporánea.",
    image: {
      src: "/products/portavasos-20260415-v2.png",
      alt: "Set de portavasos de CUENCA en piedra volcánica con piezas de acento en piedra pulida.",
      width: 800,
      height: 533,
    },
    materials: ["Piedra volcánica natural"],
    dimensions: [
      { label: "Cantidad por set", value: "4 piezas" },
      { label: "Diámetro", value: "9 - 10 cm" },
      { label: "Grosor", value: "1.2 - 1.5 cm" },
      { label: "Peso aproximado por pieza", value: "250 - 350 g" },
      { label: "Base", value: "Plana para estabilidad sobre mesa" },
    ],
    setDetails: [
      "Cada set debe incluir 3 piezas en piedra volcánica negra o gris oscuro.",
      "Cada set debe incluir 1 pieza de acento en piedra diferente.",
      "Las piedras de acento se alternan entre producción.",
    ],
    finishes: [
      "Mantener textura natural de la piedra volcánica.",
      "Acabado negro.",
      "Bordes suavemente redondeados para evitar astillas.",
      "No pulido brillante.",
    ],
    accentMaterials: ["Red Warrior", "Tepeaca Pink", "Green Alabaster", "Orange Alabaster"],
    ctaLabel: "Quiero apartar / cotizar",
    ctaProductName: "Portavasos",
  },
  {
    slug: "portavelas-esculturales",
    name: "Portavelas Esculturales",
    eyebrow: "Ritual / Piedra natural",
    summary:
      "Portavelas tallados a partir de bloques naturales de piedra, con formas orgánicas e irregulares para que cada pieza se perciba como un fragmento geológico encontrado.",
    intro:
      "La intención no es la perfección torneada sino una presencia más cruda, táctil y única.",
    image: {
      src: "/products/portavelas-esculturales-20260415.jpg",
      alt: "Portavelas Esculturales de CUENCA en agrupación de piedras naturales con velas taper.",
      width: 1536,
      height: 1024,
    },
    concept: [
      "Cada pieza debe sentirse como un fragmento de roca encontrado, no como un objeto perfectamente torneado.",
      "La forma final debe ser irregular y única.",
    ],
    materials: ["Piedra volcánica", "Red Warrior", "Tepeaca Pink", "Green Alabaster", "Orange Alabaster"],
    dimensions: [
      { label: "Ancho", value: "7 - 10 cm" },
      { label: "Profundidad", value: "6 - 9 cm" },
      { label: "Altura", value: "5 - 7 cm" },
      { label: "Variación", value: "Las medidas pueden variar ligeramente entre piezas" },
    ],
    cavityDetails: [
      { label: "Tipo de vela", value: "Taper candle" },
      { label: "Diámetro del orificio", value: "2 - 2.5 cm" },
      { label: "Profundidad del orificio", value: "2 - 3 cm" },
      { label: "Base", value: "Plana y estable con pulido ligero" },
    ],
    finishes: [
      "Contraste entre partes rugosas naturales y partes ligeramente pulidas.",
      "No hacer acabado completamente brillante.",
    ],
    productionNotes: [
      "Producción dividida entre línea principal y línea de acento.",
      "Formas aproximadas: ovaladas, triangulares suaves y formas de roca natural.",
      "Cada lote puede incluir mezcla de materiales.",
    ],
    accentMaterials: ["Red Warrior", "Tepeaca Pink", "Green Alabaster", "Orange Alabaster"],
    ctaLabel: "Me interesa este producto",
    ctaProductName: "Portavelas Esculturales",
  },
  {
    slug: "difusor-aromatico",
    name: "Difusor Aromático",
    eyebrow: "Ritual / Piedra + madera",
    summary:
      "Bloque de piedra volcánica tallado como un pequeño paisaje con cráter central para aceite esencial y base de madera sólida que lo convierte en un objeto escultórico de mesa o altar.",
    intro:
      "El aceite se coloca en el cráter central y la piedra porosa difunde lentamente el aroma.",
    image: {
      src: "/products/difusor-aromatico-20260415.jpg",
      alt: "Difusor Aromático de CUENCA con relieve montañoso en piedra volcánica.",
      width: 800,
      height: 533,
    },
    concept: [
      "Un bloque de piedra volcánica tallado como un pequeño paisaje.",
      "La pieza descansa sobre una base de madera que contiene la piedra.",
    ],
    materials: ["Piedra volcánica negra", "Base de madera sólida (encino o parota idealmente)"],
    dimensions: [
      { label: "Piedra / largo", value: "8 - 10 cm" },
      { label: "Piedra / ancho", value: "8 - 10 cm" },
      { label: "Piedra / altura", value: "4 - 5 cm" },
      { label: "Base / largo", value: "12 - 14 cm" },
      { label: "Base / ancho", value: "12 - 14 cm" },
      { label: "Base / altura", value: "2 cm" },
    ],
    cavityDetails: [
      { label: "Cráter central / diámetro", value: "2 - 3 cm" },
      { label: "Cráter central / profundidad", value: "1 - 1.5 cm" },
      { label: "Uso", value: "3 - 5 gotas de aceite esencial" },
    ],
    finishes: [
      "Piedra: exterior con textura natural.",
      "Piedra: interior del cráter con pulido suave.",
      "Madera: aceite natural y bordes suaves.",
    ],
    productionNotes: [
      "La piedra debe encajar ligeramente dentro de la base, no solo apoyarse.",
      "Tallado tipo relieve de montaña con pequeño volcán, cráter central y bordes orgánicos.",
    ],
    ctaLabel: "Quiero apartar / cotizar",
    ctaProductName: "Difusor Aromático",
  },
];

export const productsBySlug = Object.fromEntries(products.map((product) => [product.slug, product])) as Record<
  ProductSlug,
  Product
>;
