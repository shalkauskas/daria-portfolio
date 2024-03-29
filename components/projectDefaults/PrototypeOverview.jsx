import React from "react";
export default function PrototypeOverview(props) {
  const devices = { desktop: `desktop`, mobile: `mobile` };
  const [device, setDevice] = React.useState(devices.desktop);
  const { desktop, mobile, link, poster } = props;
  return (
    <div className="container mx-auto">
      <div
        className={`${
          device === devices.mobile ? "block" : "hidden"
        } container mx-auto relative`}
      >
        <picture>
          <source type="image/webp" srcSet={`images/iphone.webp`} />
          <source type="image/jpeg" srcSet={`images/iphone.png`} />
          <img
            src="images/iphone.png"
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
          poster={poster && poster.mobile}
        >
          <source src={mobile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div
        className={`${
          device === devices.desktop ? "block" : "hidden"
        } container mx-auto relative`}
      >
        <picture>
          <source type="image/webp" srcSet={`images/desktop.webp`} />
          <source type="image/jpeg" srcSet={`images/desktop.png`} />
          <img src="images/desktop.png" alt="" className="mx-auto" />
        </picture>
        <video
          className="mx-auto left-0 right-0 absolute"
          style={{
            width: "655px",
            bottom: "20%",
            borderRadius: "5px",
            maxWidth: "73%",
          }}
          controls
          muted
          poster={poster && poster.desktop}
        >
          <source src={desktop} type="video/mp4" />
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
            device === devices.desktop ? "font-bold underline" : ""
          } mx-6 mx-2 focus:outline-none`}
          onClick={() => setDevice(devices.desktop)}
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
            device === devices.mobile ? "font-bold underline" : ""
          } mx-6 mx-2 focus:outline-none my-2`}
          onClick={() => setDevice(devices.mobile)}
        >
          Mobile Prototype
        </button>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={link}
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
      <style jsx>{`
        video[poster] {
        }
      `}</style>
    </div>
  );
}
