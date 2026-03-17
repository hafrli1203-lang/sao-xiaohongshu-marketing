import { ourRoleData } from "@/data/our-role";
import { CheckCircle2 } from "lucide-react";

export default function OurRole() {
  return (
    <section id="our-role" className="py-16 md:py-32 bg-white scroll-mt-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-sm font-bold text-xhs-red tracking-widest uppercase mb-3">05 저희가 맡는 일</h2>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight break-keep px-2">
            광고주가 체감하는<br className="hidden md:block" />
            <span className="text-xhs-red">프로젝트 관리</span> 항목
          </h3>
        </div>

        <div className="bg-gray-50 rounded-[2.5rem] p-6 sm:p-10 md:p-16 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100">
          <div className="space-y-8">
            {ourRoleData.map((role, index) => (
              <div key={role.title} className="flex gap-5 items-start">
                <div className="w-12 h-12 bg-xhs-red/10 rounded-2xl flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-xhs-red" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                    <span className="text-xhs-red mr-2">{String(index + 1).padStart(2, "0")}</span>
                    {role.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{role.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
