import React from 'react';
import { ChevronUp, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">
              GSET <span className="text-red-600">Comunicação Visual</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Especialistas em comunicação visual para feiras, eventos e personalização de ambientes.
              Qualidade e experiência há mais de 10 anos.
            </p>
            <button 
              onClick={scrollToTop}
              className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors"
              aria-label="Voltar ao topo"
            >
              <ChevronUp size={20} />
            </button>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {['Home', 'Empresa', 'Produtos', 'Portfólio', 'Contato'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2">
              {[
                'Feiras e Stands', 
                'Adesivos de Parede', 
                'Comunicação Visual', 
                'Impressão Digital', 
                'Letras em Alto Relevo'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#produtos" 
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Av. Paulista, 1000 - Bela Vista, São Paulo - SP</li>
              <li>
                <a href="tel:8998101-7105" className="hover:text-red-500 transition-colors">
                  89 98101-7105
                </a>
              </li>
              <li>
                <a href="https://wa.me/5511991298838" className="hover:text-red-500 transition-colors">
                  11 99129-8838 (WhatsApp)
                </a>
              </li>
              <li>
                <a href="mailto:francisco.contatoportfolio@gmail.com" className="hover:text-red-500 transition-colors">
                  francisco.contatoportfolio@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} GSET Comunicação Visual. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex items-center text-gray-500 text-sm">
            <span>Desenvolvido por </span>
            <a 
              href="#" 
              className="text-red-500 hover:text-red-400 transition-colors ml-1 flex items-center"
            >
              Francisco-tads
              <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;