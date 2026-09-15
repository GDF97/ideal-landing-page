import Shield from "../assets/shield.png";
import Hands from "../assets/hands.png";
import Star from "../assets/star.png";

function Card({
  image,
  title,
  desc,
}: {
  image: any;
  title: String;
  desc: String;
}) {
  return (
    <div className="w-full lg:w-fit flex items-start lg:items-center gap-4">
      <img src={image} alt="img" className="w-15 h-15 lg:w-25 lg:h-25" />
      <div className="flex flex-col gap-2.5">
        <h1 className="lg:text-[20px] font-semibold">{title}</h1>
        <p className="lg:w-50">{desc}</p>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <section className="w-full h-fit px-4 py-8  bg-ideal-black text-white flex flex-col gap-6 items-start justify-center lg:gap-12 lg:h-45 lg:flex-row">
      <Card
        image={Shield}
        title={"Qualidade"}
        desc={"Produtos das melhores marcas do mercado."}
      />
      <div className="w-full h-px lg:w-px lg:h-25 bg-ideal-white opacity-25"></div>
      <Card
        image={Hands}
        title={"Atendimento Especializado"}
        desc={"Profissionais prontos para te ajudar sempre."}
      />
      <div className="w-full h-px lg:w-px lg:h-25 bg-ideal-white opacity-25"></div>

      <Card
        image={Star}
        title={"Condições Especiais"}
        desc={"Facilidade no pagamento e preços competitivos."}
      />
    </section>
  );
}

export default Stats;
