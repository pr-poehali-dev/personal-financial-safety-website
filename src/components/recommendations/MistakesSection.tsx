
import SectionHeader from "@/components/recommendations/SectionHeader";
import MistakeCard from "@/components/MistakeCard";

const MistakesSection = () => {
  const mistakes = [
    {
      title: "Слабые пароли",
      description: "Использование простых или одинаковых паролей для разных сервисов значительно упрощает задачу злоумышленникам.",
      icon: "Lock"
    },
    {
      title: "Переход по подозрительным ссылкам",
      description: "Даже одно нажатие на вредоносную ссылку может привести к установке вредоносного ПО или фишинговому сайту.",
      icon: "Link"
    },
    {
      title: "Недостаточная проверка информации",
      description: "Принятие решений о переводе средств без тщательной проверки получателя или инвестиционной возможности.",
      icon: "Search"
    },
    {
      title: "Доверие незнакомцам",
      description: "Слепое доверие людям, представляющимся сотрудниками банков или других организаций без верификации.",
      icon: "UserX"
    },
    {
      title: "Отсутствие обновлений",
      description: "Использование устаревшего ПО с уязвимостями или отсутствие антивирусной защиты на устройствах.",
      icon: "RefreshCw"
    },
    {
      title: "Публичная информация",
      description: "Размещение избыточной личной информации в социальных сетях, которую мошенники используют для персонализации атак.",
      icon: "Share2"
    }
  ];

  return (
    <section className="mb-16">
      <SectionHeader 
        title="Типичные ошибки, ведущие к финансовым потерям"
        description="Многие становятся жертвами мошенников из-за простых, но критических ошибок, которых можно избежать."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mistakes.map((mistake, index) => (
          <MistakeCard 
            key={index}
            title={mistake.title}
            description={mistake.description}
            icon={mistake.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default MistakesSection;
