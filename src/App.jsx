import { Outlet } from "react-router-dom";

import Footer from "./Components/Footer";
import NavBar from "./Components/Navbar";

function App() {
  return (
    <>
      <section className="App min-h-screen p-2 md:px-4 text-[17px] flex flex-col gap-2">
        <NavBar />
        <div id="detail">
          <Outlet />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
