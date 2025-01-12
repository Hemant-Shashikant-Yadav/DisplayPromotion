'use client';

import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  texts: string[];
  speed?: number;
  delay?: number;
}

export default function TypewriterText({ texts, speed = 100, delay = 2000 }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const animate = () => {
      const currentText = texts[currentIndex];
      
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          timeout = setTimeout(() => {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          }, speed);
        } else {
          timeout = setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        if (displayText.length > 0) {
          timeout = setTimeout(() => {
            setDisplayText(currentText.slice(0, displayText.length - 1));
          }, speed / 2);
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    animate();
    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts, speed, delay]);

  return <span className="text-sky-600">{displayText}</span>;
}