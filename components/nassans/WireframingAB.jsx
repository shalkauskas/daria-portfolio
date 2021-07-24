export default function WireframingAB(props) {
  const { text, className, children } = props;
  return (
    <div className={`flex flex-col w-1/2 justify-between ${className}`}>
      <p className="my-8">{text}</p>
      <div className="flex items-center relative">{children}</div>
    </div>
  );
}
