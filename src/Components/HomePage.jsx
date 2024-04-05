import Carousel from "./Elements/Carousel";

export default function HomePage() {
  return (
    <section className="HomePage">
      <div className="home-main flex max-xl:flex-col gap-2">
        <div className="home-main-left h-[40rem] flex-1 carousel rounded-box">
          <Carousel />
        </div>

        <div className="home-main-right h-[40rem] flex-1 flex flex-col gap-2">
          <span className="h-[20em] rounded-box border border-neutral">
            hehe
          </span>
          <span className="h-[20em] rounded-box border border-neutral">
            huihiu
          </span>
        </div>
      </div>
    </section>
  );
}
