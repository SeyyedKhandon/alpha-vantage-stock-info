export function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div
        className="inline-block h-10 w-10 animate-spin rounded-full border-[3px] border-current border-t-transparent text-blue-500"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
