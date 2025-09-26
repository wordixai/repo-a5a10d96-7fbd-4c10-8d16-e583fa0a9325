import { Check } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface-100">
      <div className="w-full">
        {/* Security Banner */}
        <div className="container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 grid grid-cols-2 md:flex items-center justify-between text-foreground md:justify-center gap-8 md:gap-16 xl:gap-28 !py-6 md:!py-10 text-sm">
          <div className="flex flex-col md:flex-row gap-2 md:items-center">
            We protect your data.
            <a className="text-brand-link hover:underline" href="/security">More on Security</a>
          </div>
          <ul className="flex flex-col md:flex-row gap-2 md:gap-8 justify-center md:items-center">
            <li className="flex items-center gap-2 whitespace-nowrap flex-nowrap">
              <Check className="w-4 h-4" />
              SOC2 Type 2
              <span className="text-foreground-lighter hidden sm:inline">Certified</span>
            </li>
            <li className="flex items-center gap-2 whitespace-nowrap flex-nowrap">
              <Check className="w-4 h-4" />
              HIPAA
              <span className="text-foreground-lighter hidden sm:inline">Compliant</span>
            </li>
          </ul>
        </div>
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        
        {/* Main Footer */}
        <div className="container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 py-8">
          <div className="xl:grid xl:grid-cols-7 xl:gap-4">
            <div className="space-y-8 xl:col-span-2">
              <a className="w-40" href="/">
                <img 
                  alt="Supabase Logo" 
                  width="160" 
                  height="30" 
                  className="hidden dark:block" 
                  src="https://supabase.com/_next/image?url=https%3A%2F%2Ffrontend-assets.supabase.com%2Fwww%2F7388c57862e0%2F_next%2Fstatic%2Fmedia%2Fsupabase-logo-wordmark--dark.b36ebb5f.png&w=384&q=75" 
                />
              </a>
              <div className="flex space-x-5">
                <a href="https://twitter.com/supabase" className="text-foreground-lighter hover:text-foreground transition">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="https://github.com/supabase" className="text-foreground-lighter hover:text-foreground transition">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="https://discord.supabase.com/" className="text-foreground-lighter hover:text-foreground transition">
                  <span className="sr-only">Discord</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Footer Links */}
            <div className="mt-12 grid grid-cols-1 gap-8 xl:col-span-5 xl:mt-0">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
                <div>
                  <h6 className="text-foreground text-base mb-4">Product</h6>
                  <ul className="space-y-2">
                    <li><a href="/database" className="text-sm text-foreground-lighter hover:text-foreground transition-colors">Database</a></li>
                    <li><a href="/auth" className="text-sm text-foreground-lighter hover:text-foreground transition-colors">Auth</a></li>
                    <li><a href="/edge-functions" className="text-sm text-foreground-lighter hover:text-foreground transition-colors">Functions</a></li>
                    <li><a href="/realtime" className="text-sm text-foreground-lighter hover:text-foreground transition-colors">Realtime</a></li>
                    <li><a href="/storage" className="text-sm text-foreground-lighter hover:text-foreground transition-colors">Storage</a></li>
                    <li><a href="/vector" className="text-sm text-foreground-lighter hover:text-foreground transition-colors">Vector</a></li>
                    <li><a href="/pricing" className="text-sm text-foreground-lighter hover:text-foreground transition-colors">Pricing</a></li>
                  </ul>
                </div>
                <div>
                  <h6 className="text-foreground text-base mb-4">Solutions</h6>
                  <ul className="space-y-2">
                    <li><a href="/solutions/ai-builders" className="text-sm text-foreground-lighter hover:text-foreground transition-colors">AI Builders</a></li>
                    <li><a href="/solutions/no-code" className="text-sm text-foreground-lighter hover:text-foreground transition-colors">No Code</a></li>
                    <li><a href="/solutions/beginners" className="text-sm text-foreground-lighter hover:text-foreground transition-colors">Beginners</a></li>
                    <li><a href="/solutions/developers" className="text-sm text-foreground-lighter hover:text-foreground transition-colors">Developers</a></li>
                    <li><a href="/solutions/startups" className="text-sm text-foreground-lighter hover:text-foreground transition-colors">Startups</a></li>
                    <li><a href="/solutions/enterprise" className="text-sm text-foreground-lighter hover:text-foreground transition-colors">Enterprise</a></li>
                  </ul>
                </div>
                <div>
                  <h6 className="text-foreground text-base mb-4">Resources</h6>
                  <ul className="space-y-2">
                    <li><a href="/blog" className="text-sm text-foreground-lighter hover:text-foreground transition-colors">Blog</a></li>
                    <li><a href="/support" className="text-sm text-foreground-lighter hover:text-foreground transition-colors">Support</a></li>
                    <li><a href="/status" className="text-sm text-foreground-lighter hover:text-foreground transition-colors">System Status</a></li>
                    <li><a href="/partners" className="text-sm text-foreground-lighter hover:text-foreground transition-colors">Become a Partner</a></li>
                    <li><a href="/brand-assets" className="text-sm text-foreground-lighter hover:text-foreground transition-colors">Brand Assets</a></li>
                    <li><a href="/security" className="text-sm text-foreground-lighter hover:text-foreground transition-colors">Security & Compliance</a></li>
                  </ul>
                </div>
                <div>
                  <h6 className="text-foreground text-base mb-4">Developers</h6>
                  <ul className="space-y-2">
                    <li><a href="/docs" className="text-sm text-foreground-lighter hover:text-foreground transition-colors">Documentation</a></li>
                    <li><a href="/ui" className="text-sm text-foreground-lighter hover:text-foreground transition-colors">Supabase UI</a></li>
                    <li><a href="/changelog" className="text-sm text-foreground-lighter hover:text-foreground transition-colors">Changelog</a></li>
                    <li><a href="/careers" className="text-sm text-foreground-lighter hover:text-foreground transition-colors">Careers</a></li>
                    <li><a href="/contributing" className="text-sm text-foreground-lighter hover:text-foreground transition-colors">Contributing</a></li>
                    <li><a href="/open-source" className="text-sm text-foreground-lighter hover:text-foreground transition-colors">Open Source</a></li>
                  </ul>
                </div>
                <div>
                  <h6 className="text-foreground text-base mb-4">Company</h6>
                  <ul className="space-y-2">
                    <li><a href="/company" className="text-sm text-foreground-lighter hover:text-foreground transition-colors">Company</a></li>
                    <li><a href="/ga" className="text-sm text-foreground-lighter hover:text-foreground transition-colors">General Availability</a></li>
                    <li><a href="/terms" className="text-sm text-foreground-lighter hover:text-foreground transition-colors">Terms of Service</a></li>
                    <li><a href="/privacy" className="text-sm text-foreground-lighter hover:text-foreground transition-colors">Privacy Policy</a></li>
                    <li><a href="/aup" className="text-sm text-foreground-lighter hover:text-foreground transition-colors">Acceptable Use Policy</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-muted mt-32 flex justify-between pt-8 px-6 lg:px-16 xl:px-20">
          <small className="text-foreground-lighter">© Supabase Inc</small>
          <div>
            <button className="flex items-center justify-center h-7 w-7 text-foreground-light">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}