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
    <div className="flex items-center gap-4">
      <img src={image} alt="img" className="w-25 h-25" />
      <div className="flex flex-col gap-2.5">
        <h1 className="text-[20px] font-semibold">{title}</h1>
        <p className="w-50">{desc}</p>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <section className="w-full h-45 bg-ideal-black text-white flex items-center justify-center gap-12">
      <Card
        image={Shield}
        title={"Qualidade"}
        desc={"Produtos das melhores marcas do mercado."}
      />
      <div className="w-px h-25 bg-ideal-white opacity-25"></div>
      <Card
        image={Hands}
        title={"Atendimento Especializado"}
        desc={"Profissionais prontos para te ajudar sempre."}
      />
      <div className="w-px h-25 bg-ideal-white opacity-25"></div>
      <Card
        image={Star}
        title={"Condições Especiais"}
        desc={"Facilidade no pagamento e preços competitivos."}
      />
    </section>
  );
}

export default Stats;
