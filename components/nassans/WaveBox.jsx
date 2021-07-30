export default function WaveBox(props) {
  return (
    <div className="flex pt-8 pb-20 sm:px-16 px-6 justify-evenly pain mb-12 flex-col sm:flex-row">
      {props.children}
      <style jsx>{`
        .pain {
          background: rgba(240, 234, 231, 0.6);
          border-bottom-right-radius: 100%200px;
          border-bottom-left-radius: 100%120px;
        }
      `}</style>
    </div>
  );
}
