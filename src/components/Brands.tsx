import THREEM from "../assets/3m.png";
import Astra from "../assets/astra.png";
import Alcor from "../assets/atcllor.png";
import Beltools from "../assets/beltools.png";
import Eucatex from "../assets/eucatex.png";
import Hydra from "../assets/Frame-2.png";
import Genco from "../assets/genco.png";
import Ilumi from "../assets/ilumi.png";
import Irwin from "../assets/irwin.png";
import Krona from "../assets/krona.png";
import Tigre from "../assets/tigre.png";
import Tramontina from "../assets/tramontina.png";

type Brand = {
  name: string;
  logo: string;
};

const brandsArr: Array<Brand> = [
  { name: "3M", logo: THREEM },
  { name: "Astra", logo: Astra },
  { name: "Alcor", logo: Alcor },
  { name: "Beltools", logo: Beltools },
  { name: "Eucatex", logo: Eucatex },
  { name: "Hydra", logo: Hydra },
  { name: "Genco", logo: Genco },
  { name: "Ilumi", logo: Ilumi },
  { name: "Irwin", logo: Irwin },
  { name: "Krona", logo: Krona },
  { name: "Tigre", logo: Tigre },
  { name: "Tramontina", logo: Tramontina },
];

function BrandItem({ logo, name }: Brand) {
  return (
    <div className="flex  shrink-0 items-center justify-center">
      <img
        src={logo}
        alt={name}
        className="max-h-10 lg:max-h-25 lg:max-w-60 object-contain"
      />
    </div>
  );
}

function Brands() {
  return (
    <section
      className="w-full flex flex-col px-4 py-8 lg:min-h-125 lg:p-8 gap-8"
      id="products"
    >
      <h1 className="font-anton text-3xl lg:text-5xl uppercase">
        As melhores marcas
        <p>
          do mercado para sua <span className="text-ideal-yellow">obra!</span>
        </p>
      </h1>
      <div className="space-y-4 flex flex-col gap-8">
        {/* LINHA 1 */}
        <div className="relative overflow-hidden">
          <div className="marquee marquee-left flex w-max gap-8">
            {[...brandsArr, ...brandsArr].map((brand, index) => (
              <BrandItem key={`line1-${brand.name}-${index}`} {...brand} />
            ))}
          </div>
        </div>

        {/* LINHA 2 */}
        <div className="relative overflow-hidden">
          <div className="marquee marquee-right flex w-max gap-8">
            {[...brandsArr, ...brandsArr].map((brand, index) => (
              <BrandItem key={`line2-${brand.name}-${index}`} {...brand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
