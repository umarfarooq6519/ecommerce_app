import { useState, useEffect } from "react";
import ProductsJson from "../data/Products.json";
import BadgeDark from "./Elements/BadgeDark";
import BadgeLight from "./Elements/BadgeLight";
import ProductCard from "./Elements/ProductCard";

export default function HomePage() {
  const arrowUpRight = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );

  return (
    <section className="HomePage">
      <div className="home-main text-base-100 flex max-xl:flex-col gap-3">
        {/* left image */}
        <div className="flex justify-between flex-1 p-3 justify-left min-h-[40rem] rounded-box bg-[url('https://images.pexels.com/photos/13897455/pexels-photo-13897455.jpeg?auto=compress&cs=tinysrgb&w=900&h=750&dpr=2')] bg-cover bg-no-repeat bg-center">
          <span className="w-fit py-8 flex text-left justify-end font-[tanker] text-5xl md:text-7xl flex-col max-w-xl">
            Unleash your unique style with our
            <a className="text-orange-400 underline underline-offset-4 decoration-4">
              street wear collection
            </a>
          </span>
          <BadgeLight icon={arrowUpRight} extra="font-medium" />
        </div>
        {/* right image */}
        <div className="xl:w-5/12 flex p-3 justify-left min-h-[40rem] rounded-box bg-[url('https://images.pexels.com/photos/18946900/pexels-photo-18946900/free-photo-of-concepts-x-air-max-1-mellow-shoe-on-the-grass.jpeg?auto=compress&cs=tinysrgb&w=900&h=750&dpr=2')] bg-cover bg-no-repeat bg-center">
          <span className="w-full py-8 flex text-left justify-end font-[tanker] text-5xl md:text-7xl flex-col max-w-xl">
            <a className="text-lime-300 underline underline-offset-4 decoration-4">
              sneaker collection
            </a>
            where comfort meets fashion
          </span>
          <BadgeLight icon={arrowUpRight} extra="font-medium" />
        </div>
      </div>

      <BestSellers />
      <AboutUs />
    </section>
  );
}

function CountDown() {
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(41);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          } else {
            clearInterval(timer);
          }
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [hours, minutes, seconds]);

  return (
    <div className="grid items-center grid-flow-col gap-2 text-center auto-cols-max">
      <div className="ml-3 flex items-center gap-2 p-1.5 px-3y bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono ">
          <span style={{ "--value": hours }}></span>
        </span>
        hours
      </div>
      <b className="text-xl">:</b>
      <div className="flex items-center gap-2 p-1.5 px-3 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono ">
          <span style={{ "--value": minutes }}></span>
        </span>
        min
      </div>
      <b className="text-xl">:</b>
      <div className="flex items-center gap-2 p-1.5 px-3 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono ">
          <span style={{ "--value": seconds }}></span>
        </span>
        sec
      </div>
    </div>
  );
}

function BestSellers() {
  return (
    <div className="best-sellers flex flex-col justify-center items-center">
      <span className="py-20 flex flex-col items-center justify-center gap-4">
        <h2 className="font-[tanker] text-4xl">
          <i className="fa-solid fa-bolt fa-sm pr-1"></i> Flash Sale
        </h2>
        <CountDown />
      </span>

      <Products />
    </div>
  );
}

function Products() {
  return (
    <ul className="flex flex-wrap max-xl:gap-10 justify-around w-full">
      {ProductsJson.slice(0, 4).map((product, index) => (
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

function AboutUs() {
  return (
    <section className="collection flex flex-col justify-center items-center">
      <h2 className="font-[tanker] py-20 text-4xl">More about us</h2>

      <div className="flex max-md:flex-col w-full max-w-6xl gap-10 items-center ">
        <div className="flex-1 w-full flex min-h-[35rem] p-3 justify-left rounded-box bg-[url('https://images.pexels.com/photos/5865202/pexels-photo-5865202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1080')] bg-cover bg-no-repeat bg-center"></div>
        <div className="max-xl:flex-1 xl:w-5/12 flex flex-col gap-8 items-left">
          <p className="flex flex-col lg:leading-relaxed gap-6">
            <strong className="text-3xl font-[tanker]">
              Welcome to our urban oasis, where streetwear meets cutting-edge
              fashion.
              <br />
            </strong>
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
                <BadgeDark icon="Subscribe" />
              </button>
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
