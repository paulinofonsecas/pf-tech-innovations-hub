import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              Sua Parceira em{" "}
              <span className="text-brand-blue dark:text-brand-lightBlue">Tecnologia</span> Personalizada
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-lg">
              Transformando ideias em soluções tecnológicas inovadoras para
              impulsionar o crescimento do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-brand-blue hover:bg-brand-darkBlue dark:bg-brand-lightBlue dark:hover:bg-brand-blue dark:text-gray-900"
                onClick={() => window.location.href = '#services'}>
                Conheça nossos serviços
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-brand-blue text-brand-blue hover:text-brand-darkBlue hover:border-brand-darkBlue dark:border-brand-lightBlue dark:text-brand-lightBlue dark:hover:border-brand-blue dark:hover:text-brand-blue"
              >
                <a href="https://wa.me/+244925412030" target="_blank" rel="noopener noreferrer">
                  Entre em contato
                </a>
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex justify-end animate-fade-in">
            <div className="relative">
              <img src="/images/medium-logo.png" alt="Hero Image" className="w-80 h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
