import { useEffect, useState } from "react";
import BreadCrumbs from "./Elements/Breadcrumbs";
import ProductCard from "./Elements/ProductCard";
import { Filter } from "./Collection";

export default function LikedProducts() {
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    // Retrieve liked products from local storage
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      const parsedProducts = JSON.parse(storedProducts);
      const likedProducts = parsedProducts.filter((product) => product.liked);
      setLikedProducts(likedProducts);
    }
  }, []);

  return (
    <section className="flex flex-col gap-5">
      <span className="px-5">
        <BreadCrumbs text1="Likes" />
      </span>
      <span className="w-full px-5 pb-5 flex max-md:flex-col items-left gap-3 justify-between">
        <h2 className="text-4xl font-[tanker]">Liked Products</h2>
        <Filter />
      </span>

      {/* products */}
      <ul className="flex flex-wrap gap-4 lg:gap-8 justify-around w-full">
        {likedProducts.map((product) => (
          <ProductCard
            key={product.id} // Use a unique identifier instead of index
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
