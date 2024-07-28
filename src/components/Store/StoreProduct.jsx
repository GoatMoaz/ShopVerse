import CartButton from "../UI/Buttons/CartButton";

const StoreProduct = (props) => {
  return (
    <div className="flex flex-col bg-[#414852] justify-between gap-4 rounded-3xl pb-4">
      <img
        src={props.product.image}
        className="rounded-t-3xl h-64 object-cover w-full"
        alt={props.product.name}
      />
      <div className="flex flex-col justify-center items-center px-4 gap-2">
        <div className="flex justify-between w-full">
          <h2 className="text-slate-100 text-3xl">{props.product.name} </h2>
          <p className="text-[#35B5C2] text-3xl">${props.product.price}</p>
        </div>
        <p className="text-slate-300 text-lg text-left line-clamp-4">
          {props.product.description}
        </p>
        <CartButton />
      </div>
    </div>
  );
};

export default StoreProduct;
