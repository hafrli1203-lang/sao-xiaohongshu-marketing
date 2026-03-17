import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/sections/HeroSection";
import XiaohongshuIntro from "@/components/sections/XiaohongshuIntro";
import TargetIndustries from "@/components/sections/TargetIndustries";
import ServicePackages from "@/components/sections/ServicePackages";
import OurRole from "@/components/sections/OurRole";
import Deliverables from "@/components/sections/Deliverables";
import OperationProcess from "@/components/sections/OperationProcess";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <XiaohongshuIntro />
        <TargetIndustries />
        <ServicePackages />
        <OurRole />
        <Deliverables />
        <OperationProcess />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
