"use client";
import styles from "./page.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "./utils/useMousePosition";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className={styles.main}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <div className={styles.bgImage}>
          <div
            className={styles.image}
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            <p className={styles.position1}>EVERY SCENT HAS AN ORIGIN</p>
            <div className={styles.navbar}>
              <a href="https://tandreotti.cloud/">Profile</a>
              <span> • </span>
              <a href="https://dribbble.com/tandreotti">Projects</a>
              <span> • </span>
              <a href="mailto:tandreotti.dev@gmail.com?subject=Contact via sakura project">
                Contact
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <div className={styles.body}>
        <div className={styles.bgImage}>
          <div className={styles.image}></div>
        </div>
      </div>
      <p className={styles.position1Hovered}>EVERY SCENT HAS AN ORIGIN</p>
      <div className={styles.position2}>
        <span>IKIGAI • HANAMI • KOMOREBI</span>
        <p>
          &rdquo;In spring, when nature awakens from its winter slumber, sakuras
          bloom like a silent symphony of ephemeral colors. In this temporary
          realm of dancing petals lies the &lsquo;ikigai&lsquo; of the season —
          the true reason for being. Just as cherry blossoms unfold delicately,
          they remind us of life&lsquo;s fleeting beauty and the importance of
          finding meaning in every moment. Spring is a reminder that, like
          blossoming sakuras, our &lsquo;ikigai&lsquo; is also revealed in the
          constant pursuit of growth and renewal.&rdquo;
        </p>
      </div>
      <div className={styles.navbarHovered}>
        <a href="https://tandreotti.cloud/">Profile</a>
        <span> • </span>
        <a href="https://dribbble.com/tandreotti">Projects</a>
        <span> • </span>
        <a href="mailto:tandreotti.dev@gmail.com?subject=Contact via sakura project">
          Contact
        </a>
      </div>
    </main>
  );
}