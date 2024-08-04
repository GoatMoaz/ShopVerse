import Category from "./Category";
import { Slide } from "react-awesome-reveal";

const Categories = () => {
  return (
    <section className="bg-white py-16 px-2 sm:px-8">
      <h1 className="text-base text-center font-semibold leading-7 text-indigo-600">
        Shop by Categories
      </h1>
      <h2 className="text-2xl text-center font-bold tracking-tight text-blue-950 sm:text-4xl">
        Explore our popular categories
      </h2>
      <Slide duration={1300} triggerOnce direction="up" cascade damping={0.1}>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <Category
            category={{
              image:
                "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=600",
              name: "Clothes",
            }}
          />
          <Category
            category={{
              image:
                "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600",
              name: "Electronics",
            }}
          />

          <Category
            category={{
              image:
                "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=600",
              name: "Furnitures",
            }}
          />
          <Category
            category={{
              image:
                "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600",
              name: "Shoes",
            }}
          />
        </ul>
      </Slide>
    </section>
  );
};

export default Categories;
