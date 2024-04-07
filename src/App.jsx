import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import NavBar from "./Components/Navbar";

function App() {
  return (
    <>
      <span className="bg-neutral text-base-100 flex justify-center">
        🔥 Winter Collection | Live Now!
      </span>

      <section className="p-2 md:px-4 flex flex-col gap-2">
        <NavBar />
        <HomePage />
      </section>

      <Footer />
    </>
  );
}

export default App;
