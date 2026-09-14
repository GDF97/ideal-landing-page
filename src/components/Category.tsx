type CategoryType = {
  name: string;
  logo: string;
};

const categories: Array<CategoryType> = [
  { name: "Estrutura", logo: "" },
  { name: "Eletrica", logo: "" },
  { name: "Acabamento", logo: "" },
  { name: "Piscina", logo: "" },
  { name: "Tinta", logo: "" },
  { name: "Ferramentas", logo: "" },
  { name: "EPIs", logo: "" },
  { name: "Alvenaria", logo: "" },
];

function CategoryItem({ name, logo }: CategoryType) {
  return (
    <div className="w-50 flex flex-col items-center gap-2.5">
      <img
        src={logo}
        alt={name}
        className="w-25 h-25 object-contain bg-ideal-yellow"
      />
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
