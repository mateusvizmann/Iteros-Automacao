import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const APIFY_TOKEN = Deno.env.get('APIFY_TOKEN');
    if (!APIFY_TOKEN) {
      throw new Error('APIFY_TOKEN is not configured');
    }

    const itemsRes = await fetch(
      `https://api.apify.com/v2/acts/richard.biros~lol-esports-power-rankings/runs/last/dataset/items?token=${APIFY_TOKEN}&status=SUCCEEDED`,
    );

    if (!itemsRes.ok) {
      throw new Error(`Apify error: ${itemsRes.status}`);
    }

    const items = await itemsRes.json();

    return new Response(JSON.stringify(items), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});