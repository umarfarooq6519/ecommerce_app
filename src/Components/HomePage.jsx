import BadgeDark from "./Elements/BadgeDark";

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
        <div className="card w-96 h-[32rem] bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Shoes"
              className="object-cover object-center"
            />
          </figure>
          <div className="card-body gap-5">
            <h2 className="card-title font-[tanker] text-2xl">Casual Shirts</h2>
            <p>
              Looking for your everyday fits? Check our casual wear collection
            </p>
            <button className="card-actions justify-end">
              <BadgeDark icon="Buy Now" extra="px-4" />
            </button>
          </div>
        </div>
        <div className="card w-96 h-[32rem] bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://images.pexels.com/photos/9594089/pexels-photo-9594089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Shoes"
              className="object-cover object-center"
            />
          </figure>
          <div className="card-body gap-5">
            <h2 className="card-title font-[tanker] text-2xl">Sweat Shirts</h2>
            <p>
              Our sweatshirt collection, where comfort meets style in perfect
              harmony
            </p>
            <button className="card-actions justify-end">
              <BadgeDark icon="Buy Now" extra="px-4" />
            </button>
          </div>
        </div>
        <div className="card w-96 h-[32rem] bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://images.pexels.com/photos/6211655/pexels-photo-6211655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Shoes"
              className="object-cover object-center"
            />
          </figure>
          <div className="card-body gap-5">
            <h2 className="card-title font-[tanker] text-2xl">
              Winter Collection
            </h2>
            <p>
              Our Winter Collection: a symphony of warmth and style to accompany
              you.
            </p>
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
