const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container max-w-3xl text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
          <span className="text-gold-gradient">Análise do cenário competitivo</span>
          <br />
          <span className="text-foreground">de LoL em português</span>
        </h1>
        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Acompanhe o ranking global, estatísticas de times e jogadores profissionais em tempo real
        </p>
      </div>
    </section>
  );
};

export default Hero;
