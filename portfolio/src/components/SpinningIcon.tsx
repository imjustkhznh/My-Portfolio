'use client';
import { motion } from 'framer-motion';

export function SpinningIcon() {
  return (
    <motion.span
      animate={{ rotate: 360 }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }}
      className="inline-block text-2xl mr-3"
      style={{ 
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      ✦
    </motion.span>
  );
}
