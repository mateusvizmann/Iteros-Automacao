import { Shield, User, BarChart3, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface QuickCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: { label: string; disabled?: boolean; href?: string };
}

const cards: QuickCard[] = [
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Times Profissionais",
    description: "Estatísticas detalhadas de todos os times do cenário competitivo",
    action: { label: "Explorar times", disabled: true },
  },
  {
    icon: <User className="w-8 h-8 text-primary" />,
    title: "Jogadores",
    description: "Perfis e estatísticas individuais dos melhores jogadores do mundo",
    action: { label: "Explorar jogadores", disabled: true },
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-primary" />,
    title: "Base de Dados Completa",
    description: "Acesse a base completa de dados do cenário competitivo de LoL",
    action: { label: "Acessar dados", href: "https://lol.fandom.com/wiki/League_of_Legends_Esports_Wiki" },
  },
];

const QuickAccess = () => {
  return (
    <section className="pb-20 px-4">
      <div className="container max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-card border rounded-lg p-6 flex flex-col gap-4 hover:border-primary/30 transition-colors"
            >
              {card.icon}
              <div>
                <h3 className="font-bold text-foreground mb-1">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </div>
              <div className="mt-auto pt-2">
                {card.action.disabled ? (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span>
                        <Button variant="outline" size="sm" disabled className="w-full border-border text-muted-foreground">
                          {card.action.label}
                        </Button>
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>Em breve</TooltipContent>
                  </Tooltip>
                ) : (
                  <Button variant="outline" size="sm" className="w-full border-primary/30 text-primary hover:bg-primary/10 gap-2" asChild>
                    <a href={card.action.href} target="_blank" rel="noopener noreferrer">
                      {card.action.label}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
