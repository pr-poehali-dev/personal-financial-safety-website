
import SectionHeader from "@/components/recommendations/SectionHeader";
import ThreatCard from "@/components/recommendations/ThreatCard";

const ThreatsSection = () => {
  const threats = [
    {
      title: "Мошенничество в интернете",
      description: "Фишинг, фальшивые сайты банков, ложные сообщения и звонки от \"службы безопасности\" стали обыденным явлением. Мошенники используют все более убедительные методы для получения доступа к вашим счетам.",
      iconName: "Globe"
    },
    {
      title: "Утечка данных",
      description: "Взлом аккаунтов, несанкционированный доступ к банковским приложениям часто происходит из-за массовых утечек данных крупных сервисов или слабой защиты личной информации.",
      iconName: "Database"
    },
    {
      title: "Социальная инженерия",
      description: "Манипуляции, направленные на получение ваших личных или банковских данных. Злоумышленники мастерски играют на эмоциях, создавая ощущение срочности или угрозы.",
      iconName: "Users"
    },
    {
      title: "Мошенничество с инвестициями",
      description: "Ложные схемы \"быстрого обогащения\", финансовые пирамиды и фальшивые инвестиционные платформы, особенно в сфере криптовалют, продолжают привлекать неопытных инвесторов.",
      iconName: "Bitcoin"
    }
  ];

  return (
    <section className="mb-16">
      <SectionHeader 
        title="Современные угрозы личной финансовой безопасности"
        description="В современном мире финансовая безопасность — это не роскошь, а необходимость. Основные угрозы сегодня становятся всё более изощренными и требуют постоянной бдительности."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {threats.map((threat, index) => (
          <ThreatCard 
            key={index}
            title={threat.title}
            description={threat.description}
            iconName={threat.iconName}
          />
        ))}
      </div>
    </section>
  );
};

export default ThreatsSection;
