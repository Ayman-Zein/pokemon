import { memo, useMemo } from "react";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  totalCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  isLoading?: boolean;
}

export const PaginationControls = memo(function PaginationControls({
  currentPage,
  totalPages,
  totalCount,
  pageSize,
  onPageChange,
  isLoading,
}: PaginationControlsProps) {
  const pages = useMemo(() => {
    const range: (number | "ellipsis")[] = [];
    const delta = 2;

    const left = Math.max(2, currentPage - delta);
    const right = Math.min(totalPages - 1, currentPage + delta);

    range.push(1);
    if (left > 2) range.push("ellipsis");
    for (let i = left; i <= right; i++) range.push(i);
    if (right < totalPages - 1) range.push("ellipsis");
    if (totalPages > 1) range.push(totalPages);

    return range;
  }, [currentPage, totalPages]);

  const shown = Math.min(pageSize, totalCount - (currentPage - 1) * pageSize);

  return (
    <div className="mt-8 flex flex-col items-center gap-3">
      <nav className="inline-flex items-center gap-1 rounded-xl bg-gray-100/80 px-3 py-2.5">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1 || isLoading}
          className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-white hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-40"
        >
          &lsaquo; Previous
        </button>

        {pages.map((page, i) =>
          page === "ellipsis" ? (
            <span key={`e-${i}`} className="px-1.5 text-sm text-gray-400">
              &hellip;
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              disabled={isLoading}
              className={`min-w-9 cursor-pointer rounded-lg px-2.5 py-2 text-sm font-semibold transition-colors ${
                page === currentPage
                  ? "bg-gray-900 text-white shadow-sm"
                  : "text-gray-600 hover:bg-white hover:text-gray-900"
              } disabled:cursor-not-allowed`}
            >
              {page}
            </button>
          ),
        )}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages || isLoading}
          className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-white hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next &rsaquo;
        </button>
      </nav>

      <p className="pb-2 text-xs text-gray-400">
        Page {currentPage} of {totalPages} ({shown} Pokemon shown)
      </p>
    </div>
  );
});
