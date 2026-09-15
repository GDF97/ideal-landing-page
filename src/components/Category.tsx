import Estrutura from "../assets/icones_categorias_png/estrutura.png";
import eletrica from "../assets/icones_categorias_png/eletrica.png";
import acabamento from "../assets/icones_categorias_png/acabamento.png";
import piscina from "../assets/icones_categorias_png/piscina.png";
import tinta from "../assets/icones_categorias_png/tinta.png";
import ferramentas from "../assets/icones_categorias_png/ferramentas.png";
import epis from "../assets/icones_categorias_png/epis.png";
import alvenaria from "../assets/icones_categorias_png/alvenaria.png";

type CategoryType = {
  name: string;
  logo: string;
};

const categories: Array<CategoryType> = [
  { name: "Estrutura", logo: Estrutura },
  { name: "Eletrica", logo: eletrica },
  { name: "Acabamento", logo: acabamento },
  { name: "Piscina", logo: piscina },
  { name: "Tinta", logo: tinta },
  { name: "Ferramentas", logo: ferramentas },
  { name: "EPIs", logo: epis },
  { name: "Alvenaria", logo: alvenaria },
];

function CategoryItem({ name, logo }: CategoryType) {
  return (
    <div className="w-50 flex flex-col items-center gap-2.5">
      <img src={logo} alt={name} className="w-25 h-25 object-contain " />
      <p className="text-white uppercase">{name}</p>
    </div>
  );
}

function Category() {
  return (
    <section className="w-full min-h-125 flex flex-col gap-8 p-8 bg-ideal-black">
      <div className="w-fit p-4  bg-ideal-yellow">
        <h1 className="uppercase font-bold">CATEGORIAS</h1>
      </div>
      <h1 className="text-5xl text-white uppercase font-anton flex flex-col">
        Encontre tudo{" "}
        <span>
          o que sua <span className="text-ideal-yellow">obra</span> precisa.
        </span>
      </h1>
      <div className="w-full flex justify-between">
        {[...categories].map((category, index) => (
          <CategoryItem {...category} key={`${category.name}-${index}`} />
        ))}
      </div>
    </section>
  );
}

export default Category;
