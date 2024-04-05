import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import NavBar from "./Components/Navbar";

function App() {
  return (
    <>
      <span className="bg-neutral-content flex justify-center">
        🔥 Winter Collection | Live Now!
      </span>

      <section className="p-2 flex flex-col gap-2">
        <NavBar />
        <HomePage />
      </section>

      <Footer />
    </>
  );
}

export default App;
