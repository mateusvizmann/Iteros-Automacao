import { motion } from "framer-motion";
import { FileSpreadsheet, BarChart3, Mail, Globe, FolderOpen, Plug, Bot, Settings } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5543988552365?text=Olá!%20Me%20interessei%20pelos%20serviços%20de%20automação%20da%20sua%20empresa.%20Gostaria%20de%20saber%20mais%20sobre%20como%20posso%20otimizar%20os%20processos%20do%20meu%20negócio.";

const services = [
  { icon: FileSpreadsheet, title: "Automação de Planilhas", desc: "Elimine o Ctrl+C / Ctrl+V entre Excel e Google Sheets." },
  { icon: BarChart3, title: "Relatórios Automáticos", desc: "Geração e envio de relatórios sem intervenção humana." },
  { icon: Mail, title: "Envio de E-mails", desc: "Disparo automático de e-mails personalizados em massa." },
  { icon: Globe, title: "Web Scraping", desc: "Coleta inteligente de dados de qualquer site ou plataforma." },
  { icon: FolderOpen, title: "Organização de Arquivos", desc: "Classificação e renomeação automática de documentos." },
  { icon: Plug, title: "Integração de Sistemas", desc: "Conecte ERPs, CRMs e APIs em um fluxo único." },
  { icon: Bot, title: "Bots para Tarefas", desc: "Robôs que executam rotinas repetitivas 24/7." },
  { icon: Settings, title: "Processos Administrativos", desc: "Automatize cadastros, notas fiscais e backoffice." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
  }),
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Radial glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="container relative pt-24 pb-20 lg:pt-32">
        {/* Status indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 mb-10"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="ping-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </span>
          <span className="font-mono text-xs text-muted-foreground tracking-wide">System Status: Optimized</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: text */}
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.95] mb-6"
            >
              Automatize tarefas repetitivas e economize horas toda semana.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-muted-foreground text-lg leading-relaxed max-w-xl mb-8"
            >
              Criamos automações inteligentes para eliminar processos manuais, reduzir erros e aumentar a produtividade da sua equipe.
            </motion.p>

            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:brightness-110 transition-all glow-blue"
            >
              Falar no WhatsApp
            </motion.a>

            {/* Proof metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-6 mt-10"
            >
              {[
                "+50 processos automatizados",
                "Redução de até 80% em tarefas manuais",
                "Implementação rápida",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">✔</span>
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-foreground/20" />
                <span className="w-3 h-3 rounded-full bg-foreground/20" />
                <span className="w-3 h-3 rounded-full bg-foreground/20" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">terminal</span>
              </div>
              <div className="font-mono text-sm space-y-2">
                <p className="text-muted-foreground">$ python run_automation.py</p>
                <p className="text-primary">▶ Conectando ao Google Sheets...</p>
                <p className="text-primary">▶ Processando 1.247 registros...</p>
                <p className="text-primary">▶ Gerando relatório financeiro...</p>
                <p className="text-primary">▶ Enviando e-mail para gestão...</p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="text-emerald-400"
                >
                  ✓ Concluído em 4.2s — 3h de trabalho manual economizadas
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services grid */}
        <div className="mt-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold tracking-tight mb-12"
          >
            O que automatizamos
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4, borderColor: "hsl(217 91% 60% / 0.5)" }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card p-6 cursor-default"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-medium mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
