export function FrameworksSection() {
  const frameworks = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Redwood", icon: "🌲" },
    { name: "Flutter", icon: "🔷" },
    { name: "Kotlin", icon: "🟣" },
    { name: "SvelteKit", icon: "🧡" },
    { name: "SolidJS", icon: "🔵" },
    { name: "Vue", icon: "💚" },
    { name: "Nuxt", icon: "💚" },
    { name: "Refine", icon: "⚡" },
  ];

  return (
    <div id="frameworks" className="container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20">
      <div className="relative z-20 w-full max-w-6xl mx-auto h-full flex flex-col xl:flex-row gap-4 items-center justify-between">
        <div className="text-center xl:text-left text-2xl md:text-4xl text-foreground-lighter whitespace-nowrap">
          Use Supabase with
          <div className="block">
            <span className="inline-block text-foreground">any framework</span>
          </div>
        </div>
        <div className="grid grid-cols-5 md:grid-cols-10">
          {frameworks.map((framework) => (
            <a key={framework.name} className="transition-opacity group" href={`/docs/guides/getting-started/quickstarts/${framework.name.toLowerCase()}`}>
              <div className="m-1 bg-surface-200 h-16 w-16 flex items-center justify-center rounded-md group-hover:border transition-all text-foreground-light border-foreground-light hover:shadow text-2xl">
                {framework.icon}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}