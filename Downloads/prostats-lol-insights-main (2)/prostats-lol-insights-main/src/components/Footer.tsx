const Footer = () => {
  return (
    <footer className="border-t py-8 px-4">
      <div className="container max-w-4xl text-center space-y-1">
        <p className="text-sm text-muted-foreground">
          <span className="text-gold-gradient font-semibold">ProStats.gg</span> — Dados do cenário competitivo de LoL em português
        </p>
        <p className="text-xs text-muted-foreground/60">
          Dados fornecidos por Leaguepedia e Riot Games
        </p>
      </div>
    </footer>
  );
};

export default Footer;
