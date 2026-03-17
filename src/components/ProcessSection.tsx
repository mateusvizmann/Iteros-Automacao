import { motion } from "framer-motion";
import { Clock, ShieldCheck, TrendingUp, Zap, Expand } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20automação%20com%20Python.";

const benefits = [
  { icon: Clock, title: "Economia de tempo", desc: "Até 20h por semana devolvidas para sua equipe." },
  { icon: ShieldCheck, title: "Menos erros", desc: "Elimine falhas humanas em processos críticos." },
  { icon: TrendingUp, title: "Mais produtividade", desc: "Foco no que realmente importa para o negócio." },
  { icon: Zap, title: "Processos rápidos", desc: "Automações que rodam em segundos, não em horas." },
  { icon: Expand, title: "Escalabilidade", desc: "Cresça sem precisar contratar mais pessoas." },
];

const steps = [
  { num: "01", text: "Você entra em contato pelo WhatsApp" },
  { num: "02", text: "Entendemos seu processo manual" },
  { num: "03", text: "Criamos uma automação personalizada" },
  { num: "04", text: "Implementamos e entregamos pronto" },
];

export default function ProcessSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container relative">
        {/* Benefits */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold tracking-tighter mb-4"
        >
          Por que automatizar sua empresa <span className="text-gradient">agora?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground mb-14 max-w-lg"
        >
          Cada minuto gasto em tarefas repetitivas é um minuto roubado do crescimento do seu negócio.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-28">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-6"
            >
              <b.icon className="w-5 h-5 text-primary mb-3" />
              <h3 className="font-medium text-sm mb-1">{b.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* How it works */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold tracking-tighter mb-14"
        >
          Como funciona
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <span className="font-mono text-4xl font-bold text-primary/20 block mb-2">{step.num}</span>
              <p className="font-medium text-foreground">{step.text}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-5 right-0 w-12 h-px bg-gradient-to-r from-primary/40 to-transparent translate-x-6" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Code comment highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 max-w-2xl"
        >
          <p className="font-mono text-sm text-muted-foreground mb-1"># Nota importante</p>
          <p className="font-mono text-primary text-lg leading-relaxed">
            "Você não precisa entender de tecnologia.<br />
            Nós cuidamos de tudo para você."
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all glow-blue"
          >
            Falar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
