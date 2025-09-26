import { Button } from "./ui/button";

export function CTASection() {
  return (
    <div className="bg-background grid grid-cols-12 items-center gap-4 border-t py-32 text-center px-16 border-muted">
      <div className="col-span-12">
        <h2 className="text-2xl md:text-4xl mb-4">
          <span className="text-foreground-lighter">Build in a weekend,</span>
          <span className="text-foreground block sm:inline"> scale to millions</span>
        </h2>
      </div>
      <div className="flex items-center justify-center gap-2 col-span-12 mt-4">
        <Button size="lg" className="bg-brand-500 hover:bg-brand-600 text-foreground" asChild>
          <a href="/dashboard">Start your project</a>
        </Button>
        <Button size="lg" variant="outline" className="bg-surface-100 border-strong hover:border-stronger" asChild>
          <a href="/contact/sales">Request a demo</a>
        </Button>
      </div>
    </div>
  );
}