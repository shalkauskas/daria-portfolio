import Link from "next/link";
export default function NextProjectItem(props) {
  return (
    <div style={{ backgroundColor: "white" }} className="px-2">
      <Link href={props.link} passHref>
        <div
          className="rounded-full h-72 w-72 flex flex-col justify-center cursor-pointer"
          style={{ backgroundColor: props.color }}
        >
          <div className="w-3/4 mx-auto">
            <h2 className="font-bold mb-4">{props.title}</h2>
            <img
              src={props.image}
              style={{ width: props.phone ? "60px" : "200px" }}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
