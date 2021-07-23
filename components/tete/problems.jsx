import Image from "next/image";
import analysis1 from "/public/images/tete-a-tete/analysis1.png";
import analysis2 from "/public/images/tete-a-tete/analysis2.png";
import analysis3 from "/public/images/tete-a-tete/analysis3.png";
import analysis4 from "/public/images/tete-a-tete/analysis4.png";
const problem = [
  // problem1
  <div>
    <ul className="list-disc list-inside mb-12">
      <li>The home page that feels too cluttered.</li>
      <li>
        It is difficult to scan because of a bunch of text and a busy layout.
      </li>
    </ul>
    <div className="text-center">
      <Image
        alt="Problem analysis"
        src={analysis1}
        quality={100}
        width={825}
        height={420}
        loading={"eager"}
        placeholder="blur"
      />
    </div>
  </div>,
  //   problem2
  <div>
    <ul className="list-disc list-inside mb-12">
      <li>
        The navigation bar has way too many menu items (8) while all they want
        is just to get a service.{" "}
      </li>
      <li>
        The wording “raving clients” is not clear enough and does not fully
        explain what this page is about.
      </li>
    </ul>
    <div className="text-center">
      <Image
        alt="Problem analysis"
        src={analysis2}
        quality={100}
        width={825}
        height={270}
        loading={"eager"}
        placeholder="blur"
      />
    </div>
  </div>,
  //   problem3
  <div>
    <ul className="list-disc list-inside mb-12">
      <li>The price list looks visually overwhelming.</li>
      <li>
        Half of the services don’t give you any idea of how much they can cost
        and just marked as “Prices vary”.
      </li>
      <li>Small pictures look funny on a desktop version.</li>
    </ul>
    <div className="text-center">
      <Image
        alt="Problem analysis"
        src={analysis3}
        quality={100}
        width={825}
        height={420}
        loading={"eager"}
        placeholder="blur"
      />
    </div>
  </div>,
  //   problem4
  <div>
    <ul className="list-disc list-inside mb-12">
      <li>Colored text in paragraphs creates poor readability.</li>
      <li>The size of text in paragraphs is too small.</li>
    </ul>
    <div className="text-center">
      <Image
        alt="Problem analysis"
        src={analysis4}
        quality={100}
        width={825}
        height={420}
        loading={"eager"}
        placeholder="blur"
      />
    </div>
  </div>,
];
export default problem;
