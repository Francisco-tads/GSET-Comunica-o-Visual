import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  position: string;
  company: string;
  text: string;
  rating: number;
  imageUrl: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: 'Ricardo Santos',
    position: 'Diretor',
    company: 'Expo Stands Brasil',
    text: 'Trabalhamos com a Gset em diversos projetos de feiras e eventos. A qualidade das peças e o cumprimento dos prazos sempre nos impressionam positivamente. Um parceiro confiável para nossa empresa.',
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'Amanda Oliveira',
    position: 'Gerente de Marketing',
    company: 'Decor & Design',
    text: 'Os adesivos de parede personalizados que a Gset desenvolveu para nosso escritório transformaram completamente o ambiente. Qualidade excepcional e excelente atendimento!',
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'Francisco Vieira',
    position: 'Analista de Redes',
    company: 'Arena Premium',
    text: 'Parceiro de longa data em nossos eventos corporativos. A Gset sempre entrega mais do que o esperado, com soluções criativas e acabamento impecável em todas as peças de comunicação visual.',
    rating: 4,
    imageUrl: 'https://raw.githubusercontent.com/Francisco-tads/GSET-Comunica-o-Visual/refs/heads/master/src/img/mega.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            A satisfação de nossos clientes é o nosso maior orgulho. Confira alguns depoimentos
            de parceiros que confiaram em nosso trabalho.
          </p>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 lg:p-8 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-1 lg:hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 lg:w-16 h-12 lg:h-16 rounded-full overflow-hidden mr-3 lg:mr-4 flex-shrink-0">
                  <img 
                    src={testimonial.imageUrl} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-base lg:text-lg font-bold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-xs lg:text-sm">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i}
                    size={16} 
                    className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                  />
                ))}
              </div>
              
              <p className="text-gray-700 italic text-sm lg:text-base">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;