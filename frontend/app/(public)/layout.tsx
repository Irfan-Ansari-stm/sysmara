// src/app/(public)/layout.tsx
import Link from "next/link";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar */}
      <header className="border-b bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold">
            MyApp
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/about" className="text-gray-600 hover:text-black">
              About
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-black">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-black">
              Contact
            </Link>
            <Link
              href="/admin"
              className="rounded bg-black px-4 py-2 text-white"
            >
              Admin
            </Link>
          </div>
        </nav>
      </header>

      {/* Page Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
