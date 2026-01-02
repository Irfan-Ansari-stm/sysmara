// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2 text-gray-600">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-4 rounded bg-black px-4 py-2 text-white"
      >
        Go Home
      </Link>
    </div>
  );
}
