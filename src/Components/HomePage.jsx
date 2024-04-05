import BadgeDark from "./Elements/BadgeDark";
import BadgeLight from "./Elements/BadgeLight";

export default function HomePage() {
  return (
    <section className="HomePage">
      <div className="home-main flex h-screen">
        <div className="flex-1 flex p-3 rounded-box bg-[url('https://outfitters.com.pk/cdn/shop/files/09_DV_1920x900_M_4f2eb223-10ce-4952-808f-96a101d9598d.jpg?v=1712205914')] bg-cover bg-no-repeat bg-center"></div>
      </div>
      <BestSellers />
      <Collection />
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
              src="https://www.stadiumgoods.com/BWStaticContent/54000/7967ea43-1c0c-4ec8-b80b-141153e8a8b9_200406-555088-500-16.jpg"
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
              src="https://www.stadiumgoods.com/BWStaticContent/54000/7967ea43-1c0c-4ec8-b80b-141153e8a8b9_200406-555088-500-16.jpg"
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
              src="https://www.stadiumgoods.com/BWStaticContent/54000/7967ea43-1c0c-4ec8-b80b-141153e8a8b9_200406-555088-500-16.jpg"
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

function Collection() {
  return (
    <div className="collection flex flex-col justify-center items-center">
      <h2 className="font-[tanker] py-20 text-4xl">Latest Collection</h2>
      <div
        className="hero rounded-box max-w-3xl min-h-[40rem]"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/18131912/pexels-photo-18131912/free-photo-of-young-men-in-trendy-outfits-standing-in-a-modern-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        }}
      >
        <div className="hero-overlay bg-opacity-40 p-0 m-0 rounded-box"></div>
        <div className="hero-content text-center items-end h-full p-4 pb-14 text-base-200">
          <div className="max-w-lg flex flex-col gap-6">
            <h2 className="text-5xl md:text-6xl font-[tanker]">
              Unleash Your Unique Style With Our{" "}
              <a className="hover:pointer text-neutral-content underline">
                Street Wear Collection
              </a>
            </h2>
            {/* <button className="justify-center">
              <BadgeLight icon="Latest Collection" extra="h-12" />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
