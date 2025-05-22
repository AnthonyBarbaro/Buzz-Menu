"use client";

import Link from "next/link";
import { useState } from "react";
import { STORES } from "@/lib/stores";

export default function NavMenu() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-50 p-4 flex gap-6 items-center bg-white shadow-md">
      <Link href="/" className="text-xl font-bold text-green-700">
        Buzz Cannabis
      </Link>

      <div className="relative">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="text-gray-800 hover:text-green-700 font-medium"
        >
          Stores ▼
        </button>

        {open && (
          <div className="absolute left-0 mt-2 bg-white border border-gray-200 rounded shadow-md w-48">
            {Object.keys(STORES).map((slug) => (
              <Link
                key={slug}
                href={`/stores/${slug}`}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                {slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
