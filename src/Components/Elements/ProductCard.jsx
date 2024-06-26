import { useState, useEffect } from "react";
import BadgeDark from "./BadgeDark";

export default function ProductCard(props) {
  const { img, title, rating, price, tag } = props;
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // Retrieve data from local storage
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      const parsedProducts = JSON.parse(storedProducts);
      // Check if the product is liked in local storage
      const likedProduct = parsedProducts.find(
        (product) => product.title === title && product.liked
      );
      if (likedProduct) {
        setLiked(true);
      }
    }
  }, [title]); // Trigger effect when title changes

  const toggleLike = () => {
    setLiked(!liked); // Toggle liked state
    // Update local storage data
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      const parsedProducts = JSON.parse(storedProducts);
      const updatedProducts = parsedProducts.map((product) => {
        if (product.title === title) {
          return { ...product, liked: !liked }; // Toggle liked value for the clicked product
        }
        return product;
      });
      localStorage.setItem("products", JSON.stringify(updatedProducts));
    }
  };

  return (
    <li className="card w-[19rem] h-[26rem] bg-base-100 border border-neutral-content">
      <figure className="min-h-60">
        <img
          src={img}
          alt="Shoes"
          className="w-full h-full object-cover object-center"
        />
      </figure>
      <div className="card-body p-5 gap-5">
        <span className="flex items-center gap-3">
          <h3 className="card-title font-[tanker] text-2xl">{title}</h3>
          <button type="button" onClick={toggleLike}>
            {liked ? (
              <i className="fa-solid fa-heart fa-lg mr-1 text-red-500"></i>
            ) : (
              <i className="fa-regular fa-heart fa-lg mr-1 text-red-500"></i>
            )}
          </button>
        </span>
        <span className="flex justify-between items-center">
          <span className="flex items-center gap-2">
            <i className="fa-solid fa-star  text-orange-400"></i>
            <span className="flex items-center gap-2">
              <b>{rating}</b>
              <span className="text-sm text-gray-400">2k+ Sold</span>
            </span>
          </span>
          <div className="badge badge-outline mr-1">{tag}</div>
        </span>
        <span className="flex justify-between items-center">
          <b className="text-lg">${price}</b>
          <button className="card-actions">
            <BadgeDark icon="Add to Cart" />
          </button>
        </span>
      </div>
    </li>
  );
}
