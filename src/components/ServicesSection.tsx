
import {
  LayoutDashboard,
  Monitor,
  Headphones,
  LineChart,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: <LayoutDashboard className="h-12 w-12 text-brand-blue" />,
    title: "Desenvolvimento de Software Personalizado",
    description:
      "Criamos softwares sob medida para atender às necessidades específicas do seu negócio, desde sistemas de gestão empresarial (ERP) e softwares de CRM até aplicações web e mobile personalizadas.",
  },
  {
    icon: <Monitor className="h-12 w-12 text-brand-blue" />,
    title: "Venda de Equipamentos Informáticos",
    description:
      "Oferecemos uma vasta seleção de equipamentos de informática de marcas líderes no mercado. Incluímos computadores desktop e laptops, servidores, periféricos, componentes de rede e muito mais.",
  },
  {
    icon: <LineChart className="h-12 w-12 text-brand-blue" />,
    title: "Consultoria em TI",
    description:
      "Prestamos serviços de consultoria para ajudar sua empresa a tomar as melhores decisões em relação à sua infraestrutura de TI. Avaliamos suas necessidades e propomos soluções eficientes.",
  },
  {
    icon: <Headphones className="h-12 w-12 text-brand-blue" />,
    title: "Suporte Técnico Especializado",
    description:
      "Contamos com uma equipe de suporte técnico qualificada para garantir o bom funcionamento de seus softwares e equipamentos, oferecendo serviços de instalação, configuração e manutenção.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos Serviços e Produtos
          </h2>
          <p className="text-lg text-gray-700">
            Soluções completas para atender às necessidades específicas da sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
