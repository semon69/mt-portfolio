import { FiCpu, FiLayers, FiRepeat } from "react-icons/fi";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Reveal from "../components/Reveal";
import { services } from "../data/profile";

const icons = [FiLayers, FiRepeat, FiCpu];

const Services = () => (
  <Section
    id="services"
    eyebrow="Services"
    title="What I can help with"
    className="border-t border-line"
  >
    <ul className="grid gap-5 md:grid-cols-3">
      {services.map((service, index) => {
        const Icon = icons[index % icons.length];
        return (
          <Reveal key={service.title} as="li" delay={index * 0.09}>
            <Card interactive className="h-full p-7">
              <span className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-raised text-accent">
                <Icon className="text-lg" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </Card>
          </Reveal>
        );
      })}
    </ul>
  </Section>
);

export default Services;
