import WebsiteAnalysisPics from "../projectDefaults/WebsiteAnalysisPics";
import solution11 from "public/images/nassans/solution1-1.png";
import solution12 from "public/images/nassans/solution1-2.png";
import solution21 from "public/images/nassans/solution2-1.png";
import solution22 from "public/images/nassans/solution2-2.png";
import solution31 from "public/images/nassans/solution3-1.png";
import solution32 from "public/images/nassans/solution3-2.png";
import solution33 from "public/images/nassans/solution3-3.png";
import solution41 from "public/images/nassans/solution4-1.png";
import solution42 from "public/images/nassans/solution4-2.png";
const solution = [
  // solution1
  <div>
    <ul className="list-disc list-inside mb-4">
      <li>
        Use either white or lighter colors for background in order to make the
        text pop.
      </li>
      <li>Use regular serif or sans-serif fonts for texts.</li>
      <li>
        Change the color of the CTA button to one that would pop up and make a
        larger size of the button.
      </li>
    </ul>
    <WebsiteAnalysisPics pics={[solution11, solution12]} />
  </div>,
  //   solution2
  <div>
    <ul className="list-disc list-inside mb-4">
      <li>Make the logo smaller and put the company’s name next to it.</li>
      <li>
        Remove an introductory text and a human’s picture from the header and
        place it on a home page.
      </li>
    </ul>

    <WebsiteAnalysisPics pics={[solution21, solution22]} height={"350px"} />
  </div>,
  //   solution3
  <div>
    <ul className="list-disc list-inside mb-4">
      <li>
        Separate different types of content, create categories, and put them on
        different pages.
      </li>
      <li>Use a grid layout.</li>
    </ul>
    <WebsiteAnalysisPics pics={[solution32, solution33]} height={"500px"} />
  </div>,
  //   solution4
  <div>
    <ul className="list-disc list-inside mb-4">
      <b>Newsltetter:</b>
      <li>Use animation on hover to show clickable components.</li>
      <li>Use pictures asscociated with news articles.</li>
    </ul>
    <ul className="list-disc list-inside mb-4">
      <b>Resoures:</b>
      <li>
        Visiually divide the links and add logos of organizations they are
        referring to.
      </li>
      <li>
        Use the light blue color to show that links are clickable and make the
        font bold on hover.
      </li>
    </ul>
    <WebsiteAnalysisPics
      pics={[solution41, solution42]}
      title={["Newsltetter", "Resources"]}
      height={"500px"}
    />
  </div>,
];
export default solution;
