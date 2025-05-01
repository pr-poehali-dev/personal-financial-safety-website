
import Icon from "@/components/ui/icon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FinancialSecurityCardProps {
  icon: string;
  title: string;
  description: string;
}

const FinancialSecurityCard = ({ icon, title, description }: FinancialSecurityCardProps) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="bg-red-100 p-2 rounded-full">
            <Icon name={icon} className="text-red-600" />
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FinancialSecurityCard;
