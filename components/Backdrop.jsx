export default function Backdrop(props) {
  return (
    <div
      style={{
        position: "fixed",
        top: "-500px",
        right: "-100px",
        width: "1000%",
        height: "200vh",
        minHeight: "100%",
        zIndex: "-1",
        display: props.toggle ? "block" : "none",
        background: props.blur ? "rgba(0, 0, 0, 0.3)" : "",
        backdropFilter: props.blur ? "blur(5px)" : "",
      }}
      onClick={props.onClick}
    />
  );
}
{
}
