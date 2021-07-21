export default function Border(props) {
  return (
    <div>
      {props.children}
      <style jsx>{`
        div {
          border: 5px solid rgba(201, 225, 254, 0.41);
        }
      `}</style>
    </div>
  );
}
