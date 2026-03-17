import { servicePackagesData, medicalNotice } from "@/data/service-packages";
import { Check, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function ServicePackages() {
  return (
    <section id="services" className="py-16 md:py-32 bg-gray-50 relative scroll-mt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-sm font-bold text-xhs-red tracking-widest uppercase mb-3">04 서비스 안내</h2>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6 break-keep px-2">
            상황에 맞는 <span className="text-xhs-red">시작 방식</span>을<br className="hidden md:block" />
            선택하세요
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {servicePackagesData.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 border ${
                pkg.highlighted
                  ? "bg-gray-900 text-white border-gray-800 shadow-2xl relative"
                  : "bg-white text-gray-900 border-gray-100 shadow-lg hover:border-gray-200"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-xhs-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  추천
                </div>
              )}

              <div className="mb-6">
                <h4 className={`text-2xl font-black mb-2 ${pkg.highlighted ? "text-white" : "text-gray-900"}`}>
                  {pkg.name}
                </h4>
                <p className={`text-base font-bold mb-3 ${pkg.highlighted ? "text-xhs-red" : "text-xhs-red"}`}>
                  {pkg.subtitle}
                </p>
                <p className={`text-sm leading-relaxed ${pkg.highlighted ? "text-gray-400" : "text-gray-500"}`}>
                  {pkg.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check className={`w-5 h-5 shrink-0 mt-0.5 ${pkg.highlighted ? "text-xhs-red" : "text-xhs-red"}`} />
                    <span className={`text-sm font-medium ${pkg.highlighted ? "text-gray-300" : "text-gray-600"}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="https://open.kakao.com/o/s51feKli"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-4 rounded-2xl font-bold text-base transition-all duration-300 ${
                  pkg.highlighted
                    ? "bg-xhs-red text-white hover:bg-xhs-red-dark shadow-[0_8px_30px_rgb(255,36,66,0.3)]"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {pkg.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* 병의원 별도 안내 */}
        <div className="mt-12 md:mt-16 max-w-3xl mx-auto">
          <div className="bg-white/50 backdrop-blur rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm flex gap-4 items-start">
            <AlertCircle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {medicalNotice}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
