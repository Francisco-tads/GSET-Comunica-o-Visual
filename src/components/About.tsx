import React from 'react';
import { Award, Clock, Users, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="empresa" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre a <span className="text-red-600">Gset</span> Comunicação Visual
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Especialistas em Comunicação Visual desde 1995</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              A Gset Comunicação Visual Ltda é prestadora de serviços em impressão digital (plotagem) e sinalização,
              atuando no mercado de comunicação visual desde 1995.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Nos especializamos em atender as montadoras de stands fornecendo logotipia impressa, 
              em recorte eletrônico e letras em alto relevo. Com qualidade de última geração, 
              agilidade e um custo benefício acessível, atendemos há mais de 10 anos as montadoras 
              que projetam e montam as feiras e eventos em todo o Brasil.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start">
                <CheckCircle size={20} className="text-red-600 mt-1 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Materiais de alta qualidade</p>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-red-600 mt-1 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Entrega em todo Brasil</p>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-red-600 mt-1 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Atendimento personalizado</p>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-red-600 mt-1 mr-2 flex-shrink-0" />
                <p className="text-gray-700">Qualidade garantida</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={30} className="text-red-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Excelência</h4>
              <p className="text-gray-600">Qualidade de última geração em todos os projetos</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={30} className="text-red-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Experiência</h4>
              <p className="text-gray-600">Mais de 10 anos atendendo montadoras de stands</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={30} className="text-red-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Especialização</h4>
              <p className="text-gray-600">Equipe altamente qualificada e especializada</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={30} className="text-red-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Confiança</h4>
              <p className="text-gray-600">Projetos entregues pontualmente e com excelência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;