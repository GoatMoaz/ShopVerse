import { NavLink, useNavigate } from "react-router-dom";

const categories = [
  {
    title: "Furniture",
    description: "Best Furniture For Your Home.",
    imageUrl:
      "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=3222&h=2327&dpr=1",
  },
  {
    title: "Shoes",
    description: "Best Shoes for your everyday use.",
    imageUrl:
      "https://images.pexels.com/photos/1070360/pexels-photo-1070360.jpeg?auto=compress&cs=tinysrgb&w=4096&h=2731&dpr=1",
  },
  {
    title: "Clothes",
    description: "Best Clothes you can find.",
    imageUrl:
      "https://images.pexels.com/photos/1884579/pexels-photo-1884579.jpeg?auto=compress&cs=tinysrgb&w=4480&h=6720&dpr=1",
  },
  {
    title: "Accessories",
    description: "Best Trend Accessories.",
    imageUrl:
      "https://images.pexels.com/photos/1460838/pexels-photo-1460838.jpeg?auto=compress&cs=tinysrgb&w=6000&h=4000&dpr=1",
  },
];

const AllCategories = () => {
  const navigate = useNavigate();
  const categoryClickHandler = (category) => {
    if (category === "Accessories") {
      category = "Miscellaneous";
    }
    navigate(`/shop?category=${category}`);
  };

  return (
    <section className="bg-slate-600 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-12 md:pt-14">
      <div
        className="flex items-center justify-center bg-cover bg-center text-white h-screen col-span-2"
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)) no-repeat, url(https://images.pexels.com/photos/972804/pexels-photo-972804.jpeg?auto=compress&cs=tinysrgb&w=2533&h=3800&dpr=1)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-4 flex flex-col items-center sm:items-start sm:text-left text-center gap-4">
          <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold">
            We Are ShopVerse
          </h1>
          <p className="text-sm xs:text-lg md:text-xl w-full md:w-3/4">
            Your one-stop shop for all things tech and gadgets at the best
            prices you can find. Shop now and get the best deals on the latest
            gadgets.
          </p>
          <NavLink
            to="/shop"
            className="bg-transparent text-white px-4 py-2 border-2 border-white hover:bg-white hover:text-black transition duration-300"
          >
            Purchase Now!
          </NavLink>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 col-span-2">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative bg-cover bg-center h-[300px] cursor-pointer lg:h-full flex items-center justify-center"
            style={{
              backgroundImage: `url(${category.imageUrl})`,
            }}
          >
            <div
              className="absolute inset-0 bg-black text-white bg-opacity-50 flex items-center justify-center transition duration-300 ease-in-out hover:bg-opacity-0 group
            "
              onClick={() => categoryClickHandler(category.title)}
            >
              <div className="text-center group-hover:hidden">
                <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
                <p className="text-lg">{category.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllCategories;
