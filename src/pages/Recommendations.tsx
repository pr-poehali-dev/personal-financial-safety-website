
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import MistakeCard from "@/components/MistakeCard";

const Recommendations = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Рекомендации по защите</h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Детальные рекомендации для обеспечения безопасности ваших финансов в цифровом мире 2025 года
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Современные угрозы личной финансовой безопасности</h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto mb-10">
            В современном мире финансовая безопасность — это не роскошь, а необходимость. Основные угрозы сегодня становятся всё более изощренными и требуют постоянной бдительности.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="h-full transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <Icon name="Globe" className="text-red-600" />
                  </div>
                  <CardTitle className="text-lg">Мошенничество в интернете</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Фишинг, фальшивые сайты банков, ложные сообщения и звонки от "службы безопасности" стали обыденным явлением. Мошенники используют все более убедительные методы для получения доступа к вашим счетам.</p>
              </CardContent>
            </Card>
            
            <Card className="h-full transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <Icon name="Database" className="text-red-600" />
                  </div>
                  <CardTitle className="text-lg">Утечка данных</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Взлом аккаунтов, несанкционированный доступ к банковским приложениям часто происходит из-за массовых утечек данных крупных сервисов или слабой защиты личной информации.</p>
              </CardContent>
            </Card>
            
            <Card className="h-full transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <Icon name="Users" className="text-red-600" />
                  </div>
                  <CardTitle className="text-lg">Социальная инженерия</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Манипуляции, направленные на получение ваших личных или банковских данных. Злоумышленники мастерски играют на эмоциях, создавая ощущение срочности или угрозы.</p>
              </CardContent>
            </Card>
            
            <Card className="h-full transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <Icon name="Bitcoin" className="text-red-600" />
                  </div>
                  <CardTitle className="text-lg">Мошенничество с инвестициями</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Ложные схемы "быстрого обогащения", финансовые пирамиды и фальшивые инвестиционные платформы, особенно в сфере криптовалют, продолжают привлекать неопытных инвесторов.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-10" />
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Типичные ошибки, ведущие к финансовым потерям</h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto mb-10">
            Многие становятся жертвами мошенников из-за простых, но критических ошибок, которых можно избежать.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MistakeCard 
              title="Слабые пароли"
              description="Использование простых или одинаковых паролей для разных сервисов значительно упрощает задачу злоумышленникам."
              icon="Lock"
            />
            
            <MistakeCard 
              title="Переход по подозрительным ссылкам"
              description="Даже одно нажатие на вредоносную ссылку может привести к установке вредоносного ПО или фишинговому сайту."
              icon="Link"
            />
            
            <MistakeCard 
              title="Недостаточная проверка информации"
              description="Принятие решений о переводе средств без тщательной проверки получателя или инвестиционной возможности."
              icon="Search"
            />
            
            <MistakeCard 
              title="Доверие незнакомцам"
              description="Слепое доверие людям, представляющимся сотрудниками банков или других организаций без верификации."
              icon="UserX"
            />
            
            <MistakeCard 
              title="Отсутствие обновлений"
              description="Использование устаревшего ПО с уязвимостями или отсутствие антивирусной защиты на устройствах."
              icon="RefreshCw"
            />
            
            <MistakeCard 
              title="Публичная информация"
              description="Размещение избыточной личной информации в социальных сетях, которую мошенники используют для персонализации атак."
              icon="Share2"
            />
          </div>
        </section>

        <Separator className="my-10" />
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Рекомендации по защите личных финансов</h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto mb-10">
            Чтобы защитить себя и свои средства, следуйте этим ключевым рекомендациям:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <Icon name="Shield" className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Не разглашайте данные</h3>
              </div>
              <p className="text-gray-700">
                Ни при каких обстоятельствах не передавайте по телефону или в мессенджерах свои PIN-коды, пароли, CVV-коды и коды из SMS. Настоящие сотрудники банков никогда не запрашивают такую информацию.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <Icon name="KeyRound" className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Используйте сложные пароли</h3>
              </div>
              <p className="text-gray-700">
                Регулярно обновляйте пароли, используйте уникальные комбинации для разных сервисов и активируйте двухфакторную аутентификацию везде, где это возможно. Рассмотрите использование менеджера паролей.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <Icon name="CheckCircle" className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Проверяйте источники</h3>
              </div>
              <p className="text-gray-700">
                При получении сообщений или звонков от "банка" всегда перезванивайте на официальный номер, указанный на обратной стороне карты или на официальном сайте. Никогда не перезванивайте на номер, указанный в подозрительном сообщении.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <Icon name="Bell" className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Следите за активностью на счетах</h3>
              </div>
              <p className="text-gray-700">
                Установите уведомления о всех операциях по картам и счетам. Регулярно проверяйте выписки и немедленно сообщайте банку о подозрительных транзакциях, которые вы не совершали.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <Icon name="AlertTriangle" className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Будьте критичны</h3>
              </div>
              <p className="text-gray-700">
                Не поддавайтесь на обещания быстрой прибыли, всегда сомневайтесь в "выгодных" предложениях и не переходите по неизвестным ссылкам. Помните, что сверхвысокая доходность всегда сопряжена с повышенным риском.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <Icon name="Smartphone" className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Защитите устройства</h3>
              </div>
              <p className="text-gray-700">
                Используйте надежный антивирус, регулярно обновляйте операционную систему и приложения. Не устанавливайте программы из ненадежных источников и не подключайтесь к общедоступным Wi-Fi сетям для проведения финансовых операций.
              </p>
            </div>
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
      </div>
      
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-xl font-bold">Финансовая безопасность 2025</h3>
              <p className="mt-2 text-gray-300">© 2025 Все права защищены</p>
            </div>
            <div className="flex gap-4">
              <Link to="/" className="text-gray-300 hover:text-white">Главная</Link>
              <Link to="/about" className="text-gray-300 hover:text-white">О проекте</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white">Контакты</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Recommendations;
