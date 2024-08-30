const CategoriesContent = ({ title, description }) => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="mb-8 italic text-gray-500">{description}</p>
    </>
  );
};

export default CategoriesContent;
