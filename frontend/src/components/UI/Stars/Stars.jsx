import Star from "./Star";
import EmptyStar from "./EmptyStar";

const Stars = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<Star key={i} />);
    } else {
      stars.push(<EmptyStar key={i} />);
    }
  }
  return <div className="flex ">{stars}</div>;
};

export default Stars;
