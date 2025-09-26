import { ChevronDown, X, Menu, Github } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement Banner */}
      <div className="relative w-full bg-black border-b border-muted">
        <div className="absolute z-50 right-4 flex h-full items-center opacity-100 text-foreground transition-opacity hover:opacity-80 hover:cursor-pointer">
          <X className="w-4 h-4" />
        </div>
        <div className="relative z-10 flex gap-5 items-stretch justify-center px-3 border-l border-muted">
          <div className="flex flex-col justify-center border-l border-muted py-8">
            <a target="_blank" className="transition-opacity hover:opacity-80" href="#">
              <img src="https://supabase.com/images/supabase-select/logo.svg" alt="Supabase Select" className="w-36" />
            </a>
          </div>
          <div className="flex flex-col justify-center border-l border-muted py-8 pr-8 text-xs font-mono uppercase leading-none tracking-wide text-white/50 hidden md:flex">
            <p className="mt-[5px]">Our first user conference</p>
          </div>
          <div className="flex flex-col justify-center border-l border-muted py-8 pr-8 text-xs font-mono uppercase leading-none tracking-wide text-white/50 hidden sm:flex">
            <p className="mt-[5px]">Oct 3 2025</p>
          </div>
          <div className="flex flex-col justify-center border-l border-muted py-8 pr-8 text-xs font-mono uppercase leading-none tracking-wide text-white/50 hidden xl:flex">
            <p className="mt-[5px]">Guillermo Rauch, Dylan Field, and more</p>
          </div>
          <div className="flex flex-col justify-center border-x border-muted border-dashed relative">
            <a target="_blank" className="relative px-4 py-1 h-10 flex items-center justify-center bg-brand-600/20 hover:bg-brand-600/50 outline-1 outline-dashed outline-brand-600/40 hover:outline-brand-600 text-sm text-white font-medium transition-all duration-200" href="#">
              Save your seat
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="sticky top-0 z-40 bg-background/90 backdrop-blur-sm border-b border-muted">
        <nav className="relative z-40">
          <div className="relative flex justify-between h-16 mx-auto lg:container lg:px-16 xl:px-20">
            <div className="flex items-center px-6 lg:px-0 flex-1 sm:items-stretch justify-between">
              <div className="flex items-center">
                <div className="flex items-center flex-shrink-0">
                  <a className="block w-auto h-6" href="/">
                    <img alt="Supabase Logo" width="124" height="24" className="hidden dark:block" src="https://supabase.com/_next/image?url=https%3A%2F%2Ffrontend-assets.supabase.com%2Fwww%2F7388c57862e0%2F_next%2Fstatic%2Fmedia%2Fsupabase-logo-wordmark--dark.b36ebb5f.png&w=256&q=75" />
                  </a>
                </div>
                <nav className="relative z-10 flex-1 items-center justify-center hidden pl-8 sm:space-x-4 lg:flex h-16">
                  <ul className="group flex flex-1 list-none items-center justify-center space-x-1">
                    <li className="text-sm font-medium">
                      <Button variant="ghost" className="text-sm px-2 h-auto py-2 hover:text-brand-link">
                        Product
                        <ChevronDown className="ml-1 h-3 w-3" />
                      </Button>
                    </li>
                    <li className="text-sm font-medium">
                      <Button variant="ghost" className="text-sm px-2 h-auto py-2 hover:text-brand-link">
                        Developers
                        <ChevronDown className="ml-1 h-3 w-3" />
                      </Button>
                    </li>
                    <li className="text-sm font-medium">
                      <Button variant="ghost" className="text-sm px-2 h-auto py-2 hover:text-brand-link">
                        Solutions
                        <ChevronDown className="ml-1 h-3 w-3" />
                      </Button>
                    </li>
                    <li className="text-sm font-medium">
                      <a className="flex items-center text-sm rounded-md p-2 hover:text-brand-link" href="/pricing">
                        Pricing
                      </a>
                    </li>
                    <li className="text-sm font-medium">
                      <a className="flex items-center text-sm rounded-md p-2 hover:text-brand-link" href="/docs">
                        Docs
                      </a>
                    </li>
                    <li className="text-sm font-medium">
                      <a className="flex items-center text-sm rounded-md p-2 hover:text-brand-link" href="/blog">
                        Blog
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="flex items-center gap-2 opacity-0 animate-fade-in delay-300">
                <a href="https://github.com/supabase/supabase" target="_blank" className="relative hidden lg:flex items-center justify-center border border-transparent text-xs px-2.5 py-1 h-[26px] text-foreground-lighter hover:text-foreground">
                  <span className="flex items-center gap-1">
                    <Github className="w-4 h-4" />
                    89.1K
                  </span>
                </a>
                <Button size="sm" variant="outline" className="hidden lg:block text-xs h-[26px]" asChild>
                  <a href="/dashboard">Sign in</a>
                </Button>
                <Button size="sm" className="hidden lg:block text-xs h-[26px] bg-brand-500 hover:bg-brand-600" asChild>
                  <a href="/dashboard">Start your project</a>
                </Button>
              </div>
            </div>
            <div className="inset-y-0 flex mr-2 items-center px-4 lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-foreground-lighter hover:text-foreground"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}