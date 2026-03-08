import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import FeaturedExchanges from "@/components/home/FeaturedExchanges";
import ComparisonTable from "@/components/home/ComparisonTable";
import QuizWidget from "@/components/home/QuizWidget";
import SocialProof from "@/components/home/SocialProof";
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

      {/* F - Social Proof */}
      <SocialProof />

      {/* G - Trust / Why Us */}
      <TrustSection />

      {/* H - Guides Preview */}
      <GuidesPreview />

      {/* I - FAQ */}
      <FAQSection />
    </>
  );
}
