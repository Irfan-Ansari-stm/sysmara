// src/app/loading.tsx
export default function GlobalLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-black" />
        <p className="text-sm text-gray-500">Loading...</p>
      </div>
    </div>
  );
}
