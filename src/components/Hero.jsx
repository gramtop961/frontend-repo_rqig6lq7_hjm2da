import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle gradient vignette to increase contrast; doesn't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 md:px-10 py-6 border-b border-white/10 backdrop-blur-sm">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-semibold tracking-widest uppercase text-sm"
          >
            MONO/GRID
          </motion.div>
          <nav className="flex items-center gap-6 text-sm">
            {['Shop', 'Editorial', 'Manifesto'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                data-cursor="link"
                className="relative group"
              >
                <span className="transition-colors duration-300 group-hover:text-black">{item}</span>
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-white/40 transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </nav>
        </div>

        {/* Hero Copy */}
        <div className="flex-1 grid grid-rows-[1fr_auto]">
          <div className="px-6 md:px-10 flex items-center">
            <div className="w-full">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-[10vw] leading-[0.9] font-black tracking-tight"
              >
                BRUTAL<br />
                GEOMETRY
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mt-8 max-w-2xl text-white/70"
              >
                Monochrome streetwear engineered with architectural precision. Interaction as form — motion as material.
              </motion.p>
            </div>
          </div>

          {/* Scroll cue */}
          <div className="px-6 md:px-10 py-8 flex items-center justify-between border-t border-white/10">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-xs tracking-widest uppercase text-white/60"
            >
              Golden ratio cadence • ϕ rhythm
            </motion.div>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center gap-2 text-white/70"
            >
              <span className="h-6 w-px bg-white/30" />
              <span className="text-xs">Scroll</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
