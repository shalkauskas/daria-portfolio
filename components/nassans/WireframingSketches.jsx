import Image from "next/image";
import sketch5 from "../../public/images/nassans/sketch5.png";
import sketch6 from "../../public/images/nassans/sketch6.png";
import sketch7 from "../../public/images/nassans/sketch7.png";
export default function WireframingSketches() {
  return (
    <div className="flex justify-between mb-24">
      <Image
        alt="Sketch"
        src={sketch5}
        quality={75}
        loading={"lazy"}
        placeholder="blur"
        width={193}
        height={455}
      />
      <img
        src="images/nassans/arrow-down.svg"
        alt=""
        className="transform -rotate-90"
        width="70px"
        height="70px"
      />
      <Image
        alt="Sketch"
        src={sketch6}
        quality={75}
        loading={"lazy"}
        placeholder="blur"
        width={272}
        height={455}
      />
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
  );
}
