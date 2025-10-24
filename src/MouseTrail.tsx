import React, { useState, useEffect } from "react";

type Trail = {
  id: string;
  x: number;
  y: number;
  icon: string;
};

export default function MouseTrail() {
  const [trails, setTrails] = useState<Trail[]>([]);
  const icons = ["⭐", "💫", "🔥", "✨", "🌸", "💥", "🌟", "🩵"];

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const id = Math.random().toString(36);
      const icon = icons[Math.floor(Math.random() * icons.length)];

      setTrails((prev) => [...prev, { id, x: e.clientX, y: e.clientY, icon }]);

      setTimeout(() => {
        setTrails((prev) => prev.filter((t) => t.id !== id));
      }, 2000);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-50"
      style={{ overflow: "hidden" }}
    >
      {trails.map((trail) => (
        <div
          key={trail.id}
          style={{
            position: "absolute",
            left: trail.x,
            top: trail.y - 70,
            transform: "translate(-50%, -50%)",
            fontSize: 24,
            animation: "fadeOut 2s forwards",
          }}
        >
          {trail.icon}
        </div>
      ))}

      <style>{`
        @keyframes fadeOut {
          0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
        }
      `}</style>
    </div>
  );
}
