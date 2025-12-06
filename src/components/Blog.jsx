import React from "react";

export default function Blog() {
  return (
    <section id="blog" className="py-28 bg-[#080b1f] text-white">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-6">
          Blog <span className="text-blue-400">& Insights</span>
        </h2>

        <p className="text-white/60 text-lg max-w-3xl mx-auto">
          Articles on Cloud, DevOps, Data Engineering & AI are on the way.
          Stay tuned for expert insights and technical deep dives.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((b) => (
            <div
              key={b}
              className="p-8 bg-white/5 backdrop-blur-xl border border-white/10
                         rounded-2xl shadow-lg hover:scale-105 transition"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br 
                              from-blue-600 to-purple-600 mx-auto mb-5" />

              <h3 className="text-xl font-semibold mb-3">Coming Soon</h3>
              <p className="text-white/60 text-sm">
                Fresh content will be published here soon.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
