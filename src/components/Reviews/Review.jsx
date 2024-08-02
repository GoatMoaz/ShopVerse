import Rating from "../UI/Rating/Rating";

const Review = (props) => {
  return (
    <li className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 pb-2 border-b-2">
        <h2 className="text-2xl font-bold">{props.review.title}</h2>
        <Rating rating={props.review.rating} />
      </div>
      <p className="text-gray-600 pb-2 border-b-2">
       {props.review.content}
      </p>
      <div className="flex items-center mt-4">
        <img src={props.review.user.image} alt={props.review.user.name} className="w-12 h-12 rounded-full" />
        <div className="ml-4">
          <h3 className="font-semibold">{props.review.user.name}</h3>
          <p className="text-gray-600">{props.review.user.role}</p>
        </div>
      </div>
    </li>
  );
};

export default Review;
