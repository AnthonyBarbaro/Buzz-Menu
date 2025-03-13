// components/DutchieEmbed.tsx
'use client';
import { useEffect } from 'react';

const DutchieEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://dutchie.com/api/v2/embedded-menu/64b6a43517d467000936cba3.js?chainLocations=true';
    script.async = true;
    script.id = 'dutchie--embed__script';
    document.body.appendChild(script);
  }, []);

  return <div id="dutchie-menu-container"></div>;
};

export default DutchieEmbed;
