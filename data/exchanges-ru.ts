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
    withdrawUSDT: string;
    discount?: string;
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
    vpnNote?: string;
    rubMethods: string[];
    p2pAvailable: boolean;
    countries: string[];
    kycRequired: "Нет" | "Базовый" | "Полный";
    kycNote?: string;
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
  note?: string;
  warning?: string;
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
      withdrawal: "~1 USDT (TRC20)",
      withdrawUSDT: "~1 USDT",
      discount: "Скидка 25% при оплате токеном MNT",
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
      vpnNote: "Работает без VPN, некоторые функции могут быть ограничены",
      rubMethods: ["P2P", "СБП", "Т-Банк", "Сбербанк"],
      p2pAvailable: true,
      countries: ["RU", "KZ", "BY"],
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
      "Лучший P2P с рублями в СНГ",
      "Работает в России без VPN",
      "Бонус до $30,000 для новых пользователей",
      "Без KYC для базового трейдинга",
      "Скидка 25% на комиссии с токеном MNT",
    ],
    cons: [
      "Некоторые функции ограничены для РФ",
      "Поддержка на русском может быть медленной",
      "Меньше альткоинов чем MEXC",
    ],
    description:
      "Bybit — самая популярная биржа среди русскоязычных трейдеров. Работает в России без VPN, поддерживает P2P с рублями через СБП, Т-Банк и Сбербанк. Щедрые бонусы для новых пользователей.",
    note: "Лучший P2P с рублями в СНГ",
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
      futuresTaker: 0.0002,
      withdrawal: "~1 USDT (TRC20), TON: ~0 USDT",
      withdrawUSDT: "~1 USDT (TON: бесплатно)",
      discount: "Скидка 50% на фьючерсы при хранении MX токена",
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
      p2p: true,
      nfts: false,
    },
    cis: {
      worksInRussia: "yes",
      vpnRequired: false,
      rubMethods: ["P2P", "Банковская карта", "Сторонние сервисы"],
      p2pAvailable: true,
      countries: ["RU", "KZ", "BY"],
      kycRequired: "Нет",
      kycNote: "Без KYC — вывод до 10 BTC в сутки",
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
      "0% комиссия для мейкеров на споте и фьючерсах",
      "Без KYC — вывод до 10 BTC/сутки",
      "Более 1,500 криптовалют",
      "Вывод через TON практически бесплатный",
      "Новые токены листятся первыми",
    ],
    cons: [
      "Меньше ликвидности чем у Bybit",
      "Интерфейс может путать начинающих",
      "Резервы не полностью аудированы",
    ],
    description:
      "MEXC — биржа с самыми низкими комиссиями: 0% для мейкеров на споте и фьючерсах. Работает в России без ограничений. Без KYC с лимитом 10 BTC/сутки. Вывод через TON — почти бесплатно.",
    note: "Лучшие комиссии для новичков и скальперов",
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
      withdrawal: "~1.5 USDT (TRC20), TON: ~0 USDT",
      withdrawUSDT: "~1.5 USDT",
      discount: "Скидка до 40% при хранении OKB токена",
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
      worksInRussia: "partial",
      vpnRequired: false,
      vpnNote: "P2P работает с Сбербанком и Т-Банком, VPN рекомендуется для стабильной работы",
      rubMethods: ["P2P", "Сбербанк", "Т-Банк", "СБП"],
      p2pAvailable: true,
      countries: ["RU", "KZ", "BY"],
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
      cisSupport: 7,
    },
    pros: [
      "Отличный Web3-кошелёк",
      "P2P работает с Сбербанком и Т-Банком",
      "Скидка до 40% с токеном OKB",
      "Вывод через TON почти бесплатный",
      "Высокая ликвидность",
    ],
    cons: [
      "VPN рекомендуется для стабильной работы из РФ",
      "Вывод USDT дороже (~1.5 USDT)",
      "Базовый KYC обязателен",
    ],
    description:
      "OKX — топовая биржа с Web3-кошельком и высокой ликвидностью. P2P работает с российскими банками (Сбербанк, Т-Банк), но VPN рекомендуется для стабильной работы.",
    note: "P2P работает с российскими банками, VPN рекомендуется",
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
      withdrawal: "~1 USDT (TRC20)",
      withdrawUSDT: "~1 USDT",
      discount: "Скидка 20% при оплате токеном BGB → 0.08%",
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
      rubMethods: ["P2P", "Сбербанк", "Т-Банк", "СБП"],
      p2pAvailable: true,
      countries: ["RU", "KZ", "BY"],
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
      "P2P через Сбербанк и Т-Банк",
      "Скидка 20% на комиссии с токеном BGB",
    ],
    cons: [
      "Менее известен чем Bybit",
      "Меньше альткоинов чем MEXC",
      "Базовый KYC обязателен",
    ],
    description:
      "Bitget — лидер копитрейдинга в мире криптовалют. Позволяет копировать стратегии успешных трейдеров. Работает в России без VPN, удобный P2P через Сбербанк и Т-Банк.",
    note: "Удобный P2P через Сбербанк и Т-Банк",
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
      spotMaker: 0.002,
      spotTaker: 0.002,
      futuresMaker: 0.00015,
      futuresTaker: 0.0005,
      withdrawal: "Зависит от сети",
      withdrawUSDT: "варьируется",
      discount: "Комиссия снижается до 0.09% при хранении GT токена",
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
      countries: ["RU", "KZ", "BY"],
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
      fees: 5,
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
      "Базовая комиссия 0.20% — самая высокая среди 6 бирж",
      "Сложный интерфейс",
      "Поддержка на русском ограничена",
    ],
    description:
      "Gate.io — одна из старейших бирж с огромным выбором криптовалют. Работает в России без VPN. Базовая комиссия 0.20% снижается до 0.09% при хранении токена GT.",
    warning: "Высокая базовая комиссия 0.20%",
    note: "Базовая комиссия 0.20% — самая высокая. Снижается до 0.09% при хранении GT.",
    featured: false,
    badge: undefined,
  },
  {
    id: "kucoin",
    slug: "kucoin",
    name: "KuCoin",
    rating: 4.2,
    founded: 2017,
    headquarters: "Сейшельские острова",
    fees: {
      spotMaker: 0.001,
      spotTaker: 0.001,
      futuresMaker: 0.0002,
      futuresTaker: 0.0006,
      withdrawal: "~1 USDT (TRC20)",
      withdrawUSDT: "~1 USDT",
      discount: "Скидка 20–60% при оплате токеном KCS",
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
      countries: ["RU", "KZ", "BY"],
      kycRequired: "Нет",
      kycNote: "Базовый лимит без KYC",
    },
    security: {
      twoFactor: true,
      coldStorage: true,
      insuranceFund: true,
      auditedReserves: false,
    },
    scores: {
      security: 7,
      fees: 7,
      liquidity: 8,
      ux: 8,
      cisSupport: 7,
    },
    pros: [
      "Большой выбор альткоинов",
      "Без KYC для базовых функций",
      "Встроенные торговые боты",
      "Скидка до 60% с токеном KCS",
    ],
    cons: [
      "В 2023 получил обвинения от властей США по AML",
      "Некоторые ограничения для РФ",
      "P2P с рублями ограничен",
    ],
    description:
      "KuCoin — «Народная биржа» с широким выбором альткоинов и торговыми ботами. Не требует KYC для базовых функций. Частично работает из России.",
    warning: "Проблемы с регулятором США",
    note: "В 2023 получил обвинения от властей США по AML. Для СНГ доступна, но стоит учитывать.",
    featured: false,
    badge: "no-kyc",
  },
  {
    id: "bingx",
    slug: "bingx",
    name: "BingX",
    rating: 4.3,
    founded: 2018,
    headquarters: "Сингапур",
    fees: {
      spotMaker: 0.001,
      spotTaker: 0.001,
      futuresMaker: 0.0002,
      futuresTaker: 0.0006,
      withdrawal: "~1 USDT (TRC20)",
      withdrawUSDT: "~1 USDT",
      discount: "Скидка на комиссии при использовании программы VIP",
    },
    bonus: {
      amount: "До $5,000 USDT",
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
      rubMethods: ["P2P", "Банковская карта", "Сторонние сервисы"],
      p2pAvailable: true,
      countries: ["RU", "KZ", "BY"],
      kycRequired: "Нет",
      kycNote: "Без KYC — ограниченный лимит на вывод",
    },
    security: {
      twoFactor: true,
      coldStorage: true,
      insuranceFund: true,
      auditedReserves: false,
    },
    scores: {
      security: 7,
      fees: 7,
      liquidity: 7,
      ux: 8,
      cisSupport: 8,
    },
    pros: [
      "Лидер копитрейдинга — копируй лучших трейдеров",
      "Работает в России без VPN",
      "Без KYC для базовых операций",
      "P2P с рублями",
      "Удобный мобильный интерфейс",
    ],
    cons: [
      "Резервы не полностью аудированы",
      "Меньше ликвидности чем у Bybit/OKX",
      "Ограниченный выбор альткоинов",
    ],
    description:
      "BingX — биржа с акцентом на копитрейдинг и социальную торговлю. Работает в России без VPN, поддерживает P2P с рублями. Идеально для начинающих трейдеров, которые хотят копировать стратегии профессионалов.",
    note: "Один из лидеров копитрейдинга в мире",
    featured: false,
    badge: "best-beginners",
  },
  {
    id: "weex",
    slug: "weex",
    name: "WEEX",
    rating: 3.9,
    founded: 2018,
    headquarters: "Сингапур",
    fees: {
      spotMaker: 0.001,
      spotTaker: 0.001,
      futuresMaker: 0.0002,
      futuresTaker: 0.0004,
      withdrawal: "~1 USDT (TRC20)",
      withdrawUSDT: "~1 USDT",
    },
    bonus: {
      amount: "До $2,000 USDT",
      type: "Регистрация + Депозит",
      promoCode: "KRIPTOEMPIRE",
    },
    features: {
      spot: true,
      futures: true,
      margin: false,
      staking: false,
      p2p: false,
      nfts: false,
    },
    cis: {
      worksInRussia: "yes",
      vpnRequired: false,
      rubMethods: ["Банковская карта", "Сторонние сервисы"],
      p2pAvailable: false,
      countries: ["RU", "KZ", "BY"],
      kycRequired: "Нет",
      kycNote: "Без KYC — базовый вывод",
    },
    security: {
      twoFactor: true,
      coldStorage: true,
      insuranceFund: true,
      auditedReserves: false,
    },
    scores: {
      security: 6,
      fees: 7,
      liquidity: 5,
      ux: 7,
      cisSupport: 6,
    },
    pros: [
      "Без KYC",
      "Работает в России без VPN",
      "Низкие фьючерсные комиссии",
      "Простой интерфейс",
    ],
    cons: [
      "Молодая и малоизвестная биржа",
      "Нет P2P-маркетплейса",
      "Низкая ликвидность",
      "Нет маржинальной торговли и стейкинга",
      "Резервы не аудированы",
    ],
    description:
      "WEEX — молодая биржа с фокусом на фьючерсную торговлю. Работает в России без VPN, не требует KYC. Подходит для трейдеров, ищущих низкие комиссии на фьючерсах, но стоит учитывать риски молодой платформы.",
    warning: "Молодая биржа — повышенные риски",
    note: "Молодая платформа с ограниченной историей. Используйте с осторожностью и не храните крупные суммы.",
    featured: false,
    badge: undefined,
  },
  {
    id: "ourbit",
    slug: "ourbit",
    name: "Ourbit",
    rating: 3.7,
    founded: 2021,
    headquarters: "ОАЭ",
    fees: {
      spotMaker: 0.001,
      spotTaker: 0.001,
      futuresMaker: 0.0002,
      futuresTaker: 0.0005,
      withdrawal: "~1 USDT (TRC20)",
      withdrawUSDT: "~1 USDT",
    },
    bonus: {
      amount: "До $1,000 USDT",
      type: "Регистрация + Торговля",
      promoCode: "KRIPTOEMPIRE",
    },
    features: {
      spot: true,
      futures: true,
      margin: false,
      staking: true,
      p2p: false,
      nfts: false,
    },
    cis: {
      worksInRussia: "yes",
      vpnRequired: false,
      rubMethods: ["Банковская карта", "Сторонние сервисы"],
      p2pAvailable: false,
      countries: ["RU", "KZ", "BY"],
      kycRequired: "Нет",
      kycNote: "Без KYC — базовый вывод",
    },
    security: {
      twoFactor: true,
      coldStorage: true,
      insuranceFund: false,
      auditedReserves: false,
    },
    scores: {
      security: 5,
      fees: 7,
      liquidity: 4,
      ux: 6,
      cisSupport: 6,
    },
    pros: [
      "Без KYC",
      "Работает в России без VPN",
      "Листинг новых токенов",
      "Низкие комиссии на фьючерсах",
    ],
    cons: [
      "Очень молодая биржа (с 2021)",
      "Нет P2P-маркетплейса",
      "Очень низкая ликвидность",
      "Нет страхового фонда",
      "Нет аудита резервов",
      "Нет маржинальной торговли",
    ],
    description:
      "Ourbit — молодая биржа из ОАЭ с фокусом на листинг новых токенов. Работает в России без VPN, не требует KYC. Подходит для охоты за новыми монетами, но не рекомендуется для хранения крупных сумм из-за отсутствия аудита и страхового фонда.",
    warning: "Очень молодая биржа — высокие риски",
    note: "Основана в 2021. Нет аудита резервов и страхового фонда. Используйте только для краткосрочной торговли.",
    featured: false,
    badge: undefined,
  },
  {
    id: "coinex",
    slug: "coinex",
    name: "CoinEx",
    rating: 4.1,
    founded: 2017,
    headquarters: "Гонконг",
    fees: {
      spotMaker: 0.002,
      spotTaker: 0.002,
      futuresMaker: 0.0003,
      futuresTaker: 0.0005,
      withdrawal: "Зависит от сети",
      withdrawUSDT: "варьируется",
      discount: "Скидка при хранении CET токена",
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
      countries: ["RU", "KZ", "BY"],
      kycRequired: "Нет",
      kycNote: "Без KYC — вывод до 10,000 USDT/сутки",
    },
    security: {
      twoFactor: true,
      coldStorage: true,
      insuranceFund: true,
      auditedReserves: true,
    },
    scores: {
      security: 8,
      fees: 5,
      liquidity: 6,
      ux: 7,
      cisSupport: 7,
    },
    pros: [
      "Без KYC — вывод до 10,000 USDT/сутки",
      "Работает в России без VPN",
      "Аудит резервов (Proof of Reserves)",
      "Большой выбор альткоинов (700+)",
      "Стабильная платформа с 2017 года",
    ],
    cons: [
      "Базовая спот-комиссия 0.20% — высокая",
      "Нет P2P-маркетплейса",
      "Меньше ликвидности чем у топ-бирж",
      "Ограниченная поддержка на русском",
    ],
    description:
      "CoinEx — надёжная биржа из Гонконга с широким выбором альткоинов и без обязательного KYC. Работает в России без VPN. Вывод до 10,000 USDT/сутки без верификации. Базовая комиссия 0.20% снижается с токеном CET.",
    note: "Надёжная платформа без KYC с хорошим выбором альткоинов",
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
