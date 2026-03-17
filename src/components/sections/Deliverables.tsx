import { deliverablesData } from "@/data/deliverables";
import { FileText } from "lucide-react";

export default function Deliverables() {
  return (
    <section id="deliverables" className="py-16 md:py-32 bg-gray-50 scroll-mt-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-sm font-bold text-xhs-red tracking-widest uppercase mb-3">06 산출물 예시</h2>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight break-keep px-2">
            광고주가 받는<br className="hidden md:block" />
            <span className="text-xhs-red">보고 체계</span>
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverablesData.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(255,36,66,0.08)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-xhs-red/10 rounded-2xl flex items-center justify-center mb-5">
                <FileText className="w-6 h-6 text-xhs-red" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
