import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { CompanyLogos } from "../components/CompanyLogos";
import { ProductGrid } from "../components/ProductGrid";
import { FrameworksSection } from "../components/FrameworksSection";
import { CustomerSection } from "../components/CustomerSection";
import { StartBuilding } from "../components/StartBuilding";
import { DashboardSection } from "../components/DashboardSection";
import { CTASection } from "../components/CTASection";
import { Footer } from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="relative min-h-screen">
        <Hero />
        <CompanyLogos />
        <ProductGrid />
        <FrameworksSection />
        <CustomerSection />
        <StartBuilding />
        <DashboardSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;