import type { ReactNode } from "react";

interface PokemonGridProps {
  children: ReactNode;
}

export function PokemonGrid({ children }: PokemonGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {children}
    </div>
  );
}
