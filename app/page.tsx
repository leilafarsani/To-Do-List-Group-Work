"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClear = () => {
    setInput("");
  };

  return (
    <main className={styles.main}>
      <div>
        <input type="text" value={input} onChange={handleInput} />
        <button onClick={handleClear}>clear</button>
      </div>
    </main>
  );
}
