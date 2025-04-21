import { Button } from "@ui/library";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4 py-16 text-center">
      <div className="mb-8 flex items-center gap-2 flex-col">
        <h1 className="text-6xl sm:text-xl font-extrabold text-gray-800 mb-4">
          Reusable UI Components
        </h1>
        <p className="text-base sm:text-xl text-gray-600 max-w-xl">
          This is a simple homepage built using a ui libary
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="mailto:bravenima@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="primary" size="medium">
            Gmail
          </Button>
        </Link>

        <Link
          href="https://github.com/BraveNima/tenet"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="secondary" size="medium">
            GitHub
          </Button>
        </Link>
      </div>
    </main>
  );
}
