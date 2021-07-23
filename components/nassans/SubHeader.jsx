export default function SubHeader(props) {
  return (
    <h1 className="text-center text-2xl" style={{ color: `#104D8D` }}>
      {props.children}
    </h1>
  );
}
