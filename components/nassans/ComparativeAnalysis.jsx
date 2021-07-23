import ProjectSectionHeader from "../projectDefaults/ProjectSectionHeader";
import Image from "next/image";
import logo1 from "../../public/images/nassans/logo1.png";
import logo2 from "../../public/images/nassans/logo2.png";
import logo3 from "../../public/images/nassans/logo3.png";
export default function ComparativeAnalysis() {
  return (
    <>
      <ProjectSectionHeader header="Comparative analysis takeaways:" />
      <ul className="list-disc list-inside mb-12 mx-auto w-4/6">
        <li>
          A short introductory text helps to explain first time visitors what
          the organization is about.
        </li>
        <li>
          A link to resources and other autism support info take prime spots on
          the home page.
        </li>
        <li>
          The “Donate” button is located in a header and stands out from the
          navigation bar.
        </li>
        <li>A newsletter wraps up the home page.</li>
      </ul>
      <div className="flex p-8 justify-evenly pain pb-24">
        <Image
          alt="Logo"
          src={logo1}
          quality={75}
          loading={"lazy"}
          placeholder="blur"
          width="200px"
          height="100px"
        />

        <Image
          alt="Logo"
          src={logo2}
          quality={75}
          loading={"lazy"}
          placeholder="blur"
          width="200px"
          height="100px"
        />

        <Image
          alt="Logo"
          src={logo3}
          quality={75}
          loading={"lazy"}
          placeholder="blur"
          width="200px"
          height="100px"
        />
      </div>
      <style jsx>{`
        .pain {
          background: rgba(201, 225, 254, 0.22);
          clip-path: polygon(
            100% 81%,
            100% 0%,
            0% 0%,
            0% 81%,
            9% 89%,
            16% 92%,
            22% 94%,
            30% 95%,
            38% 95%,
            47% 94%,
            60% 93%,
            73% 91%,
            85% 88%
          );
        }
      `}</style>
    </>
  );
}
