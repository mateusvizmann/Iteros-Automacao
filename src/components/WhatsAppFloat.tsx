import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5543988552365?text=Ola%2C%20gostaria%20de%20saber%20mais%20sobre%20automacao%20com%20Python";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-[60px] h-[60px] rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
      aria-label="Falar no WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-primary/40 ping-slow" />
      <MessageCircle className="w-7 h-7 text-foreground fill-foreground" />
    </a>
  );
}
