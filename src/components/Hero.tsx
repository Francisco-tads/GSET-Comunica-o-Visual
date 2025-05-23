import React from 'react';
import { ArrowRight } from 'lucide-react';
import Carousel from './Carousel';

const Hero: React.FC = () => {
  const carouselImages = [
    'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ];

  return (
    <section id="home" className="relative min-h-[100vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        <Carousel images={carouselImages} />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl mx-auto md:mx-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Soluções em <span className="text-red-600">Comunicação Visual</span> para o seu negócio
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 md:mb-8">
            Especialistas em sinalização para feiras, eventos e stands, oferecendo soluções completas em comunicação visual há mais de 10 anos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#produtos" 
              className="w-full sm:w-auto text-center bg-red-600 hover:bg-red-700 text-white py-3 px-6 md:px-8 rounded-md font-medium transition-all duration-300 inline-flex items-center justify-center"
            >
              Nossos Serviços
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a 
              href="https://wa.me/5511991298838" 
              className="w-full sm:w-auto text-center border-2 border-white hover:border-red-600 hover:bg-red-600/10 text-white py-3 px-6 md:px-8 rounded-md font-medium transition-all duration-300"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:block">
        <div className="flex flex-col items-center">
          <p className="text-white text-sm mb-2 opacity-80">Descobrir mais</p>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;