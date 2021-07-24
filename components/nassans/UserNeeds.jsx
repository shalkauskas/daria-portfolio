import SubHeader from "./SubHeader";
import User from "./User";
import { parent, donor, sponsor, volunteer } from "./userContent";
export default function UserNeeds() {
  return (
    <div className="sm:p-6 mt-6">
      <h1 className="text-center text-2xl">User needs:</h1>
      <div className="flex flex-wrap flex-col sm:flex-row">
        {/* parent */}
        <User
          title="Parent"
          image="images/nassans/parent.svg"
          content={parent}
        />
        {/* donor */}
        <User title="Donor" image="images/nassans/donor.svg" content={donor} />
        {/* sponsor */}
        <User
          title="Sponsor"
          image="images/nassans/sponsor.svg"
          content={sponsor}
        />
        {/* volunteer */}
        <User
          title="Volunteer"
          image="images/nassans/volunteer.svg"
          content={volunteer}
        />
      </div>
    </div>
  );
}
