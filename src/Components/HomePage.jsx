import BadgeDark from "./Elements/BadgeDark";

export default function HomePage() {
  return (
    <section className="HomePage">
      <div className="home-main flex flex-col h-screen gap-2">
        <div className="flex-1 flex p-3 rounded-box bg-[url('https://outfitters.com.pk/cdn/shop/files/09_DV_1920x900_M_4f2eb223-10ce-4952-808f-96a101d9598d.jpg?v=1712205914')] bg-cover bg-no-repeat bg-center"></div>
      </div>
      <BestSellers />
    </section>
  );
}

function BestSellers() {
  return (
    <div className="best-sellers flex flex-col justify-center items-center">
      <h2 className="font-[tanker] py-20 text-4xl">Best Sellers</h2>
      <div className="flex flex-wrap max-xl:gap-10 justify-around w-full">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <button className="card-actions justify-end">
              <BadgeDark icon="Buy Now" extra="px-4" />
            </button>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <button className="card-actions justify-end">
              <BadgeDark icon="Buy Now" extra="px-4" />
            </button>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <button className="card-actions justify-end">
              <BadgeDark icon="Buy Now" extra="px-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
