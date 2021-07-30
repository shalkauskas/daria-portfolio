import ProjectSectionHeader from "../projectDefaults/ProjectSectionHeader";
import WireframingAB from "./WireframingAB";
import Image from "next/image";
import sketch1 from "../../public/images/nassans/sketch1.png";
import sketch2 from "../../public/images/nassans/sketch2.png";
import sketch3 from "../../public/images/nassans/sketch3.png";
import sketch4 from "../../public/images/nassans/sketch4.png";
import WireframingSketches from "./WireframingSketches";
export default function Wireframing() {
  return (
    <>
      <ProjectSectionHeader header="Sketching & Wireframing" />
      <p>
        Because I was working with the Wix, most of the pages I redesigned right
        at the CMS using a copy of the original website. It was easier than
        preparing wireframes in editors like Figma or Sketch for the following
        reasons:
      </p>
      <div className="flex flex-col sm:flex-row justify-between">
        <WireframingAB
          text={
            <span>
              <b>A.</b> Some pages had only slight changes, mostly in style.
            </span>
          }
          className="mr-6"
        >
          <div className={`sm:mr-6`}>
            <Image
              alt="Sketch"
              src={sketch1}
              quality={75}
              loading={"lazy"}
              placeholder="blur"
            />
          </div>
          <div className={`sm:ml-6`}>
            <Image
              alt="Sketch"
              src={sketch2}
              quality={75}
              loading={"lazy"}
              placeholder="blur"
            />
          </div>
        </WireframingAB>
        <WireframingAB
          text={
            <span>
              <b>B.</b> Wix has technical constraints. Some of its tools are not
              customizable enough.
            </span>
          }
          className="sm:ml-6"
        >
          <div className={`sm:mr-6`}>
            <Image
              alt="Sketch"
              src={sketch3}
              quality={75}
              loading={"lazy"}
              placeholder="blur"
              width={222}
              height={327}
            />
          </div>
          <div className={`sm:absolute bottom-0 w-max`} style={{ left: "35%" }}>
            <Image
              alt="Sketch"
              src={sketch4}
              quality={75}
              loading={"lazy"}
              placeholder="blur"
              width={247}
              height={137}
            />
          </div>
        </WireframingAB>
      </div>
      <p className="my-12">
        However, for pages with major changes required wireframing was
        absolutely necessary as it helped to focus on layout and not worry about
        styling just yet.
      </p>
      <WireframingSketches />
    </>
  );
}
