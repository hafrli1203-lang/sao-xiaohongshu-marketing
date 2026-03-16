import { searchDataSection } from "@/data/search-data";
import { TrendingUp, Hash } from "lucide-react";

export default function SearchData() {
  const maxBarValue = Math.max(...searchDataSection.barChart.map(item => item.value));

  return (
    <section id="search-data" className="py-16 sm:py-32 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-xl sm:text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            {searchDataSection.headline} <br className="hidden md:block"/>
            <span className="text-xhs-red">{searchDataSection.subheadline}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-3xl p-4 sm:p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          {/* Data Chart */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="text-xhs-red w-6 h-6" />
              <h3 className="text-2xl font-bold text-gray-900">한국 관련 검색량 <span className="text-sm font-normal text-gray-500">(단위: 억 회)</span></h3>
            </div>
            
            <div className="space-y-6">
              {searchDataSection.barChart.map((item, index) => (
                <div key={item.label}>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-gray-700">{item.label}</span>
                    <span className="font-bold text-xhs-red">{item.value}억</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-3 rounded-full ${index === 0 ? 'bg-xhs-red' : 'bg-gray-300'}`} 
                      style={{ width: `${(item.value / maxBarValue) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hashtags */}
          <div className="md:border-l border-gray-100 md:pl-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-8">
              <Hash className="text-xhs-red w-6 h-6" />
              <h3 className="text-2xl font-bold text-gray-900">주요 관심 해시태그</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {searchDataSection.hashtags.map((hashtag) => (
                <span 
                  key={hashtag.tag} 
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all hover:-translate-y-1 cursor-default ${
                    hashtag.highlighted 
                      ? "bg-xhs-red text-white shadow-md shadow-xhs-red/20" 
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {hashtag.tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
