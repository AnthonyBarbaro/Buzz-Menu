"use client";

import { useEffect, useState } from "react";

// Store Locations
const stores = [
  {
    id: "mission-valley",
    name: "Buzz Cannabis - Mission Valley",
    scriptSrc: "https://dutchie.com/api/v2/embedded-menu/64b6a43517d467000936cba3.js",
  },{
    id: "la-mesa",
    name: "Buzz Cannabis - La Mesa",
    scriptSrc: "https://dutchie.com/api/v2/embedded-menu/6418c162f9c0130184998ad5.js",
  },
  {
    id: "sorrento-valley",
    name: "Buzz Cannabis - Sorrento Valley",
    scriptSrc: "https://dutchie.com/api/v2/embedded-menu/677c3592d375488dd9cd7a42.js",
  },
];

const DutchieEmbed = () => {
  const [selectedStore, setSelectedStore] = useState(stores[0]); // Default store

  useEffect(() => {
    const loadScript = () => {
      // Remove existing script if any
      const existingScript = document.getElementById("dutchie--embed__script");
      if (existingScript) {
        existingScript.remove();
      }

      // Create and append new script
      const script = document.createElement("script");
      script.src = selectedStore.scriptSrc;
      script.async = true;
      script.id = "dutchie--embed__script";
      document.body.appendChild(script);
    };

    loadScript();
  }, [selectedStore]); // Re-run when store changes

  return (
    <div className="w-full flex flex-col items-center">
      {/* Store Selector Dropdown */}
      <label className="text-lg font-semibold mb-2">Select a Store:</label>
      <select
        className="border p-2 mb-4 rounded"
        onChange={(e) => {
          const store = stores.find((s) => s.id === e.target.value);
          if (store) setSelectedStore(store);
        }}
        value={selectedStore.id}
      >
        {stores.map((store) => (
          <option key={store.id} value={store.id}>
            {store.name}
          </option>
        ))}
      </select>

      {/* Dutchie Menu Container */}
      <div id="dutchie-menu-container"></div>
    </div>
  );
};

export default DutchieEmbed;
