import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5543988552365?text=Ola%2C%20vim%20pelo%20site%20e%20quero%20automatizar%20processos%20na%20minha%20empresa";

const testimonials = [
  {
    initials: "CM",
    name: "Carlos Mendes",
    role: "Escritório Contábil",
    text: "Conseguimos reduzir mais de 15 horas semanais de trabalho manual. Simplesmente mudou nossa rotina.",
  },
  {
    initials: "JR",
    name: "Juliana Rocha",
    role: "Agência de Marketing",
    text: "A automação de relatórios nos fez economizar tempo e evitar erros. Valeu muito a pena.",
  },
  {
    initials: "RS",
    name: "Rafael Souza",
    role: "Imobiliária",
    text: "Hoje tudo roda automático. Foi um dos melhores investimentos que fizemos.",
  },
];

const projects = [
  "Automação de relatórios financeiros",
  "Organização automática de documentos contábeis",
  "Coleta de dados de plataformas digitais",
  "Envio automático de relatórios por e-mail",
  "Integração entre sistemas internos",
];

export default function SocialProofSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="container relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold tracking-tighter mb-14"
        >
          Empresas que já automatizaram <span className="text-gradient">seus processos</span>
        </motion.h2>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-4 mb-24">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-6 flex flex-col justify-between"
            >
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center border border-foreground/10">
                  <span className="font-mono text-xs font-semibold text-foreground">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Projects */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl font-semibold tracking-tight mb-8"
        >
          Projetos já executados
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-20">
          {projects.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center gap-3 p-4 rounded-xl border border-foreground/5 bg-foreground/[0.02]"
            >
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span className="text-sm text-muted-foreground">{p}</span>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter mb-4">
            Pronto para automatizar?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Entre em contato agora e descubra como podemos transformar processos manuais em ativos digitais.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-lg bg-gradient-to-r from-primary to-accent text-primary-foreground btn-shimmer glow-blue hover:brightness-110 transition-all"
          >
            Quero automatizar minha empresa
          </a>
        </motion.div>
      </div>
    </section>
  );
}
