import Image from "next/image";
import { contentExamplesData } from "@/data/content-examples";

export default function ContentExamples() {
  return (
    <section id="content-examples" className="py-16 sm:py-32 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-xhs-red rounded-full opacity-20 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-xhs-red tracking-widest uppercase mb-3">04 콘텐츠 예시</h2>
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-black leading-tight mb-6 break-keep px-2">
            실제 샤오홍슈 <span className="text-xhs-red">[맛집]</span> 체험단<br className="hidden md:block" />
            고퀄리티 콘텐츠
          </h3>
          <p className="text-base sm:text-xl text-gray-400 font-medium">실제 유저 반응을 이끌어내는 트렌디한 감성의 콘텐츠입니다.</p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {contentExamplesData.map((example) => (
            <figure 
              key={example.id} 
              className="relative rounded-xl sm:rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] bg-black/50 mx-auto w-full max-w-5xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Image
                src={example.image}
                alt={example.alt}
                width={1200}
                height={675}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
