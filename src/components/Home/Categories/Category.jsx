const Category = ({ category, onNavigate }) => {
  return (
    <li className="overflow-hidden" onClick={() => onNavigate(category.name)}>
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-80 object-cover shadow-md rounded-lg cursor-pointer transform transition duration-500 hover:scale-105"
      />
      <h3 className="text-xl text-center font-semibold mt-4 cursor-pointer text-blue-950 hover:text-blue-800">
        {category.name}
      </h3>
    </li>
  );
};

export default Category;
