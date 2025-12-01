import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      {/* Header/Navbar */}
      

      {/* Main Content */}
      <main className="flex-1">
        {/* Placeholder for main component - you can work on this later */}
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
              Welcome to Mechaniq
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Main content area - work in progress
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="/appointments"
                    className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                  >
                    Appointments
                  </Link>
                </li>
                <li>
                  <Link
                    href="/budget"
                    className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                  >
                    Budget
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Support
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                About
              </h3>
              <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                Mechaniq - Your trusted partner for appointments and budget
                management.
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-800">
            <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
              © {new Date().getFullYear()} Mechaniq. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
