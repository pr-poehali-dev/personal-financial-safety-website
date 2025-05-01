
interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">{title}</h1>
        <p className="text-xl text-center max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </header>
  );
};

export default PageHeader;
