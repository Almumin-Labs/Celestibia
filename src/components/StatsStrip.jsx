import React, { useEffect, useState } from "react";

export default function StatsStrip() {
  const stats = [
    { label: "Years of Experience", value: 5 },
    { label: "Certified Domains", value: 20 },
    { label: "Projects Delivered", value: 85 },
    { label: "Success Rate", value: 99.99, suffix: "%" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 1500;
      const increment = end / (duration / 20);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = start.toFixed(0);
          return updated;
        });
      }, 20);
    });
  }, []);

  return (
    <section className="relative w-full py-14 bg-[#020617]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 text-white">

        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col items-center text-center relative"
          >
            {/* Number */}
            <h2 className="text-5xl font-bold text-white/90 tracking-wide">
              {counts[index]}
              {stat.suffix ? stat.suffix : "+"}
            </h2>

            {/* Label */}
            <p className="mt-2 text-lg text-gray-300">{stat.label}</p>

            {/* Divider Lines */}
            {index !== stats.length - 1 && (
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-14 bg-gradient-to-b from-transparent via-[#3b82f6] to-transparent opacity-60" />
            )}
          </div>
        ))}

      </div>
    </section>
  );
}
