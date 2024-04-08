// CartPage.jsx
import { useState } from "react";
import BadgeDark from "./Elements/BadgeDark";
import cartItemsData from "../data/cartItems.json"; // Import the cartItems array from the JSON file

// ##################### cart state #####################
function CartState() {
  return (
    <ul className="flex gap-4 items-center">
      <li className="font-semibold">Cart</li>
      <hr className="border-t border-neutral w-10" />
      <li>Checkout</li>
      <hr className="border-t border-neutral w-10" />
      <li>Payment</li>
    </ul>
  );
}

// ##########################################

export default function CartPage() {
  const date = new Date();
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = date.toLocaleDateString(undefined, options);
  //   console.log(formattedDate);

  // Initialize state with cartItemsData
  const [cartItems, setCartItems] = useState(cartItemsData);

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
    if (itemQuantity[index] === 1) return false;
    const updatedQuantities = [...itemQuantity];
    updatedQuantities[index] -= 1;
    setItemQuantities(updatedQuantities);
    console.log("Decrease item quantity");
  };

  // ##################### remove item from cart #####################
  const handleRemoveItem = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    const updatedQuantities = [...itemQuantity];
    updatedQuantities.splice(index, 1);
    setItemQuantities(updatedQuantities);
    console.log("Item removed");

    setShowAlert(true); // Set showAlert to true to display the alert
    // Set a timeout for alert
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  // ##################### removal alert #####################
  const [showAlert, setShowAlert] = useState(false);
  function AlertDiv() {
    return (
      <div
        role="alert"
        className={`alert fixed bottom-4 left-4 z-50 flex border-0 bg-neutral text-base-100 gap-4 w-fit`}
      >
        <i className="fa-solid fa-circle-exclamation fa-lg"></i>
        <span>Item Removed</span>
      </div>
    );
  }

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
  const listItems =
    cartItems.length > 0 ? (
      cartItems.map((item, index) => (
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
            <b>{item.text}</b>
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
            <b>${(item.price * itemQuantity[index]).toFixed(2)}</b>
            <button onClick={() => handleRemoveItem(index)}>
              <i className="fa-solid fa-xmark text-error fa-lg max-lg:pb-3"></i>
            </button>
          </span>
        </li>
      ))
    ) : (
      <span className="text-gray-500">No Items Added 😔 </span>
    );

  const alertDiv = showAlert && <AlertDiv key="alert" />;

  // ##################### cart page main function  #####################
  return (
    <section className="CartPage flex flex-col gap-8">
      <span className="w-full flex max-md:flex-col items-left gap-3 justify-between">
        <h2 className="text-4xl font-[tanker]">Shopping Cart</h2>
        <CartState />
      </span>
      <div className="flex gap-4 max-lg:flex-col">
        <ul className="flex-1 flex flex-col gap-6">
          {alertDiv} {listItems}
        </ul>
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
              <b>{`$${total > 0 ? total.toFixed(2) : "0.00"}`} </b>
            </span>
          </span>
          <button className="mt-2">
            <BadgeDark icon="Proceed to Checkout" extra="w-full" />
          </button>
          <hr className="border-t border-neutral" />
          <span>
            Estimated Delivery by <b>{formattedDate} </b>
          </span>
        </span>
      </div>
    </section>
  );
}
