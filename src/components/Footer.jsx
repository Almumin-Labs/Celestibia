import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/src/assets/logo.jpeg.png" alt="Celestibia Logo" className="w-10 h-10 object-contain rounded-md" />
          <div>
            <div className="font-semibold">Celestibia Solutions Pvt Ltd</div>
            <div className="text-sm text-slate-500">We create cloud, DevOps, data & AI solutions.</div>
          </div>
        </div>

        <div className="text-sm text-slate-600">
          <div>Contact: <a className="text-brand-700" href="mailto:sales@celestibia.com">sales@celestibia.com</a> • 8308535810</div>
          <div className="mt-2">Follow:
            <a href="https://www.linkedin.com/company/celestibia-solutions-pvt/" className="ml-2 text-brand-700">LinkedIn</a> •
            <a href="https://www.instagram.com/celestibia_solutions_pvt_pune/" className="ml-2 text-brand-700">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
