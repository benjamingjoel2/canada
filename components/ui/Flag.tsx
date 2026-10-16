/** Small inline SVG flags (emoji flags don't render on Windows). Falls back to the ISO code. */
export function Flag({ code, label, className = 'h-3.5 w-5' }: { code: string; label: string; className?: string }) {
  const c = code.toUpperCase();
  const common = { className: `${className} inline-block shrink-0 rounded-[1px] shadow-[0_0_0_0.5px_rgba(0,0,0,0.15)]`, role: 'img' as const, 'aria-label': label };
  switch (c) {
    case 'FR':
      return (<svg viewBox="0 0 3 2" {...common}><path fill="#002654" d="M0 0h1v2H0z" /><path fill="#fff" d="M1 0h1v2H1z" /><path fill="#ce1126" d="M2 0h1v2H2z" /></svg>);
    case 'BE':
      return (<svg viewBox="0 0 3 2" {...common}><path fill="#000" d="M0 0h1v2H0z" /><path fill="#fdda24" d="M1 0h1v2H1z" /><path fill="#ef3340" d="M2 0h1v2H2z" /></svg>);
    case 'DE':
      return (<svg viewBox="0 0 5 3" {...common}><path fill="#000" d="M0 0h5v1H0z" /><path fill="#d00" d="M0 1h5v1H0z" /><path fill="#ffce00" d="M0 2h5v1H0z" /></svg>);
    case 'CH':
      return (<svg viewBox="0 0 32 32" {...common}><path fill="#d52b1e" d="M0 0h32v32H0z" /><path fill="#fff" d="M13 6h6v7h7v6h-7v7h-6v-7H6v-6h7z" /></svg>);
    case 'CA':
      return (<svg viewBox="0 0 4 2" {...common}><path fill="#d52b1e" d="M0 0h1v2H0zM3 0h1v2H3z" /><path fill="#fff" d="M1 0h2v2H1z" /><path fill="#d52b1e" d="M2 .45l.12.3.25-.1-.07.38.2.04-.18.18.05.15H2.05v.25h-.1v-.25H1.63l.05-.15-.18-.18.2-.04-.07-.38.25.1z" /></svg>);
    case 'US':
      return (
        <svg viewBox="0 0 19 10" {...common}>
          <path fill="#b22234" d="M0 0h19v10H0z" />
          <path stroke="#fff" strokeWidth=".77" d="M0 1.15h19M0 2.7h19M0 4.23h19M0 5.77h19M0 7.3h19M0 8.85h19" />
          <path fill="#3c3b6e" d="M0 0h7.6v5.38H0z" />
        </svg>
      );
    case 'GB':
      return (
        <svg viewBox="0 0 60 30" {...common}>
          <path fill="#012169" d="M0 0h60v30H0z" />
          <path stroke="#fff" strokeWidth="6" d="M0 0l60 30M60 0L0 30" />
          <path stroke="#c8102e" strokeWidth="2" d="M0 0l60 30M60 0L0 30" />
          <path stroke="#fff" strokeWidth="10" d="M30 0v30M0 15h60" />
          <path stroke="#c8102e" strokeWidth="6" d="M30 0v30M0 15h60" />
        </svg>
      );
    case 'AU':
      return (
        <svg viewBox="0 0 60 30" {...common}>
          <path fill="#012169" d="M0 0h60v30H0z" />
          <g transform="scale(.5)"><path stroke="#fff" strokeWidth="6" d="M0 0l60 30M60 0L0 30" /><path stroke="#fff" strokeWidth="10" d="M30 0v30M0 15h60" /><path stroke="#c8102e" strokeWidth="6" d="M30 0v30M0 15h60" /></g>
          <g fill="#fff"><circle cx="15" cy="23" r="2.6" /><circle cx="45" cy="25" r="1.4" /><circle cx="40" cy="12" r="1.3" /><circle cx="48" cy="8" r="1.3" /><circle cx="53" cy="15" r="1.2" /></g>
        </svg>
      );
    case 'NL':
      return (<svg viewBox="0 0 3 3" {...common}><path fill="#ae1c28" d="M0 0h3v1H0z" /><path fill="#fff" d="M0 1h3v1H0z" /><path fill="#21468b" d="M0 2h3v1H0z" /></svg>);
    default:
      return <span className="text-xs font-medium" aria-label={label}>{c}</span>;
  }
}
