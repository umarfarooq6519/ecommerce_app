import Collection from "./Collection";

const data = {
  crumb1: "Clothing",
  title: "Clothing Collection",
};

export default function AllClothing() {
  return (
    <Collection
      crumb1={data.crumb1}
      title={data.title}
      tag1="Winter"
      tag2="Summer"
      tag3="Summer / Winter"
    />
  );
}
