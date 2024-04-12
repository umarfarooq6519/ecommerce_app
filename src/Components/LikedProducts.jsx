import BreadCrumbs from "./Elements/Breadcrumbs";
import ProductCard from "./Elements/ProductCard";
import ProductsJson from "../data/Products.json";
import { Filter } from "./Collection";

export default function LikedProducts() {
  return (
    <section className="flex flex-col gap-5">
      <span className="px-5">
        <BreadCrumbs text1={"User"} text2="Liked" />
      </span>
      <span className="w-full px-5 pb-5 flex max-md:flex-col items-left gap-3 justify-between">
        <h2 className="text-4xl font-[tanker]">{"Liked Products"}</h2>
        <Filter />
      </span>
      {/* products */}
      <ul className="flex flex-wrap gap-4 lg:gap-8 justify-around w-full">
        {ProductsJson.filter((product) => product.liked).map(
          (product, index) => (
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
          )
        )}
      </ul>
    </section>
  );
}
