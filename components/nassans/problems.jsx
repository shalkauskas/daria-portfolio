import problem11 from "/public/images/nassans/problem1-1.png";
import problem12 from "/public/images/nassans/problem1-2.png";
import problem21 from "/public/images/nassans/problem2-1.png";
import problem22 from "/public/images/nassans/problem2-2.png";
import problem31 from "/public/images/nassans/problem3-1.png";
import problem32 from "/public/images/nassans/problem3-2.png";
import problem41 from "/public/images/nassans/problem4-1.png";
import problem42 from "/public/images/nassans/problem4-2.png";
import WebsiteAnalysisPics from "../projectDefaults/WebsiteAnalysisPics";
const titles = [
  "1. Colors, fonts and contrast",
  "2. The header",
  "3. Media formats",
  "4. Hyperlinks",
];
const problem = [
  // problem1
  <div>
    <ul className="list-disc list-inside mb-3">
      <li>
        A solid bright background color makes it harder to read the dark text
        because of the lack of contrast.
      </li>
      <li>
        The font that is used (“Patrick Hand”) is a hand-written font.
        Handwritten fonts are intended to be used for headers and short
        sentences. Using this type of fonts for larger texts creates a poor
        readability of content.
      </li>
      <li>
        The CTA button “donate” is small and has the same color as a background.
      </li>
    </ul>
    <WebsiteAnalysisPics pics={[problem11, problem12]} />
  </div>,
  //   problem2
  <div>
    <ul className="list-disc list-inside mb-3">
      <li>
        The header takes up too much space on the desktop screen and 100% of the
        space on the mobile screen.
      </li>
      <li>
        Having the human’s picture in the header also feels confusing because
        pictures in headers tend to be used as profile pictures for accounts.
      </li>
    </ul>
    <WebsiteAnalysisPics pics={[problem21, problem22]} height={"350px"} />
  </div>,
  //   problem3
  <div>
    <ul className="list-disc list-inside mb-3">
      <li>
        Media resources are piled up on a single page in different formats and
        ways of access that confuse users about what is going to happen after
        clicking and what they are going to see.
      </li>
      <li>Linear layout makes “In the media” page too long.</li>
    </ul>
    <WebsiteAnalysisPics pics={[problem31, problem32]} height={"500px"} />
  </div>,
  //   problem4
  <div>
    <ul className="list-disc list-inside mb-6">
      <b>Newsltetter:</b>
      <li>
        Links to the news articles do not look like links. There is no
        signifier. There’s no hint that logo pictures located next to titles are
        clickable either.
      </li>
    </ul>
    <ul className="list-disc list-inside mb-6">
      <b>Resources:</b>
      <li>The list of resources is not scannable.</li>
      <li>
        It is not clear what kind of information user should expect after
        clicking on the resource links.
      </li>
      <li>
        The color of the font for the resource links is the same as the one used
        for the body text.{" "}
      </li>
    </ul>
    <WebsiteAnalysisPics
      pics={[problem41, problem42]}
      title={["Newsltetter", "Resources"]}
      height={"500px"}
    />
  </div>,
];
export { problem, titles };
