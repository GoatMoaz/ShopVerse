import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

import { Fade } from "react-awesome-reveal";

const features = [
  // create an array of objects to store the feature name and description and icon for each feature about the ShopVerse app
  {
    name: "Secure",
    description:
      "We use the latest security practices to keep your data safe and private.",
    icon: LockClosedIcon,
  },
  {
    name: "Cloud Storage",
    description:
      "Your data is stored in the cloud for easy access and security.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "User Friendly",
    description: "Our platform is easy to use and navigate for all users.",
    icon: FingerPrintIcon,
  },
  {
    name: "Easy Integration",
    description: "Integrate your app with other platforms seamlessly.",
    icon: ArrowPathIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-[url(https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg)] bg-no-repeat bg-cover bg-top bg-fixed py-24 sm:py-32">
      <Fade>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              ShopVerse Features
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
              The best features for your shopping experience
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              ShopVerse is the best place to shop for all your tech and gadget
              needs. We have the best features to make your shopping experience
              easy and seamless. Check out some of our features below.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-slate-100">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-white"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-slate-300">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Fade>
    </div>
  );
}
