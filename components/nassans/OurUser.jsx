import ProjectSectionHeader from "../projectDefaults/ProjectSectionHeader";
import UserNeeds from "components/nassans/UserNeeds";
import Border from "components/nassans/Border";
import WaveBox from "./WaveBox";
export default function OurUser() {
  return (
    <div>
      <ProjectSectionHeader header="Our users" />
      <p className="mb-10">
        During the contextual interviews I explored how users interact with the
        website, what goals they try to achieve, what they do to complete the
        task and how they think. Besides, the interviews not only helped me to
        define issues with the information architecture but also gave a sense of
        users’ expectations.
      </p>
      <Border>
        <UserNeeds />
      </Border>
      <WaveBox>
        <div>
          <h1 className="text-center text-2xl pt-6 sm:pt-0">Pain points:</h1>
          <ul className="list-disc list-outside">
            <li className="my-6">
              “I don’t use the website a whole lot because usually what I’m
              looking for I can’t find.”
            </li>
            <li className="my-6">
              “When you click on the tabs like Resources or How you can help,
              there is no information there. When you click on How you can help,
              the page is just blank. You can’t see anything.”
            </li>
            <li className="my-6">
              “If that’s a current event that they are having, you would go to
              the website and try to pull it up, and won’t find it there. You
              would just see past events there.”
            </li>
          </ul>
        </div>
      </WaveBox>
    </div>
  );
}
