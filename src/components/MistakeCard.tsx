
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface MistakeCardProps {
  title: string;
  description: string;
  icon: string;
}

const MistakeCard: React.FC<MistakeCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="bg-orange-100 p-2 rounded-full">
            <Icon name={icon} className="text-orange-600" />
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

export default MistakeCard;
