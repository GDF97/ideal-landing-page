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
    </main>
  );
}

export default App;
