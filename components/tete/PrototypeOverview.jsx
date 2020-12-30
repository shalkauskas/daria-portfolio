export default function PrototypeOverview() {
  const [device, setDevice] = React.useState("desktop");
  return (
    <div className="container mx-auto">
      <div
        className={`${
          device === "mobile" ? "block" : "hidden"
        } container mx-auto relative`}
      >
        <img
          src="images/bloom.png"
          className="mx-auto"
          style={{ width: "250px" }}
          alt=""
        />
        <video
          className="mx-auto left-0 right-0 absolute"
          style={{ width: "218px", bottom: "60px" }}
          controls
          autoPlay
          muted
        >
          <source src="video/teteatete-mobile.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div
        className={`${
          device === "desktop" ? "block" : "hidden"
        } container mx-auto relative`}
      >
        <img src="images/tete-a-tete-desktop.png" alt="" className="mx-auto" />
        <video
          className="mx-auto left-0 right-0 absolute"
          style={{
            width: "650px",
            bottom: "20%",
            borderRadius: "5px",
            maxWidth: "73%",
          }}
          controls
          autoPlay
          muted
        >
          <source src="video/teteatete-desktop.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* controls */}
      <div className="text-center my-12">
        <button
          style={{
            textDecorationColor: "#61aeb0",
            textDecorationThickness: "3px",
            textUnderlineOffset: "5px",
          }}
          className={`my-2 ${
            device === "desktop" ? "font-bold underline" : ""
          } mx-6 focus:outline-none`}
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
          } mx-6 focus:outline-none`}
          onClick={() => setDevice("mobile")}
        >
          Mobile Prototype
        </button>
      </div>
    </div>
  );
}
