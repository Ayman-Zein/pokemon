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

---

### Installation

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd pokemon

# 2. Install dependencies
npm install
```

---

### Run (Live API)

Uses the real [PokéAPI](https://pokeapi.co) — requires an internet connection.

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

### Run (Mock Server — Offline)

The project includes a zero-dependency Node.js mock server that simulates the PokéAPI endpoints locally with 60 pre-seeded Pokémon.

**Step 1 — Start the mock API server** (in a separate terminal):

```bash
npm run server
```

The mock server starts at `http://localhost:3001`.

Available mock endpoints:

| Method | Endpoint                            | Description                  |
| ------ | ----------------------------------- | ---------------------------- |
| `GET`  | `/api/v2/pokemon?limit=10&offset=0` | Paginated Pokémon list       |
| `GET`  | `/api/v2/pokemon/:id`               | Pokémon detail by ID or name |

**Step 2 — Point the app at the mock server:**

Edit `.env.development` and uncomment the mock URL:

```env
VITE_API_URL=http://localhost:3001/api/v2
```

Then update `src/api/pokemonApi.ts` to read from the env variable:

```ts
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "https://pokeapi.co/api/v2",
});
```

**Step 3 — Start Vite** (in another terminal):

```bash
npm run dev
```
