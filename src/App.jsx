import HomePage from "./Components/HomePage";
import NavBar from "./Components/Navbar";

function App() {
  return (
    <section className="p-2 flex flex-col gap-2">
      <NavBar />
      <HomePage />
    </section>
  );
}

export default App;
