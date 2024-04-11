import Collection from "./Collection";

const data = {
  crumb1: "Accessories",
  crumb2: "Wallets",
  title: "Wallet Collection",
};

export default function Wallet() {
  return (
    <Collection
      crumb1={data.crumb1}
      crumb2={data.crumb2}
      title={data.title}
      tag1="Wallets"
    />
  );
}
