import React, { useEffect } from "react";
import { MouseCursor } from "../api/MousecursorHandler";
import Navbar from "../layouts/Navbar";


export default function Mainlayouts() {
  useEffect(() => {
    const cursorEl = document.getElementById("cursor");
    const trailEl = document.getElementById("cursorTrail");
    if (!cursorEl) return;

    const api = new MouseCursor({
      root: document.documentElement,
      cursorEl,
      trailEl,
      hideNative: true,
      speed: 0.2,
      ease: "expo.out",
    }).attach();

    return () => api.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-white text-white cursor-none flex">
      <Navbar />
      <div
        id="cursor"
        className="pointer-events-none fixed left-0 top-0 z-[9999] w-6 h-6 rounded-full border-2 border-orange-300 bg-orange-300 opacity-1"
      />
      <div
        id="cursorTrail"
        className="pointer-events-none fixed left-0 top-0 z-[9998] w-4 h-4 rounded-full border border-orange-300 bg-yellow-200/10 opacity-0"
      />
      <div className="bg-blue-300 width=[80%] height=[100%] right-0 flex-1 text-center">
        콘텐츠 영역
      </div>
    </div>
  );
}
