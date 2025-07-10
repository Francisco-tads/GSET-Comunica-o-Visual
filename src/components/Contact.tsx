import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open('https://wa.me/5511991298838?text=Olá, gostaria de solicitar um orçamento.', '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-4">
            Entre em Contato
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto px-4">
            Estamos disponíveis para esclarecer dúvidas, fornecer orçamentos e
            ajudar a encontrar a melhor solução para o seu projeto.
          </p>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 p-6 lg:p-8 rounded-lg shadow-lg">
            <h3 className="text-xl lg:text-2xl font-bold mb-6">Envie uma mensagem</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nome completo</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-3 py-2 lg:px-4 lg:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white text-sm lg:text-base"
                  placeholder="Seu nome"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-3 py-2 lg:px-4 lg:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white text-sm lg:text-base"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Telefone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-3 py-2 lg:px-4 lg:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white text-sm lg:text-base"
                  placeholder="(00) 00000-0000"
                />
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-3 py-2 lg:px-4 lg:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white text-sm lg:text-base resize-none"
                  placeholder="Conte-nos sobre seu projeto..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 lg:py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center text-sm lg:text-base"
              >
                Enviar Mensagem
                <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl lg:text-2xl font-bold mb-6">Informações de Contato</h3>
            
            <div className="space-y-6 lg:space-y-8">
              <div className="flex items-start">
                <div className="bg-red-600 p-2 lg:p-3 rounded-lg mr-3 lg:mr-4 flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-base lg:text-lg font-semibold mb-1">Nosso Endereço</h4>
                  <p className="text-gray-300 text-sm lg:text-base">
                    Av. Paulista, 1000 - Bela Vista<br />
                    São Paulo - SP, 01310-100
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-600 p-2 lg:p-3 rounded-lg mr-3 lg:mr-4 flex-shrink-0">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-base lg:text-lg font-semibold mb-1">Telefones</h4>
                  <p className="text-gray-300 mb-1 text-sm lg:text-base">
                    <a href="tel:8998101-7105" className="hover:text-red-400 transition-colors">
                      89 98101-7105
                    </a>
                  </p>
                  <p className="text-gray-300 text-sm lg:text-base">
                    <a target="_blank" href="https://wa.me/5511991298838" className="hover:text-red-400 transition-colors">
                      11 99129-8838 (WhatsApp)
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-600 p-2 lg:p-3 rounded-lg mr-3 lg:mr-4 flex-shrink-0">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-base lg:text-lg font-semibold mb-1">E-mail</h4>
                  <p className="text-gray-300 text-sm lg:text-base break-all">
                    <a href="mailto:francisco.contatoportfolio@gmail.com" className="hover:text-red-400 transition-colors">
                      francisco.contatoportfolio@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-600 p-2 lg:p-3 rounded-lg mr-3 lg:mr-4 flex-shrink-0">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-base lg:text-lg font-semibold mb-1">Horário de Atendimento</h4>
                  <p className="text-gray-300 text-sm lg:text-base">
                    Segunda feira - 8:00 às 18:00<br />
                    Terça a sexta feira - 7:00 às 18:00
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-base lg:text-lg font-semibold mb-4">Nos siga nas redes sociais</h4>
              <div className="flex space-x-4">
                <a 
                 target="_blank" href="https://www.facebook.com/fco.vieira13" 
                  className="bg-gray-700 hover:bg-red-600 transition-colors w-10 h-10 rounded-full flex items-center justify-center"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                  </svg>
                </a>
                <a 
                  target="_blank" href="https://www.instagram.com/francisco.s.vieira7/" 
                  className="bg-gray-700 hover:bg-red-600 transition-colors w-10 h-10 rounded-full flex items-center justify-center"
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="bg-gray-700 hover:bg-red-600 transition-colors w-10 h-10 rounded-full flex items-center justify-center"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.6441 3.15c.1425.015.2825.05.417.103a1.2225 1.2225 0 0 1 .624.516c.0885.142.1395.3.1503.462.001.0155.0026.0315.0026.048v15.423c-.001.1575-.034.3125-.097.454a1.1966 1.1966 0 0 1-.676.627 1.1691 1.1691 0 0 1-.4576.0966H4.339a1.1741 1.1741 0 0 1-.4628-.0966 1.1956 1.1956 0 0 1-.624-.4935 1.222 1.222 0 0 1-.1495-.5875V4.279c.0155-.1665.055-.3285.1162-.4785.086-.195.227-.355.406-.461a1.1855 1.1855 0 0 1 .595-.1695h15.3872ZM8.996 8.744a1.283 1.283 0 0 0-.9841-.4394 1.2512 1.2512 0 0 0-.9743.4335 1.3225 1.3225 0 0 0-.258.8415c-.0016.3094.1204.607.3376.8237.217.2167.5097.337.813.3347.3056 0 .599-.1216.817-.3376.218-.216.3414-.5102.3414-.8208.0015-.315-.1224-.6185-.3376-.8356ZM9.11 17.698v-6.504H7.077v6.504H9.11Zm7.823 0v-3.6233c0-1.8773-.9743-2.7538-2.2788-2.7538a2.0585 2.0585 0 0 0-1.875 1.0335v-.882H10.747v6.5036h2.0498v-3.6188c0-.927.4335-1.4505 1.1669-1.4505.6856 0 1.0335.4829 1.0335 1.4505v3.6188h1.9568Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;