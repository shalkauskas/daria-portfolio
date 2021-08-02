import Link from "next/link";
export default function ProjectContainer(props) {
  const laptopImageStyles =
    "w-4/6 2xl:w-96 xl:mb-12 2xl:absolute xl:w-10/12 lg:w-5/6 md:w-full lg:ml-12 md:ml-4 ml-20 mt-6 lg:mt-0 md:mt-12";
  const mobileImageStyles =
    "w-1/5 2xl:w-44 xl:w-40 lg:w-1/5 md:w-2/5 2xl:ml-40 xl:ml-32 lg:ml-32 md:ml-24 ml-auto mr-auto mt-6 md:mt-10 xl:mt-12 lg:absolute";
  const {
    color,
    link,
    title,
    image,
    imageStyle,
    bloom,
    feature1,
    feature2,
    feature3,
  } = props;
  return (
    <div
      className="relative mx-auto container-default text-center mb-24 2xl:w-4/6 2xl:py-10 sm:w-4/6 w-full"
      style={{ backgroundColor: color }}
    >
      <div className="">
        <h2 className="font-bold block lg:ml-auto lg:mr-16 text-center text-2xl lg:text-3xl lg:w-51 md:pt-10 sm:pt-16 pt-10 px-6">
          {title}
        </h2>
      </div>

      {/* wrapper */}
      <div className="flex md:flex-row flex-col">
        {/* left side */}
        <div className="w-full xl:w-4/6 lg:w-5/6">
          <Link href={link} passHref>
            <picture>
              <source type="image/webp" srcSet={`images/${image}.webp`} />
              <source type="image/jpeg" srcSet={`images/${image}.png`} />
              <img
                className={`cursor-pointer
              ${
                imageStyle === "laptop" ? laptopImageStyles : mobileImageStyles
              }`}
                src={`images/${image}.png`}
                style={{ bottom: bloom ? "6%" : "11%" }}
                alt="Project icon"
              />
            </picture>
          </Link>
        </div>
        {/* right side */}
        <div className="w-full">
          {/* description */}
          <div className=" xl:mb-12 lg:mb-4 md:mb-6 w-5/6 md:w-full mx-auto">
            <ul className="2xl:pr-16 list-disc sm:mt-10 mt-6 ml-8 text-left text-lg w-auto sm:mr-0 md:mr-2">
              <li>{feature1}</li>
              <li>{feature2}</li>
              {feature3 && <li>{feature3}</li>}
            </ul>
          </div>
          {/* button */}
          <div className="pb-6 md:text-right">
            <Link href={link} passHref>
              <button className="rounded-full xl:px-10 md:px-6 px-10 py-3 mt-8 md:mt-8 lg:mt-16 xl:mt-8 md:mr-20 bg-gray-700 text-white hover:opacity-75 focus:outline-none">
                View more
              </button>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container-default {
          border-radius: 100px;
        }
      `}</style>
    </div>
  );
}
