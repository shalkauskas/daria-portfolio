export default function NextSteps(props) {
  return (
    <div
      className="mx-auto rounded-full text-center circle flex"
      style={{ backgroundColor: "#F5F2F0" }}
    >
      <div className="max-w-max px-10 mx-auto my-auto">
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
            width: 90vw;
            height: 60vh;
            padding: 10px 0;
          }
        }
      `}</style>
    </div>
  );
}
