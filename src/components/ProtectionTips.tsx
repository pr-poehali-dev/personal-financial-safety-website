
import Icon from "@/components/ui/icon";

interface ProtectionTipProps {
  icon: string;
  title: string;
  description: string;
}

const ProtectionTip = ({ icon, title, description }: ProtectionTipProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-green-100 p-2 rounded-full">
          <Icon name={icon} className="text-green-600" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const ProtectionTips = () => {
  const tips = [
    {
      icon: "Shield",
      title: "Не разглашайте данные",
      description: "Ни при каких обстоятельствах не передавайте по телефону или в мессенджерах свои PIN-коды, пароли, CVV-коды и коды из SMS. Настоящие сотрудники банков никогда не запрашивают такую информацию."
    },
    {
      icon: "KeyRound",
      title: "Используйте сложные пароли",
      description: "Регулярно обновляйте пароли, используйте уникальные комбинации для разных сервисов и активируйте двухфакторную аутентификацию везде, где это возможно. Рассмотрите использование менеджера паролей."
    },
    {
      icon: "CheckCircle",
      title: "Проверяйте источники",
      description: "При получении сообщений или звонков от \"банка\" всегда перезванивайте на официальный номер, указанный на обратной стороне карты или на официальном сайте. Никогда не перезванивайте на номер, указанный в подозрительном сообщении."
    },
    {
      icon: "Bell",
      title: "Следите за активностью на счетах",
      description: "Установите уведомления о всех операциях по картам и счетам. Регулярно проверяйте выписки и немедленно сообщайте банку о подозрительных транзакциях, которые вы не совершали."
    },
    {
      icon: "AlertTriangle",
      title: "Будьте критичны",
      description: "Не поддавайтесь на обещания быстрой прибыли, всегда сомневайтесь в \"выгодных\" предложениях и не переходите по неизвестным ссылкам. Помните, что сверхвысокая доходность всегда сопряжена с повышенным риском."
    },
    {
      icon: "Smartphone",
      title: "Защитите устройства",
      description: "Используйте надежный антивирус, регулярно обновляйте операционную систему и приложения. Не устанавливайте программы из ненадежных источников и не подключайтесь к общедоступным Wi-Fi сетям для проведения финансовых операций."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
      {tips.map((tip, index) => (
        <ProtectionTip 
          key={index}
          icon={tip.icon}
          title={tip.title}
          description={tip.description}
        />
      ))}
    </div>
  );
};

export default ProtectionTips;
