import Image from "next/image";
import React from "react";
import Backdrop from "../Backdrop";
export default function WebsiteAnalysisPics(props) {
  const [zoom, setZoom] = React.useState({ active: false, id: null });
  const { pics, title, height } = props;
  const enlarge = (id) => {
    setZoom({ active: !zoom.active, id: id });
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col sm:flex-row relative">
        {pics &&
          pics.map((pic, index) => (
            <div
              className={`sm:m-2 pb-4 w-full ${
                zoom.active && zoom.id === index ? `z-50` : ``
              }`}
              key={index}
            >
              <h1 className="text-center font-bold p-2">
                {title && title[index]}
              </h1>
              <div
                style={{
                  height:
                    zoom.active && zoom.id === index
                      ? "800px"
                      : height
                      ? height
                      : "400px",
                }}
              >
                <div
                  style={{ height: `inherit` }}
                  onClick={() => enlarge(index)}
                  className={`w-full flex justify-center transform transition-all duration-500 cursor-zoom-in ${
                    zoom.active && zoom.id === index
                      ? `z-50 scale-150 ${
                          zoom.id % 2
                            ? `sm:-translate-x-1/2`
                            : `sm:translate-x-1/2`
                        }`
                      : `relative`
                  } `}
                >
                  {" "}
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
              <Backdrop
                toggle={zoom.active && zoom.id === index}
                onClick={() => enlarge()}
                blur
              />
            </div>
          ))}
      </div>
    </div>
  );
}
