import DetailsButton from "../UI/Buttons/DetailsButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductsSlider = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    lazyLoad: true,
    speed: 1000,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {products.map((product, index) => (
        <div key={index} className="sm:p-4 mb-8">
          <div className="bg-white sm:shadow-lg rounded-lg p-4">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4">
              <h3 className="text-lg sm:text-xl font-bold line-clamp-2 sm:line-clamp-1">
                {product.title}
              </h3>
              <p className="text-[18px] sm:text-lg">${product.price}</p>
            </div>
            <div className="flex justify-center mt-4">
              <DetailsButton id={product._id}/>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "#4f46e5",

        borderRadius: "9999px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "#4f46e5",
        borderRadius: "9999px",
      }}
      onClick={onClick}
    />
  );
}

export default ProductsSlider;
