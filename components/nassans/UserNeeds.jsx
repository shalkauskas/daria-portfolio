import SubHeader from "./SubHeader";
import User from "./User";
import { parent, donor, sponsor, volunteer } from "./userContent";
export default function UserNeeds() {
  return (
    <div className="p-8 mt-12">
      <SubHeader>User needs:</SubHeader>
      <div className="flex flex-wrap">
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
