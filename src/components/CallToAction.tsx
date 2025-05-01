
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CallToActionProps {
  title: string;
  message: string;
  buttonText: string;
  buttonLink: string;
}

const CallToAction = ({ title, message, buttonText, buttonLink }: CallToActionProps) => {
  return (
    <div className="bg-blue-50 p-8 rounded-lg border border-blue-200 text-center">
      <h3 className="text-2xl font-bold mb-4 text-blue-800">{title}</h3>
      <p className="text-lg text-blue-700 mb-6">
        {message}
      </p>
      <Button className="bg-blue-600 hover:bg-blue-700">
        <Link to={buttonLink}>{buttonText}</Link>
      </Button>
    </div>
  );
};

export default CallToAction;
