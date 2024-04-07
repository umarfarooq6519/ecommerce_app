import BadgeDark from "./BadgeDark";

export default function ProductCard(props) {
  const { img, title, body } = props;
  return (
    <li className="card w-96 h-[32rem] bg-base-100 border border-neutral-content">
      <figure>
        <img src={img} alt="Shoes" className="object-cover object-center" />
      </figure>
      <div className="card-body gap-3">
        <h3 className="card-title font-[tanker] text-2xl">{title}</h3>
        <p>{body}</p>
        <button className="card-actions justify-end">
          <BadgeDark icon="Buy Now" />
        </button>
      </div>
    </li>
  );
}
