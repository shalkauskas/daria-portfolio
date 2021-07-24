import ProjectSectionHeader from "../projectDefaults/ProjectSectionHeader";
import UserNeeds from "components/nassans/UserNeeds";
import Border from "components/nassans/Border";
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

      <div className="pain p-12">
        <h1 className="text-center text-2xl">Pain points:</h1>
        <ul className="list-disc list-inside">
          <li>
            “I don’t use the website a whole lot because usually what I’m
            looking for I can’t find”
          </li>
          <li>
            “When you click on the tabs like Resources or How you can help,
            there is no information there. When you click on How you can help,
            the page is just blank. You can’t see anything.”
          </li>
          <li>
            “If that’s a current event that they are having, you would go to the
            website and try to pull it up, and won’t find it there. You would
            just see past events there.”
          </li>
        </ul>
      </div>
      <style jsx>{`
        .pain {
          background: #f0eae7;
          padding-bottom: 130px;
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
        li {
          margin: 2rem;
        }
      `}</style>
    </div>
  );
}
