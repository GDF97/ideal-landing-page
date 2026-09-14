import HeroImage from "../assets/hero.png";
import Logo2 from "../assets/ideal-logo-2.png";

function Hero() {
  return (
    <section
      className="p-4 w-full flex justify-center items-center gap-8 min-h-screen"
      id="home"
    >
      <article className="flex flex-col gap-8 justify-start">
        <h1 className="text-8xl font-anton">
          TUDO PARA
          <p>CONSTRUIR</p>
          <p className="text-ideal-yellow">SEUS SONHOS.</p>
        </h1>
        <p className="w-120 text-xl">
          Materiais de construção com qualidade e preço justo para sua obra do
          início ao acabamento.
        </p>
        <button className="w-fit py-4 px-6 bg-ideal-yellow text-ideal-black text-lg font-inter uppercase cursor-pointer font-semibold">
          Ver produtos {"->"}
        </button>
      </article>
      <article className="relative">
        <div className="absolute w-32 h-32 bg-ideal-white inset-0"></div>
        <div className="absolute w-32 h-32 bg-ideal-white right-0 bottom-0"></div>
        <div className="absolute bg-ideal-yellow right-0 top-0 py-4 px-6 w-55">
          <img src={Logo2} alt="" />
          <p className="uppercase text-lg font-bold font-inter">
            DO BÁSICO AO <p> ACABAMENTO,</p>A GENTE TEM.
          </p>
        </div>
        <img src={HeroImage} className="w-200 h-150" alt="" />
      </article>
    </section>
  );
}

export default Hero;
