export default function ProjectStatement(props) {
  return (
    <div className="container mx-auto">
      {/* statement */}
      <div className={`${props.statement ? "block" : "hidden"} mb-8`}>
        <h3 className="text-left text-lg my-5 font-bold">
          {props.statementBenchmark
            ? "Problem statement and benchmark criteria"
            : "Problem statement"}
        </h3>
        {props.statement}
      </div>
      {/* benchmark */}
      <div className={`${props.benchmark ? "block" : "hidden"} mb-8`}>
        <h3 className="text-left text-lg my-5 font-bold">
          Benchmark criteria:
        </h3>
        {props.benchmark}
      </div>
      {/* solutions */}
      <div className={`${props.solutions ? "block" : "hidden"} mb-8`}>
        <h3 className="text-left text-lg my-5 font-bold">Solutions</h3>
        {props.solutions}
      </div>
      {/* hypothesis */}
      <div className={`${props.hypothesis ? "block" : "hidden"} mb-8`}>
        <h3 className="text-left text-lg my-5 font-bold">Hypothesis</h3>
        {props.hypothesis}
      </div>
      {/* outcomes */}
      <div className={`${props.outcomes ? "block" : "hidden"} mb-8`}>
        <h3 className="text-left text-lg my-5 font-bold">Outcomes</h3>
        {props.outcomes}
      </div>
    </div>
  );
}
