interface Props {
  label: string;
  variant?: 'cyan' | 'amber';
}

export default function GlowBadge({ label, variant = 'cyan' }: Props) {
  const colors =
    variant === 'cyan'
      ? 'border-cyan-400/30 text-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.15)]'
      : 'border-amber-400/30 text-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.15)]';

  return (
    <span
      className={`inline-block px-4 py-1.5 rounded-full text-xs md:text-sm font-mono uppercase tracking-widest border backdrop-blur-sm bg-white/[0.03] ${colors}`}
    >
      {label}
    </span>
  );
}
