import Store from "../assets/store.png";

function About() {
  return (
    <section
      className="w-full flex min-h-165 gap-8 border-b-px border-ideal-black"
      id="about"
    >
      <div className="w-full flex gap-8 p-8 bg-ideal-yellow items-center justify-center">
        <img src={Store} alt="" />
        <div className="flex flex-col gap-8">
          <h1 className="font-anton uppercase text-4xl">Sobre a Ideal</h1>
          <p className="w-130 text-xl leading-loose">
            Há mais de 25 anos, a Ideal Materiais para Construção é referência
            em qualidade, atendimento e confiança. Atendemos desde pequenas
            reformas até grandes obras, sempre com o compromisso de oferecer as
            melhores soluções em materiais de construção
          </p>
        </div>
      </div>
      <div className="w-80 flex flex-col justify-center gap-8">
        <div>
          <h1 className="font-anton text-4xl">+25</h1>
          <p className="text-2xl uppercase">
            Anos de <p>experiência</p>
          </p>
        </div>
        <div>
          <h1 className="font-anton text-4xl">+10K</h1>
          <p className="text-2xl uppercase">
            Clientes <p>atendidos</p>
          </p>
        </div>
        <div>
          <h1 className="font-anton text-4xl">+5K</h1>
          <p className="text-2xl uppercase">
            Produtos <p>em estoque</p>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
