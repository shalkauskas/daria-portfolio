export default function Border(props) {
  return (
    <div>
      {props.children}
      <style jsx>{`
        div {
          border: 5px solid #f0eae7;
        }
      `}</style>
    </div>
  );
}
