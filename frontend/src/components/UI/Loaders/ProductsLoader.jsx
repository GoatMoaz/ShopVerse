const ProductsLoader = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="flex justify-between items-center gap-2 flex-col sm:flex-row-reverse mb-5">
        <div className="animate-pulse rounded-lg w-full h-8 bg-gray-200 md:w-1/4 sm:w-2/5"></div>
        <div className="animate-pulse rounded-lg w-full h-8 bg-gray-200 md:w-1/4 sm:w-2/5"></div>
      </div>
      <div className="container mx-auto my-4 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <div className="animate-pulse bg-gray-200 h-96 w-full rounded-lg"></div>
        <div className="animate-pulse bg-gray-200 h-96 w-full rounded-lg"></div>
        <div className="animate-pulse bg-gray-200 h-96 w-full rounded-lg"></div>
        <div className="animate-pulse bg-gray-200 h-96 w-full rounded-lg"></div>
      </div>
    </div>
  );
};

export default ProductsLoader;
