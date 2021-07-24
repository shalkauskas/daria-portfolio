export default function SubHeader(props) {
  return (
    <h1 className="text-center text-2xl" style={{ color: `#61AEB0` }}>
      {props.children}
    </h1>
  );
}
