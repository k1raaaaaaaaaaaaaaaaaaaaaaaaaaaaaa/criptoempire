export interface ExchangeRU {
  id: string;
  slug: string;
  name: string;
  rating: number;
  founded: number;
  headquarters: string;

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
  };

  features: {
    spot: boolean;
    futures: boolean;
    margin: boolean;
    staking: boolean;
    p2p: boolean;
    nfts: boolean;
  };

  cis: {
    worksInRussia: "yes" | "partial" | "vpn" | "blocked";
    vpnRequired: boolean;
    rubMethods: string[];
    p2pAvailable: boolean;
    countries: string[];
    kycRequired: "Нет" | "Базовый" | "Полный";
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
    cisSupport: number;
  };

  pros: string[];
  cons: string[];
  description: string;
  featured: boolean;
  badge?: "popular" | "lowest-fees" | "best-beginners" | "best-liquidity" | "no-kyc";
}

export const exchangesRU: ExchangeRU[] = [
  {
    id: "bybit",
    slug: "bybit",
    name: "Bybit",
    rating: 4.8,
    founded: 2018,
    headquarters: "Дубай, ОАЭ",
    fees: {
      spotMaker: 0.001,
      spotTaker: 0.001,
      futuresMaker: 0.0002,
      futuresTaker: 0.00055,
      withdrawal: "Зависит от сети",
    },
    bonus: {
      amount: "До $30,000 USDT",
      type: "Регистрация + Депозит",
      promoCode: "KRIPTOEMPIRE",
    },
    features: {
      spot: true,
      futures: true,
      margin: true,
      staking: true,
      p2p: true,
      nfts: true,
    },
    cis: {
      worksInRussia: "partial",
      vpnRequired: false,
      rubMethods: ["P2P", "SBP", "Tinkoff", "Сбербанк"],
      p2pAvailable: true,
      countries: ["RU", "KZ", "BY", "UA"],
      kycRequired: "Нет",
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
      cisSupport: 9,
    },
    pros: [
      "Работает в России без VPN",
      "P2P с рублями через СБП и Тинькофф",
      "Бонус до $30,000 для новых пользователей",
      "Без KYC для базового трейдинга",
      "Топ-3 по ликвидности фьючерсов",
    ],
    cons: [
      "Ограничены некоторые функции для РФ",
      "Поддержка на русском может быть медленной",
      "Меньше альткоинов чем MEXC",
    ],
    description:
      "Bybit — самая популярная биржа среди русскоязычных трейдеров. Работает в России без VPN, поддерживает P2P с рублями через СБП и банковские переводы. Щедрые бонусы для новых пользователей.",
    featured: true,
    badge: "popular",
  },
  {
    id: "mexc",
    slug: "mexc",
    name: "MEXC",
    rating: 4.5,
    founded: 2018,
    headquarters: "Сейшельские острова",
    fees: {
      spotMaker: 0,
      spotTaker: 0.0005,
      futuresMaker: 0,
      futuresTaker: 0.0001,
      withdrawal: "Зависит от сети",
    },
    bonus: {
      amount: "До $1,000 USDT",
      type: "Регистрация + Торговля",
      promoCode: "KRIPTOEMPIRE",
    },
    features: {
      spot: true,
      futures: true,
      margin: true,
      staking: true,
      p2p: false,
      nfts: false,
    },
    cis: {
      worksInRussia: "yes",
      vpnRequired: false,
      rubMethods: ["Банковская карта", "Сторонние сервисы"],
      p2pAvailable: false,
      countries: ["RU", "KZ", "BY", "UA"],
      kycRequired: "Нет",
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
      cisSupport: 8,
    },
    pros: [
      "Самые низкие комиссии на рынке (0% maker)",
      "Без KYC",
      "Более 1,500 криптовалют",
      "Новые токены листятся первыми",
    ],
    cons: [
      "Нет встроенного P2P",
      "Меньше ликвидности чем у Bybit",
      "Интерфейс может путать начинающих",
    ],
    description:
      "MEXC — биржа с самыми низкими комиссиями: 0% для мейкеров на споте и фьючерсах. Работает в России без ограничений. Идеальна для тех, кто хочет экономить на комиссиях.",
    featured: true,
    badge: "lowest-fees",
  },
  {
    id: "okx",
    slug: "okx",
    name: "OKX",
    rating: 4.6,
    founded: 2017,
    headquarters: "Сейшельские острова",
    fees: {
      spotMaker: 0.0008,
      spotTaker: 0.001,
      futuresMaker: 0.0002,
      futuresTaker: 0.0005,
      withdrawal: "Зависит от сети",
    },
    bonus: {
      amount: "До $10,000 USDT",
      type: "Регистрация + Депозит",
      promoCode: "KRIPTOEMPIRE",
    },
    features: {
      spot: true,
      futures: true,
      margin: true,
      staking: true,
      p2p: true,
      nfts: true,
    },
    cis: {
      worksInRussia: "vpn",
      vpnRequired: true,
      rubMethods: ["P2P"],
      p2pAvailable: true,
      countries: ["KZ", "BY", "UA"],
      kycRequired: "Базовый",
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
      cisSupport: 6,
    },
    pros: [
      "Отличный Web3-кошелёк",
      "Высокие бонусы при регистрации",
      "Современный интерфейс",
      "Высокая ликвидность",
    ],
    cons: [
      "Нужен VPN из России",
      "Ограничения для российских пользователей",
      "P2P в рублях ограничен",
    ],
    description:
      "OKX — топовая биржа с Web3-кошельком и высокой ликвидностью. Для доступа из России требуется VPN. В Казахстане и других странах СНГ работает без ограничений.",
    featured: true,
    badge: "best-liquidity",
  },
  {
    id: "bitget",
    slug: "bitget",
    name: "Bitget",
    rating: 4.5,
    founded: 2018,
    headquarters: "Сингапур",
    fees: {
      spotMaker: 0.001,
      spotTaker: 0.001,
      futuresMaker: 0.0002,
      futuresTaker: 0.0006,
      withdrawal: "Зависит от сети",
    },
    bonus: {
      amount: "До $6,200 USDT",
      type: "Регистрация + Депозит",
      promoCode: "KRIPTOEMPIRE",
    },
    features: {
      spot: true,
      futures: true,
      margin: true,
      staking: true,
      p2p: true,
      nfts: false,
    },
    cis: {
      worksInRussia: "yes",
      vpnRequired: false,
      rubMethods: ["P2P", "SBP", "Банковская карта"],
      p2pAvailable: true,
      countries: ["RU", "KZ", "BY", "UA"],
      kycRequired: "Базовый",
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
      cisSupport: 8,
    },
    pros: [
      "Лидер копитрейдинга",
      "Работает в России без VPN",
      "P2P с рублями",
      "Хорошие бонусы при регистрации",
    ],
    cons: [
      "Менее известен чем Bybit",
      "Меньше альткоинов чем MEXC",
      "Базовый KYC обязателен",
    ],
    description:
      "Bitget — лидер копитрейдинга в мире криптовалют. Позволяет копировать стратегии успешных трейдеров. Работает в России, поддерживает P2P с рублями.",
    featured: false,
    badge: undefined,
  },
  {
    id: "gateio",
    slug: "gateio",
    name: "Gate.io",
    rating: 4.3,
    founded: 2013,
    headquarters: "Каймановы острова",
    fees: {
      spotMaker: 0.001,
      spotTaker: 0.001,
      futuresMaker: 0.00015,
      futuresTaker: 0.0005,
      withdrawal: "Зависит от сети",
    },
    bonus: {
      amount: "До $5,500 USDT",
      type: "Регистрация + Депозит",
      promoCode: "KRIPTOEMPIRE",
    },
    features: {
      spot: true,
      futures: true,
      margin: true,
      staking: true,
      p2p: true,
      nfts: true,
    },
    cis: {
      worksInRussia: "yes",
      vpnRequired: false,
      rubMethods: ["P2P", "Банковская карта"],
      p2pAvailable: true,
      countries: ["RU", "KZ", "BY", "UA"],
      kycRequired: "Базовый",
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
      cisSupport: 7,
    },
    pros: [
      "Более 1,700 криптовалют",
      "Одна из старейших бирж (с 2013)",
      "Работает в России без VPN",
      "Launchpad для новых токенов",
    ],
    cons: [
      "Сложный интерфейс",
      "Поддержка на русском ограничена",
      "P2P менее популярен чем на Bybit",
    ],
    description:
      "Gate.io — одна из старейших бирж с огромным выбором криптовалют. Работает в России без VPN, поддерживает P2P. Идеальна для поиска новых токенов.",
    featured: false,
    badge: undefined,
  },
  {
    id: "kucoin",
    slug: "kucoin",
    name: "KuCoin",
    rating: 4.4,
    founded: 2017,
    headquarters: "Сейшельские острова",
    fees: {
      spotMaker: 0.001,
      spotTaker: 0.001,
      futuresMaker: 0.0002,
      futuresTaker: 0.0006,
      withdrawal: "Зависит от сети",
    },
    bonus: {
      amount: "До $500 USDT",
      type: "Регистрация",
      promoCode: "KRIPTOEMPIRE",
    },
    features: {
      spot: true,
      futures: true,
      margin: true,
      staking: true,
      p2p: true,
      nfts: false,
    },
    cis: {
      worksInRussia: "partial",
      vpnRequired: false,
      rubMethods: ["P2P"],
      p2pAvailable: true,
      countries: ["RU", "KZ", "BY", "UA"],
      kycRequired: "Нет",
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
      cisSupport: 7,
    },
    pros: [
      "Большой выбор альткоинов",
      "Без KYC для базовых функций",
      "Встроенные торговые боты",
      "Удобный интерфейс",
    ],
    cons: [
      "Некоторые ограничения для РФ",
      "Скромные бонусы",
      "P2P с рублями ограничен",
    ],
    description:
      "KuCoin — «Народная биржа» с широким выбором альткоинов и торговыми ботами. Не требует KYC для базовых функций. Частично работает из России.",
    featured: false,
    badge: "no-kyc",
  },
];

export function getExchangeRUBySlug(slug: string): ExchangeRU | undefined {
  return exchangesRU.find((e) => e.slug === slug);
}

export function getFeaturedExchangesRU(): ExchangeRU[] {
  return exchangesRU.filter((e) => e.featured);
}
