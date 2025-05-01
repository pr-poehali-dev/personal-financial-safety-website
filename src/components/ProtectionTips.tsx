
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ProtectionTips = () => {
  const tips = [
    {
      id: 1,
      title: "Двухфакторная аутентификация",
      description: "Включите 2FA на всех важных аккаунтах для дополнительного уровня защиты",
      icon: "KeyRound"
    },
    {
      id: 2,
      title: "Уникальные пароли",
      description: "Используйте разные надежные пароли для каждого сервиса и менеджер паролей",
      icon: "Lock"
    },
    {
      id: 3,
      title: "Проверка сайтов",
      description: "Всегда проверяйте URL-адреса и наличие защищенного соединения (HTTPS)",
      icon: "Globe"
    },
    {
      id: 4,
      title: "Обновление ПО",
      description: "Регулярно обновляйте операционную систему и приложения",
      icon: "RefreshCw"
    },
    {
      id: 5,
      title: "Биометрическая защита",
      description: "Используйте биометрические методы защиты для доступа к финансовым приложениям",
      icon: "Fingerprint"
    },
    {
      id: 6,
      title: "Контроль разрешений",
      description: "Проверяйте, к каким данным имеют доступ установленные приложения",
      icon: "Shield"
    }
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Рекомендации по защите</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip) => (
          <Card key={tip.id} className="transition-all duration-300 hover:shadow-lg">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Icon name={tip.icon} className="text-blue-600" />
                </div>
                <CardTitle className="text-lg">{tip.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{tip.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProtectionTips;
