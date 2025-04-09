
import { 
  LightbulbIcon, 
  BadgeCheck, 
  Layers, 
  Heart, 
  Shield 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: <LightbulbIcon className="h-8 w-8 text-amber-500" />,
    title: "Inovação",
    description: "Buscamos constantemente novas tecnologias e abordagens para oferecer as melhores soluções.",
  },
  {
    icon: <BadgeCheck className="h-8 w-8 text-green-500" />,
    title: "Qualidade",
    description: "Priorizamos a excelência em nossos produtos e serviços.",
  },
  {
    icon: <Layers className="h-8 w-8 text-purple-500" />,
    title: "Personalização",
    description: "Entendemos e atendemos às necessidades únicas de cada cliente.",
  },
  {
    icon: <Heart className="h-8 w-8 text-red-500" />,
    title: "Compromisso",
    description: "Dedicação total à satisfação de nossos clientes.",
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-500" />,
    title: "Integridade",
    description: "Atuamos com ética e transparência em todas as nossas relações.",
  },
];

const MissionValuesSection = () => {
  return (
    <section id="mission" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-brand-blue font-semibold mb-2">Nossa Missão</h3>
              <h2 className="text-3xl font-bold mb-4">
                Impulsionar o sucesso com tecnologia inovadora
              </h2>
              <p className="text-lg text-gray-700">
                Impulsionar o sucesso de nossos clientes através de soluções tecnológicas 
                inovadoras e personalizadas, oferecendo produtos de alta qualidade e um 
                atendimento excepcional.
              </p>
            </div>

            <div>
              <h3 className="text-brand-blue font-semibold mb-2">Nossa Visão</h3>
              <h2 className="text-3xl font-bold mb-4">
                Referência em soluções tecnológicas
              </h2>
              <p className="text-lg text-gray-700">
                Ser reconhecida como líder no mercado de soluções tecnológicas personalizadas 
                e venda de equipamentos informáticos, sendo a primeira escolha de empresas e 
                indivíduos que buscam inovação, qualidade e confiabilidade.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-brand-blue font-semibold mb-2">Nossos Valores</h3>
            <h2 className="text-3xl font-bold mb-8">
              O que nos define
            </h2>

            <div className="grid grid-cols-1 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="flex p-6">
                    <div className="mr-4 p-2 rounded-full bg-gray-50 flex items-center justify-center">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionValuesSection;
