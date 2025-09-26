export function CompanyLogos() {
  const logos = [
    { name: "mozilla", src: "https://supabase.com/images/logos/publicity/mozilla.svg" },
    { name: "github", src: "https://supabase.com/images/logos/publicity/github.svg" },
    { name: "1password", src: "https://supabase.com/images/logos/publicity/1password.svg" },
    { name: "pwc", src: "https://supabase.com/images/logos/publicity/pwc.svg" },
    { name: "pika", src: "https://supabase.com/images/logos/publicity/pika.svg" },
    { name: "humata", src: "https://supabase.com/images/logos/publicity/humata.svg" },
    { name: "udio", src: "https://supabase.com/images/logos/publicity/udio.svg" },
    { name: "langchain", src: "https://supabase.com/images/logos/publicity/langchain.svg" },
    { name: "resend", src: "https://supabase.com/images/logos/publicity/resend.svg" },
    { name: "loops", src: "https://supabase.com/images/logos/publicity/loops.svg" },
    { name: "mobbin", src: "https://supabase.com/images/logos/publicity/mobbin.svg" },
    { name: "gopuff", src: "https://supabase.com/images/logos/publicity/gopuff.svg" },
    { name: "chatbase", src: "https://supabase.com/images/logos/publicity/chatbase.svg" },
    { name: "betashares", src: "https://supabase.com/images/logos/publicity/betashares.svg" },
    { name: "submagic", src: "https://supabase.com/images/logos/publicity/submagic.svg" },
  ];

  return (
    <div className="pb-14 md:pb-24">
      <div className="max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
        <div className="relative w-full mx-auto max-w-4xl opacity-90 dark:opacity-70 overflow-hidden before:content-[''] before:absolute before:inset-0 before:w-full before:bg-[linear-gradient(to_right,hsl(var(--background))_0%,transparent_10%,transparent_90%,hsl(var(--background))_100%)] before:z-10 flex flex-nowrap px-5 lg:px-12 justify-center gap-4 lg:gap-8">
          <div className="gap-4 lg:gap-8 flex flex-nowrap w-fit animate-marquee will-change-transform motion-reduce:animate-none motion-reduce:will-change-none">
            {logos.map((logo) => (
              <div key={logo.name} className="h-12 lg:h-12 w-max !inline-block">
                <img
                  src={logo.s
                  alt={logo.name}
                  className="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
                  draggable="false"
                />
              </div>
            ))}
          </div>
          <div className="gap-4 lg:gap-8 flex flex-nowrap w-fit animate-marquee will-change-transform motion-reduce:animate-none motion-reduce:will-change-none">
            {logos.map((logo) => (
              <div key={`${logo.name}-2`} className="h-12 lg:h-12 w-max !inline-block">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
                  draggable="false"
                />
              </div>
            ))}
          </div>
          <div className="gap-4 lg:gap-8 flex flex-nowrap w-fit animate-marquee will-change-transform motion-reduce:animate-none motion-reduce:will-change-none">
            {logos.map((logo) => (
              <div key={`${logo.name}-3`} className="h-12 lg:h-12 w-max !inline-block">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-12 lg:h-12 !min-h-12 lg:!min-h-12 w-auto block"
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="w-full text-center text-sm text-foreground-lighter mt-6 lg:mt-8">
        Trusted by fast-growing companies worldwide
      </p>
    </div>
  );
}
