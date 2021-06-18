import Image from "next/image";
import userFlow from "public/images/tete-a-tete/user-flow.png";
import solution1 from "public/images/tete-a-tete/solution1.png";
import solution2 from "public/images/tete-a-tete/solution2.png";
import solution3 from "public/images/tete-a-tete/solution3.png";
import solution4 from "public/images/tete-a-tete/solution4.png";
import siteMap from "public/images/tete-a-tete/site-map.png";
let solution = [
  // solution1
  <div>
    <ul className="list-disc list-inside mb-12">
      <li>Get rid of an unnecessary block of text. </li>
      <li>
        Make a button for Covid policy and move contact info to the page where
        it belongs.
      </li>
      <li>
        Funnel user’s attention in a logical way while answering the questions
        our user might have.
      </li>
    </ul>
    <div className="text-center">
      <Image
        alt="User flow"
        src={userFlow}
        quality={100}
        width={787}
        height={80}
        loading={"eager"}
        placeholder="blur"
      />
    </div>

    <div className="text-center mt-12">
      <Image
        alt="Problem solution"
        src={solution1}
        quality={100}
        width={500}
        height={380}
        loading={"eager"}
        placeholder="blur"
      />
    </div>
  </div>,
  //   solution2
  <div>
    <ul className="list-disc list-inside mb-12">
      <li>Get rid of an unnecessary block of text. </li>
      <li>
        Make a button for Covid policy and move contact info to the page where
        it belongs.
      </li>
      <li>
        Funnel user’s attention in a logical way while answering the questions
        our user might have.
      </li>
    </ul>

    <div className=" my-6 flex justify-center md:flex-row flex-col">
      <div className="md:mb-auto mt-auto md:mr-6 mr-auto ml-auto mb-8">
        <Image
          alt="User flow"
          src={siteMap}
          quality={100}
          width={380}
          height={260}
          loading={"eager"}
          placeholder="blur"
        />
      </div>
      <div className="md:ml-6 ml-auto mr-auto">
        <Image
          alt="Problem solution"
          src={solution2}
          quality={100}
          width={380}
          height={290}
          loading={"eager"}
          placeholder="blur"
        />
      </div>
    </div>
  </div>,
  //   solution3
  <div>
    <ul className="list-disc list-inside mb-12">
      <li>
        Chunk the extensive price lists into smaller and visually divided
        tables.{" "}
      </li>
      <li>Use price ranges whenever it is possible.</li>
      <li>Make pictures responsive.</li>
    </ul>
    <div className="text-center">
      <Image
        alt="Problem solution"
        src={solution3}
        quality={100}
        width={500}
        height={380}
        loading={"eager"}
        placeholder="blur"
      />
    </div>
  </div>,
  //   solution4
  <div>
    <ul className="list-disc list-inside mb-12">
      <li>
        Use colored text only for links and headers and make paragraphs black.
      </li>
      <li>
        Put description of a service in a pop-up window and make the size of
        paragraph bigger.
      </li>
    </ul>
    <div className="text-center">
      <Image
        alt="Problem solution"
        src={solution4}
        quality={100}
        width={500}
        height={380}
        loading={"eager"}
        placeholder="blur"
      />
    </div>
  </div>,
];
export default solution;
