
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface FinancialSecurityCardProps {
  title: string;
  description: string;
  icon: string;
}

const FinancialSecurityCard: React.FC<FinancialSecurityCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg">
      <CardHeader className="text-center pb-2">
        <div className="mx-auto bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
          <Icon name={icon} size={28} className="text-blue-600" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FinancialSecurityCard;
