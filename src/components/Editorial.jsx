import React from 'react';
import { motion } from 'framer-motion';

const Editorial = () => {
  return (
    <section id="editorial" className="bg-black text-white">
      <div className="px-6 md:px-10 pt-24 md:pt-36 pb-24 border-t border-white/10">
        <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="md:col-span-5"
          >
            <h3 className="text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-tight">
              Function is the aesthetic.
            </h3>
            <p className="mt-6 text-white/70 max-w-prose">
              An architectural approach to streetwear. Black and white as a measured choice — not a limitation. Rhythm in spacing, precision in proportion. Materials are honest, lines are visible, and every transition is deliberate.
            </p>
            <a
              href="#"
              data-cursor="link"
              className="mt-8 inline-flex items-center gap-3 text-sm group"
            >
              <span className="relative">
                <span className="absolute inset-0 translate-y-0.5 translate-x-0.5 bg-white/20" />
                <span className="relative border border-white px-4 py-2 transition-colors group-hover:bg-white group-hover:text-black">
                  Read Manifesto
                </span>
              </span>
              <span className="h-px w-10 bg-white/40 transition-all duration-500 group-hover:w-16" />
            </a>
          </motion.div>

          <div className="md:col-span-7 grid grid-cols-2 gap-4 md:gap-6">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative ${i % 3 === 0 ? 'aspect-[1/1.3]' : 'aspect-square'} border border-white/10 overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${i % 2 === 0 ? 'from-neutral-900 to-black' : 'from-neutral-800 to-neutral-900'} transition-transform duration-700`} />
                {/* Placeholder for editorial imagery */}
                <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between">
                  <div className="text-xs text-white/50">ED {i + 1}</div>
                  <div className="text-sm text-white/70 max-w-[20ch] leading-tight">
                    Space reserved for high-contrast editorial imagery and captions.
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Editorial;
