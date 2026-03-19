import { MessageCircle } from "lucide-react";
import { WHATSAPP } from "@/config";

const WHATSAPP_URL = WHATSAPP.url;

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
