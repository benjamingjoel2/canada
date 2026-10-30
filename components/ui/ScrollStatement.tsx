'use client';

import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef } from 'react';
import { useReducedMotionSafe } from '@/lib/useReducedMotionSafe';

function Word({ word, italic, space, progress, range }: { word: string; italic: boolean; space: boolean; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.55, 1]);
  const Tag = italic ? motion.em : motion.span;
  return (
    <>
      <Tag style={{ opacity }}>{word}</Tag>
      {space ? ' ' : null}
    </>
  );
}

/** No space before punctuation that follows an italic word ("*Cairo*. Plan"). */
const spaceAfter = (words: { w: string }[], i: number) => i < words.length - 1 && !/^[.,;:!?)»…]/.test(words[i + 1].w);

/**
 * A single large statement that lights up word by word as it scrolls through the viewport.
 * Words wrapped in *asterisks* render in italic. Reduced motion: shown fully, no effect.
 */
export function ScrollStatement({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] });
  const words: { w: string; italic: boolean }[] = [];
  text.split(/(\*[^*]+\*)/g).filter(Boolean).forEach((part) => {
    const italic = part.startsWith('*') && part.endsWith('*');
    const pieces = part.replace(/\*/g, '').split(/\s+/).filter(Boolean);
    pieces.forEach((w) => words.push({ w, italic }));
  });
  const plain = text.replace(/\*/g, '');

  if (reduce) {
    return (
      <p ref={ref} className={className}>
        {words.map((x, i) => (
          <span key={i}>
            {x.italic ? <em>{x.w}</em> : x.w}
            {spaceAfter(words, i) ? ' ' : null}
          </span>
        ))}
      </p>
    );
  }
  return (
    <p ref={ref} className={className}>
      <span className="sr-only">{plain}</span>
      <span aria-hidden>
        {words.map((x, i) => (
          <Word key={i} word={x.w} italic={x.italic} space={spaceAfter(words, i)} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
        ))}
      </span>
    </p>
  );
}
