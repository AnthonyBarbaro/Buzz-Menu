/* app/stores/[storeSlug]/page.tsx */
"use client";

import { useParams } from "next/navigation";
import { STORES, StoreSlug } from "@/lib/stores";
import DutchieEmbed from "@/components/DutchieEmbed";

export default function StorePage() {
  const { storeSlug } = useParams<{ storeSlug?: string }>(); // may be undefined
  const slug = storeSlug as StoreSlug | undefined;

  // Validate slug
  if (!slug || !(slug in STORES)) {
    return (
      <div className="p-8">
        <h1 className="text-xl font-bold">Store not found</h1>
        <p>We couldn’t match “{storeSlug ?? "(none)"}”.</p>
      </div>
    );
  }

  const scriptUrl = STORES[slug];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">
        {slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())} Menu
      </h1>
      {/* key forces a hard remount if you ever navigate client-side */}
      <DutchieEmbed key={scriptUrl} scriptSrc={scriptUrl} />
    </div>
  );
}
