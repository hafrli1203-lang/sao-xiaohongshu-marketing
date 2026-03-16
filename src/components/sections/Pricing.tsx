import { pricingData } from "@/data/pricing";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-gray-50 relative scroll-mt-24">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-xhs-red tracking-widest uppercase mb-3">05 단가표 안내</h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
            체험단 및 인플루언서 마케팅<br />
            <span className="text-xhs-red">합리적인 가격</span> 제안
          </h3>
        </div>

        <div className="space-y-32">
          {pricingData.sections.map((section) => (
            <div key={section.title}>
              <div className="flex items-center gap-4 mb-12">
                <div className="h-px bg-gray-300 flex-1"></div>
                <h3 className="text-2xl font-bold text-gray-900 px-4">{section.title}</h3>
                <div className="h-px bg-gray-300 flex-1"></div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {section.packages.map((pkg) => {
                  // Determine if a card should be highlighted (e.g., the 40-case package or popular one)
                  const isHighlighted = pkg.name.includes("40건") || pkg.name.includes("KOC") || pkg.name.includes("숏폼");
                  
                  return (
                    <div 
                      key={pkg.name} 
                      className={`rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-2 border ${
                        isHighlighted 
                          ? "bg-gray-900 text-white border-gray-800 shadow-2xl relative" 
                          : "bg-white text-gray-900 border-gray-100 shadow-lg hover:border-gray-200"
                      }`}
                    >
                      {/* Popular Badge */}
                      {isHighlighted && (
                        <div className="absolute top-0 right-8 -translate-y-1/2 bg-xhs-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                          Best
                        </div>
                      )}
                      
                      <div className="mb-6">
                        <h4 className={`text-xl font-bold mb-2 ${isHighlighted ? "text-white" : "text-gray-900"}`}>
                          {pkg.name}
                        </h4>
                        <p className={`text-sm ${isHighlighted ? "text-gray-400" : "text-gray-500"}`}>
                          {pkg.description}
                        </p>
                      </div>
                      
                      <div className="mb-8">
                        <div className={`text-3xl font-black mb-1 ${isHighlighted ? "text-white" : "text-gray-900"}`}>
                          {pkg.pricePerUnit || pkg.price}
                        </div>
                        {pkg.pricePerUnit && pkg.price !== "별도 문의" && (
                          <div className={`text-sm font-medium ${isHighlighted ? "text-gray-400" : "text-xhs-red"}`}>
                            총 {pkg.price}
                          </div>
                        )}
                        {pkg.notes && <div className="text-xs mt-1 text-gray-400">*{pkg.notes}</div>}
                      </div>
                      
                      <ul className="space-y-4">
                        <li className="flex gap-3">
                          <Check className={`w-5 h-5 shrink-0 ${isHighlighted ? "text-xhs-red" : "text-xhs-red"}`} />
                          <span className={`text-sm ${isHighlighted ? "text-gray-300" : "text-gray-600"}`}>
                            {pkg.influencerCount || pkg.duration}
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <Check className={`w-5 h-5 shrink-0 ${isHighlighted ? "text-xhs-red" : "text-xhs-red"}`} />
                          <span className={`text-sm leading-relaxed ${isHighlighted ? "text-gray-300" : "text-gray-600"}`}>
                            {pkg.contentType}
                          </span>
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
              
              {section.disclaimer && (
                <div className="mt-8 text-center text-gray-500 text-sm italic">
                  * {section.disclaimer}
                </div>
              )}
            </div>
          ))}
        </div>

        {pricingData.additionalInfo && Array.isArray(pricingData.additionalInfo) && (
          <div className="mt-20 bg-white/50 backdrop-blur rounded-2xl p-8 border border-gray-200 max-w-4xl mx-auto shadow-sm">
            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-xhs-red">■</span> 참고 사항
            </h4>
            <ul className="space-y-3 text-gray-600 font-medium text-sm md:text-base">
              {pricingData.additionalInfo.map((info, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-gray-400 shrink-0">•</span>
                  <span>{info}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
