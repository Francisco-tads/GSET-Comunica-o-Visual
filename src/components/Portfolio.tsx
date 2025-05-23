import React from 'react';
import { PortfolioItemProps } from '../types';

const portfolioData: PortfolioItemProps[] = [
  {
    id: 'portfolio-1',
    title: 'Stand Corporativo',
    category: 'Letra caixa com iluminação de Led',
    imageUrl: '/src/img/adesivos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    whatsappNumber: '5511991298838'
  },
  {
    id: 'portfolio-2',
    title: 'Adesivo Decorativo',
    category: 'Pix em acrílico',
    imageUrl: '/src/img/pix.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    whatsappNumber: '5511991298838'
  },
  {
    id: 'portfolio-3',
    title: 'Sinalização Corporativa',
    category: 'Comunicação Visual',
    imageUrl: '/src/img/adesivo-interno.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    whatsappNumber: '5511991298838'
  },
  {
    id: 'portfolio-4',
    title: 'Stand de Feira',
    category: 'Feiras e Stands',
    imageUrl: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    whatsappNumber: '5511991298838'
  },
  {
    id: 'portfolio-5',
    title: 'Adesivo Comercial',
    category: 'Adesivos de Parede',
    imageUrl: '/src/img/ad-parede.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    whatsappNumber: '5511991298838'
  },
  {
    id: 'portfolio-6',
    title: 'Personalização externa',
    category: 'Comunicação Visual',
    imageUrl: '/src/img/adesivos-externo.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    whatsappNumber: '5511991298838'
  }
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = React.useState('all');
  
  const filteredItems = filter === 'all' 
    ? portfolioData 
    : portfolioData.filter(item => item.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="clientes" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nosso Portfólio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos nossos trabalhos realizados para clientes e parceiros em todo o Brasil.
            Clique nas imagens para saber mais via WhatsApp.
          </p>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-6"></div>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {['all', 'feiras', 'adesivos', 'visual'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === category 
                  ? 'bg-red-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? 'Todos' : 
                category === 'feiras' ? 'Feiras e Stands' : 
                category === 'adesivos' ? 'Adesivos de Parede' : 'Comunicação Visual'}
            </button>
          ))}
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <a
              key={item.id}
              href={`https://wa.me/${item.whatsappNumber}?text=Olá, gostaria de saber mais sobre o projeto: ${item.title}`}
              className="group relative overflow-hidden rounded-lg shadow-lg bg-white transform transition-all duration-300 hover:-translate-y-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm">
                    Saiba mais
                  </span>
                </div>
              </div>
              <div className="p-4">
                <span className="text-sm text-red-600 font-medium">{item.category}</span>
                <h3 className="text-lg font-bold mt-1">{item.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;