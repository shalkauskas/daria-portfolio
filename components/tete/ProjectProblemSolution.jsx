export default function ProjectProblemSolution(props) {
  const [slide, setSlide] = React.useState(0);
  return (
    <div>
      <div style={{ backgroundColor: "#F5F2F0" }} className="mb-20">
        {/* controls */}
        <div className="text-center py-12">
          <button
            style={{
              textDecorationColor: "#61aeb0",
              textDecorationThickness: "3px",
            }}
            className={`${
              slide === 0 ? "font-bold underline" : ""
            } mx-6 focus:outline-none`}
            onClick={() => setSlide(0)}
          >
            Problem
          </button>
          <button
            style={{
              textDecorationColor: "#61aeb0",
              textDecorationThickness: "3px",
            }}
            className={`${
              slide === 1 ? "font-bold underline" : ""
            } mx-6 focus:outline-none`}
            onClick={() => setSlide(1)}
          >
            Solution
          </button>
        </div>
        {/* problems */}
        <div
          className={`${slide == 0 ? "block" : "hidden"} sm:px-16 px-6 pb-10`}
        >
          {props.problem}
        </div>
        {/* solutions */}
        <div
          className={`${slide == 1 ? "block" : "hidden"} sm:px-16 px-6 pb-10`}
        >
          {props.solution}
        </div>
      </div>
    </div>
  );
}
