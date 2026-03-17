import { xiaohongshuIntroData } from "@/data/xiaohongshu-intro";
import { Users, Search, TrendingUp, CheckCircle2 } from "lucide-react";

export default function XiaohongshuIntro() {
  const icons = [<Users key="1" className="w-8 h-8 text-xhs-red" />, <Search key="2" className="w-8 h-8 text-xhs-red" />, <TrendingUp key="3" className="w-8 h-8 text-xhs-red" />];

  return (
    <section id="intro" className="py-16 sm:py-32 bg-gray-50 relative scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-xhs-red tracking-widest uppercase mb-3">02 왜 샤오홍슈인가</h2>
          <p className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight break-keep px-2">
            한국인의 검색이 <span className="text-green-500">네이버</span>라면, <br className="hidden md:block"/>
            중국인의 최초검색은 <span className="text-xhs-red">샤오홍슈</span>입니다.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {xiaohongshuIntroData.stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(255,36,66,0.1)] transition-all duration-500 hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-xhs-red/10 transition-colors">
                {icons[index % icons.length]}
              </div>
              <h3 className="text-3xl sm:text-5xl font-black text-xhs-red mb-4">{stat.value}</h3>
              <p className="text-xl font-bold text-gray-900 mb-3">{stat.label}</p>
              <p className="text-gray-600 leading-relaxed max-w-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Details Section */}
        <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 md:p-16 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100">
          <h3 className="text-2xl font-bold mb-10 text-center">샤오홍슈 플랫폼 특장점</h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {xiaohongshuIntroData.platformDetails.map((detail) => (
              <div key={detail.category} className="flex gap-5">
                <div className="mt-1">
                  <CheckCircle2 className="w-6 h-6 text-xhs-red shrink-0" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{detail.category}</h4>
                  <p className="text-gray-600 leading-relaxed">{detail.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
