
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import SectionHeader from "@/components/recommendations/SectionHeader";
import ProtectionItem from "@/components/recommendations/ProtectionItem";

const ProtectionSection = () => {
  const protectionItems = [
    {
      title: "Не разглашайте данные",
      description: "Ни при каких обстоятельствах не передавайте по телефону или в мессенджерах свои PIN-коды, пароли, CVV-коды и коды из SMS. Настоящие сотрудники банков никогда не запрашивают такую информацию.",
      iconName: "Shield"
    },
    {
      title: "Используйте сложные пароли",
      description: "Регулярно обновляйте пароли, используйте уникальные комбинации для разных сервисов и активируйте двухфакторную аутентификацию везде, где это возможно. Рассмотрите использование менеджера паролей.",
      iconName: "KeyRound"
    },
    {
      title: "Проверяйте источники",
      description: "При получении сообщений или звонков от \"банка\" всегда перезванивайте на официальный номер, указанный на обратной стороне карты или на официальном сайте. Никогда не перезванивайте на номер, указанный в подозрительном сообщении.",
      iconName: "CheckCircle"
    },
    {
      title: "Следите за активностью на счетах",
      description: "Установите уведомления о всех операциях по картам и счетам. Регулярно проверяйте выписки и немедленно сообщайте банку о подозрительных транзакциях, которые вы не совершали.",
      iconName: "Bell"
    },
    {
      title: "Будьте критичны",
      description: "Не поддавайтесь на обещания быстрой прибыли, всегда сомневайтесь в \"выгодных\" предложениях и не переходите по неизвестным ссылкам. Помните, что сверхвысокая доходность всегда сопряжена с повышенным риском.",
      iconName: "AlertTriangle"
    },
    {
      title: "Защитите устройства",
      description: "Используйте надежный антивирус, регулярно обновляйте операционную систему и приложения. Не устанавливайте программы из ненадежных источников и не подключайтесь к общедоступным Wi-Fi сетям для проведения финансовых операций.",
      iconName: "Smartphone"
    }
  ];

  return (
    <section className="mb-16">
      <SectionHeader 
        title="Рекомендации по защите личных финансов"
        description="Чтобы защитить себя и свои средства, следуйте этим ключевым рекомендациям:"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {protectionItems.map((item, index) => (
          <ProtectionItem 
            key={index}
            title={item.title}
            description={item.description}
            iconName={item.iconName}
          />
        ))}
      </div>
      
      <div className="bg-blue-50 p-8 rounded-lg border border-blue-200 text-center">
        <h3 className="text-2xl font-bold mb-4 text-blue-800">Помните!</h3>
        <p className="text-lg text-blue-700 mb-6">
          Финансовая безопасность — это ваша ответственность. Будьте внимательны, осведомлены и всегда проверяйте информацию!
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Link to="/">Вернуться на главную</Link>
        </Button>
      </div>
    </section>
  );
};

export default ProtectionSection;
