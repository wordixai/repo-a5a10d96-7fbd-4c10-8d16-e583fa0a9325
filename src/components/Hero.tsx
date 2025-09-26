import { Button } from "./ui/button";

export function Hero() {
  return (
    <div className="relative -mt-[65px]">
      <div className="container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 pt-8 pb-10 md:pt-16 overflow-hidden">
        <div className="relative">
          <div className="mx-auto">
            <div className="mx-auto max-w-2xl lg:col-span-6 lg:flex lg:items-center justify-center text-center">
              <div className="relative z-10 lg:h-auto pt-[90px] lg:pt-[90px] lg:min-h-[300px] flex flex-col items-center justify-center sm:mx-auto md:w-3/4 lg:mx-0 lg:w-full gap-4 lg:gap-8">
                <div className="flex flex-col items-center">
                  <h1 className="text-foreground text-4xl sm:text-5xl sm:leading-none lg:text-7xl">
                    <span className="block text-foreground">Build in a weekend</span>
                    <span className="text-brand block md:ml-0">Scale to millions</span>
                  </h1>
                  <p className="pt-2 text-foreground my-3 text-sm sm:mt-5 lg:mb-0 sm:text-base lg:text-lg">
                    Supabase is the Postgres development platform.
                    <br className="hidden md:block" />
                    Start your project with a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="lg" className="bg-brand-500 hover:bg-brand-600 text-foreground" asChild>
                    <a href="/dashboard">Start your project</a>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-surface-100 border-strong hover:border-stronger" asChild>
                    <a href="/contact/sales">Request a demo</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}