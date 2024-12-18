import SubTotal from "../../components/Cart/SubTotal";
import Product from "../../components/Cart/Product";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/store";
import { Link } from "react-router-dom";

export default function CartDialog({ open, setOpen }) {
  const totalPrice = useSelector((state) => state.totalPrice);
  const products = useSelector((state) => state.items);

  const dispatch = useDispatch();

  const removeItemHandler = (id) => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">
                      Shopping cart
                    </DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      {products.length === 0 ? (
                        <p className="text-center text-indigo-600">
                          Your shopping cart looks empty
                        </p>
                      ) : (
                        <ul
                          role="list"
                          className="-my-6 divide-y divide-gray-200"
                        >
                          {products.map((product) => (
                            <Product
                              key={product._id}
                              product={product}
                              removeItemHandler={removeItemHandler}
                            />
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
                {!!products.length ? (
                  <SubTotal totalPrice={totalPrice} setOpen={setOpen} />
                ) : (
                  <Link
                    to="/shop"
                    className="flex items-center justify-center border border-transparent bg-indigo-950 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-black"
                  >
                    Start Shopping
                  </Link>
                )}
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
