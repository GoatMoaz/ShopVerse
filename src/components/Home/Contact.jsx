import { Zoom } from "react-awesome-reveal";
import ContactInput from "../UI/ContactInput/ContactInput";

const Contact = () => {
  return (
    <section className="bg-[#e4ebfd] py-8">
      <Zoom duration={700} triggerOnce fraction={0.3}>
        <div className="mx-auto max-w-7xl px-3 lg:px-8">
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
              <ContactInput label="Full Name" type="text" textArea={false} />
              <ContactInput label="Email Address" type="email" textArea={false}/>
              <ContactInput label="Message" textArea={true} />
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
