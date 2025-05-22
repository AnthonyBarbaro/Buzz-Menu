/* app/stores/page.tsx */
import Link from "next/link";
import { STORES } from "@/lib/stores";

export default function StoresHome() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Choose a Store</h1>
      <ul className="space-y-3">
        {Object.keys(STORES).map((slug) => (
          <li key={slug}>
            <Link
              href={`/stores/${slug}`}
              className="underline text-blue-600 hover:text-blue-800"
            >
              {slug.replace("-", " ")}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
