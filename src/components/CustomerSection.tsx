export function CustomerSection() {
  const testimonials = [
    {
      user: "@TyronBache",
      avatar: "https://supabase.com/_next/image?url=%2Fimages%2Ftwitter-profiles%2F89h9ROOs_400x400.jpg&w=128&q=75",
      content: "Really impressed with @supabase's Assistant.\n\nIt has helped me troubleshoot and solve complex CORS Configuration issues on Pinger."
    },
    {
      user: "@MinimEditor",
      avatar: "https://supabase.com/_next/image?url=%2Fimages%2Ftwitter-profiles%2F5KvPPRZz_400x400.jpg&w=128&q=75",
      content: "I've always used Supabase just as a database.\n\nYesterday, I helped debug a founder's vibe-coding project built with React + React Router — no backend server.\nThe \"backend\" was entirely Supabase Edge Functions as the API.\nFirst time using Supabase this way.\nImpressive."
    },
    {
      user: "@BowTiedQilin",
      avatar: "https://supabase.com/_next/image?url=%2Fimages%2Ftwitter-profiles%2FZmOmQeTl_400x400.jpg&w=128&q=75",
      content: "Working with @supabase has been one of the best dev experiences I've had lately.\n\nIncredibly easy to set up, great documentation, and so many fewer hoops to jump through than the competition.\n\nI definitely plan to use it on any and all future projects."
    },
    {
      user: "@justinjunodev",
      avatar: "https://supabase.com/_next/image?url=%2Fimages%2Ftwitter-profiles%2F9k_ZB9OO_400x400.jpg&w=128&q=75",
      content: "Y'all @supabase + @nextjs is amazing! 🙌 Barely an hour into a proof-of-concept and already have most of the functionality in place. 🤯🤯🤯"
    },
    {
      user: "@pontusab",
      avatar: "https://supabase.com/_next/image?url=%2Fimages%2Ftwitter-profiles%2FJwLEqyeo_400x400.jpg&w=128&q=75",
      content: "I love everything about Supabase."
    }
  ];

  return (
    <div className="container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 w-full text-center flex flex-col items-center !pb-0">
      <h3 className="text-2xl md:text-4xl text-foreground mb-4">Join the community</h3>
      <p className="text-foreground-lighter max-w-[300px] md:max-w-none text-lg">
        Discover what our community has to say about their Supabase experience.
      </p>
      <div className="my-4 flex justify-center gap-2">
        <a 
          target="_blank" 
          className="inline-flex items-center gap-2 px-3 py-2 text-sm bg-surface-100 border border-strong hover:border-stronger rounded-md transition-colors" 
          href="https://github.com/supabase/supabase/discussions"
        >
          GitHub discussions
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          </svg>
        </a>
        <a 
          target="_blank" 
          className="inline-flex items-center gap-2 px-3 py-2 text-sm bg-surface-100 border border-strong hover:border-stronger rounded-md transition-colors" 
          href="https://discord.supabase.com/"
        >
          Discord
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          </svg>
        </a>
      </div>

      {/* Testimonials Marquee */}
      <div className="group overflow-hidden relative transition-all max-h-[500px] w-auto flex-nowrap hidden lg:flex">
        <div className="columns-1 sm:columns-2 md:columns-2 lg:columns-3 xl:columns-5 gap-4 h-fit pr-4 w-screen min-w-[900px] xl:min-w-[1600px] max-w-[1600px] animate-marquee group-hover:pause motion-reduce:animate-none motion-reduce:will-change-none will-change-transform transition-transform">
          {testimonials.map((testimonial, index) => (
            <a key={index} target="_blank" className="min-w-[200px] mb-4 z-0 break-inside-avoid-column block group/tweet-card" href="#">
              <div className="bg-surface-75 border group-hover/tweet-card:border-foreground-muted transition-colors rounded-2xl p-6 drop-shadow-sm">
                <div className="relative">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 overflow-hidden rounded-full border border-strong">
                      <img alt={`${testimonial.user} twitter image`} width="64" height="64" src={testimonial.avatar} />
                    </div>
                    <p className="text-foreground text-sm font-medium">{testimonial.user}</p>
                    <div className="absolute -left-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black">
                      <svg className="h-[12px] w-[12px]" fill="white" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-foreground-lighter mt-3 text-base whitespace-pre-line">{testimonial.content}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}