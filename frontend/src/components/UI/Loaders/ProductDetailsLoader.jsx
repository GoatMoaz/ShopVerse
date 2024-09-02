const ProductDetailsLoader = () => {
  return (
    <section className="bg-sky-50 py-24 h-screen flex justify-center items-center px-4 md:px-0">
      <div className="container mx-auto border-2 border-white gap-8 md:gap-0 pb-4 md:pb-32 bg-white shadow-xl rounded-lg pt-4 px-4 grid grid-cols-1 md:grid-cols-2 animate-pulse">
        <div className="md:w-80 lg:w-96 rounded-lg h-64 md:h-96 bg-gray-300"></div>

        <div className="flex flex-col justify-center gap-4 animate-pulse">
          <div className="h-6 w-3/4 bg-gray-300 rounded"></div>
          <div className="h-4 w-full bg-gray-300 rounded"></div>
          <div className="h-4 w-full bg-gray-300 rounded"></div>
          <div className="h-6 w-1/3 bg-gray-300 rounded"></div>
          <div className="h-10 w-full bg-gray-300 rounded"></div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsLoader;
