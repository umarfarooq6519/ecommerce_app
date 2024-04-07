import BadgeDark from "./Elements/BadgeDark";

export default function HomePage() {
  return (
    <section className="HomePage">
      <div className="home-main text-base-100 flex max-xl:flex-col gap-3">
        <div className=" flex flex-1 p-3 justify-left min-h-[40rem] rounded-box bg-[url('https://img.freepik.com/free-photo/black-man-outdoor-apparel-shoot-by-water_53876-96618.jpg?w=1080&t=st=1712505871~exp=1712506471~hmac=79691873bfcd9c4ec8b773c19f4c437534d9bb3648b63c9540bf7c6e46f91fcb')] bg-cover bg-no-repeat bg-center">
          <span className="w-full py-8 flex text-left justify-end font-[tanker] text-5xl md:text-7xl flex-col max-w-xl">
            Unleash your unique style with our
            <a className="text-orange-400">street wear collection</a>
          </span>
        </div>
        <div className="xl:w-5/12 flex p-3 justify-left min-h-[40rem] rounded-box bg-[url('https://images.pexels.com/photos/18946900/pexels-photo-18946900/free-photo-of-concepts-x-air-max-1-mellow-shoe-on-the-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1080')] bg-cover bg-no-repeat bg-center">
          <span className="w-full py-8 flex text-left justify-end font-[tanker] text-5xl md:text-7xl flex-col max-w-xl">
            <a className="text-lime-300">sneaker collection</a>where comfort
            meets fashion
          </span>
        </div>
      </div>

      <BestSellers />
      <AboutUs />
    </section>
  );
}

function BestSellers() {
  return (
    <div className="best-sellers flex flex-col justify-center items-center">
      <h2 className="font-[tanker] py-20 text-4xl">Best Sellers</h2>
      <div className="flex flex-wrap max-xl:gap-10 justify-around w-full">
        <div className="card w-96 h-[32rem] bg-base-100 border border-neutral-content">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Shoes"
              className="object-cover object-center"
            />
          </figure>
          <div className="card-body gap-5">
            <h3 className="card-title font-[tanker] text-2xl">Casual Shirts</h3>
            <p>Looking for everyday fits? Check our casual wear collection</p>
            <button className="card-actions justify-end">
              <BadgeDark icon="Buy Now" extra="px-4" />
            </button>
          </div>
        </div>
        <div className="card w-96 h-[32rem] bg-base-100 border border-neutral-content">
          <figure>
            <img
              src="https://images.pexels.com/photos/9594089/pexels-photo-9594089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Shoes"
              className="object-cover object-center"
            />
          </figure>
          <div className="card-body gap-5">
            <h3 className="card-title font-[tanker] text-2xl">Sweat Shirts</h3>
            <p>Where comfort meets style in perfect harmony</p>
            <button className="card-actions justify-end">
              <BadgeDark icon="Buy Now" extra="px-4" />
            </button>
          </div>
        </div>
        <div className="card w-96 h-[32rem] bg-base-100 border border-neutral-content">
          <figure>
            <img
              src="https://images.pexels.com/photos/6211655/pexels-photo-6211655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Shoes"
              className="object-cover object-center"
            />
          </figure>
          <div className="card-body gap-5">
            <h3 className="card-title font-[tanker] text-2xl">
              Bomber Jackets
            </h3>
            <p>A symphony of warmth and style to accompany you</p>
            <button className="card-actions justify-end">
              <BadgeDark icon="Buy Now" extra="px-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <section className="collection flex flex-col justify-center items-center">
      <h2 className="font-[tanker] py-20 text-4xl">More about us</h2>

      <div className="flex max-md:flex-col w-full max-w-6xl gap-10 items-center ">
        <div className="flex-1 w-full flex min-h-[35rem] p-3 justify-left rounded-box bg-[url('https://images.pexels.com/photos/5865202/pexels-photo-5865202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1080')] bg-cover bg-no-repeat bg-center"></div>
        <div className="max-xl:flex-1 xl:w-5/12 flex flex-col gap-8 items-left">
          <p className="flex flex-col leading-relaxed gap-6">
            <span className="text-3xl font-[tanker]">
              Welcome to our urban oasis, where streetwear meets cutting-edge
              fashion.
              <br />
            </span>
            <span className="text-justify">
              <span className="font-semibold">Born from the streets </span>
              and inspired by the pulse of urban culture, we strive to provide
              more than just clothing – we offer a lifestyle. Our journey began
              with a vision to redefine streetwear, blending bold designs with
              premium quality to empower individuals to express their unique
              identity.
              <br />
              <br />
              <span className="font-semibold">Join us </span> in celebrating the
              spirit of individuality and the power of urban fashion as we
              continue to push boundaries, break stereotypes, and set trends.
            </span>
          </p>
          <span className="flex flex-col gap-1">
            <label htmlFor="newsletter" className="font-[tanker] text-2xl">
              Newsletter
            </label>
            <span className="flex gap-2 max-w-md">
              <input
                type="text"
                className="w-full border border-neutral bg-transparent rounded-box min-h-10 px-2"
              />
              <button type="button">
                <BadgeDark icon="Subscribe" extra="px-4" />
              </button>
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
