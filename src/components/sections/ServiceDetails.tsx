import { serviceDetailsData } from "@/data/service-details";
import { CheckCircle2 } from "lucide-react";

export default function ServiceDetails() {
  return (
    <section id="service" className="py-16 sm:py-32 bg-white relative scroll-mt-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-xhs-red tracking-widest uppercase mb-3">03 상세 서비스</h2>
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
            성공적인 마케팅을 위한<br />
            <span className="text-xhs-red">샤오홍슈 체험단</span> 솔루션
          </h3>
          <p className="text-base sm:text-xl text-gray-500 font-medium">{serviceDetailsData.tagline}</p>
        </div>

        <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-sm relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-xhs-red/5 rounded-full blur-3xl"></div>
          
          <div className="space-y-6 relative z-10">
            {serviceDetailsData.details.map((detail, index) => (
              <div 
                key={detail.category} 
                className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 p-4 sm:p-6 bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.02)] transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 w-48 shrink-0">
                  <CheckCircle2 className="text-xhs-red w-5 h-5" />
                  <h4 className="font-bold text-gray-900">{detail.category}</h4>
                </div>
                <div className="text-gray-600 font-medium pl-8 md:pl-0">
                  {index === 0 ? <span className="text-xhs-red font-bold">{detail.value}</span> : detail.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
