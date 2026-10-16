import { Fragment } from 'react';

/** Renders *word* segments as <em>, the italic-emphasis style used in headings and titles. */
export function Italic({ text }: { text: string }) {
  const parts = text.split(/(\*[^*]+\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('*') && part.endsWith('*') ? (
          <em key={i}>{part.slice(1, -1)}</em>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
