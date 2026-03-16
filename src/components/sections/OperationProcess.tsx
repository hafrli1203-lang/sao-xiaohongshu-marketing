import { operationProcessData } from "@/data/operation-process";
import { ArrowDown } from "lucide-react";

export default function OperationProcess() {
  return (
    <section id="operation-process" className="py-32 bg-white scroll-mt-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-xhs-red tracking-widest uppercase mb-3">06 운영 가이드</h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            체계적이고 투명한<br />
            <span className="text-xhs-red">진행 프로세스</span>
          </h3>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop Timeline */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2 z-0"></div>

          <div className="space-y-12 relative z-10">
            {operationProcessData.map((step, index) => (
              <div key={step.number} className="flex flex-col md:flex-row items-center justify-center gap-6 group">
                <div className="md:w-1/2 flex justify-end md:pr-12 md:text-right">
                  {index % 2 === 0 ? (
                    <div className="bg-gray-50 p-6 rounded-2xl w-full max-w-sm group-hover:-translate-y-1 transition-transform border border-gray-100 shadow-sm">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-gray-500 text-sm whitespace-pre-line">{step.source}</p>
                    </div>
                  ) : <div className="hidden md:block"></div>}
                </div>
                
                <div className="w-16 h-16 rounded-full bg-white border-4 border-xhs-red text-xhs-red flex items-center justify-center font-black text-xl shadow-[0_0_20px_rgba(255,36,66,0.2)] z-10 mx-auto md:mx-0 shrink-0 group-hover:bg-xhs-red group-hover:text-white transition-colors duration-300">
                  {step.number}
                </div>
                
                <div className="md:w-1/2 flex justify-start md:pl-12">
                  {index % 2 !== 0 ? (
                    <div className="bg-gray-50 p-6 rounded-2xl w-full max-w-sm group-hover:-translate-y-1 transition-transform border border-gray-100 shadow-sm">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-gray-500 text-sm whitespace-pre-line">{step.source}</p>
                    </div>
                  ) : <div className="hidden md:block"></div>}
                </div>
                
                {/* Mobile downward arrow between steps */}
                {index < operationProcessData.length - 1 && (
                  <div className="md:hidden flex justify-center w-full my-2 text-gray-300">
                    <ArrowDown className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
