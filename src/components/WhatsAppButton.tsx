import React from 'react';
import { MessageSquare } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/5511991298838?text=Olá, gostaria de solicitar um orçamento."
      className="fixed bottom-4 right-4 lg:bottom-6 lg:right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 lg:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contato via WhatsApp"
    >
      <MessageSquare size={20} className="lg:w-6 lg:h-6" fill="white" />
    </a>
  );
};

export default WhatsAppButton;