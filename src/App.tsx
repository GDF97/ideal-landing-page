import About from "./components/About";
import Brands from "./components/Brands";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Location from "./components/Location";
import PageLoader from "./components/PageLoader";
import Stats from "./components/Stats";

function App() {
  return (
    <main className="relative w-full min-h-screen flex flex-col  bg-ideal-white font-inter">
      <PageLoader />
      <Header />
      <Hero />
      <Stats />
      <About />
      <Brands />
      <Category />
      <Location />
      <Footer />
      <div className="p-4 w-full text-center  bg-ideal-black text-white">
        <h1>
          Desenvolvido com ❤️ por{" "}
          <a
            href="https://gdf97-portfolio.vercel.app/"
            target="_blank"
            className="font-bold underline text-ideal-yellow"
          >
            Pedro Henrique Silva
          </a>
        </h1>
      </div>
    </main>
  );
}

export default App;
