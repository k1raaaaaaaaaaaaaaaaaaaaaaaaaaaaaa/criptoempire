import { AlertTriangle, Shield, Globe, Clock } from "lucide-react";

type WarningType = "vpn-ban" | "regulatory" | "no-fiat" | "young";

interface ExchangeWarningProps {
  type: WarningType;
  exchangeName: string;
  note?: string;
}

const warningConfig: Record<
  WarningType,
  {
    icon: typeof AlertTriangle;
    title: string;
    description: string;
    borderColor: string;
    bgColor: string;
    iconColor: string;
  }
> = {
  "vpn-ban": {
    icon: Shield,
    title: "Требуется VPN из России",
    description:
      "Эта биржа ограничила доступ для российских IP-адресов. Для использования необходим VPN-сервис.",
    borderColor: "border-red-500/20",
    bgColor: "bg-red-500/5",
    iconColor: "text-red-400",
  },
  regulatory: {
    icon: AlertTriangle,
    title: "Проблемы с регулятором",
    description:
      "У этой биржи есть нерешённые вопросы с регуляторами. Это может повлиять на доступность и безопасность средств.",
    borderColor: "border-amber-500/20",
    bgColor: "bg-amber-500/5",
    iconColor: "text-amber-400",
  },
  "no-fiat": {
    icon: Globe,
    title: "Нет прямого ввода рублей",
    description:
      "Биржа не поддерживает P2P с рублями. Для пополнения нужно перевести криптовалюту с другой биржи или использовать сторонние сервисы.",
    borderColor: "border-blue-500/20",
    bgColor: "bg-blue-500/5",
    iconColor: "text-blue-400",
  },
  young: {
    icon: Clock,
    title: "Молодая платформа",
    description:
      "Эта биржа работает менее 5 лет. Не рекомендуем хранить крупные суммы — используйте для краткосрочной торговли.",
    borderColor: "border-orange-500/20",
    bgColor: "bg-orange-500/5",
    iconColor: "text-orange-400",
  },
};

export default function ExchangeWarning({
  type,
  exchangeName,
  note,
}: ExchangeWarningProps) {
  const config = warningConfig[type];
  const Icon = config.icon;

  return (
    <div
      className={`rounded-2xl border ${config.borderColor} ${config.bgColor} p-5`}
    >
      <div className="flex items-start gap-3">
        <Icon className={`h-5 w-5 ${config.iconColor} mt-0.5 shrink-0`} />
        <div>
          <p
            className={`text-sm font-semibold ${config.iconColor} mb-1`}
          >
            {config.title}: {exchangeName}
          </p>
          <p className="text-sm text-[var(--text-secondary)]">
            {note || config.description}
          </p>
        </div>
      </div>
    </div>
  );
}
