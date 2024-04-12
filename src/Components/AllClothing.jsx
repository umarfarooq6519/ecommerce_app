import Collection from "./Collection";

const data = {
  crumb1: "Clothing",
  crumb2: "View All",
  title: "Clothing Collection",
};

export default function AllClothing() {
  return (
    <Collection
      crumb1={data.crumb1}
      crumb2={data.crumb2}
      title={data.title}
      tag1="Winter"
      tag2="Summer"
      tag3="Summer / Winter"
    />
  );
}
