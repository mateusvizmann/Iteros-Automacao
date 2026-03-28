import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-1.5">
            <span className="text-xl font-bold text-gold-gradient">ProStats</span>
            <span className="text-xl font-bold text-foreground">.gg</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="/" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Home
            </a>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="text-sm font-medium text-muted-foreground cursor-not-allowed">Times</span>
              </TooltipTrigger>
              <TooltipContent>Em breve</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="text-sm font-medium text-muted-foreground cursor-not-allowed">Jogadores</span>
              </TooltipTrigger>
              <TooltipContent>Em breve</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="text-sm font-medium text-muted-foreground cursor-not-allowed">Comparativo</span>
              </TooltipTrigger>
              <TooltipContent>Em breve</TooltipContent>
            </Tooltip>
          </div>
        </div>
        <Button variant="outline" size="sm" className="border-primary/40 text-primary hover:bg-primary/10">
          Entrar
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
