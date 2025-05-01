
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import HeroSection from "@/components/HeroSection";
import FinancialSecurityCard from "@/components/FinancialSecurityCard";
import ProtectionTips from "@/components/ProtectionTips";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <div className="container mx-auto px-4 py-12 space-y-12">
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Основные угрозы финансовой безопасности в 2025 году</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FinancialSecurityCard 
              title="Кибермошенничество"
              description="Фишинг, подмена сайтов, мошеннические приложения и другие методы онлайн-мошенничества."
              icon="ShieldAlert"
            />
            <FinancialSecurityCard 
              title="Утечка данных"
              description="Персональные и платежные данные могут быть скомпрометированы из-за утечек из корпоративных систем."
              icon="Database"
            />
            <FinancialSecurityCard 
              title="Социальная инженерия"
              description="Манипуляция людьми с целью получения конфиденциальной информации или совершения транзакций."
              icon="Users"
            />
          </div>
        </section>
        
        <ProtectionTips />
        
        <section className="bg-blue-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Хотите получить полное руководство по финансовой безопасности?</h2>
          <p className="text-center mb-6 text-gray-600">Скачайте наше подробное руководство с дополнительными советами и рекомендациями</p>
          <div className="text-center">
            <Button className="bg-blue-600 hover:bg-blue-700">Скачать руководство</Button>
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

export default Index;
