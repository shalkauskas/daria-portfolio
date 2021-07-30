export default function User(props) {
  const { image, title, content } = props;
  return (
    <div className="flex flex-col sm:max-w-1/2 sm:p-2">
      <h1 className="text-center font-bold sm:my-2 my-6">{title}</h1>
      <div className="flex flex-col sm:flex-row h-full">
        <img
          src={image}
          alt={title}
          width="110px"
          height="110px"
          className="mx-auto mb-4"
        />
        <div className="p-3 ml-4">
          {content &&
            content.map((item, index) => (
              <ul key={index} className="list-disc list-inside">
                <li>{item}</li>
              </ul>
            ))}
        </div>
      </div>
    </div>
  );
}
