interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold gradient-text mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl mx-auto text-white/50 text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
    </div>
  );
}
