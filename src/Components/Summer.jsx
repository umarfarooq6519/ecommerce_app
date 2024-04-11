import Collection from "./Collection";

const SummerData = {
  crumb1: "Clothing",
  crumb2: "Summer",
  title: "Summer Collection",
};

export default function Summer() {
  return (
    <Collection
      crumb1={SummerData.crumb1}
      crumb2={SummerData.crumb2}
      title={SummerData.title}
      tag1="Summer"
      tag2="Summer / Winter"
    />
  );
}
