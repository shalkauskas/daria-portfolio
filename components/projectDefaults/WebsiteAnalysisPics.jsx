import Image from "next/image";
export default function WebsiteAnalysisPics(props) {
  const { pics, title } = props;
  return (
    <div className="flex flex-col">
      <div className="flex flex-col sm:flex-row">
        {pics &&
          pics.map((pic, index) => (
            <div className="sm:p-4 pb-4 w-full" key={index}>
              <h1 className="text-center font-bold p-2">
                {title && title[index]}
              </h1>
              <div className="relative w-full sm:h-96 h-40">
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
