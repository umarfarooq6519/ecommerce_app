import ProductCard from "./Elements/ProductCard";
import ProductsJson from "../data/Products.json";

function MenCollectionState() {
  return (
    <ul className="flex divide-x divide-current  gap-4 items-center">
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

function Products() {
  return (
    <ul className="flex flex-wrap gap-4 lg:gap-8 justify-around w-full">
      {ProductsJson.map((product, index) => (
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
  );
}

function BreadCrumbs() {
  return (
    <div className="text-base breadcrumbs">
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Clothing</a>
        </li>
        <li>
          <a>Summer</a>
        </li>
      </ul>
    </div>
  );
}

export default function MenCollection() {
  return (
    <section className="MenCollection flex flex-col gap-5">
      <span className="px-5">
        <BreadCrumbs />
      </span>
      <span className="w-full px-5 pb-5 flex max-md:flex-col items-left gap-3 justify-between">
        <h2 className="text-4xl font-[tanker]">Men Collection</h2>
        <MenCollectionState />
      </span>

      <Products />
    </section>
  );
}
