import Link from "next/link";
export default function NextProjectItem(props) {
  return (
    <div
      style={{ backgroundColor: "white" }}
      className="px-2 transition ease-out duration-700 hover:scale-105 transform p-3"
    >
      <Link href={props.link} passHref>
        <div
          className="rounded-full h-72 w-72 flex flex-col justify-center cursor-pointer"
          style={{ backgroundColor: props.color }}
        >
          <div className="w-3/4 mx-auto">
            <h2 className="font-bold mb-4">{props.title}</h2>
            <picture>
              <source type="image/webp" srcSet={`images/${props.image}.webp`} />
              <source type="image/jpeg" srcSet={`images/${props.image}.png`} />
              <img
                src={`images/${props.image}.png`}
                alt="Next project icon"
                style={{ width: props.phone ? "60px" : "200px" }}
              />
            </picture>
          </div>
        </div>
      </Link>
    </div>
  );
}
