import { useState, useEffect } from "react";
import MenProducts from "../data/MenProducts.json";
import BadgeDark from "./Elements/BadgeDark";
import ProductCard from "./Elements/ProductCard";

export default function HomePage() {
  return (
    <section className="HomePage">
      <div className="home-main text-base-100 flex max-xl:flex-col gap-3">
        {/* left image */}
        <div className=" flex flex-1 p-3 justify-left min-h-[40rem] rounded-box bg-[url('https://images.pexels.com/photos/13897455/pexels-photo-13897455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-no-repeat bg-center">
          <span className="w-full py-8 flex text-left justify-end font-[tanker] text-5xl md:text-7xl flex-col max-w-xl">
            Unleash your unique style with our
            <a className="text-orange-400">street wear collection</a>
          </span>
        </div>
        {/* right image */}
        <div className="xl:w-5/12 flex p-3 justify-left min-h-[40rem] rounded-box bg-[url('https://images.pexels.com/photos/18946900/pexels-photo-18946900/free-photo-of-concepts-x-air-max-1-mellow-shoe-on-the-grass.jpeg?auto=compress&cs=tinysrgb&w=900&h=750&dpr=2')] bg-cover bg-no-repeat bg-center">
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
      <div className="flex items-center gap-2 p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-xl">
          <span style={{ "--value": hours }}></span>
        </span>
        hours
      </div>
      <b className="text-xl">:</b>
      <div className="flex items-center gap-2 p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-xl">
          <span style={{ "--value": minutes }}></span>
        </span>
        min
      </div>
      <b className="text-xl">:</b>
      <div className="flex items-center gap-2 p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-xl">
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

      <ul className="flex flex-wrap max-xl:gap-10 justify-around w-full">
        <ProductCard
          img="https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Casual Shirts"
          rating="4.6"
          tag="Summer"
          liked={false}
          price="11.99"
          body="Looking for everyday fits? Check our casual wear"
        />

        <ProductCard
          img="https://images.pexels.com/photos/6211655/pexels-photo-6211655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="Bomber jackets"
          rating="4.6"
          price="11.99"
          liked={true}
          tag="Winter"
          body="A symphony of warmth and style to accompany you"
        />

        <ProductCard
          img="https://images.pexels.com/photos/1566421/pexels-photo-1566421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="Formal Wear"
          rating="4.6"
          price="11.99"
          tag="Formal"
          liked={false}
          body="A symphony of warmth and style to accompany you"
        />

        <ProductCard
          img="https://images.pexels.com/photos/9594089/pexels-photo-9594089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="Sweat Shirts"
          rating="4.6"
          price="11.99"
          liked={true}
          tag="Winter"
          body="Where comfort meets style in perfect harmony"
        />
      </ul>
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
