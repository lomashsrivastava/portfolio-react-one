import React, { useState, useEffect } from 'react';

export default function ParticlesBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-darker">
      {!isMobile && (
        <>
          <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-primary opacity-5 blur-[120px] mix-blend-screen animate-pulse" style={{ willChange: 'transform, opacity' }}></div>
          <div className="absolute top-[60%] left-[60%] w-[35vw] h-[35vw] rounded-full bg-secondary opacity-5 blur-[100px] mix-blend-screen" style={{ animation: 'pulse 4s infinite alternate', willChange: 'transform, opacity' }}></div>
        </>
      )}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPHBhdGggZD0iTTAgMEw4IDhaTTAgOEw4IDBaIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIi8+Cjwvc3ZnPg==')] opacity-10 md:opacity-30"></div>
    </div>
  );
}