import Image from "next/image";
import sketch5 from "../../public/images/nassans/sketch5.png";
import sketch6 from "../../public/images/nassans/sketch6.png";
import sketch7 from "../../public/images/nassans/sketch7.png";
export default function WireframingSketches() {
  return (
    <div className="flex flex-col sm:flex-row justify-between mb-24">
      <div className="mx-auto">
        <Image
          alt="Sketch"
          src={sketch5}
          quality={75}
          loading={"lazy"}
          placeholder="blur"
          width={193}
          height={455}
        />
      </div>

      <img
        src="images/nassans/arrow-down.svg"
        alt=""
        className="transform sm:-rotate-90 mx-auto py-6"
        width="70px"
        height="70px"
      />
      <div className="mx-auto">
        {" "}
        <Image
          alt="Sketch"
          src={sketch6}
          quality={75}
          loading={"lazy"}
          placeholder="blur"
          width={272}
          height={455}
        />
      </div>
      <div className="mx-auto">
        {" "}
        <Image
          alt="Sketch"
          src={sketch7}
          quality={75}
          loading={"lazy"}
          placeholder="blur"
          width={272}
          height={455}
        />
      </div>
    </div>
  );
}
