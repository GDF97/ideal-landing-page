import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import { Clock } from "lucide-react";
import { Mail } from "lucide-react";

function Footer() {
  const address = encodeURIComponent(
    "R. Benedito Calixto, 31 - Centro, Itariri - SP, 11760-000",
  );

  return (
    <footer
      className="p-8 w-full flex justify-between items-start bg-ideal-black text-white"
      id="footer"
    >
      <div className="flex flex-col gap-4">
        <h1 className="font-anton text-5xl uppercase">
          Ideal
          <p className="text-xs">Materiais para construção</p>
        </h1>
        <p className="text-sm w-70">
          Qualidade confiança e o melhor atendimento para sua obra.
        </p>
        <span></span>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold uppercase">Navegação</h1>
        <span className="flex flex-col gap-2 text-sm">
          <a href="" className="hover:text-ideal-yellow">
            Home
          </a>
          <a href="" className="hover:text-ideal-yellow">
            Sobre nós
          </a>
          <a href="" className="hover:text-ideal-yellow">
            Produtos
          </a>
          <a href="" className="hover:text-ideal-yellow">
            Marcas
          </a>
          <a href="" className="hover:text-ideal-yellow">
            Categorias
          </a>
          <a href="" className="hover:text-ideal-yellow">
            Localização
          </a>
          <a href="" className="hover:text-ideal-yellow">
            Contato
          </a>
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold uppercase">Dúvidas</h1>
        <span className="flex flex-col gap-2 text-sm">
          <a href="" className="hover:text-ideal-yellow">
            Pólitica de Privacidade
          </a>
          <a href="" className="hover:text-ideal-yellow">
            Trocas e devoluções
          </a>
          <a href="" className="hover:text-ideal-yellow">
            Formas de Pagamento
          </a>
          <a href="" className="hover:text-ideal-yellow">
            Dúvidas Frequentes
          </a>
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold uppercase">Contato</h1>
        <div className="flex flex-col gap-2 text-sm">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${address}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <MapPin color="#f1b703" size={16} />
            <p>Rua Benedito Calixto, 31 - Centro, Itariri - SP</p>
          </a>
          <a
            href="https://wa.me/+551334181502?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento"
            target="_blank"
            className="flex items-center gap-2"
          >
            <Phone color="#f1b703" size={16} />
            <p>(13) 3418-1502</p>
          </a>
          <span className="flex items-center gap-2">
            <Mail color="#f1b703" size={16} />
            <p>ideal.ejs@hotmail.com</p>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
