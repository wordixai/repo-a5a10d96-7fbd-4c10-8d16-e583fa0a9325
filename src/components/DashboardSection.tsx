import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { useState } from "react";

export function DashboardSection() {
  const [activeTab, setActiveTab] = useState("table");
  
  const features = [
    "Full CRUD",
    "Materialized Views", 
    "Foreign Tables",
    "Partitioned Tables",
    "Easy as a spreadsheet"
  ];

  return (
    <div id="dashboard" className="container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 text-center">
      <h3 className="mb-8 text-2xl md:text-4xl max-w-[300px] sm:max-w-none mx-auto text-foreground-lighter">
        <span className="text-foreground">Stay productive and manage your app</span>
        <br className="hidden sm:block" /> without leaving the dashboard
      </h3>
      
      <div className="relative flex flex-col gap-8 lg:gap-12 items-center">
        {/* Tab Navigation */}
        <div className="relative w-full col-span-full flex justify-center gap-2">
          <Button
            variant={activeTab === "table" ? "default" : "outline"}
            className={`rounded-full text-sm py-1.5 px-3 lg:py-2 lg:px-8 ${
              activeTab === "table" 
                ? "border-foreground bg-surface-200 text-foreground" 
                : "bg-surface-200 text-foreground-light border-strong hover:border-foreground-lighter hover:text-foreground opacity-80"
            }`}
            onClick={() => setActiveTab("table")}
          >
            Table Editor
          </Button>
          <Button
            variant={activeTab === "sql" ? "default" : "outline"}
            className={`rounded-full text-sm py-1.5 px-3 lg:py-2 lg:px-8 ${
              activeTab === "sql" 
                ? "border-foreground bg-surface-200 text-foreground" 
                : "bg-surface-200 text-foreground-light border-strong hover:border-foreground-lighter hover:text-foreground opacity-80"
            }`}
            onClick={() => setActiveTab("sql")}
          >
            SQL Editor
          </Button>
          <Button
            variant={activeTab === "rls" ? "default" : "outline"}
            className={`rounded-full text-sm py-1.5 px-3 lg:py-2 lg:px-8 ${
              activeTab === "rls" 
                ? "border-foreground bg-surface-200 text-foreground" 
                : "bg-surface-200 text-foreground-light border-strong hover:border-foreground-lighter hover:text-foreground opacity-80"
            }`}
            onClick={() => setActiveTab("rls")}
          >
            RLS Policies
          </Button>
        </div>

        {/* Features List */}
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-4 lg:gap-8 justify-center text-center mx-auto z-30">
          {features.map((feature, index) => (
            <li key={index}>
              <a className="group cursor-pointer flex items-center gap-2 text-sm whitespace-nowrap text-foreground-light hover:text-foreground transition-colors hover:underline" href="/docs">
                <Check className="w-4 h-4 stroke-2" />
                <span>{feature}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Dashboard Preview */}
        <div className="relative rounded-2xl shadow-lg p-2 h-full border flex flex-col overflow-hidden bg-surface-75 w-full max-w-6xl mx-auto">
          <div className="w-full px-2 pt-1 pb-3 relative flex items-center gap-1.5 lg:gap-2">
            <div className="w-2 h-2 bg-border rounded-full"></div>
            <div className="w-2 h-2 bg-border rounded-full"></div>
            <div className="w-2 h-2 bg-border rounded-full"></div>
          </div>
          <div className="h-full w-full aspect-video border overflow-hidden rounded-lg">
            <div className="relative w-full max-w-full h-full">
              <img
                alt="Supabase dashboard table editor"
                width="1920"
                height="1080"
                className="relative z-0 w-full h-full object-cover"
                src="https://supabase.com/_next/image?url=%2Fimages%2Findex%2Fdashboard%2Fsupabase-table-editor.png&w=3840&q=75"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}