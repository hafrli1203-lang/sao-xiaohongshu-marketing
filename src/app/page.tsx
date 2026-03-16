import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/sections/HeroSection";
import XiaohongshuIntro from "@/components/sections/XiaohongshuIntro";
import ConsumerTrends from "@/components/sections/ConsumerTrends";
import SearchData from "@/components/sections/SearchData";
import ServiceDetails from "@/components/sections/ServiceDetails";
import ContentExamples from "@/components/sections/ContentExamples";
import Pricing from "@/components/sections/Pricing";
import OperationProcess from "@/components/sections/OperationProcess";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <XiaohongshuIntro />
        <ConsumerTrends />
        <SearchData />
        <ServiceDetails />
        <ContentExamples />
        <Pricing />
        <OperationProcess />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
