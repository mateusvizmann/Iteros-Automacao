import { useState, useEffect, useCallback } from "react";
import { TrendingUp, TrendingDown, Minus, ExternalLink, RefreshCw, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchRankings, getVariation, type RankingTeam } from "@/services/rankings";

const leagueColors: Record<string, string> = {
  LPL: "bg-[#0BC4E3]",
  LCK: "bg-[#E84057]",
  LEC: "bg-[#9B4DCA]",
  LCS: "bg-[#F97316]",
  CBLOL: "bg-[#22C55E]",
};

const VariationIcon = ({ type, diff }: { type: "up" | "down" | "same"; diff: number }) => {
  if (type === "up") return (
    <span className="flex items-center gap-0.5 text-green-400 text-xs font-mono">
      <TrendingUp className="w-4 h-4" /> {diff}
    </span>
  );
  if (type === "down") return (
    <span className="flex items-center gap-0.5 text-red-400 text-xs font-mono">
      <TrendingDown className="w-4 h-4" /> {diff}
    </span>
  );
  return <Minus className="w-4 h-4 text-muted-foreground" />;
};

const TableSkeleton = () => (
  <div className="space-y-3">
    {Array.from({ length: 8 }).map((_, i) => (
      <Skeleton key={i} className="h-14 w-full bg-secondary/50 animate-shimmer" style={{
        backgroundImage: "linear-gradient(90deg, transparent, hsl(var(--muted)) 50%, transparent)",
        backgroundSize: "200% 100%",
      }} />
    ))}
  </div>
);

const RankingsTable = () => {
  const [teams, setTeams] = useState<RankingTeam[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDemo, setIsDemo] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const loadData = useCallback(async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true);
    else setLoading(true);

    const result = await fetchRankings();
    setTeams(result.teams);
    setIsDemo(result.isDemo);
    setLastUpdated(new Date());
    setLoading(false);
    setRefreshing(false);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <section className="pb-16 px-4">
      <div className="container max-w-4xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground">
              Global Power Rankings — <span className="text-primary">Atualizado</span>
            </h2>
            {lastUpdated && (
              <p className="text-xs text-muted-foreground mt-1">
                Última atualização: {lastUpdated.toLocaleDateString("pt-BR")} às {lastUpdated.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
              </p>
            )}
          </div>
          <Button
            variant="outline"
            size="sm"
            className="border-primary/30 text-primary hover:bg-primary/10 gap-2 self-start"
            onClick={() => loadData(true)}
            disabled={refreshing}
          >
            <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`} />
            Atualizar
          </Button>
        </div>

        {isDemo && (
          <div className="flex items-center gap-2 p-3 mb-4 rounded-lg bg-muted/50 border border-border text-muted-foreground">
            <Info className="w-4 h-4 shrink-0" />
            <p className="text-xs">Exibindo dados de demonstração</p>
          </div>
        )}

        {loading ? (
          <TableSkeleton />
        ) : teams.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-muted-foreground text-left">
                  <th className="py-3 px-3 font-medium w-16">#</th>
                  <th className="py-3 px-2 font-medium w-16">Var.</th>
                  <th className="py-3 px-3 font-medium">Time</th>
                  <th className="py-3 px-3 font-medium text-right">Pontuação</th>
                  <th className="py-3 px-3 font-medium text-right hidden sm:table-cell">V/D</th>
                  <th className="py-3 px-3 font-medium text-right">Winrate</th>
                </tr>
              </thead>
              <tbody>
                {teams.map((team) => {
                  const variation = getVariation(team.rank, team.previousRank);
                  const winrate = team.winrate > 0
                    ? team.winrate
                    : team.wins + team.losses > 0
                      ? Math.round((team.wins / (team.wins + team.losses)) * 100)
                      : 0;
                  const leagueColor = leagueColors[team.league] || "bg-muted-foreground";

                  return (
                    <tr key={team.rank} className="border-b border-border/50 hover:bg-surface-hover transition-colors">
                      <td className="py-3.5 px-3 font-mono font-medium text-foreground">{team.rank}</td>
                      <td className="py-3.5 px-2">
                        <VariationIcon type={variation.type} diff={variation.diff} />
                      </td>
                      <td className="py-3.5 px-3">
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-foreground">{team.name}</span>
                          <Badge className={`${leagueColor} text-white text-[10px] px-1.5 py-0 font-semibold border-0 rounded-sm`}>
                            {team.league}
                          </Badge>
                        </div>
                      </td>
                      <td className="py-3.5 px-3 text-right font-mono font-medium text-primary">{team.points}</td>
                      <td className="py-3.5 px-3 text-right font-mono text-foreground/80 hidden sm:table-cell">
                        {team.wins}-{team.losses}
                      </td>
                      <td className="py-3.5 px-3 text-right font-mono text-foreground/80">{winrate}%</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : null}

        <div className="mt-6 text-center">
          <Button
            variant="outline"
            className="border-primary/30 text-primary hover:bg-primary/10 gap-2"
            asChild
          >
            <a href="https://lolesports.com/pt-BR/gpr/2026/current" target="_blank" rel="noopener noreferrer">
              Ver ranking completo no LoL Esports
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RankingsTable;
