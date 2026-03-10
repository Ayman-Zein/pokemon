interface LoadMoreButtonProps {
  onClick: () => void;
  isLoading: boolean;
  hasMore: boolean;
  loadedCount: number;
}

export function LoadMoreButton({
  onClick,
  isLoading,
  hasMore,
  loadedCount,
}: LoadMoreButtonProps) {
  if (!hasMore && loadedCount > 0) {
    return (
      <div className="flex flex-col items-center gap-1 py-8">
        <p className="text-sm text-gray-400">
          You&apos;ve seen all Pokémon!
        </p>
        <p className="text-xs text-gray-300">
          Showing {loadedCount} Pokémon
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2 py-8">
      {isLoading ? (
        <>
          <div className="flex items-center gap-2.5 text-sm text-gray-500">
            <svg
              className="h-5 w-5 animate-spin text-emerald-500"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                className="opacity-90"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Loading more Pokémon...
          </div>
          <p className="text-xs text-gray-400">
            Showing {loadedCount} Pokémon
          </p>
        </>
      ) : (
        <>
          <button
            onClick={onClick}
            className="cursor-pointer rounded-full bg-gray-900 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-700"
          >
            Load More Pokémon
          </button>
          {loadedCount > 0 && (
            <p className="text-xs text-gray-400">
              Showing {loadedCount} Pokémon
            </p>
          )}
        </>
      )}
    </div>
  );
}
