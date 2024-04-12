import Collection from "./Collection";

const data = {
  crumb1: "Accessories",
  crumb2: "View All",
  title: "Accessories Collection",
};

export default function AllAccessories() {
  return (
    <Collection
      crumb1={data.crumb1}
      crumb2={data.crumb2}
      title={data.title}
      tag1="Wallets"
      tag2="Eyewear"
    />
  );
}
