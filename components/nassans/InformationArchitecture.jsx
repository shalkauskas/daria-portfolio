import Border from "./Border";
import ProjectSectionHeader from "../projectDefaults/ProjectSectionHeader";
import SubHeader from "./SubHeader";
import Image from "next/image";
import oldmap from "../../public/images/nassans/Oldmap.png";
import newmap from "../../public/images/nassans/Newmap.png";
export default function InformationArchitecture() {
  return (
    <>
      <ProjectSectionHeader header="Information architecture" />
      <Border>
        <div className="p-8">
          <SubHeader>Discovered issues</SubHeader>
          <Image
            alt="Old site map"
            src={oldmap}
            quality={100}
            loading={"lazy"}
            placeholder="blur"
          />
        </div>
      </Border>
      <img
        src="images/nassans/arrow-down.svg"
        alt=""
        className="mx-auto p-12"
      />
      <Border>
        <div className="p-8">
          <SubHeader>Solutions</SubHeader>
          <Image
            alt="New site map"
            src={newmap}
            quality={100}
            loading={"lazy"}
            placeholder="blur"
          />
        </div>
      </Border>
    </>
  );
}
