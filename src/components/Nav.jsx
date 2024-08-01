import Cart from "./UI/Cart";
import { useState } from "react";
import CartDialog from "./CartDialog";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];
const Nav = () => {
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen(true);
  };

  return (
    <>
      <nav className="w-full backdrop-blur-lg fixed top-0 shadow-xl z-20">
        <div className="flex flex-col justify-between items-center rounded-md px-4 py-2 w-full md:w-5/6 sm:flex-row mx-auto">
          <a href="/">
            <h1 className="text-3xl text-slate-200 font-bold logo">ShopVerse</h1>
          </a>
          <div className="flex justify-center items-center gap-4 text-slate-200">
            <a href="#" className="link">
              About
            </a>
            <a href="#" className="link">
              Shop
            </a>
            <a href="#" className="link">
              Categories
            </a>
          </div>
          <div className="flex justify-center items-center gap-4 text-slate-200">
            <div onClick={clickHandler} className="cursor-pointer">
              <Cart />
            </div>
            <a
              href="#"
              className="bg-slate-950 rounded-2xl px-6 py-2 hover:bg-black transition-all duration-300"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
      <CartDialog open={open} setOpen={setOpen} products={products} />
    </>
  );
};

export default Nav;
