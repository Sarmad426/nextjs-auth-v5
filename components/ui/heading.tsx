type HeadingProps = {
  title: string;
  description?: string;
};

export const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <div className="my-2">
      <h2 className="text-3xl font-semibold">{title}</h2>
      {description && <p className="my-2 text-gray-600">{description}</p>}
    </div>
  );
};
