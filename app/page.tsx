import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import FeaturedExchanges from "@/components/home/FeaturedExchanges";
import ComparisonTable from "@/components/home/ComparisonTable";
import QuizWidget from "@/components/home/QuizWidget";
import TrustSection from "@/components/home/TrustSection";
import GuidesPreview from "@/components/home/GuidesPreview";
import FAQSection from "@/components/home/FAQSection";

export default function Home() {
  return (
    <>
      {/* A - Hero with ticker */}
      <HeroSection />

      {/* B - Quick Stats */}
      <StatsBar />

      {/* C - Top 3 Featured Exchanges */}
      <FeaturedExchanges />

      {/* D - Full Comparison Table */}
      <ComparisonTable />

      {/* E - Interactive Quiz */}
      <QuizWidget />

      {/* F - Trust / Why Us */}
      <TrustSection />

      {/* G - Guides Preview */}
      <GuidesPreview />

      {/* H - FAQ */}
      <FAQSection />
    </>
  );
}
