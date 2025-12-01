import Link from "next/link";

export default function MainHeader() {
  return (
    <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-xl font-bold text-zinc-900 dark:text-zinc-50"
          >
            Mechaniq
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="/appointments"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            Appointments
          </Link>
          <Link
            href="/budget"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            Budget
          </Link>
        </div>
      </nav>
    </header>
  );
}