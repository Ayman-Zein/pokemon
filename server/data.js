const pokemon = [
  { id:1,  name:"bulbasaur",  h:7,  w:69,  xp:64,  types:["grass","poison"],    abilities:["overgrow",{n:"chlorophyll",h:true}],  stats:[45,49,49,65,65,45] },
  { id:2,  name:"ivysaur",    h:10, w:130, xp:142, types:["grass","poison"],    abilities:["overgrow",{n:"chlorophyll",h:true}],  stats:[60,62,63,80,80,60] },
  { id:3,  name:"venusaur",   h:20, w:1000,xp:263, types:["grass","poison"],    abilities:["overgrow",{n:"chlorophyll",h:true}],  stats:[80,82,83,100,100,80] },
  { id:4,  name:"charmander", h:6,  w:85,  xp:62,  types:["fire"],              abilities:["blaze",{n:"solar-power",h:true}],     stats:[39,52,43,60,50,65] },
  { id:5,  name:"charmeleon", h:11, w:190, xp:142, types:["fire"],              abilities:["blaze",{n:"solar-power",h:true}],     stats:[58,64,58,80,65,80] },
  { id:6,  name:"charizard",  h:17, w:905, xp:267, types:["fire","flying"],     abilities:["blaze",{n:"solar-power",h:true}],     stats:[78,84,78,109,85,100] },
  { id:7,  name:"squirtle",   h:5,  w:90,  xp:63,  types:["water"],             abilities:["torrent",{n:"rain-dish",h:true}],     stats:[44,48,65,50,64,43] },
  { id:8,  name:"wartortle",  h:10, w:225, xp:142, types:["water"],             abilities:["torrent",{n:"rain-dish",h:true}],     stats:[59,63,80,65,80,58] },
  { id:9,  name:"blastoise",  h:16, w:855, xp:265, types:["water"],             abilities:["torrent",{n:"rain-dish",h:true}],     stats:[79,83,100,85,105,78] },
  { id:10, name:"caterpie",   h:3,  w:29,  xp:39,  types:["bug"],               abilities:["shield-dust",{n:"run-away",h:true}],  stats:[45,30,35,20,20,45] },
  { id:11, name:"metapod",    h:7,  w:99,  xp:72,  types:["bug"],               abilities:["shed-skin"],                          stats:[50,20,55,25,25,30] },
  { id:12, name:"butterfree", h:11, w:320, xp:198, types:["bug","flying"],      abilities:["compound-eyes",{n:"tinted-lens",h:true}], stats:[60,45,50,90,80,70] },
  { id:13, name:"weedle",     h:3,  w:32,  xp:39,  types:["bug","poison"],      abilities:["shield-dust",{n:"run-away",h:true}],  stats:[40,35,30,20,20,50] },
  { id:14, name:"kakuna",     h:6,  w:100, xp:72,  types:["bug","poison"],      abilities:["shed-skin"],                          stats:[45,25,50,25,25,35] },
  { id:15, name:"beedrill",   h:10, w:295, xp:178, types:["bug","poison"],      abilities:["swarm",{n:"sniper",h:true}],          stats:[65,90,40,45,80,75] },
  { id:16, name:"pidgey",     h:3,  w:18,  xp:50,  types:["normal","flying"],   abilities:["keen-eye","tangled-feet",{n:"big-pecks",h:true}], stats:[40,45,40,35,35,56] },
  { id:17, name:"pidgeotto",  h:11, w:300, xp:122, types:["normal","flying"],   abilities:["keen-eye","tangled-feet",{n:"big-pecks",h:true}], stats:[63,60,55,50,50,71] },
  { id:18, name:"pidgeot",    h:15, w:395, xp:216, types:["normal","flying"],   abilities:["keen-eye","tangled-feet",{n:"big-pecks",h:true}], stats:[83,80,75,70,70,101] },
  { id:19, name:"rattata",    h:3,  w:35,  xp:51,  types:["normal"],            abilities:["run-away","guts",{n:"hustle",h:true}],stats:[30,56,35,25,35,72] },
  { id:20, name:"raticate",   h:7,  w:185, xp:145, types:["normal"],            abilities:["run-away","guts",{n:"hustle",h:true}],stats:[55,81,60,50,70,97] },
  { id:21, name:"spearow",    h:3,  w:20,  xp:52,  types:["normal","flying"],   abilities:["keen-eye",{n:"sniper",h:true}],       stats:[40,60,30,31,31,70] },
  { id:22, name:"fearow",     h:12, w:380, xp:155, types:["normal","flying"],   abilities:["keen-eye",{n:"sniper",h:true}],       stats:[65,90,65,61,61,100] },
  { id:23, name:"ekans",      h:20, w:69,  xp:58,  types:["poison"],            abilities:["intimidate","shed-skin",{n:"unnerve",h:true}], stats:[35,60,44,40,54,55] },
  { id:24, name:"arbok",      h:35, w:650, xp:157, types:["poison"],            abilities:["intimidate","shed-skin",{n:"unnerve",h:true}], stats:[60,95,69,65,79,80] },
  { id:25, name:"pikachu",    h:4,  w:60,  xp:112, types:["electric"],          abilities:["static",{n:"lightning-rod",h:true}],  stats:[35,55,40,50,50,90] },
  { id:26, name:"raichu",     h:8,  w:300, xp:243, types:["electric"],          abilities:["static",{n:"lightning-rod",h:true}],  stats:[60,90,55,90,80,110] },
  { id:27, name:"sandshrew",  h:6,  w:120, xp:60,  types:["ground"],            abilities:["sand-veil",{n:"sand-rush",h:true}],   stats:[50,75,85,20,30,40] },
  { id:28, name:"sandslash",  h:10, w:295, xp:158, types:["ground"],            abilities:["sand-veil",{n:"sand-rush",h:true}],   stats:[75,100,110,45,55,65] },
  { id:29, name:"nidoran-f",  h:4,  w:70,  xp:55,  types:["poison"],            abilities:["poison-point","rivalry",{n:"hustle",h:true}], stats:[55,47,52,40,40,41] },
  { id:30, name:"nidorina",   h:8,  w:200, xp:128, types:["poison"],            abilities:["poison-point","rivalry",{n:"hustle",h:true}], stats:[70,62,67,55,55,56] },
  { id:31, name:"nidoqueen",  h:13, w:600, xp:253, types:["poison","ground"],   abilities:["poison-point","rivalry",{n:"sheer-force",h:true}], stats:[90,92,87,75,85,76] },
  { id:32, name:"nidoran-m",  h:5,  w:90,  xp:55,  types:["poison"],            abilities:["poison-point","rivalry",{n:"hustle",h:true}], stats:[46,57,40,40,40,50] },
  { id:33, name:"nidorino",   h:9,  w:195, xp:128, types:["poison"],            abilities:["poison-point","rivalry",{n:"hustle",h:true}], stats:[61,72,57,55,55,65] },
  { id:34, name:"nidoking",   h:14, w:620, xp:253, types:["poison","ground"],   abilities:["poison-point","rivalry",{n:"sheer-force",h:true}], stats:[81,102,77,85,75,85] },
  { id:35, name:"clefairy",   h:6,  w:75,  xp:113, types:["fairy"],             abilities:["cute-charm","magic-guard",{n:"friend-guard",h:true}], stats:[70,45,48,60,65,35] },
  { id:36, name:"clefable",   h:13, w:400, xp:242, types:["fairy"],             abilities:["cute-charm","magic-guard",{n:"unaware",h:true}], stats:[95,70,73,95,90,60] },
  { id:37, name:"vulpix",     h:6,  w:99,  xp:60,  types:["fire"],              abilities:["flash-fire",{n:"drought",h:true}],    stats:[38,41,40,50,65,65] },
  { id:38, name:"ninetales",  h:11, w:199, xp:177, types:["fire"],              abilities:["flash-fire",{n:"drought",h:true}],    stats:[73,76,75,81,100,100] },
  { id:39, name:"jigglypuff", h:5,  w:55,  xp:95,  types:["normal","fairy"],    abilities:["cute-charm","competitive",{n:"friend-guard",h:true}], stats:[115,45,20,45,25,20] },
  { id:40, name:"wigglytuff", h:10, w:120, xp:218, types:["normal","fairy"],    abilities:["cute-charm","competitive",{n:"frisk",h:true}], stats:[140,70,45,85,50,45] },
  { id:41, name:"zubat",      h:8,  w:75,  xp:49,  types:["poison","flying"],   abilities:["inner-focus",{n:"infiltrator",h:true}], stats:[40,45,35,30,40,55] },
  { id:42, name:"golbat",     h:16, w:550, xp:159, types:["poison","flying"],   abilities:["inner-focus",{n:"infiltrator",h:true}], stats:[75,80,70,65,75,90] },
  { id:43, name:"oddish",     h:5,  w:54,  xp:64,  types:["grass","poison"],    abilities:["chlorophyll",{n:"run-away",h:true}],  stats:[45,50,55,75,65,30] },
  { id:44, name:"gloom",      h:8,  w:86,  xp:138, types:["grass","poison"],    abilities:["chlorophyll",{n:"stench",h:true}],    stats:[60,65,70,85,75,40] },
  { id:45, name:"vileplume",  h:12, w:186, xp:245, types:["grass","poison"],    abilities:["chlorophyll",{n:"effect-spore",h:true}], stats:[75,80,85,110,90,50] },
  { id:46, name:"paras",      h:3,  w:54,  xp:57,  types:["bug","grass"],       abilities:["effect-spore","dry-skin",{n:"damp",h:true}], stats:[35,70,55,45,55,25] },
  { id:47, name:"parasect",   h:10, w:295, xp:142, types:["bug","grass"],       abilities:["effect-spore","dry-skin",{n:"damp",h:true}], stats:[60,95,80,60,80,30] },
  { id:48, name:"venonat",    h:10, w:300, xp:61,  types:["bug","poison"],      abilities:["compound-eyes","tinted-lens",{n:"run-away",h:true}], stats:[60,55,50,40,55,45] },
  { id:49, name:"venomoth",   h:15, w:125, xp:158, types:["bug","poison"],      abilities:["shield-dust","tinted-lens",{n:"wonder-skin",h:true}], stats:[70,65,60,90,75,90] },
  { id:50, name:"diglett",    h:2,  w:8,   xp:53,  types:["ground"],            abilities:["sand-veil","arena-trap",{n:"sand-force",h:true}], stats:[10,55,25,35,45,95] },
  { id:51, name:"dugtrio",    h:7,  w:333, xp:149, types:["ground"],            abilities:["sand-veil","arena-trap",{n:"sand-force",h:true}], stats:[35,100,50,50,70,120] },
  { id:52, name:"meowth",     h:4,  w:42,  xp:58,  types:["normal"],            abilities:["pickup","technician",{n:"unnerve",h:true}], stats:[40,45,35,40,40,90] },
  { id:53, name:"persian",    h:10, w:320, xp:154, types:["normal"],            abilities:["limber","technician",{n:"unnerve",h:true}], stats:[65,70,60,65,65,115] },
  { id:54, name:"psyduck",    h:8,  w:196, xp:64,  types:["water"],             abilities:["damp","cloud-nine",{n:"swift-swim",h:true}], stats:[50,52,48,65,50,55] },
  { id:55, name:"golduck",    h:17, w:766, xp:175, types:["water"],             abilities:["damp","cloud-nine",{n:"swift-swim",h:true}], stats:[80,82,78,95,80,85] },
  { id:56, name:"mankey",     h:5,  w:280, xp:61,  types:["fighting"],          abilities:["vital-spirit","anger-point",{n:"defiant",h:true}], stats:[40,80,35,35,45,70] },
  { id:57, name:"primeape",   h:10, w:320, xp:159, types:["fighting"],          abilities:["vital-spirit","anger-point",{n:"defiant",h:true}], stats:[65,105,60,60,70,95] },
  { id:58, name:"growlithe",  h:7,  w:190, xp:70,  types:["fire"],              abilities:["intimidate","flash-fire",{n:"justified",h:true}], stats:[55,70,45,70,50,60] },
  { id:59, name:"arcanine",   h:19, w:1550,xp:194, types:["fire"],              abilities:["intimidate","flash-fire",{n:"justified",h:true}], stats:[90,110,80,100,80,95] },
  { id:60, name:"poliwag",    h:6,  w:124, xp:60,  types:["water"],             abilities:["water-absorb","damp",{n:"swift-swim",h:true}], stats:[40,50,40,40,40,90] },
];

const STAT_NAMES = ["hp","attack","defense","special-attack","special-defense","speed"];
const BASE_URL = "http://localhost:3001/api/v2";

export function expandPokemon(p) {
  return {
    id: p.id,
    name: p.name,
    height: p.h,
    weight: p.w,
    base_experience: p.xp,
    types: p.types.map((t, i) => ({
      slot: i + 1,
      type: { name: t, url: `${BASE_URL}/type/${t}` },
    })),
    abilities: p.abilities.map((a, i) => {
      const isObj = typeof a === "object";
      return {
        slot: i + 1,
        is_hidden: isObj ? a.h : false,
        ability: {
          name: isObj ? a.n : a,
          url: `${BASE_URL}/ability/${isObj ? a.n : a}`,
        },
      };
    }),
    stats: p.stats.map((val, i) => ({
      base_stat: val,
      effort: 0,
      stat: { name: STAT_NAMES[i], url: `${BASE_URL}/stat/${STAT_NAMES[i]}` },
    })),
    sprites: {
      front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`,
      other: {
        "official-artwork": {
          front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`,
        },
      },
    },
  };
}

export function getList(limit, offset) {
  const total = pokemon.length;
  const slice = pokemon.slice(offset, offset + limit);
  const nextOffset = offset + limit;
  const prevOffset = offset - limit;

  return {
    count: total,
    next: nextOffset < total ? `${BASE_URL}/pokemon?offset=${nextOffset}&limit=${limit}` : null,
    previous: prevOffset >= 0 ? `${BASE_URL}/pokemon?offset=${prevOffset}&limit=${limit}` : null,
    results: slice.map((p) => ({
      name: p.name,
      url: `${BASE_URL}/pokemon/${p.id}/`,
    })),
  };
}

export function getDetail(id) {
  const p = pokemon.find((p) => p.id === Number(id) || p.name === id);
  return p ? expandPokemon(p) : null;
}
