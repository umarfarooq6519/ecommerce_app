import Collection from "./Collection";

const data = {
  crumb1: "Collections",
  crumb2: "Footwear",
  title: "Footwear Collection",
};

export default function Footwear() {
  return (
    <Collection
      crumb1={data.crumb1}
      crumb2={data.crumb2}
      title={data.title}
      tag1="Sneakers"
    />
  );
}
