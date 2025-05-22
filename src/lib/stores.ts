// lib/stores.ts
export const STORES = {
    "mission-valley":
      "https://dutchie.com/api/v2/embedded-menu/64b6a43517d467000936cba3.js",
    "sorrento":
      "https://dutchie.com/api/v2/embedded-menu/677c3592d375488dd9cd7a42.js",
  } as const;
  export type StoreSlug = keyof typeof STORES;
  