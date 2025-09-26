import { Check, Database, Lock, Zap, HardDrive, Image, File, Video, ChevronDown } from "lucide-react";

export function ProductGrid() {
  return (
    <div className="container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 !pt-0 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-4 xl:gap-3 2xl:gap-6 md:grid-cols-12">
      {/* Postgres Database */}
      <a className="group relative w-full sm:h-[400px] flex flex-col gap-5 lg:flex-row focus:outline-none focus:border-none focus:ring-brand-600 focus:ring-2 focus:rounded-xl col-span-6 md:col-span-12 xl:col-span-6" href="/database">
        <div className="group/panel rounded-lg md:rounded-xl p-px bg-surface-75 bg-gradient-to-b from-border to-border/50 transition-all hover:shadow-md flex items-center justify-center hover:bg-border-stronger relative w-full h-full">
          <div className="z-10 rounded-[7px] md:rounded-[11px] relative overflow-hidden flex-1 flex flex-row sm:flex-col gap-4 items-start sm:items-center lg:items-start justify-between bg-surface-75 w-full h-full text-foreground-lighter p-4 sm:py-6">
            <div className="relative z-10 h-full w-full mx-auto gap-2 sm:gap-4 flex flex-col items-start sm:items-center text-left sm:text-center md:ml-2 md:mt-2 lg:pl-0 md:justify-start md:max-w-[250px] md:text-left md:items-start">
              <div className="flex items-center gap-2 text-foreground">
                <Database className="w-5 h-5" />
                <h2>Postgres Database</h2>
              </div>
              <div className="flex-1 flex flex-col justify-between gap-2">
                <p className="text-sm">
                  Every project is <strong className="text-foreground">a full Postgres database</strong>, the world's most trusted relational database.
                </p>
                <span className="hidden lg:block text-foreground md:block">
                  <ul className="flex flex-col gap-1 text-sm">
                    <li><Check className="inline h-4 w-4 mr-2" /> 100% portable</li>
                    <li><Check className="inline h-4 w-4 mr-2" /> Built-in Auth with RLS</li>
                    <li><Check className="inline h-4 w-4 mr-2" /> Easy to extend</li>
                  </ul>
                </span>
              </div>
            </div>
            <figure className="absolute inset-0 z-0 hidden sm:block">
              <span className="absolute group w-full md:w-auto h-full md:aspect-square flex items-end md:items-center justify-center md:justify-end right-0 left-0 md:left-auto xl:-right-12 2xl:right-0 top-12 md:top-0 md:bottom-0 my-auto">
                <img
                  alt="Supabase Postgres database"
                  className="hidden dark:block absolute antialiased inset-0 object-contain object-center z-0 w-full md:w-auto h-full transition-opacity group-hover:opacity-80"
                  src="https://supabase.com/_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase-dark.png&w=3840&q=100"
                />
              </span>
            </figure>
          </div>
        </div>
      </a>

      {/* Authentication */}
      <a className="group relative w-full sm:h-[400px] flex flex-col gap-5 lg:flex-row focus:outline-none focus:border-none focus:ring-brand-600 focus:ring-2 focus:rounded-xl col-span-6 xl:col-span-3" href="/auth">
        <div className="group/panel rounded-lg md:rounded-xl p-px bg-surface-75 bg-gradient-to-b from-border to-border/50 transition-all hover:shadow-md flex items-center justify-center hover:bg-border-stronger relative w-full h-full">
          <div className="z-10 rounded-[7px] md:rounded-[11px] relative overflow-hidden flex-1 flex flex-row sm:flex-col gap-4 items-start sm:items-center lg:items-start justify-between bg-surface-75 w-full h-full text-foreground-lighter p-4 sm:py-6">
            <div className="relative z-10 h-full w-full mx-auto gap-2 sm:gap-4 flex flex-col items-start sm:items-center text-left sm:text-center lg:mx-0 lg:pl-2 lg:items-start lg:text-left">
              <div className="flex items-center gap-2 text-foreground">
                <Lock className="w-5 h-5" />
                <h2>Authentication</h2>
              </div>
              <div className="flex-1 flex flex-col justify-between gap-2">
                <p className="text-sm">
                  <strong className="text-foreground">Add user sign ups and logins</strong>,
                  <br className="hidden lg:inline-block" /> securing your data with Row Level Security.
                </p>
              </div>
            </div>
            <figure className="group absolute inset-0 z-0 -top-16 xl:top-0 xl:bottom-0 hidden sm:block">
              <img
                className="hidden dark:block absolute inset-0 object-cover object-center xl:object-bottom"
                src="https://supabase.com/images/index/products/auth.svg"
                alt="Authentication"
              />
            </figure>
          </div>
        </div>
      </a>

      {/* Edge Functions */}
      <a className="group relative w-full sm:h-[400px] flex flex-col gap-5 lg:flex-row focus:outline-none focus:border-none focus:ring-brand-600 focus:ring-2 focus:rounded-xl col-span-6 xl:col-span-3" href="/edge-functions">
        <div className="group/panel rounded-lg md:rounded-xl p-px bg-surface-75 bg-gradient-to-b from-border to-border/50 transition-all hover:shadow-md flex items-center justify-center hover:bg-border-stronger relative w-full h-full">
          <div className="z-10 rounded-[7px] md:rounded-[11px] relative overflow-hidden flex-1 flex flex-row sm:flex-col gap-4 items-start sm:items-center lg:items-start justify-between bg-surface-75 w-full h-full text-foreground-lighter p-4 sm:py-6">
            <div className="relative z-10 h-full w-full mx-auto gap-2 sm:gap-4 flex flex-col items-start sm:items-center text-left sm:text-center lg:mx-0 lg:pl-2 lg:items-start lg:text-left">
              <div className="flex items-center gap-2 text-foreground">
                <Zap className="w-5 h-5" />
                <h2>Edge Functions</h2>
              </div>
              <div className="flex-1 flex flex-col justify-between gap-2">
                <p className="text-sm">
                  Easily write custom code
                  <br className="hidden sm:inline-block" />
                  <strong className="text-foreground">without deploying or scaling servers.</strong>
                </p>
              </div>
            </div>
            <figure className="absolute inset-0 z-20 hidden sm:block">
              <img
                alt="Edge Functions"
                className="hidden dark:block absolute inset-0 object-cover object-center"
                src="https://supabase.com/images/index/products/edge-functions-dark.svg"
              />
              <div className="absolute inset-0 top-[48%] xl:top-[45%] w-full max-w-[200px] h-fit mx-auto px-2.5 py-1.5 flex items-center justify-start rounded-full bg-surface-100 border border-strong text-xs text-foreground-lighter text-left">
                <span className="mr-2">$</span>supabase
                <span className="ml-1 text-brand inline-block">functions <span>deploy</span></span>
              </div>
            </figure>
          </div>
        </div>
      </a>

      {/* Storage */}
      <a className="group relative w-full sm:h-[400px] flex flex-col gap-5 lg:flex-row focus:outline-none focus:border-none focus:ring-brand-600 focus:ring-2 focus:rounded-xl col-span-6 xl:col-span-3" href="/storage">
        <div className="group/panel rounded-lg md:rounded-xl p-px bg-surface-75 bg-gradient-to-b from-border to-border/50 transition-all hover:shadow-md flex items-center justify-center hover:bg-border-stronger relative w-full h-full">
          <div className="z-10 rounded-[7px] md:rounded-[11px] relative overflow-hidden flex-1 flex flex-row sm:flex-col gap-4 items-start sm:items-center lg:items-start justify-between bg-surface-75 w-full h-full text-foreground-lighter p-4 sm:py-6">
            <div className="relative z-10 h-full w-full mx-auto gap-2 sm:gap-4 flex flex-col items-start sm:items-center text-left sm:text-center lg:mx-0 lg:pl-2 lg:items-start lg:text-left">
              <div className="flex items-center gap-2 text-foreground">
                <HardDrive className="w-5 h-5" />
                <h2>Storage</h2>
              </div>
              <div className="flex-1 flex flex-col justify-between gap-2">
                <p className="text-sm">
                  <strong className="text-foreground">Store, organize, and serve</strong>
                  <br className="hidden sm:inline-block xl:hidden 2xl:inline-block" /> large files, from videos to images.
                </p>
              </div>
            </div>
            <figure className="absolute inset-0 overflow-hidden nowrap hidden sm:block">
              <div className="relative h-full left-0 w-auto items-end pb-4 z-10 flex pause animate-marquee motion-safe:group-hover:run will-change-transform transition-transform">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex flex-col ml-2 gap-2 md:gap-2">
                    <div className="w-[60px] h-[60px] md:min-w-[62px] md:w-[62px] md:h-[62px] flex items-center justify-center rounded-lg border bg hover:border-foreground-lighter text-muted hover:text-foreground-light hover:bg-surface-200">
                      <Image className="w-6 h-6" />
                    </div>
                    <div className="w-[60px] h-[60px] md:min-w-[62px] md:w-[62px] md:h-[62px] flex items-center justify-center rounded-lg border bg hover:border-foreground-lighter text-muted hover:text-foreground-light hover:bg-surface-200">
                      <File className="w-6 h-6" />
                    </div>
                    <div className="w-[60px] h-[60px] md:min-w-[62px] md:w-[62px] md:h-[62px] flex items-center justify-center rounded-lg border bg hover:border-foreground-lighter text-muted hover:text-foreground-light hover:bg-surface-200">
                      <Video className="w-6 h-6" />
                    </div>
                  </div>
                ))}
              </div>
            </figure>
          </div>
        </div>
      </a>

      {/* Realtime */}
      <a className="group relative w-full sm:h-[400px] flex flex-col gap-5 lg:flex-row focus:outline-none focus:border-none focus:ring-brand-600 focus:ring-2 focus:rounded-xl col-span-6 xl:col-span-3" href="/realtime">
        <div className="group/panel rounded-lg md:rounded-xl p-px bg-surface-75 bg-gradient-to-b from-border to-border/50 transition-all hover:shadow-md flex items-center justify-center hover:bg-border-stronger relative w-full h-full">
          <div className="z-10 rounded-[7px] md:rounded-[11px] relative overflow-hidden flex-1 flex flex-row sm:flex-col gap-4 items-start sm:items-center lg:items-start justify-between bg-surface-75 w-full h-full text-foreground-lighter p-4 sm:py-6">
            <div className="relative z-10 h-full w-full mx-auto gap-2 sm:gap-4 flex flex-col items-start sm:items-center text-left sm:text-center lg:mx-0 lg:pl-2 lg:items-start lg:text-left">
              <div className="flex items-center gap-2 text-foreground">
                <Zap className="w-5 h-5" />
                <h2>Realtime</h2>
              </div>
              <div className="flex-1 flex flex-col justify-between gap-2">
                <p className="text-sm">
                  <strong className="text-foreground">Build multiplayer experiences</strong>
                  <br className="hidden sm:inline-block" /> with real-time data synchronization.
                </p>
              </div>
            </div>
            <figure className="absolute inset-0 xl:-bottom-2 2xl:bottom-0 z-0 w-full overflow-hidden pointer-events-auto hidden sm:block">
              <img
                alt="Realtime"
                className="hidden dark:block absolute object-cover xl:object-center inset-0"
                src="https://supabase.com/images/index/products/realtime-dark.svg"
              />
            </figure>
          </div>
        </div>
      </a>

      {/* Vector */}
      <a className="group relative w-full sm:h-[400px] flex flex-col gap-5 lg:flex-row focus:outline-none focus:border-none focus:ring-brand-600 focus:ring-2 focus:rounded-xl col-span-6 xl:col-span-3" href="/vector">
        <div className="group/panel rounded-lg md:rounded-xl p-px bg-surface-75 bg-gradient-to-b from-border to-border/50 transition-all hover:shadow-md flex items-center justify-center hover:bg-border-stronger relative w-full h-full">
          <div className="z-10 rounded-[7px] md:rounded-[11px] relative overflow-hidden flex-1 flex flex-row sm:flex-col gap-4 items-start sm:items-center lg:items-start justify-between bg-surface-75 w-full h-full text-foreground-lighter p-4 sm:py-6">
            <div className="relative z-10 h-full w-full mx-auto gap-2 sm:gap-4 flex flex-col items-start sm:items-center text-left sm:text-center lg:mx-0 lg:pl-2 lg:items-start lg:text-left">
              <div className="flex items-center gap-2 text-foreground">
                <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.9983 11.4482V21.7337M11.9983 11.4482L21.0732 6.17699M11.9983 11.4482L2.92383 6.17723M2.92383 6.17723V12.4849M2.92383 6.17723V6.1232L8.35978 2.9657M21.0736 12.54V6.1232L15.6376 2.9657M17.7247 18.6107L11.9987 21.9367L6.27265 18.6107" stroke="currentColor" strokeMiterlimit="10" strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5"/>
                </svg>
                <h2>Vector</h2>
              </div>
              <div className="flex-1 flex flex-col justify-between gap-2">
                <p className="text-sm">
                  Integrate your favorite ML-models to 
                  <br className="hidden sm:inline-block md:hidden" />
                  <strong className="text-foreground">store, index and search vector embeddings</strong>.
                </p>
                <span className="hidden lg:block text-foreground">
                  <ul className="flex flex-col gap-1 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-brand rounded" />
                      <span>OpenAI</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-brand rounded" />
                      <span>Hugging Face</span>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>

      {/* Data APIs */}
      <a className="group relative w-full sm:h-[400px] flex flex-col gap-5 lg:flex-row focus:outline-none focus:border-none focus:ring-brand-600 focus:ring-2 focus:rounded-xl col-span-6 xl:col-span-3" href="/api">
        <div className="group/panel rounded-lg md:rounded-xl p-px bg-surface-75 bg-gradient-to-b from-border to-border/50 transition-all hover:shadow-md flex items-center justify-center hover:bg-border-stronger relative w-full h-full">
          <div className="z-10 rounded-[7px] md:rounded-[11px] relative overflow-hidden flex-1 flex flex-row sm:flex-col gap-4 items-start sm:items-center lg:items-start justify-between bg-surface-75 w-full h-full text-foreground-lighter p-4 sm:py-6">
            <div className="relative z-10 h-full w-full mx-auto gap-2 sm:gap-4 flex flex-col items-start sm:items-center text-left sm:text-center lg:mx-0 lg:pl-2 lg:items-start lg:text-left">
              <div className="flex items-center gap-2 text-foreground">
                <Database className="w-5 h-5" />
                <h2>Data APIs</h2>
              </div>
              <div className="flex-1 flex flex-col justify-between gap-2">
                <p className="text-sm">
                  Instant ready-to-use <strong className="text-foreground">Restful APIs</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </a>

      <p className="text-xl sm:text-2xl text-foreground-lighter col-span-full tracking-[-.01rem]">
        <span className="text-foreground">Use one or all.</span> Best of breed products. Integrated as a platform.
      </p>
    </div>
  );
}