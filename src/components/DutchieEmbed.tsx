/* components/DutchieEmbed.tsx */
"use client";
import { useEffect } from "react";

export default function DutchieEmbed({ scriptSrc }: { scriptSrc: string }) {
  const CONTAINER_ID = "dutchie--embed__container";
  const SCRIPT_ID = "dutchie--embed__script";

  useEffect(() => {
    // ① remove any stray Dutchie menu roots left in <body>
    document
      .querySelectorAll('[data-dutchie-embedded-menu]')
      .forEach((n) => n.parentNode?.removeChild(n));

    // ② remove the previous <script>
    document.getElementById(SCRIPT_ID)?.remove();

    // ③ clear our container
    const container = document.getElementById(CONTAINER_ID);
    if (container) container.innerHTML = "";

    // ④ inject the new script
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = scriptSrc;
    script.async = true;
    container?.appendChild(script);

    // ⑤ cleanup when unmounting
    return () => {
      script.remove();
      container && (container.innerHTML = "");
      document
        .querySelectorAll('[data-dutchie-embedded-menu]')
        .forEach((n) => n.parentNode?.removeChild(n));
    };
  }, [scriptSrc]);

  return <div id={CONTAINER_ID} className="w-full flex justify-center" />;
}
