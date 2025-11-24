import { useEffect, useState } from "react";

export const StarsAnimation = () => {
  const [stars, setStars] = useState<Array<{id: number, style: React.CSSProperties}>>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 15}s`,
        animationDuration: `${15 + Math.random() * 20}s`,
        width: `${Math.random() > 0.5 ? '12px' : '8px'}`, // Slightly larger for star shape
        height: `${Math.random() > 0.5 ? '12px' : '8px'}`,
        opacity: Math.random() * 0.7 + 0.3
      }
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute text-yellow-400 animate-float-star"
          style={{
            ...star.style,
            top: '110%', // Start below the screen
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-md">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      ))}
    </div>
  );
};
