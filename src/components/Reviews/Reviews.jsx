import Review from "./Review";
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";

import { Slide } from "react-awesome-reveal";

const reviews = [
  {
    title: "Excellent product",
    rating: 5,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper, nunc non condimentum tempus, sem arcu luctus lectus, nec tincidunt purus turpis et nisl.",
    user: {
      name: "John Doe",
      role: "Verified Buyer",
      image: user1,
    },
  },
  {
    title: "Great product",
    rating: 4,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper, nunc non condimentum tempus, sem arcu luctus lectus, nec tincidunt purus turpis et nisl.",
    user: {
      name: "Jane Doe",
      role: "Verified Buyer",
      image: user2,
    },
  },
  {
    title: "Good product",
    rating: 3,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper, nunc non condimentum tempus, sem arcu luctus lectus, nec tincidunt purus turpis et nisl.",
    user: {
      name: "John Smith",
      role: "Verified Buyer",
      image: user3,
    },
  },
];

const Reviews = () => {
  return (
    <section className="bg-[#F4F7FF] py-16 px-4">
      <h1 className="text-3xl sm:text-4xl text-blue-950 font-bold text-center">
        Most recent reviews
      </h1>
      <Slide duration={1300} triggerOnce direction="right" cascade damping={0.1} fraction={0.6}>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <Review review={reviews[0]} />
          <Review review={reviews[1]} />
          <Review review={reviews[2]} />
        </ul>
      </Slide>
    </section>
  );
};

export default Reviews;
