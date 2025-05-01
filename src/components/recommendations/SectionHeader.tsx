
interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">{title}</h2>
      <p className="text-gray-700 text-lg max-w-4xl mx-auto mb-10">
        {description}
      </p>
    </>
  );
};

export default SectionHeader;
