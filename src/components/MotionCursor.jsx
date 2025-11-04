import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// A fluid custom cursor that reacts to links and presses.
const MotionCursor = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scaleMotion = useMotionValue(1);

  const xSpring = useSpring(x, { stiffness: 400, damping: 40, mass: 0.5 });
  const ySpring = useSpring(y, { stiffness: 400, damping: 40, mass: 0.5 });
  const scaleSpring = useSpring(scaleMotion, { stiffness: 300, damping: 30 });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);

    const onMouseDown = () => scaleMotion.set(0.8);
    const onMouseUp = () => scaleMotion.set(1);

    // Link hover amplification via data attribute
    const onOver = (e) => {
      const el = e.target.closest('[data-cursor]');
      if (el) {
        scaleMotion.set(1.8);
      }
    };
    const onOut = (e) => {
      const el = e.target.closest('[data-cursor]');
      if (el) {
        scaleMotion.set(1);
      }
    };

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, [x, y, scaleMotion]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-50 h-4 w-4 rounded-full bg-white mix-blend-difference"
      style={{
        x: xSpring,
        y: ySpring,
        scale: scaleSpring,
        translateX: '-50%',
        translateY: '-50%',
        opacity: visible ? 1 : 0,
      }}
    />
  );
};

export default MotionCursor;
