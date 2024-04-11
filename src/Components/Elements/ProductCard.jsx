import BadgeDark from "./BadgeDark";

export default function ProductCard(props) {
  const { img, title, rating, price, tag, liked } = props;
  return (
    <li className="card w-[19rem] h-[26rem] bg-base-100 border border-neutral-content">
      <figure>
        <img src={img} alt="Shoes" className="object-cover object-center" />
      </figure>
      <div className="card-body p-5 gap-5">
        <span className="flex items-center gap-3">
          <h3 className="card-title font-[tanker] text-2xl">{title}</h3>
          {liked ? (
            <i className="fa-solid fa-heart fa-lg mr-1 text-red-500"></i>
          ) : (
            <i className="fa-regular fa-heart fa-lg mr-1 text-red-500"></i>
          )}
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
          <button className="card-actions ">
            <BadgeDark icon="Add to Cart" />
          </button>
        </span>
      </div>
    </li>
  );
}
