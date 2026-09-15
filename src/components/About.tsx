import Store from "../assets/store.png";

function About() {
  return (
    <section
      className="w-full flex flex-col lg:flex-row lg:min-h-165 gap-8 border-b-px border-ideal-black"
      id="about"
    >
      <div className="w-full flex flex-col gap-8 px-4 py-8 lg:p-8 lg:flex-row bg-ideal-yellow items-center justify-center">
        <img src={Store} alt="" />
        <div className="flex flex-col gap-8">
          <h1 className="font-anton uppercase text-4xl">Sobre a Ideal</h1>
          <p className="lg:w-130 lg:text-xl leading-loose">
            Há mais de 25 anos, a Ideal Materiais para Construção é referência
            em qualidade, atendimento e confiança. Atendemos desde pequenas
            reformas até grandes obras, sempre com o compromisso de oferecer as
            melhores soluções em materiais de construção
          </p>
        </div>
      </div>
      <div className="p-4 w-fill lg:w-80 flex justify-between lg:flex-col lg:justify-center lg:gap-8">
        <div>
          <h1 className="font-anton text-2xl lg:text-4xl">+25</h1>
          <p className="lg:hidden uppercase text-xs">Anos de experiência</p>
          <p className="hidden lg:block lg:text-2xl uppercase">
            Anos de <p>experiência</p>
          </p>
        </div>
        <div>
          <h1 className="font-anton text-2xl lg:text-4xl">+10K</h1>
          <p className="lg:hidden uppercase text-xs">Clientes atendidos</p>

          <p className="hidden lg:block lg:text-2xl uppercase">
            Clientes <p>atendidos</p>
          </p>
        </div>
        <div>
          <h1 className="font-anton text-2xl lg:text-4xl">+5K</h1>
          <p className="lg:hidden uppercase text-xs">Produtos em estoque</p>
          <p className="hidden lg:block lg:text-2xl uppercase">
            Produtos <p>em estoque</p>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
