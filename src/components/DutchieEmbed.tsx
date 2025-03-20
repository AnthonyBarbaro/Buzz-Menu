"use client";

import { useEffect, useState } from "react";

// Single Dutchie Script URL
const scriptSrc = "https://dutchie.com/api/v2/embedded-menu/6418c162f9c0130184998ad5.js?chainLocations=true";

const DutchieEmbed = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const loadScript = () => {
      if (!document.getElementById("dutchie--embed__script")) {
        const script = document.createElement("script");
        script.src = scriptSrc;
        script.async = true;
        script.id = "dutchie--embed__script";
        document.body.appendChild(script);
        setScriptLoaded(true);
      }
    };

    loadScript();
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Dutchie Store Menu (Automatically Handles Chain Locations) */}
      

      {!scriptLoaded && <p className="text-gray-500">Loading menu...</p>}
    </div>
  );
};

export default DutchieEmbed;
