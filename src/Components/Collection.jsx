import BreadCrumbs from "./Elements/Breadcrumbs";
import ProductCard from "./Elements/ProductCard";
import ProductsJson from "../data/Products.json";

function Filter() {
  return (
    <ul className="flex divide-x divide-current gap-4 items-center">
      <li>
        <b>Rating</b>
      </li>
      {/* <hr className="border-t border-neutral w-8" /> */}
      <li className="pl-5">Latest</li>
      {/* <hr className="border-t border-neutral w-8" /> */}
      <li className="pl-5">Price</li>
    </ul>
  );
}

export default function Collection({ crumb1, crumb2, title, tag1, tag2 }) {
  return (
    <section className="flex flex-col gap-5">
      <span className="px-5">
        <BreadCrumbs text1={crumb1} text2={crumb2} />
      </span>
      <span className="w-full px-5 pb-5 flex max-md:flex-col items-left gap-3 justify-between">
        <h2 className="text-4xl font-[tanker]">{title}</h2>
        <Filter />
      </span>

      {/* products */}
      <ul className="flex flex-wrap gap-4 lg:gap-8 justify-around w-full">
        {ProductsJson.filter(
          (product) => product.tag === tag1 || product.tag === tag2
        ).map((product, index) => (
          <ProductCard
            key={index}
            img={product.img}
            title={product.title}
            rating={product.rating}
            price={product.price}
            liked={product.liked}
            tag={product.tag}
            body={product.body}
          />
        ))}
      </ul>
    </section>
  );
}
