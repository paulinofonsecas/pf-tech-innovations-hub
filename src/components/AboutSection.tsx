import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    "Soluções tecnológicas personalizadas",
    "Equipe de profissionais qualificados",
    "Atendimento dedicado e próximo ao cliente",
    "Tecnologias de ponta e processos eficientes",
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-xl max-w-lg mx-auto lg:ml-0">
              <div className="overflow-hidden rounded-lg">
                <div className="aspect-video w-full bg-gradient-to-br from-brand-blue via-brand-blue/80 to-brand-darkBlue rounded-lg flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">PF Tech Inovações</h3>
                    <p>Transformando o futuro com tecnologia</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-10 left-10 w-full h-full border-2 border-brand-blue dark:border-brand-blue/70 rounded-2xl -z-10 hidden lg:block"></div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold dark:text-gray-100">
              Quem Somos
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              A PF Tech Inovações nasceu da visão de Paulino Fonseca em oferecer soluções tecnológicas completas e personalizadas para empresas e indivíduos. Combinando expertise em desenvolvimento de software sob medida e uma ampla gama de equipamentos informáticos de alta qualidade.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Acreditamos que a tecnologia deve ser uma ferramenta poderosa para impulsionar o crescimento e a eficiência. Por isso, dedicamos nosso conhecimento e experiência para entender as necessidades únicas de cada cliente, oferecendo soluções que realmente fazem a diferença.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-blue flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <Button className="bg-brand-blue hover:bg-brand-darkBlue mt-4 dark:text-white">
              Saiba mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
