
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">О проекте</h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Наш буклет создан для повышения осведомленности о современных угрозах финансовой безопасности и методах защиты
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Миссия проекта</h2>
          <p className="text-gray-700 mb-4">
            Проект «Актуальные проблемы личной финансовой безопасности в 2025 году» был создан командой экспертов по кибербезопасности и финансовым аналитикам с целью помочь обычным гражданам защитить свои финансы в эпоху цифровых технологий.
          </p>
          <p className="text-gray-700 mb-4">
            В 2025 году количество киберпреступлений продолжает расти, а методы мошенников становятся всё более изощренными. Наша задача — предоставить актуальную информацию и практические рекомендации, которые помогут вам сохранить свои сбережения в безопасности.
          </p>
          <p className="text-gray-700">
            Мы регулярно обновляем содержание нашего буклета, чтобы отражать последние тенденции в области цифровой безопасности и финансового мошенничества.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <Icon name="BookOpen" size={28} className="text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Образовательные материалы</h3>
              <p className="text-gray-600 text-center">
                Регулярно публикуем актуальные статьи, видео и инфографики по теме финансовой безопасности
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <Icon name="Users" size={28} className="text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Сообщество</h3>
              <p className="text-gray-600 text-center">
                Объединяем людей, заинтересованных в защите своих финансов и обмене опытом
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <Icon name="AlertTriangle" size={28} className="text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Предупреждения</h3>
              <p className="text-gray-600 text-center">
                Оперативно информируем о новых схемах мошенничества и уязвимостях в системах безопасности
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 mr-4">
            <Link to="/">Вернуться на главную</Link>
          </Button>
          <Button variant="outline" className="border-blue-600 text-blue-600">
            <Link to="/contact">Связаться с нами</Link>
          </Button>
        </div>
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

export default About;
