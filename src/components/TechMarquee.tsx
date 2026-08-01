const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Tailwind CSS",
  "PostgreSQL",
  "Firebase",
  "Prisma",
  "AWS",
  "Docker",
  "Web3",
  "Solidity",
  "LLM / AI",
  "Vercel",
];

export default function TechMarquee() {
  const row = [...stack, ...stack];

  return (
    <div className="border-y border-white/[0.06] bg-white/[0.012] py-5">
      <div className="marquee">
        <div className="marquee-track items-center gap-10 pr-10">
          {row.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="font-code flex items-center gap-10 text-[12px] tracking-[0.22em] whitespace-nowrap text-[#626874] uppercase"
            >
              {tech}
              <span className="text-[#818cf8]/40">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
