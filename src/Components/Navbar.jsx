export default function NavBar() {
  return (
    <div className="navbar rounded-box">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <i className="fa-solid fa-bars fa-xl"></i>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Gallery</a>
            </li>
            <li>
              <a>Men Collection</a>
              <ul className="p-2">
                <li>
                  <a>Western</a>
                </li>
                <li>
                  <a>Eastern</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Women Collection</a>
              <ul className="p-2">
                <li>
                  <a>Western</a>
                </li>
                <li>
                  <a>Eastern</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost font-[tanker] text-2xl">Ecommerce.</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <a>Gallery</a>
          </li>
          <li>
            <details>
              <summary>Men Collection</summary>
              <ul className="p-2 ">
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
              <ul className="p-2">
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
        <a className="btn btn-ghost text-lg">
          <i className="fa-solid fa-bag-shopping fa-xl"></i>
        </a>
      </div>
    </div>
  );
}
