import { useLocation } from "react-router-dom";
import useFetchData from "../../hooks/use-fetch-data";
import { useEffect } from "react";
import Loader from "../UI/Loader/Loader";
import Slider from "react-slick";
import AddToCartButton from "../UI/Buttons/AddToCartButton";

const ProductDetails = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const id = pathname.split("/")[2];
  const { products, loading, fetchProducts } = useFetchData();
  const product = products[0];

  useEffect(() => {
    fetchProducts(id);
  }, [id]);

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img
            src={product.images[i]}
            alt={product.title}
            className="rounded-lg"
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "image slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    fade: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 425,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,
        },
      },
    ],
  };

  return (
    <>
      {loading && <Loader />}
      {product && (
        <section className="bg-sky-50 py-24 px-4 md:px-0">
          <div className="container mx-auto border-2 border-white gap-2 sm:gap-32 md:gap-0 pb-4 md:pb-32 bg-white shadow-xl rounded-lg pt-4 px-4 grid grid-cols-1 md:grid-cols-2">
            <div className="md:w-80 lg:w-96 rounded-lg">
              <Slider {...settings} className="object-cover rounded-lg">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={product.title}
                    className="h-full object-cover rounded-lg"
                  />
                ))}
              </Slider>
            </div>

            <div className="flex flex-col justify-center gap-4">
              <h2 className="text-xl sm:text-2xl font-bold">{product.title}</h2>
              <p className="text-sm sm:text-lg">{product.description}</p>
              <p className="text-xl sm:text-2xl text-indigo-600 font-semibold">
                ${product.price}.00
              </p>
              <AddToCartButton />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "none",
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
        display: "none",
      }}
      onClick={onClick}
    />
  );
}

export default ProductDetails;
