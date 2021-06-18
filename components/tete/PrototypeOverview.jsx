import React from "react";
export default function PrototypeOverview() {
  const [device, setDevice] = React.useState("desktop");
  return (
    <div className="container mx-auto">
      <div
        className={`${
          device === "mobile" ? "block" : "hidden"
        } container mx-auto relative`}
      >
        <picture>
          <source type="image/webp" srcSet={`images/bloom.webp`} />
          <source type="image/jpeg" srcSet={`images/bloom.png`} />
          <img
            src="images/bloom.png"
            className="mx-auto"
            style={{ width: "250px" }}
            alt=""
          />
        </picture>
        <video
          className="mx-auto left-0 right-0 absolute"
          style={{ width: "218px", bottom: "60px" }}
          controls
          muted
        >
          <source
            src="https://s3.us-east-2.amazonaws.com/daria-in-design.com/video/teteatete-mobile.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div
        className={`${
          device === "desktop" ? "block" : "hidden"
        } container mx-auto relative`}
      >
        <picture>
          <source
            type="image/webp"
            srcSet={`images/tete-a-tete-desktop.webp`}
          />
          <source type="image/jpeg" srcSet={`images/tete-a-tete-desktop.png`} />
          <img
            src="images/tete-a-tete-desktop.png"
            alt=""
            className="mx-auto"
          />
        </picture>
        <video
          className="mx-auto left-0 right-0 absolute"
          style={{
            width: "650px",
            bottom: "20%",
            borderRadius: "5px",
            maxWidth: "73%",
          }}
          controls
          muted
        >
          <source
            src="https://s3.us-east-2.amazonaws.com/daria-in-design.com/video/teteatete-desktop.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* controls */}
      <div className="text-center my-12 flex flex-wrap justify-center items-center">
        <button
          style={{
            textDecorationColor: "#61aeb0",
            textDecorationThickness: "3px",
            textUnderlineOffset: "5px",
          }}
          className={`my-2 ${
            device === "desktop" ? "font-bold underline" : ""
          } mx-6 mx-2 focus:outline-none`}
          onClick={() => setDevice("desktop")}
        >
          Desktop Prototype
        </button>
        <button
          style={{
            textDecorationColor: "#61aeb0",
            textDecorationThickness: "3px",
            textUnderlineOffset: "5px",
          }}
          className={`${
            device === "mobile" ? "font-bold underline" : ""
          } mx-6 mx-2 focus:outline-none my-2`}
          onClick={() => setDevice("mobile")}
        >
          Mobile Prototype
        </button>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://teteatetesalon.daria-in-design.com/"
          style={{ color: "rgba(97, 174, 176, 1)" }}
          className="underline mx-6 cursor-pointer mt-2 ml-3"
        >
          <img
            src="images/tete-a-tete/planet.svg"
            className="inline mr-1"
            alt="Website icon"
          />
          View website
        </a>
      </div>
    </div>
  );
}
