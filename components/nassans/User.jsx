export default function User(props) {
  const { image, title, content } = props;
  return (
    <div className="flex flex-col max-w-1/2 p-5">
      <h1 className="text-center font-bold">{title}</h1>
      <div className="flex">
        <img src={image} alt={title} width="90px" height="90px" />
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
