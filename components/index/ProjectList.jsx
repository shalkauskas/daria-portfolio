import ProjectContainer from "../projectDefaults/ProjectContainer";

export default function ProjectList() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="mt-32">
      <ProjectContainer
        title="Nassan’s Place website redesign"
        image="nassans"
        imageStyle="laptop"
        color="#FFFBE6"
        feature1="Responsive design."
        feature2="Offers more digestible price lists as well as user-oriented
        information."
        link="/nassans-place"
      />
      <ProjectContainer
        title="Tete-A-Tete salon website redesign"
        image="tete-a-tete"
        imageStyle="laptop"
        color="#F7EEFF"
        feature1="Responsive design."
        feature2="Offers more digestible price lists as well as user-oriented
        information."
        link="/tete-a-tete"
      />
      <ProjectContainer
        title='B2C application "Bloom"'
        image="bloom"
        color="#FFEEEC"
        feature1="Defines the list of plants recommended for your home enviroment"
        feature2="Enables notifications for watering and fertilizing your indoor plants"
        link="/bloom"
        bloom={true}
      />
      <ProjectContainer
        title="Educational micro-course for Learning Seeds, Inc."
        image="learnseed"
        imageStyle="laptop"
        color="#C2F0FC"
        feature1="Utilizes various means of delivering information"
        feature2="Depicts the progress of an account holder on the main dashboard"
        link="/learning-seeds"
      />
      <ProjectContainer
        title="Donation feature for Venmo app (conceptual)"
        image="venmo"
        color="#BEEBE9"
        feature1="The ability to donate a dollar while completing regular Venmo transactions."
        feature2="The donations made by friends and family became visible in the user feed."
        link="/venmo"
      />
      <img
        onClick={scrollTop}
        className="w-20 my-20 h-16 mx-auto cursor-pointer"
        src="images/chevron-double-up.png"
        alt="Scroll up"
      />
    </div>
  );
}
