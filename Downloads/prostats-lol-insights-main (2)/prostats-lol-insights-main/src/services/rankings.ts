import { supabase } from "@/integrations/supabase/client";

export interface RankingTeam {
  rank: number;
  previousRank: number | null;
  name: string;
  league: string;
  points: number;
  wins: number;
  losses: number;
  winrate: number;
  teamLogo?: string;
  teamCode?: string;
}

export interface RankingsResult {
  teams: RankingTeam[];
  isDemo: boolean;
}

function getVariation(rank: number, previousRank: number | null): { type: "up" | "down" | "same"; diff: number } {
  if (previousRank === null || previousRank === rank) return { type: "same", diff: 0 };
  if (previousRank > rank) return { type: "up", diff: previousRank - rank };
  return { type: "down", diff: rank - previousRank };
}

export async function fetchRankings(): Promise<RankingsResult> {
  try {
    const { data, error } = await supabase.functions.invoke("fetch-rankings");
    if (error || data?.error || !Array.isArray(data)) {
      console.warn("API indisponivel", error || data?.error);
      return { teams: [], isDemo: true };
    }
    const teams = data.map((item: Record<string, unknown>) => {
      const pointsStr = String(item.powerScore || item.points || "0");
      const points = parseInt(pointsStr.replace(/[^0-9]/g, ""), 10) || 0;
      const wlStr = String(item.winLoss || "0-0");
      const [winsStr, lossesStr] = wlStr.split("-");
      const wins = parseInt(winsStr || "0", 10);
      const losses = parseInt(lossesStr || "0", 10);
      const total = wins + losses;
      const winrate = total > 0 ? Math.round((wins / total) * 100) : 0;
      return {
        rank: Number(item.rank) || 0,
        previousRank: null,
        name: String(item.teamName || item.name || ""),
        league: String(item.region || item.league || ""),
        points,
        wins,
        losses,
        winrate,
        teamLogo: String(item.teamLogo || ""),
        teamCode: String(item.teamCode || ""),
      };
    });
    return { teams, isDemo: false };
  } catch (e) {
    console.warn("Falha na requisicao", e);
    return { teams: [], isDemo: true };
  }
}

export { getVariation };