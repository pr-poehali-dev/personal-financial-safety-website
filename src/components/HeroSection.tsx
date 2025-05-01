
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Защитите свои финансы в цифровую эпоху 2025 года
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Современные рекомендации и практические советы для обеспечения безопасности ваших финансов в эпоху цифровых технологий
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Узнать больше

              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link to="/recommendations">Узнать больше</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/about">О проекте</Link>
              </Button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
