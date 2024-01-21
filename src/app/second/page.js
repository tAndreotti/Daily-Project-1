"use client";
import styles from "../page.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "../utils/useMousePosition";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className={styles.main2}>
      <motion.div
        initial={{ transform: "rotate(0)" }}
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          className={styles.position4}
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          EVERY SCENT HAS AN ORIGIN
        </p>
      </motion.div>

      <div className={styles.body}>
        <p className={styles.position3}>FOLLOW THE SPRING SCENTS</p>
      </div>
    </main>
  );
}
