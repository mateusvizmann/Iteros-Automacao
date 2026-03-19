import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5543988552365?text=Ola%2C%20vim%20pelo%20site%20e%20quero%20automatizar%20processos%20na%20minha%20empresa";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-8 right-8 z-50 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110 hover:brightness-110"
    >
      <MessageCircle className="h-7 w-7 fill-white text-white" />
    </a>
  );
}
