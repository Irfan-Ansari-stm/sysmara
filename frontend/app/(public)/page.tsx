// src/app/(public)/page.tsx
import Link from "next/link";

export default function PublicHomePage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      {/* Hero */}
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Build Faster. Scale Smarter.
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          A modern platform with a public website and a powerful admin panel.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/pricing"
            className="rounded bg-black px-6 py-3 text-white"
          >
            Get Started
          </Link>
          <Link
            href="/contact"
            className="rounded border px-6 py-3 text-gray-700"
          >
            Contact Sales
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="mt-24 grid gap-12 sm:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold">Fast Setup</h3>
          <p className="mt-2 text-gray-600">
            Clean architecture with Next.js, Express, and PostgreSQL.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Secure Admin</h3>
          <p className="mt-2 text-gray-600">
            Dedicated admin panel with role-based access.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Scalable</h3>
          <p className="mt-2 text-gray-600">
            Designed to grow from MVP to enterprise.
          </p>
        </div>
      </div>
    </section>
  );
}
