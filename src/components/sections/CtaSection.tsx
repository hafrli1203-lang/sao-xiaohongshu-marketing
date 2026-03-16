import Link from "next/link";
import { MessageSquare, ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section id="cta" className="py-16 sm:py-24 bg-xhs-red relative overflow-hidden">
      {/* Decorative Background Patterns */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-sm">
          지금 바로 <span className="text-yellow-300">무료 상담</span> 받으세요
        </h2>
        <p className="text-base sm:text-xl md:text-2xl text-white/90 font-medium mb-12 max-w-2xl mx-auto">
          샤오홍슈 체험단 마케팅으로 중국 소비자에게<br className="hidden md:block" />
          가장 확실하게 브랜드를 알릴 수 있습니다.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="https://open.kakao.com/o/s51feKli"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white text-xhs-red px-10 py-5 rounded-2xl font-bold text-xl flex justify-center items-center gap-3 transition-transform hover:-translate-y-1 shadow-xl hover:shadow-2xl w-full sm:w-auto"
          >
            <MessageSquare className="w-6 h-6" />
            고객문의 바로가기
          </Link>
          <Link
            href="https://open.kakao.com/o/s51feKli"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-xhs-red-dark text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-xl flex justify-center items-center gap-3 transition-colors hover:bg-white/10 w-full sm:w-auto"
          >
            제안서 다운로드
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
