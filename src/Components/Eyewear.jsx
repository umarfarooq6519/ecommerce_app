import Collection from "./Collection";

const data = {
  crumb1: "Accessories",
  crumb2: "Eyewear",
  title: "Eyewear Collection",
};

export default function Eyewear() {
  return (
    <Collection
      crumb1={data.crumb1}
      crumb2={data.crumb2}
      title={data.title}
      tag1="Eyewear"
      tag2="Sneakers"
    />
  );
}
