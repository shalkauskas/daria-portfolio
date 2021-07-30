export default function WireframingAB(props) {
  const { text, className, children } = props;
  return (
    <div className={`flex flex-col sm:w-1/2 sm:justify-between ${className}`}>
      <p className="my-8">{text}</p>
      <div className="flex items-center relative sm:flex-row flex-col">
        {children}
      </div>
    </div>
  );
}
