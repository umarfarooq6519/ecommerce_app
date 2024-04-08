import { space } from "postcss/lib/list";
import { Link } from "react-router-dom";

const listItems = [
  {
    id: 0,
    text: "Gallery",
    submenu: null,
  },
  {
    id: 1,
    text: "Men Collection",
    submenu: {
      text: "Western",
      text1: "Eastern",
    },
  },
  {
    id: 2,
    text: "Women Collection",
    submenu: {
      text: "Western",
      text1: "Eastern",
    },
  },
];

const mobileMenu = listItems.map((item) => {
  return (
    <span key={item.id}>
      <li>
        <a>{item.text}</a>
        {item.submenu !== null && (
          <ul className="p-2">
            <li>
              <a>{item.submenu.text}</a>
            </li>
            <li>
              <a>{item.submenu.text1}</a>
            </li>
          </ul>
        )}
      </li>
    </span>
  );
});

export default function NavBar() {
  return (
    <div className="navbar font-medium py-0 rounded-box">
      <div className="navbar-start">
        {/* mobile menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <i className="fa-solid fa-bars fa-xl"></i>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content mt-3 z-[1] p-2 bg-neutral-content rounded-box w-64"
          >
            {mobileMenu}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost font-[tanker] text-2xl">
          Ecommerce.
        </Link>
      </div>

      {/* laptop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-base menu-horizontal px-1">
          <li>
            <a>Gallery</a>
          </li>
          <li>
            <details>
              <summary>Men Collection</summary>

              {/* submenu */}
              <ul className="p-2 bg-neutral-content">
                <li>
                  <a>Western</a>
                </li>
                <li>
                  <a>Eastern</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Women Collection</summary>

              {/* submenu */}
              <ul className="p-2 bg-neutral-content">
                <li>
                  <a>Western</a>
                </li>
                <li>
                  <a>Eastern</a>
                </li>
              </ul>
            </details>
          </li>
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
