import Collection from "./Collection";

const data = {
  crumb1: "Clothing",
  crumb2: "Winter",
  title: "Winter Collection",
};

export default function Winter() {
  return (
    <Collection
      crumb1={data.crumb1}
      crumb2={data.crumb2}
      title={data.title}
      tag1="Winter"
      tag2="Summer / Winter"
    />
  );
}
