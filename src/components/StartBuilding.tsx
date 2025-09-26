import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

export function StartBuilding() {
  const templates = [
    {
      title: "Stripe Subscriptions Starter",
      description: "The all-in-one subscription starter kit for high-performance SaaS applications, powered by Stripe, Supabase, and Vercel.",
      technologies: ["Next.js", "Stripe", "Vercel", "Supabase"],
      href: "https://github.com/vercel/nextjs-subscription-payments"
    },
    {
      title: "AI Chatbot",
      description: "An open-source AI chatbot app template built with Next.js, the Vercel AI SDK, OpenAI, and Supabase.",
      technologies: ["Next.js", "OpenAI", "Vercel", "Supabase"],
      href: "https://github.com/supabase-community/vercel-ai-chatbot"
    },
    {
      title: "Flutter User Management",
      description: "Get started with Supabase and Flutter by building a user management app with auth, file storage, and database.",
      technologies: ["Flutter", "Supabase"],
      href: "https://github.com/supabase/supabase/tree/master/examples/user-management/flutter-user-management"
    }
  ];

  return (
    <div id="examples" className="container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 xl:pt-32 !pb-0">
      <div className="text-center flex flex-col items-center">
        <h3 className="text-2xl md:text-4xl text-foreground mb-4">Start building in seconds</h3>
        <p className="text-foreground-lighter max-w-[300px] md:max-w-none">
          Kickstart your next project with templates built by us and our community.
        </p>
        <div className="flex justify-center gap-2 py-4">
          <Button variant="outline" asChild>
            <a href="/docs/guides/examples">View all examples</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/supabase/supabase/tree/master/examples" className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Official GitHub library
            </a>
          </Button>
        </div>
      </div>
      
      {/* Templates Grid */}
      <div className="hidden lg:grid grid-cols-12 gap-5 mt-4">
        {templates.map((template, index) => (
          <div key={index} className="col-span-12 h-full lg:col-span-6 xl:col-span-4 flex items-stretch">
            <a className="w-full h-full group/panel" target="_blank" href={template.href}>
              <div className="relative rounded-lg md:rounded-xl p-px bg-surface-75 bg-gradient-to-b from-border to-border/50 transition-all hover:shadow-md flex items-center justify-center hover:bg-border-stronger h-full">
                <div className="relative z-10 w-full h-full rounded-[7px] md:rounded-[11px] overflow-hidden text-foreground-light bg-surface-75">
                  <div className="flex flex-col justify-between h-full">
                    <div className="relative w-full aspect-[3/1] bg-surface-100 flex items-center justify-center gap-4 overflow-hidden">
                      {template.technologies.map((tech, i) => (
                        <div key={i} title={tech} className="relative z-10 text-2xl">
                          {tech === "Next.js" && "▲"}
                          {tech === "Stripe" && "💳"}
                          {tech === "Vercel" && "▲"}
                          {tech === "OpenAI" && "🤖"}
                          {tech === "Flutter" && "🔷"}
                          {tech === "Supabase" && "🚀"}
                        </div>
                      ))}
                    </div>
                    <div className="p-5 flex flex-col gap-2 border-t border-muted">
                      <h4 className="text-foreground text-lg">{template.title}</h4>
                      <p className="text-sm text-foreground-lighter">{template.description}</p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs text-foreground-lighter group-hover/panel:text-foreground transition-colors">
                          View Template
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-foreground-lighter group-hover/panel:text-foreground transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}