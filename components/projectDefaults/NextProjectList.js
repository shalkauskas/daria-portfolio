import NextProjectItem from "@/components/projectDefaults/NextProjectItem";
const nassans = (
  <NextProjectItem
    title="Nassan’s Place website redesign"
    image="nassans"
    imageStyle="laptop"
    color="#FFFBE6"
    link="/nassans-place"
  />
);
const tete = (
  <NextProjectItem
    title="Tete-A-Tete salon website redesign"
    image="tete-a-tete"
    imageStyle="laptop"
    color="#F7EEFF"
    link="/tete-a-tete"
  />
);
const bloom = (
  <NextProjectItem
    title='B2C application "Bloom"'
    image="bloom"
    color="#FFEEEC"
    link="/bloom"
    phone={true}
  />
);
const seeds = (
  <NextProjectItem
    title="Educational micro-course for Learning Seeds, Inc."
    image="learnseed"
    color="#C2F0FC"
    link="/learning-seeds"
  />
);
const venmo = (
  <NextProjectItem
    title="Donation feature for Venmo app (conceptual)"
    image="venmo"
    color="#BEEBE9"
    link="/venmo"
    phone={true}
  />
);
export { tete, bloom, seeds, venmo, nassans };
