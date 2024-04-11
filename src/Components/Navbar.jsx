import { space } from "postcss/lib/list";
import { Link } from "react-router-dom";

const listItems = [
  {
    id: 0,
    text: "Footwear",
    submenu: null,
  },
  {
    id: 1,
    text: "Clothing",
    submenu: {
      sub1: "Summer",
      sub2: "Winter",
    },
  },
  {
    id: 2,
    text: "Accessories",
    submenu: {
      sub1: "Wallets",
      sub2: "Eyewear",
    },
  },
];

const menu = listItems.map((item) => {
  return (
    <li key={item.id}>
      {item.submenu ? (
        <details>
          <summary>{item.text}</summary>
          {/* submenu */}
          <ul className="p-3 bg-base-100">
            <li>
              <Link to={`/${item.submenu.sub1}`}>{item.submenu.sub1}</Link>
            </li>
            <li>
              <Link to={`/${item.submenu.sub2}`}>{item.submenu.sub2}</Link>
            </li>
          </ul>
        </details>
      ) : (
        <Link to="/footwear">{item.text}</Link>
      )}
    </li>
  );
});

export default function NavBar() {
  return (
    <div className="navbar z-50 font-medium py-0 rounded-box">
      <div className="navbar-start">
        {/* mobile menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <i className="fa-solid fa-bars fa-xl"></i>
          </div>

          {/* mobileMenu */}
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content mt-3 z-[1] p-2 bg-base-100 border border-neutral-content rounded-box w-64"
          >
            {menu}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost font-[tanker] text-2xl">
          Ecommerce.
        </Link>
      </div>

      {/* laptop menu */}
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu flex gap-2 text-base menu-horizontal px-1">
          {menu}
        </ul>
      </div>

      <div className="navbar-end">
        <Link to="/cart" className="btn btn-ghost text-lg">
          <i className="fa-solid fa-bag-shopping fa-xl"></i>
        </Link>
      </div>
    </div>
  );
}
