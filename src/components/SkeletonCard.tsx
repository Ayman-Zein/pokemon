import { memo } from "react";

export const SkeletonCard = memo(function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <div className="mx-auto mb-4 aspect-square w-3/4 rounded-lg bg-gray-200" />
      <div className="mx-auto h-4 w-2/3 rounded bg-gray-200" />
      <div className="mx-auto mt-2 h-3 w-1/3 rounded bg-gray-200" />
    </div>
  );
});
