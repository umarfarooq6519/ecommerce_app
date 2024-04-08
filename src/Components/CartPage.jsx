import { useState } from "react";
import BadgeDark from "./Elements/BadgeDark";

// ##################### cart state #####################
function CartState() {
  return (
    <ul className="flex gap-4 items-center">
      <li className="font-semibold">Cart</li>
      <hr className="border-t border-neutral w-12" />
      <li>Checkout</li>
      <hr className="border-t border-neutral w-12" />
      <li>Payment</li>
    </ul>
  );
}

// ##################### cart item list #####################
const cartItems = [
  {
    id: 1,
    text: "Apple Airpods Pro",
    color: "White",
    size: null,
    quantity: 2,
    price: 249.99,
    show: true,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTJV3_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1694014868810",
  },
  {
    id: 2,
    text: "Nike Airforce 1",
    color: "Black",
    size: 42,
    quantity: 1,
    price: 49.99,
    show: true,
    img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5eed4ad4-be65-4e3b-b0b2-40bc4e53b257/air-force-1-07-shoes-NMmm1B.png",
  },
  {
    id: 3,
    text: "Apple Macbook Pro",
    color: "Silver",
    size: '14"',
    quantity: 1,
    price: 899.99,
    show: true,
    img: "https://www.paklap.pk/media/catalog/product/cache/2cc443e44e97595ea39006016c876eaa/a/p/apple-macbook-pro-13-inch-mneh3-m2-chip-rates-in-pakistan.jpg",
  },
];

// ##########################################

export default function CartPage() {
  // ##################### item quantity state #####################
  const [itemQuantity, setItemQuantities] = useState(
    cartItems.map((item) => item.quantity)
  );

  // ##################### increase quantity #####################
  const handleIncreaseQuantity = (index) => {
    const updatedQuantities = [...itemQuantity];
    updatedQuantities[index] += 1;
    setItemQuantities(updatedQuantities);
    console.log("Increase item quantity");
  };

  // ##################### decrease quantity #####################
  const handleDecreaseQuantity = (index) => {
    if (itemQuantity[index] == 1) return false;
    const updatedQuantities = [...itemQuantity];
    updatedQuantities[index] -= 1;
    setItemQuantities(updatedQuantities);
    console.log("Decrease item quantity");
  };

  // ##################### order summary #####################
  let subTotal = 0;
  let discount = 49.99;
  let tax = 5;
  let shipping = null;
  let total = 0;

  cartItems.forEach((item, index) => {
    subTotal += item.price * itemQuantity[index];
  });

  total = subTotal + tax + (shipping || 0) - discount;

  // ##################### display cart items #####################
  const listItems = cartItems.map((item, index) => (
    <li
      key={item.id}
      className="flex flex-col md:flex-row gap-6 justify-between border border-base-300 w-full items-center rounded-box p-6 md:p-3"
    >
      <div className="avatar w-36 md:w-28">
        <div className="rounded-xl h-full w-full">
          <img src={item.img} alt={item.text} />
        </div>
      </div>
      <span className="flex flex-col flex-1">
        <span className="font-semibold">{item.text}</span>
        <span className="text-gray-400 text-sm flex items-center">
          {item.color}
          {item.size && ` / ${item.size}`}
        </span>
      </span>
      <span className="flex-1 flex justify-center items-center gap-3">
        <button onClick={() => handleDecreaseQuantity(index)}>
          <i className="fa-solid fa-circle-minus fa-xl"></i>
        </button>
        {itemQuantity[index]}
        <button onClick={() => handleIncreaseQuantity(index)}>
          <i className="fa-solid fa-circle-plus fa-xl"></i>
        </button>
      </span>
      <span className="flex-1 justify-end items-center gap-7 flex flex-col md:flex-row md:pr-3">
        <span className="font-semibold">
          ${(item.price * itemQuantity[index]).toFixed(2)}
        </span>
        <button>
          <i className="fa-solid fa-xmark text-error fa-lg max-lg:pb-3"></i>
        </button>
      </span>
    </li>
  ));

  // ##################### cart page main function  #####################
  return (
    <section className="CartPage flex flex-col gap-8">
      <span className="w-full flex max-md:flex-col max-md:items-center gap-3 justify-between">
        <h2 className="text-4xl font-[tanker]">Shopping Cart</h2>
        <CartState />
      </span>
      <div className="flex gap-4 max-lg:flex-col">
        <ul className="flex-1 flex flex-col gap-6">{listItems}</ul>
        <span className="p-6 lg:w-4/12 flex flex-col gap-6 justify-center bg-neutral-content rounded-box">
          <h2 className="text-4xl font-[tanker]">Order Summary</h2>
          <span className="flex flex-col gap-3">
            <span className="flex justify-between">
              <p>Sub Total</p>
              <b>{`$${subTotal.toFixed(2)}`} </b>
            </span>
            <span className="flex justify-between">
              <p>Discount</p>
              <b>{`$${discount.toFixed(2)}`}</b>
            </span>
            <span className="flex justify-between">
              <p>Tax (GST)</p>
              <b>{`$${tax.toFixed(2)}`}</b>
            </span>
            <span className="flex justify-between">
              <p>Shipping</p>
              <b>{`${shipping ? "$" + shipping : ""}${
                !shipping ? "Free" : shipping.toFixed(2)
              }`}</b>
            </span>
            <span className="flex justify-between">
              <p>Total</p>
              <b>{`$${total.toFixed(2)}`} </b>
            </span>
          </span>
          <button className="mt-2">
            <BadgeDark icon="Proceed to Checkout" extra="w-full" />
          </button>
          <hr className="border-t border-neutral" />
          <span>
            Estimated Delivery by <b>Pata Nahi</b>
          </span>
        </span>
      </div>
    </section>
  );
}
