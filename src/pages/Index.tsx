import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import SocialProofSection from "@/components/SocialProofSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <ProcessSection />
      <SocialProofSection />
      <WhatsAppFloat />
      <footer className="border-t border-foreground/5 py-8">
        <div className="container">
          <p className="text-xs text-muted-foreground text-center font-mono">
            © 2026 PythonFlow Automation — Transformamos processos manuais em ativos digitais.
          </p>
        </div>
      </footer>
    </div>
  );
}
