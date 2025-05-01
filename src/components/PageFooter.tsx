
import { Link } from "react-router-dom";

const PageFooter = () => {
  return (
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
            <Link to="/recommendations" className="text-gray-300 hover:text-white">Рекомендации</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
