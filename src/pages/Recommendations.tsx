
import { Separator } from "@/components/ui/separator";
import ThreatsSection from "@/components/recommendations/ThreatsSection";
import MistakesSection from "@/components/recommendations/MistakesSection";
import ProtectionSection from "@/components/recommendations/ProtectionSection";
import PageFooter from "@/components/recommendations/PageFooter";

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
        <ThreatsSection />
        <Separator className="my-10" />
        <MistakesSection />
        <Separator className="my-10" />
        <ProtectionSection />
      </div>
      
      <PageFooter />
    </div>
  );
};

export default Recommendations;
