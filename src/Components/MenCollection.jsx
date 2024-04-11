import ProductCard from "./Elements/ProductCard";

function MenCollectionState() {
  return (
    <ul className="flex gap-4 items-center">
      <li>
        <b>Top Rated</b>
      </li>
      <hr className="border-t border-neutral w-8" />
      <li>Latest</li>
      <hr className="border-t border-neutral w-8" />
      <li>Sneakers</li>
    </ul>
  );
}

export default function MenCollection() {
  return (
    <section className="MenCollection flex flex-col gap-8">
      <span className="w-full px-5 flex max-md:flex-col items-left gap-3 justify-between">
        <h2 className="text-4xl font-[tanker]">Men Collection</h2>
        <MenCollectionState />
      </span>

      <ul className="flex gap-3 flex-wrap max-lg:gap-6 justify-around w-full">
        <ProductCard
          img="https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Casual Shirts"
          rating="4.6"
          price="11.99"
          tag="Summer"
          liked={false}
          body="Looking for everyday fits? Check our casual wear collection"
        />
        <ProductCard
          img="https://images.pexels.com/photos/6211655/pexels-photo-6211655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="Bomber jackets"
          rating="4.6"
          price="11.99"
          tag="Winter"
          liked={false}
          body="A symphony of warmth and style to accompany you"
        />
        <ProductCard
          img="https://images.pexels.com/photos/1566421/pexels-photo-1566421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="Formal Wear"
          rating="4.6"
          price="11.99"
          tag="Formal"
          liked={true}
          body="Formal wear collection: timeless elegance redefined"
        />
        <ProductCard
          img="https://images.pexels.com/photos/9594089/pexels-photo-9594089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="Sweat Shirts"
          rating="4.6"
          price="11.99"
          tag="Winter"
          liked={true}
          body="Where comfort meets style in perfect harmony"
        />
        <ProductCard
          img="https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Casual Shirts"
          rating="4.6"
          price="11.99"
          tag="Summer"
          liked={false}
          body="Looking for everyday fits? Check our casual wear collection"
        />
        <ProductCard
          img="https://images.pexels.com/photos/6211655/pexels-photo-6211655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="Bomber jackets"
          rating="4.6"
          price="11.99"
          tag="Winter"
          liked={true}
          body="A symphony of warmth and style to accompany you"
        />
        <ProductCard
          img="https://images.pexels.com/photos/1566421/pexels-photo-1566421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="Formal Wear"
          rating="4.6"
          price="11.99"
          tag="Formal"
          liked={false}
          body="Formal wear collection: timeless elegance redefined"
        />
      </ul>
    </section>
  );
}
