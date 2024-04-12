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
      sub0: "View All",
      link0: "clothing",
      sub1: "Summer",
      sub2: "Winter",
    },
  },
  {
    id: 2,
    text: "Accessories",
    submenu: {
      sub0: "View All",
      link0: "accessories",
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
          <summary className="hover:rounded-box">{item.text}</summary>
          {/* submenu */}
          <ul className="p-2 bg-base-100">
            <li>
              <Link className="hover:rounded-box" to={`/${item.submenu.link0}`}>
                {item.submenu.sub0}
              </Link>
            </li>
            <li>
              <Link
                className="hover:rounded-box"
                to={`/${item.text}/${item.submenu.sub1}`}
              >
                {item.submenu.sub1}
              </Link>
            </li>
            <li>
              <Link
                className="hover:rounded-box"
                to={`/${item.text}/${item.submenu.sub2}`}
              >
                {item.submenu.sub2}
              </Link>
            </li>
          </ul>
        </details>
      ) : (
        <Link to="/footwear" className="hover:rounded-box">
          {item.text}
        </Link>
      )}
    </li>
  );
});

export default function NavBar() {
  return (
    <div className="navbar z-50 font-medium py-0 px-5 rounded-box">
      <div className="navbar-start">
        {/* mobile menu */}
        <div className="dropdown">
          <button tabIndex={0} role="button" className="lg:hidden mr-3">
            <i className="fa-solid fa-bars fa-xl"></i>
          </button>

          {/* mobileMenu */}
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content mt-3 z-[1] p-2 bg-base-100 border border-neutral-content rounded-box w-64"
          >
            {menu}
          </ul>
        </div>
        <Link to="/" className="font-[tanker] text-2xl">
          Ecommerce.
        </Link>
      </div>

      {/* laptop menu */}
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu flex gap-1 text-base menu-horizontal">{menu}</ul>
      </div>

      <div className="navbar-end items-center">
        <span className="flex gap-2 items-center">
          <Link
            to="/likes"
            className="flex items-center justify-center border border-neutral-content h-10 w-10 rounded-full"
          >
            <i className="fa-regular fa-heart fa-lg mt-0.5"></i>
          </Link>
          <Link
            to="/cart"
            className="flex text-base items-center justify-center bg-neutral text-base-100 h-10 w-10 rounded-full"
          >
            <i className="fa-solid fa-bag-shopping fa-lg"></i>
          </Link>
        </span>
      </div>
    </div>
  );
}
