import Collection from "./Collection";

const data = {
  crumb1: "Clothing",
  crumb2: "Summer",
  title: "Summer Collection",
};

export default function Summer() {
  return (
    <Collection
      crumb1={data.crumb1}
      crumb2={data.crumb2}
      title={data.title}
      tag1="Summer"
      tag2="Summer / Winter"
    />
  );
}
