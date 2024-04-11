import Collection from "./Collection";

const WinterData = {
  crumb1: "Clothing",
  crumb2: "Winter",
  title: "Winter Collection",
};

export default function Summer() {
  return (
    <Collection
      crumb1={WinterData.crumb1}
      crumb2={WinterData.crumb2}
      title={WinterData.title}
      tag1="Winter"
      tag2="Summer / Winter"
    />
  );
}
