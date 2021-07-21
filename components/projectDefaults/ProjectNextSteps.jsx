export default function NextSteps(props) {
  return (
    <div
      className="mx-auto rounded-full text-center circle flex"
      style={{ backgroundColor: "#F5F2F0" }}
    >
      <div
        className={`max-w-max px-10 mx-auto my-auto ${
          props.style ? "margin" : ""
        }`}
      >
        <h3 className="font-bold text-xl mb-3">{props.title}</h3>
        {props.list}
      </div>
      <style jsx>{`
        .circle {
          width: 450px;
          height: 450px;
        }
        @media screen and (max-width: 440px) {
          .circle {
            width: 350px;
            height: 350px;
          }
          .margin {
            margin-top: 1.25rem;
            margin-bottom: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
}
