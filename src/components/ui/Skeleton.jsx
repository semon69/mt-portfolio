/** Shimmering placeholder shown while a request is in flight. */
export const Skeleton = ({ className = "" }) => (
  <div
    className={`relative overflow-hidden rounded-md bg-raised ${className}`}
    aria-hidden="true"
  >
    <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-ink/[0.07] to-transparent" />
  </div>
);

export const CardSkeleton = () => (
  <div className="rounded-xl border border-line bg-surface overflow-hidden">
    <Skeleton className="aspect-[16/10] rounded-none" />
    <div className="p-6 space-y-3">
      <Skeleton className="h-5 w-2/3" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/5" />
    </div>
  </div>
);

export default Skeleton;
