import Collection from "./Collection";

const data = {
  crumb1: "Footwear",
  title: "Footwear Collection",
};

export default function Footwear() {
  return <Collection crumb1={data.crumb1} title={data.title} tag1="Sneakers" />;
}
