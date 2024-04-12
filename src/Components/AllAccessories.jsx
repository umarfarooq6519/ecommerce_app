import Collection from "./Collection";

const data = {
  crumb1: "Accessories",
  title: "Accessories Collection",
};

export default function AllAccessories() {
  return (
    <Collection
      crumb1={data.crumb1}
      title={data.title}
      tag1="Wallets"
      tag2="Eyewear"
    />
  );
}
