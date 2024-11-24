import { Slide } from "react-awesome-reveal";

const Success = () => {
  return (
    <Slide
      direction="up"
      duration={400}
      triggerOnce
      className="fixed bottom-4 left-4 z-50 flex items-end justify-end"
    >
      <div className="flex flex-col gap-2 w-60 sm:w-72 text-[10px] sm:text-xs z-50">
        <div className="succsess-alert cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg bg-[#232531] px-[10px]">
          <div className="flex gap-2">
            <div className="text-[#2b9875] bg-white/5 backdrop-blur-xl p-1 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </div>
            <div>
              <p className="text-white">Product added successfully :)</p>
              <p className="text-gray-500">Check your cart!</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Success;
