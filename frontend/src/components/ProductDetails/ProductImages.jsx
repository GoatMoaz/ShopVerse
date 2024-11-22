import Slider from "react-slick";

const ProductImages = ({ images }) => {
  const settings = {
    customPaging: function (i) {
      return (
        <div>
          <img src={images[i]} alt="product" className="rounded-lg" />
        </div>
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
    <div className="md:w-80 lg:w-96 rounded-lg">
      <Slider {...settings} className="object-cover rounded-lg">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="product"
            className="h-full object-cover rounded-lg"
          />
        ))}
      </Slider>
    </div>
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

export default ProductImages;
