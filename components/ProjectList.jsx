import ProjectContainer from "./ProjectContainer";

export default function ProjectList(props) {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="mt-32">
      <ProjectContainer
        title="Tete-A-Tete salon website redesign"
        image="images/tete-a-tete.png"
        imageStyle="laptop"
        color="#F7EEFF"
        feature1="Responsive design."
        feature2="Offers more digestible price lists as well as user-oriented
        information."
        link="/tete-a-tete"
      />
      <ProjectContainer
        title='B2C application "Bloom"'
        image="images/bloom.png"
        color="#FFEEEC"
        feature1="Defines the list of plants recommended for your home enviroment"
        feature2="Enables notifications for watering and fertilizing your indoor plants"
        link="/bloom"
      />
      <ProjectContainer
        title="Educational micro-course for Learning Seeds, Inc."
        image="images/learnseed.png"
        imageStyle="laptop"
        color="#C2F0FC"
        feature1="Utilizes various means of delivering information"
        feature2="Depicts the progress of an account holder on the main dashboard"
        link="/learning-seeds"
      />
      <ProjectContainer
        title="Donation feature for Venmo app (conceptual)"
        image="images/venmo.png"
        color="#BEEBE9"
        feature1="The ability to donate a dollar while completing regular Venmo transactions."
        feature2="The donations made by friends and family became visible in the user feed."
        link="/venmo"
      />
      {/* <ProjectContainer
        title="E-commerce for a local grocery store (conceptual)"
        image="images/kiki.png"
        imageStyle="laptop"
        color="#F6EEC7"
        feature1="Up to 6 different ways to find a product on a website alongside the ability to shop without having an account."
      /> */}
      <img
        onClick={scrollTop}
        className="w-20 my-20 h-16 mx-auto cursor-pointer"
        src="images/chevron-double-up.png"
      />
    </div>
  );
}
