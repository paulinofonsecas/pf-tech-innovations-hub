import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Instagram, 
  Facebook 
} from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-gray-100">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Estamos prontos para atender suas necessidades e responder suas dúvidas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 dark:text-white">Envie uma mensagem</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium dark:text-gray-300">
                    Nome
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Seu nome" 
                    className="border-gray-300 focus:border-brand-blue focus:ring-brand-blue dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium dark:text-gray-300">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="seu@email.com" 
                    className="border-gray-300 focus:border-brand-blue focus:ring-brand-blue dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium dark:text-gray-300">
                  Assunto
                </label>
                <Input 
                  id="subject" 
                  placeholder="Assunto da mensagem" 
                  className="border-gray-300 focus:border-brand-blue focus:ring-brand-blue dark:bg-gray-800 dark:text-white dark:border-gray-600"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium dark:text-gray-300">
                  Mensagem
                </label>
                <Textarea 
                  id="message" 
                  rows={5} 
                  placeholder="Sua mensagem..." 
                  className="border-gray-300 focus:border-brand-blue focus:ring-brand-blue dark:bg-gray-800 dark:text-white dark:border-gray-600"
                />
              </div>

              <Button className="w-full bg-brand-blue hover:bg-brand-darkBlue dark:text-white">
                Enviar Mensagem
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 dark:text-white">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-brand-blue mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium dark:text-gray-100">Endereço</p>
                    <p className="text-gray-600 dark:text-gray-400">Av. Tecnologia, 1234, São Paulo - SP</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-brand-blue mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium dark:text-gray-100">Telefone</p>
                    <p className="text-gray-600 dark:text-gray-400">+55 (11) 1234-5678</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-brand-blue mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium dark:text-gray-100">Email</p>
                    <p className="text-gray-600 dark:text-gray-400">contato@pftechinnovacoes.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 dark:text-white">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-brand-blue text-white p-3 rounded-full hover:bg-brand-darkBlue transition-colors dark:bg-blue-600 dark:hover:bg-blue-700"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-brand-blue text-white p-3 rounded-full hover:bg-brand-darkBlue transition-colors dark:bg-pink-600 dark:hover:bg-pink-700"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-brand-blue text-white p-3 rounded-full hover:bg-brand-darkBlue transition-colors dark:bg-indigo-600 dark:hover:bg-indigo-700"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
