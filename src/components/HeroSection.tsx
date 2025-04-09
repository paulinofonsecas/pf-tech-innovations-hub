
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Sua Parceira em{" "}
              <span className="text-brand-blue">Tecnologia</span> Personalizada
            </h1>
            <p className="text-xl text-gray-700 max-w-lg">
              Transformando ideias em soluções tecnológicas inovadoras para
              impulsionar o crescimento do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-brand-blue hover:bg-brand-darkBlue">
                Conheça nossos serviços
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-brand-blue text-brand-blue hover:text-brand-darkBlue hover:border-brand-darkBlue"
              >
                Entre em contato
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-blue/10 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-lightBlue/20 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-xl">
                <div className="aspect-video w-full max-w-lg rounded-lg bg-gradient-to-br from-brand-blue to-brand-darkBlue flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">Soluções Tecnológicas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
