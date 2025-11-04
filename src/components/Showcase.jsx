import React from 'react';
import { motion } from 'framer-motion';

const tiles = [
  {
    title: '01 — Modular Shell',
    ratio: 'aspect-[1.618/1]',
    span: 'md:col-span-2',
    tone: 'from-neutral-900 to-black',
  },
  {
    title: '02 — Seam Lines',
    ratio: 'aspect-[1/1]',
    span: '',
    tone: 'from-neutral-800 to-neutral-900',
  },
  {
    title: '03 — Oversized Tee',
    ratio: 'aspect-[1/1.3]',
    span: '',
    tone: 'from-neutral-900 to-black',
  },
  {
    title: '04 — Technical Cargo',
    ratio: 'aspect-[1.618/1]',
    span: 'md:col-span-2',
    tone: 'from-neutral-800 to-neutral-900',
  },
  {
    title: '05 — Structural Hoodie',
    ratio: 'aspect-[1/1]',
    span: '',
    tone: 'from-neutral-900 to-black',
  },
  {
    title: '06 — Midweight Knit',
    ratio: 'aspect-[1/1.2]',
    span: '',
    tone: 'from-neutral-800 to-neutral-900',
  },
];

const Showcase = () => {
  return (
    <section id="shop" className="bg-black text-white">
      <div className="px-6 md:px-10 pt-20 md:pt-28 pb-16 border-t border-white/10">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Streetwear, reduced.</h2>
          <p className="max-w-md text-sm md:text-base text-white/60">
            Asymmetric grid with visible structure. Hover to invert and reveal micro-motion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiles.map((t, i) => (
            <motion.a
              key={t.title}
              href="#"
              data-cursor="link"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative block ${t.span}`}
            >
              <div className={`relative overflow-hidden ${t.ratio} border border-white/10`}>                
                <div className={`absolute inset-0 bg-gradient-to-br ${t.tone} transition-all duration-700 group-hover:brightness-125`} />
                {/* Visible geometry lines */}
                <div className="pointer-events-none absolute inset-0 opacity-10">
                  {Array.from({ length: 3 }).map((_, idx) => (
                    <span
                      key={`v-${idx}`}
                      className="absolute top-0 h-full border-r border-white/30"
                      style={{ left: `${((idx + 1) / 4) * 100}%` }}
                    />
                  ))}
                  {Array.from({ length: 3 }).map((_, idx) => (
                    <span
                      key={`h-${idx}`}
                      className="absolute left-0 w-full border-b border-white/30"
                      style={{ top: `${((idx + 1) / 4) * 100}%` }}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-6">
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span>DROP {String(i + 1).padStart(2, '0')}</span>
                    <span>ϕ</span>
                  </div>
                  <div>
                    <div className="text-lg md:text-2xl font-semibold transition-all duration-500 group-hover:invert">
                      {t.title}
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-white/60">
                      <span className="h-px w-10 bg-white/30 transition-all duration-500 group-hover:w-16" />
                      <span className="text-xs">Explore</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
