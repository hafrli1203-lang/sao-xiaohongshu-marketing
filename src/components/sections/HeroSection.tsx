import { heroData } from "@/data/hero";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* Background Abstract Circles */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-xhs-red rounded-full opacity-5 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-xhs-red rounded-full opacity-[0.03] blur-3xl translate-y-1/3 -translate-x-1/4"></div>
      
      {/* Design Elements mimicking the red circles on the right of Proposal Page 1 */}
      <div className="absolute -right-[15%] top-[10%] w-[45%] h-[110%] bg-xhs-red rounded-l-full z-0 hidden lg:block opacity-90 shadow-2xl backdrop-blur-3xl saturate-150 mix-blend-multiply"></div>
      <div className="absolute -right-[15%] top-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full z-0 hidden lg:block opacity-20 blur-xl"></div>
      <div className="absolute right-[5%] bottom-[10%] w-64 h-64 bg-white/10 rounded-full z-0 hidden lg:block backdrop-blur-md border border-white/20"></div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-3xl flex flex-col items-start text-left">
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-[1.1] mb-8 tracking-tighter">
            중국마케팅<br />
            <span className="text-xhs-red inline-block mt-2 drop-shadow-sm">샤오홍슈</span> 마케팅
          </h1>
          <p className="text-xl md:text-3xl text-gray-600 mb-12 font-medium leading-relaxed max-w-2xl tracking-tight">
            {heroData.subtitle}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link 
              href="https://open.kakao.com/o/s51feKli"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-xhs-red hover:bg-xhs-red-dark text-white px-8 py-5 rounded-2xl font-bold text-xl flex items-center gap-3 transition-all duration-300 shadow-[0_8px_30px_rgb(255,36,66,0.3)] hover:shadow-[0_8px_30px_rgb(255,36,66,0.4)] hover:-translate-y-1"
            >
              마케팅 문의하기 
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="https://open.kakao.com/o/s51feKli"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 px-8 py-5 rounded-2xl font-bold text-xl flex items-center transition-all duration-300 hover:border-gray-300 hover:-translate-y-1"
            >
              제안서 보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
