
import { 
  Linkedin, 
  Instagram, 
  Facebook, 
  ChevronRight 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              PF<span className="text-brand-blue">Tech</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-xs">
              Soluções tecnológicas inovadoras e personalizadas para impulsionar o crescimento do seu negócio.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gray-800 p-2 rounded-full hover:bg-brand-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-2 rounded-full hover:bg-brand-blue transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-2 rounded-full hover:bg-brand-blue transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {["Home", "Serviços", "Sobre", "Missão & Valores", "Contato"].map((item) => (
                <li key={item}>
                  <a href={`#${item === "Home" ? "" : item.toLowerCase()}`} className="text-gray-400 hover:text-brand-blue flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Serviços</h4>
            <ul className="space-y-3">
              {[
                "Desenvolvimento de Software", 
                "Venda de Equipamentos", 
                "Consultoria em TI", 
                "Suporte Técnico"
              ].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-gray-400 hover:text-brand-blue flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Av. Tecnologia, 1234</li>
              <li>São Paulo - SP</li>
              <li>+55 (11) 1234-5678</li>
              <li>contato@pftechinnovacoes.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} PF Tech Inovações. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
