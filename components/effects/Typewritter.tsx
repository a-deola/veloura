"use client";
import { useState, useEffect } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
}

export default function Typewriter({
  words,
  typingSpeed = 120,
  deletingSpeed = 80,
  delayBetween = 1500,
}: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === words.length) {
      setIndex(0);
    }

    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), delayBetween);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    subIndex,
    deleting,
    index,
    words,
    typingSpeed,
    deletingSpeed,
    delayBetween,
  ]);

  return (
    <span className="font-semibold text-[oklch(86.59%_0.129_83.46)] font-serif text-5xl md:text-7xl mb-4">
      <i>
        {`${words[index].substring(0, subIndex)}`}
        <span className="animate-pulse">|</span>
      </i>
    </span>
  );
}
