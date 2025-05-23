import React from 'react';
import { ServiceProps } from '../types';
import { Printer, Layout, StickyNote } from 'lucide-react';

const servicesData: ServiceProps[] = [
  {
    id: 'feiras-stands',
    title: 'Feiras e Stands',
    description: 'A Gset Comunicação Visual se especializou em atender as montadoras de stands fornecendo logotipia impressa, em recorte eletrônico e letras em alto relevo. Com qualidade de última geração, agilidade e um custo benefício acessível, atendendo a mais de 10 anos as montadoras que projetam e montam as feiras e eventos em todo o Brasil.',
    imageUrl: 'https://raw.githubusercontent.com/Francisco-tads/GSET-Comunica-o-Visual/refs/heads/master/src/img/feiras-stands.jpg'
  },
  {
    id: 'adesivos-parede',
    title: 'Adesivos de Parede',
    description: 'Transforme qualquer ambiente com nossos adesivos de parede personalizados. Ideais para decoração residencial e comercial, nossos adesivos são produzidos com materiais de alta qualidade que garantem durabilidade e fácil aplicação, criando um visual único e impressionante para seu espaço.',
    imageUrl: 'https://raw.githubusercontent.com/Francisco-tads/GSET-Comunica-o-Visual/refs/heads/master/src/img/adesivos-parede.jpg'
  },
  {
    id: 'comunicacao-visual',
    title: 'Comunicação Visual',
    description: 'Oferecemos soluções completas em comunicação visual para diversos tipos de negócios. Desde logotipos impressos, banners, placas, sinalização, até totens e painéis, trabalhamos com a mais alta qualidade e tecnologia para garantir que sua marca seja vista e lembrada da melhor forma possível.',
    imageUrl: 'https://raw.githubusercontent.com/Francisco-tads/GSET-Comunica-o-Visual/refs/heads/master/src/img/Fachada%20em%20acm%20vermelho-%20ilumina%C3%A7%C3%A3o%20de%20led.jpg'
  }
];

const iconMap = {
  'feiras-stands': <Layout size={36} className="text-red-600" />,
  'adesivos-parede': <StickyNote size={36} className="text-red-600" />,
  'comunicacao-visual': <Printer size={36} className="text-red-600" />
};

const Services: React.FC = () => {
  return (
    <section id="produtos" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Produtos e Serviços
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Oferecemos soluções completas em comunicação visual para empresas de todos os portes,
            com foco em feiras, eventos e personalização de ambientes.
          </p>
          <div className="w-16 md:w-20 h-1 bg-red-600 mx-auto mt-4 md:mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg md:text-xl font-bold text-white">{service.title}</h3>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <div className="mb-4">
                  {iconMap[service.id as keyof typeof iconMap]}
                </div>
                <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <a 
                  href={`https://wa.me/5511991298838?text=Olá, gostaria de saber mais sobre ${service.title}`} 
                  className="inline-block w-full md:w-auto text-center bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md font-medium transition-colors"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;