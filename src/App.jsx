import React from 'react';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Editorial from './components/Editorial';
import MotionCursor from './components/MotionCursor';

const App = () => {
  return (
    <div className="bg-black text-white selection:bg-white selection:text-black">
      <MotionCursor />
      <Hero />
      <Showcase />
      <Editorial />
      <section className="bg-black text-white border-t border-white/10">
        <div className="px-6 md:px-10 py-16 md:py-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h4 className="text-2xl md:text-3xl font-extrabold tracking-tight">Ultra-functional. Cinematic motion.</h4>
            <p className="mt-3 text-white/70 max-w-xl">
              Add your editorial imagery and product assets and they will snap into the existing rhythm — the layout is designed to stay balanced and alive.
            </p>
          </div>
          <a href="#shop" data-cursor="link" className="inline-flex items-center gap-3 group text-sm">
            <span className="relative">
              <span className="absolute inset-0 translate-y-0.5 translate-x-0.5 bg-white/20" />
              <span className="relative border border-white px-4 py-2 transition-colors group-hover:bg-white group-hover:text-black">
                View Collection
              </span>
            </span>
            <span className="h-px w-10 bg-white/40 transition-all duration-500 group-hover:w-16" />
          </a>
        </div>
      </section>
      <footer className="bg-black text-white border-t border-white/10">
        <div className="px-6 md:px-10 py-10 flex items-center justify-between text-xs text-white/60">
          <span>© {new Date().getFullYear()} MONO/GRID</span>
          <span>Designed on a ϕ grid</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
