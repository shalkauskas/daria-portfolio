export default function WaveBox(props) {
  return (
    <div className="flex pt-12 pb-28 px-24 justify-evenly pain mb-12">
      {props.children}
      <style jsx>{`
        .pain {
          background: rgba(240, 234, 231, 0.6);
          clip-path: polygon(
            100% 81%,
            100% 0%,
            0% 0%,
            0% 81%,
            9% 89%,
            16% 92%,
            22% 94%,
            30% 95%,
            38% 95%,
            47% 94%,
            60% 93%,
            73% 91%,
            85% 88%
          );
        }
      `}</style>
    </div>
  );
}
