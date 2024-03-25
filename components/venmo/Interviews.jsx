import ProjectSectionHeader from "../projectDefaults/ProjectSectionHeader";
export default function Interviews() {
  return (
    <div
      className="py-10"
      style={{
        backgroundImage: 'url("images/venmo/interview.png")',
        backgroundSize: "cover",
      }}
    >
      <div
        className="sm:w-8/12 w-11/12 sm:px-12 px-2 py-8 mx-auto my-10"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
      >
        <ProjectSectionHeader>User interviews takeaways:</ProjectSectionHeader>
        <ul className="list-disc list-inside mb-12">
          <li>Everyone wants the donation process to be quick and easy.</li>
          <li>
            Users are more likely to donate when they are offered to do so.
          </li>
          <li>
            Venmo is mostly used for small amount transactions, often to split
            the charge among a group of people.
          </li>
          <li>
            When you donate, it is important to know where your money is going.
          </li>
          <li>People enjoy friends and family.</li>
          <li>Anonymity should always be an option.</li>
        </ul>
      </div>
    </div>
  );
}
