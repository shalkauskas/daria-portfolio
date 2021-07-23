import Image from "next/image";
export default function WebsiteAnalysisPics(props) {
  const { pics, title } = props;
  return (
    <div className="flex flex-col">
      <div className="flex justify-around">
        {title &&
          title.map((item, index) => (
            <h1 className="text-center font-bold p-2" key={index}>
              {item}
            </h1>
          ))}
      </div>
      <div className="flex">
        {pics &&
          pics.map((pic, index) => (
            <div className="p-4 w-full" key={index}>
              <div className="relative w-full h-96">
                <Image
                  alt="Problem analysis"
                  src={pic}
                  quality={100}
                  loading={"lazy"}
                  placeholder="blur"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
