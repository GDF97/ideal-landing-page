import logo1 from "../assets/ideal-logo-1.png";

function DesktopHeader() {
  return (
    <header className="w-full hidden flex-col font-inter sticky inset-0 z-10 bg-ideal-white lg:flex">
      {/* <div
        className="w-full flex items-center justify-between bg-ideal-yellow p-4"
        id="topHeader"
      >
        <p>Qualidade que constroi confiança</p>
        <div className="flex gap-4">
          <p>Atendimento especializado</p>
          <span>(13) 3418-1502</span>
        </div>
      </div> */}
      <div
        className="w-full flex items-center justify-between border-b border-ideal-black p-4"
        id="mainHeader"
      >
        <div className="flex items-center gap-4" id="logo">
          <img src={logo1} alt="" className="w-24 h-24" />
          <h1 className="font-anton text-7xl">
            IDEAL
            <p className="text-sm">MATERIAIS PARA CONSTRUÇÃO</p>
          </h1>
        </div>
        <div className="flex items-center gap-8" id="navWrapper">
          <nav className="flex items-center gap-4">
            <a href="#home" className=" cursor-pointer font-inter uppercase">
              Home
            </a>
            <a href="#about" className=" cursor-pointer font-inter uppercase">
              Sobre
            </a>
            <a
              href="#products"
              className=" cursor-pointer font-inter uppercase"
            >
              Produtos
            </a>
            <a
              href="#location"
              className=" cursor-pointer font-inter uppercase"
            >
              Localização
            </a>
            <a href="#footer" className=" cursor-pointer font-inter uppercase">
              Contato
            </a>
          </nav>
          <a
            href="https://wa.me/+551334181502?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento"
            target="_blank"
            className="uppercase font-inter bg-ideal-black text-white p-4  cursor-pointer text-center"
          >
            Fale conosco!
          </a>
        </div>
      </div>
    </header>
  );
}

function MobileHeader() {
  return (
    <header className="w-full flex items-center justify-between sticky inset-0 z-10 bg-ideal-white border-b border-ideal-black p-4 lg:hidden">
      <div className="flex items-center gap-4" id="logo">
        <img src={logo1} alt="" className="w-24 h-24" />
        <h1 className="font-anton text-7xl">
          IDEAL
          <p className="text-sm">MATERIAIS PARA CONSTRUÇÃO</p>
        </h1>
      </div>
      <div className="flex items-center gap-8 relative" id="navWrapper">
        <button></button>
        <nav className="flex items-center gap-4">
          <a href="#home" className=" cursor-pointer font-inter uppercase">
            Home
          </a>
          <a href="#about" className=" cursor-pointer font-inter uppercase">
            Sobre
          </a>
          <a href="#products" className=" cursor-pointer font-inter uppercase">
            Produtos
          </a>
          <a href="#location" className=" cursor-pointer font-inter uppercase">
            Localização
          </a>
          <a href="#footer" className=" cursor-pointer font-inter uppercase">
            Contato
          </a>
          <a
            href="https://wa.me/+551334181502?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento"
            target="_blank"
            className="uppercase font-inter bg-ideal-black text-white p-4  cursor-pointer text-center"
          >
            Fale conosco!
          </a>
        </nav>
      </div>
    </header>
  );
}

function Header() {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
    </>
  );
}

export default Header;
