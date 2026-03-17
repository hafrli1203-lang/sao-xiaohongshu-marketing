import { targetIndustriesData } from "@/data/target-industries";
import { MapPin } from "lucide-react";

export default function TargetIndustries() {
  return (
    <section id="target" className="py-16 sm:py-32 bg-white scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-sm font-bold text-xhs-red tracking-widest uppercase mb-3">03 이런 광고주에게 적합합니다</h2>
          <p className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight break-keep px-2">
            <span className="text-xhs-red">서울·제주·부산</span> 상권의<br className="hidden md:block" />
            방문형 업종에 최적화
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {targetIndustriesData.map((item) => (
            <div
              key={item.region}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-[0_20px_60px_rgba(255,36,66,0.08)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-xhs-red/10 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-xhs-red" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-5">{item.region}</h3>
              <div className="flex flex-wrap gap-2">
                {item.industries.map((industry) => (
                  <span
                    key={industry}
                    className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-200"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
