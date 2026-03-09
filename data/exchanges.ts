export interface Exchange {
  id: string;
  slug: string;
  name: string;
  logo: string;
  rating: number;
  founded: number;
  headquartersCountry: string;

  fees: {
    spotMaker: number;
    spotTaker: number;
    futuresMaker: number;
    futuresTaker: number;
    withdrawal: string;
  };

  bonus: {
    amount: string;
    type: string;
    promoCode?: string;
    affiliateUrl: string;
  };

  features: {
    spot: boolean;
    futures: boolean;
    margin: boolean;
    staking: boolean;
    p2p: boolean;
    nfts: boolean;
  };

  latam: {
    available: boolean;
    countries?: string[];
    countriesBlocked: string[];
    localPayments: string[];
    languages: string[];
    kycRequired: "No" | "Básico" | "Completo";
  };

  security: {
    twoFactor: boolean;
    coldStorage: boolean;
    insuranceFund: boolean;
    auditedReserves: boolean;
  };

  scores: {
    security: number;
    fees: number;
    liquidity: number;
    ux: number;
    latamSupport: number;
  };

  pros: string[];
  cons: string[];
  description: string;

  featured: boolean;
  badge?: "popular" | "lowest-fees" | "best-beginners" | "best-liquidity" | "no-kyc";
}

export const exchanges: Exchange[] = [
  {
    id: "bybit",
    slug: "bybit",
    name: "Bybit",
    logo: "/logos/bybit.svg",
    rating: 4.7,
    founded: 2018,
    headquartersCountry: "Dubái, EAU",
    fees: {
      spotMaker: 0.001,
      spotTaker: 0.001,
      futuresMaker: 0.0002,
      futuresTaker: 0.00055,
      withdrawal: "Variable según red",
    },
    bonus: {
      amount: "Hasta $30,000 USDT",
      type: "Registro + Depósito",
      promoCode: "CRIPTOCOMPARA",
      affiliateUrl: "https://www.bybit.com/invite?ref=W8Y7K8",
    },
    features: {
      spot: true,
      futures: true,
      margin: true,
      staking: true,
      p2p: true,
      nfts: true,
    },
    latam: {
      available: true,
      countries: ["AR", "MX", "CO", "PE", "CL", "BR"],
      countriesBlocked: ["Cuba"],
      localPayments: ["P2P", "Transferencia bancaria", "Tarjeta de crédito"],
      languages: ["es", "pt", "en"],
      kycRequired: "No",
    },
    security: {
      twoFactor: true,
      coldStorage: true,
      insuranceFund: true,
      auditedReserves: true,
    },
    scores: {
      security: 9,
      fees: 7,
      liquidity: 9,
      ux: 8,
      latamSupport: 8,
    },
    pros: [
      "Sin KYC para trading básico",
      "Bonos de bienvenida muy altos (hasta $30,000)",
      "Gran liquidez en futuros, top 3 mundial",
      "Copy trading disponible",
      "App móvil excelente",
    ],
    cons: [
      "No acepta depósitos en USD directamente desde LATAM",
      "Soporte en español puede ser lento",
      "Menos altcoins que MEXC",
    ],
    description:
      "Bybit es uno de los exchanges más populares en Latinoamérica, conocido por su plataforma de futuros de alto rendimiento y generosos bonos de bienvenida. No requiere KYC para funciones básicas.",
    featured: true,
    badge: "popular",
  },
  {
    id: "mexc",
    slug: "mexc",
    name: "MEXC",
    logo: "/logos/mexc.svg",
    rating: 4.5,
    founded: 2018,
    headquartersCountry: "Seychelles",
    fees: {
      spotMaker: 0,
      spotTaker: 0.0005,
      futuresMaker: 0,
      futuresTaker: 0.0001,
      withdrawal: "Variable según red",
    },
    bonus: {
      amount: "Hasta $1,000 USDT",
      type: "Registro + Trading",
      promoCode: "CRIPTOCOMPARA",
      affiliateUrl: "https://promote.mexc.com/r/0Xqq2VMnaX",
    },
    features: {
      spot: true,
      futures: true,
      margin: true,
      staking: true,
      p2p: false,
      nfts: false,
    },
    latam: {
      available: true,
      countries: ["AR", "MX", "CO", "PE", "CL", "BR"],
      countriesBlocked: ["Cuba"],
      localPayments: ["Tarjeta de crédito", "Transferencia bancaria"],
      languages: ["es", "en", "pt"],
      kycRequired: "No",
    },
    security: {
      twoFactor: true,
      coldStorage: true,
      insuranceFund: true,
      auditedReserves: false,
    },
    scores: {
      security: 7,
      fees: 10,
      liquidity: 7,
      ux: 7,
      latamSupport: 7,
    },
    pros: [
      "Comisiones las más bajas del mercado (0% maker)",
      "Sin KYC requerido",
      "Más de 1,500 criptomonedas listadas",
      "Nuevos tokens listados rápidamente",
    ],
    cons: [
      "Menos liquidez que Bybit o Binance",
      "Sin P2P propio",
      "Interfaz puede ser confusa para principiantes",
    ],
    description:
      "MEXC destaca por tener las comisiones más bajas del mercado, con 0% de comisión para makers en spot y futuros. Ideal para traders que buscan minimizar costos sin KYC.",
    featured: true,
    badge: "lowest-fees",
  },
  {
    id: "binance",
    slug: "binance",
    name: "Binance",
    logo: "/logos/binance.svg",
    rating: 4.6,
    founded: 2017,
    headquartersCountry: "Global (Dubái)",
    fees: {
      spotMaker: 0.001,
      spotTaker: 0.001,
      futuresMaker: 0.0002,
      futuresTaker: 0.0005,
      withdrawal: "Variable según red",
    },
    bonus: {
      amount: "Hasta $600 USDT",
      type: "Registro + Depósito",
      promoCode: "CRIPTOCOMPARA",
      affiliateUrl: "https://www.binance.com/referral/earn-together/refer2earn-usdc/claim?hl=ru&ref=GRO_28502_6CBHL",
    },
    features: {
      spot: true,
      futures: true,
      margin: true,
      staking: true,
      p2p: true,
      nfts: true,
    },
    latam: {
      available: true,
      countries: ["AR", "MX", "CO", "PE", "CL", "BR"],
      countriesBlocked: ["Cuba", "Venezuela (parcial)"],
      localPayments: ["P2P", "Transferencia bancaria", "Tarjeta", "PIX (Brasil)"],
      languages: ["es", "pt", "en"],
      kycRequired: "Completo",
    },
    security: {
      twoFactor: true,
      coldStorage: true,
      insuranceFund: true,
      auditedReserves: true,
    },
    scores: {
      security: 9,
      fees: 7,
      liquidity: 10,
      ux: 7,
      latamSupport: 9,
    },
    pros: [
      "Mayor liquidez del mundo",
      "Más de 350 criptomonedas disponibles",
      "P2P con pesos argentinos, mexicanos y colombianos",
      "Ecosistema completo (Earn, NFT, Launchpad)",
      "Soporte 24/7 en español",
    ],
    cons: [
      "KYC obligatorio para todas las funciones",
      "Interfaz puede ser abrumadora para principiantes",
      "Restricciones regulatorias en algunos países",
    ],
    description:
      "Binance es el exchange más grande del mundo por volumen. Ofrece la mayor liquidez, un ecosistema completo y excelente soporte para Latinoamérica con P2P en monedas locales.",
    featured: false,
    badge: undefined,
  },
  {
    id: "okx",
    slug: "okx",
    name: "OKX",
    logo: "/logos/okx.svg",
    rating: 4.6,
    founded: 2017,
    headquartersCountry: "Seychelles",
    fees: {
      spotMaker: 0.0008,
      spotTaker: 0.001,
      futuresMaker: 0.0002,
      futuresTaker: 0.0005,
      withdrawal: "Variable según red",
    },
    bonus: {
      amount: "Hasta $10,000 USDT",
      type: "Registro + Depósito",
      promoCode: "CRIPTOCOMPARA",
      affiliateUrl: "https://okx.com/join/80779425",
    },
    features: {
      spot: true,
      futures: true,
      margin: true,
      staking: true,
      p2p: true,
      nfts: true,
    },
    latam: {
      available: true,
      countries: ["AR", "MX", "CO", "PE", "CL", "BR"],
      countriesBlocked: ["Cuba"],
      localPayments: ["P2P", "Tarjeta de crédito", "Transferencia"],
      languages: ["es", "en", "pt"],
      kycRequired: "Básico",
    },
    security: {
      twoFactor: true,
      coldStorage: true,
      insuranceFund: true,
      auditedReserves: true,
    },
    scores: {
      security: 9,
      fees: 8,
      liquidity: 9,
      ux: 9,
      latamSupport: 8,
    },
    pros: [
      "Wallet Web3 integrada excelente",
      "Altos bonos de bienvenida",
      "Interfaz moderna y fácil de usar",
      "Gran liquidez en todos los mercados",
      "KYC básico opcional",
    ],
    cons: [
      "Menos altcoins que MEXC",
      "P2P menos popular en LATAM que Binance",
      "Soporte en español mejorable",
    ],
    description:
      "OKX combina alta liquidez con una interfaz moderna y una wallet Web3 integrada. Sus bonos de bienvenida son de los más generosos y el KYC completo es opcional.",
    featured: true,
    badge: "best-liquidity",
  },
  {
    id: "kucoin",
    slug: "kucoin",
    name: "KuCoin",
    logo: "/logos/kucoin.svg",
    rating: 4.4,
    founded: 2017,
    headquartersCountry: "Seychelles",
    fees: {
      spotMaker: 0.001,
      spotTaker: 0.001,
      futuresMaker: 0.0002,
      futuresTaker: 0.0006,
      withdrawal: "Variable según red",
    },
    bonus: {
      amount: "Hasta $500 USDT",
      type: "Registro",
      promoCode: "CRIPTOCOMPARA",
      affiliateUrl: "https://www.kucoin.com/r/YOURCODE",
    },
    features: {
      spot: true,
      futures: true,
      margin: true,
      staking: true,
      p2p: true,
      nfts: false,
    },
    latam: {
      available: true,
      countries: ["AR", "MX", "CO", "PE", "CL", "BR"],
      countriesBlocked: ["Cuba"],
      localPayments: ["P2P", "Tarjeta de crédito"],
      languages: ["es", "en"],
      kycRequired: "No",
    },
    security: {
      twoFactor: true,
      coldStorage: true,
      insuranceFund: true,
      auditedReserves: false,
    },
    scores: {
      security: 8,
      fees: 7,
      liquidity: 8,
      ux: 8,
      latamSupport: 7,
    },
    pros: [
      "Gran variedad de altcoins",
      "Sin KYC para funciones básicas",
      "Trading bots integrados",
      "Interfaz amigable para principiantes",
    ],
    cons: [
      "Liquidez menor en futuros",
      "Bonos de bienvenida modestos",
      "P2P limitado en algunos países LATAM",
    ],
    description:
      "KuCoin es conocido como 'The People's Exchange' por su amplia variedad de altcoins y accesibilidad sin KYC. Ideal para descubrir nuevos tokens y usar trading bots.",
    featured: false,
    badge: undefined,
  },
  {
    id: "bitget",
    slug: "bitget",
    name: "Bitget",
    logo: "/logos/bitget.svg",
    rating: 4.4,
    founded: 2018,
    headquartersCountry: "Singapur",
    fees: {
      spotMaker: 0.001,
      spotTaker: 0.001,
      futuresMaker: 0.0002,
      futuresTaker: 0.0006,
      withdrawal: "Variable según red",
    },
    bonus: {
      amount: "Hasta $6,200 USDT",
      type: "Registro + Depósito",
      promoCode: "CRIPTOCOMPARA",
      affiliateUrl: "https://www.bitgetapps.com/ru/referral/register?clacCode=DQLNT491",
    },
    features: {
      spot: true,
      futures: true,
      margin: true,
      staking: true,
      p2p: true,
      nfts: false,
    },
    latam: {
      available: true,
      countries: ["AR", "MX", "CO", "PE", "CL", "BR"],
      countriesBlocked: ["Cuba"],
      localPayments: ["P2P", "Tarjeta de crédito"],
      languages: ["es", "en"],
      kycRequired: "Básico",
    },
    security: {
      twoFactor: true,
      coldStorage: true,
      insuranceFund: true,
      auditedReserves: true,
    },
    scores: {
      security: 8,
      fees: 7,
      liquidity: 8,
      ux: 8,
      latamSupport: 7,
    },
    pros: [
      "Copy trading líder del mercado",
      "Buenos bonos de bienvenida",
      "Reservas auditadas públicamente",
      "Creciendo rápidamente en LATAM",
    ],
    cons: [
      "Menos conocido que Binance o Bybit",
      "Menos altcoins que MEXC",
      "P2P en desarrollo para LATAM",
    ],
    description:
      "Bitget es el líder en copy trading de criptomonedas. Permite copiar las estrategias de traders exitosos y ofrece buenos bonos para nuevos usuarios.",
    featured: false,
    badge: undefined,
  },
  {
    id: "gateio",
    slug: "gate-io",
    name: "Gate.io",
    logo: "/logos/gateio.svg",
    rating: 4.3,
    founded: 2013,
    headquartersCountry: "Islas Caimán",
    fees: {
      spotMaker: 0.001,
      spotTaker: 0.001,
      futuresMaker: 0.00015,
      futuresTaker: 0.0005,
      withdrawal: "Variable según red",
    },
    bonus: {
      amount: "Hasta $5,500 USDT",
      type: "Registro + Depósito",
      promoCode: "CRIPTOCOMPARA",
      affiliateUrl: "https://www.gate.io/ref/YOURCODE",
    },
    features: {
      spot: true,
      futures: true,
      margin: true,
      staking: true,
      p2p: false,
      nfts: true,
    },
    latam: {
      available: true,
      countries: ["AR", "MX", "CO", "PE", "CL", "BR"],
      countriesBlocked: ["Cuba"],
      localPayments: ["Tarjeta de crédito", "Transferencia bancaria"],
      languages: ["es", "en"],
      kycRequired: "Básico",
    },
    security: {
      twoFactor: true,
      coldStorage: true,
      insuranceFund: true,
      auditedReserves: true,
    },
    scores: {
      security: 8,
      fees: 7,
      liquidity: 7,
      ux: 7,
      latamSupport: 6,
    },
    pros: [
      "Más de 1,700 criptomonedas listadas",
      "Uno de los exchanges más antiguos (2013)",
      "Launchpad para nuevos tokens",
      "Proof of Reserves verificable",
    ],
    cons: [
      "Sin P2P para LATAM",
      "Interfaz compleja",
      "Soporte en español limitado",
    ],
    description:
      "Gate.io es uno de los exchanges más antiguos y con mayor variedad de criptomonedas. Ideal para traders avanzados que buscan acceso a tokens nuevos y proyectos emergentes.",
    featured: false,
    badge: undefined,
  },
  {
    id: "kraken",
    slug: "kraken",
    name: "Kraken",
    logo: "/logos/kraken.svg",
    rating: 4.5,
    founded: 2011,
    headquartersCountry: "Estados Unidos",
    fees: {
      spotMaker: 0.0016,
      spotTaker: 0.0026,
      futuresMaker: 0.0002,
      futuresTaker: 0.0005,
      withdrawal: "Variable según red",
    },
    bonus: {
      amount: "Hasta $100 en BTC",
      type: "Registro",
      affiliateUrl: "https://www.kraken.com/sign-up?ref=YOURCODE",
    },
    features: {
      spot: true,
      futures: true,
      margin: true,
      staking: true,
      p2p: false,
      nfts: true,
    },
    latam: {
      available: true,
      countries: ["AR", "MX", "CO", "PE", "CL", "BR"],
      countriesBlocked: ["Cuba", "Venezuela"],
      localPayments: ["Transferencia bancaria", "Tarjeta de crédito"],
      languages: ["es", "en"],
      kycRequired: "Completo",
    },
    security: {
      twoFactor: true,
      coldStorage: true,
      insuranceFund: false,
      auditedReserves: true,
    },
    scores: {
      security: 10,
      fees: 5,
      liquidity: 8,
      ux: 7,
      latamSupport: 5,
    },
    pros: [
      "Máxima seguridad, nunca hackeado",
      "Regulado en EE.UU. y Europa",
      "Ideal para holders a largo plazo",
      "Staking con buenos rendimientos",
    ],
    cons: [
      "Comisiones spot más altas",
      "KYC obligatorio",
      "Soporte LATAM limitado",
      "Sin P2P para monedas locales",
    ],
    description:
      "Kraken es uno de los exchanges más seguros y regulados del mundo. Ideal para usuarios que priorizan la seguridad sobre todo, aunque las comisiones son más altas que la competencia.",
    featured: false,
    badge: undefined,
  },
  {
    id: "coinbase",
    slug: "coinbase",
    name: "Coinbase",
    logo: "/logos/coinbase.svg",
    rating: 4.3,
    founded: 2012,
    headquartersCountry: "Estados Unidos",
    fees: {
      spotMaker: 0.004,
      spotTaker: 0.006,
      futuresMaker: 0,
      futuresTaker: 0,
      withdrawal: "Variable según red",
    },
    bonus: {
      amount: "Hasta $200 en cripto",
      type: "Registro + Aprendizaje",
      affiliateUrl: "https://www.coinbase.com/join/YOURCODE",
    },
    features: {
      spot: true,
      futures: false,
      margin: false,
      staking: true,
      p2p: false,
      nfts: false,
    },
    latam: {
      available: true,
      countries: ["AR", "MX", "CO", "CL"],
      countriesBlocked: ["Cuba", "Venezuela", "Bolivia"],
      localPayments: ["Tarjeta de crédito"],
      languages: ["es", "en"],
      kycRequired: "Completo",
    },
    security: {
      twoFactor: true,
      coldStorage: true,
      insuranceFund: true,
      auditedReserves: true,
    },
    scores: {
      security: 10,
      fees: 3,
      liquidity: 8,
      ux: 9,
      latamSupport: 4,
    },
    pros: [
      "Interfaz más fácil del mercado para principiantes",
      "Empresa cotizada en bolsa (NASDAQ)",
      "Máxima regulación y seguridad",
      "Programas educativos con recompensas",
    ],
    cons: [
      "Comisiones muy altas",
      "Sin futuros ni apalancamiento",
      "Soporte LATAM muy limitado",
      "Pocas opciones de pago local",
    ],
    description:
      "Coinbase es el exchange más fácil de usar para principiantes, cotizado en NASDAQ. Sin embargo, sus altas comisiones y limitado soporte LATAM lo hacen menos atractivo para la región.",
    featured: false,
    badge: "best-beginners",
  },
  {
    id: "cryptocom",
    slug: "crypto-com",
    name: "Crypto.com",
    logo: "/logos/cryptocom.svg",
    rating: 4.3,
    founded: 2016,
    headquartersCountry: "Singapur",
    fees: {
      spotMaker: 0.00075,
      spotTaker: 0.00075,
      futuresMaker: 0.00015,
      futuresTaker: 0.0005,
      withdrawal: "Variable según red",
    },
    bonus: {
      amount: "Hasta $2,000 USDT",
      type: "Registro + Depósito",
      affiliateUrl: "https://crypto.com/app/YOURCODE",
    },
    features: {
      spot: true,
      futures: true,
      margin: true,
      staking: true,
      p2p: false,
      nfts: true,
    },
    latam: {
      available: true,
      countries: ["AR", "MX", "CO", "PE", "CL", "BR"],
      countriesBlocked: ["Cuba", "Bolivia"],
      localPayments: ["Tarjeta de crédito", "Transferencia"],
      languages: ["es", "en"],
      kycRequired: "Completo",
    },
    security: {
      twoFactor: true,
      coldStorage: true,
      insuranceFund: true,
      auditedReserves: true,
    },
    scores: {
      security: 9,
      fees: 7,
      liquidity: 7,
      ux: 8,
      latamSupport: 6,
    },
    pros: [
      "Tarjeta Visa cripto con cashback",
      "App móvil muy completa",
      "Ecosistema DeFi integrado",
      "Buen programa de staking",
    ],
    cons: [
      "Sin P2P para LATAM",
      "KYC obligatorio",
      "Beneficios requieren staking de CRO",
      "Interfaz web mejorable",
    ],
    description:
      "Crypto.com destaca por su tarjeta Visa con cashback en cripto y su app móvil completa. El ecosistema es amplio pero requiere KYC y staking de su token CRO para mejores beneficios.",
    featured: false,
    badge: undefined,
  },
];

export function getExchangeBySlug(slug: string): Exchange | undefined {
  return exchanges.find((e) => e.slug === slug);
}

export function getFeaturedExchanges(): Exchange[] {
  return exchanges.filter((e) => e.featured);
}
