import { Zoom } from "react-awesome-reveal";

const Contact = () => {
  return (
    <section className="bg-[#e4ebfd] py-8">
      <Zoom duration={700} triggerOnce fraction={0.3}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Contact Us
            </h2>
            <p className="mt-2 text-2xl font-bold tracking-tight text-blue-950 sm:text-4xl">
              Have any questions? Contact us now.
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              We are here to help you with any questions you may have. Fill out
              the form below and we will get back to you as soon as possible.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-2xl lg:max-w-4xl">
            <form className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="name" className="text-slate-900">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-2 w-full px-4 py-2 rounded-lg bg-white focus:outline-none focus:ring focus:ring-indigo-500"
                  placeholder="John Snow"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-slate-900">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 w-full px-4 py-2 rounded-lg bg-white focus:outline-none focus:ring focus:ring-indigo-500"
                  placeholder=" King_In_The_North@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="text-slate-900">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-2 w-full px-4 py-2 rounded-lg bg-white focus:outline-none focus:ring focus:ring-indigo-500"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 md:w-1/5 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </Zoom>
    </section>
  );
};

export default Contact;
