# ⚡ Pokédex

A responsive Pokémon browser built with React, TypeScript, Vite, TailwindCSS, and TanStack Query.

---

## Tech Stack

| Tool                | Purpose                 |
| ------------------- | ----------------------- |
| React 19            | UI framework            |
| TypeScript (strict) | Type safety             |
| Vite 7              | Build tool & dev server |
| TailwindCSS 4       | Styling                 |
| TanStack Query v5   | Data fetching & caching |
| Axios               | HTTP client             |
| React Router v7     | Client-side routing     |

---

## Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher

### Installation

```bash
git clone <your-repo-url>
cd pokemon
npm install
```

---

## Choosing Your API Source

The app supports two API modes controlled by `.env.development`.

### Option A — Public PokéAPI (default)

Uses the real [pokeapi.co](https://pokeapi.co) — requires an internet connection.

**`.env.development`**

```env
VITE_API_URL=https://pokeapi.co/api/v2
# VITE_LOCAL_ENDPOINT=http://localhost:3001/api/v2
```

> Make sure `VITE_LOCAL_ENDPOINT` is commented out. `VITE_API_URL` will be used.

Start the app:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

---

### Option B — Local Mock Server (offline)

Uses a zero-dependency Node.js server bundled in the `server/` folder.
Includes 60 pre-seeded Pokémon — no internet required.

**Step 1 — Enable the local endpoint in `.env.development`:**

```env
VITE_API_URL=https://pokeapi.co/api/v2
VITE_LOCAL_ENDPOINT=http://localhost:3001/api/v2
```

> When `VITE_LOCAL_ENDPOINT` is set, it takes priority over `VITE_API_URL`.

**Step 2 — Start the mock server** (Terminal 1):

```bash
npm run server
```

Output:

```
Mock PokéAPI running at http://localhost:3001/api/v2/pokemon
```

**Step 3 — Start Vite** (Terminal 2):

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

#### Mock server endpoints

| Method | Endpoint                            | Description                                   |
| ------ | ----------------------------------- | --------------------------------------------- |
| `GET`  | `/api/v2/pokemon?limit=10&offset=0` | Paginated list (`limit` / `offset` supported) |
| `GET`  | `/api/v2/pokemon/:id`               | Detail by numeric ID or name                  |

---

## Switching Between Modes — Quick Reference

| What you want         | `.env.development`                |
| --------------------- | --------------------------------- |
| Use live PokéAPI      | Comment out `VITE_LOCAL_ENDPOINT` |
| Use local mock server | Uncomment `VITE_LOCAL_ENDPOINT`   |

After changing `.env.development`, restart Vite (`Ctrl+C` → `npm run dev`) for the change to take effect.

---

## Project Structure

```
src/
├── api/
│   └── pokemonApi.ts              # Axios instance + API functions
├── components/
│   ├── ErrorState.tsx              # Error message + retry button
│   ├── LoadMoreButton.tsx          # Load more / loading spinner
│   ├── PaginationControls.tsx      # Page numbers, prev/next
│   ├── PokemonCard.tsx             # Single Pokémon card
│   ├── PokemonGrid.tsx             # Responsive card grid
│   └── SkeletonCard.tsx            # Animated loading placeholder
├── features/pokemon/
│   ├── hooks/
│   │   ├── usePokemonDetails.ts    # Fetch single Pokémon
│   │   ├── usePokemonList.ts       # Paginated list query
│   │   └── usePokemonLoadMore.ts   # Infinite scroll query
│   └── pages/
│       ├── PokemonDetailPage.tsx       # /pokemon/:id
│       ├── PokemonLoadMorePage.tsx     # /load-more
│       └── PokemonPaginationPage.tsx   # /pagination
├── layouts/
│   └── MainLayout.tsx             # Header, nav, footer
├── router/
│   └── router.tsx                 # React Router config
├── types/
│   └── pokemon.ts                 # TypeScript interfaces
└── utils/
    └── formatters.ts              # Helpers (capitalize, type colors, etc.)

server/
├── data.js                        # 60 seeded Pokémon records
└── index.js                       # Node.js HTTP mock server (no dependencies)
```

---

## Routes

| Path           | Description                                  |
| -------------- | -------------------------------------------- |
| `/`            | Redirects to `/pagination`                   |
| `/pagination`  | Grid with page controls (10 per page)        |
| `/load-more`   | Grid with Load More button (infinite scroll) |
| `/pokemon/:id` | Full Pokémon detail page                     |

---

## Available Scripts

```bash
npm run dev        # Start Vite dev server
npm run server     # Start local mock API server on port 3001
npm run build      # TypeScript check + production build
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
```

---

## Deployment (Vercel)

A `vercel.json` is included for client-side routing support:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

Deploy via CLI:

```bash
npm run build
npx vercel --prod
```
