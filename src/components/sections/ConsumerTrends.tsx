import { consumerTrendsData } from "@/data/consumer-trends";
import { ShoppingBag, Plane, Heart, CheckCircle } from "lucide-react";

export default function ConsumerTrends() {
  const getIcon = (iconStr: string) => {
    switch(iconStr) {
      case 'won': return <ShoppingBag className="w-10 h-10 text-xhs-red" />;
      case 'travel': return <Plane className="w-10 h-10 text-amber-500" />;
      case 'korea': return <Heart className="w-10 h-10 text-pink-500" />;
      default: return <ShoppingBag className="w-10 h-10 text-xhs-red" />;
    }
  };

  return (
    <section id="consumer-trends" className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50/50 skew-x-[-20deg] origin-top-right -z-10"></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="mb-20">
          <h2 className="text-sm font-bold text-xhs-red tracking-widest uppercase mb-3 text-center md:text-left">02 시장 동향</h2>
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              중국 소비자 <br className="hidden md:block"/>트렌드 분석
            </h3>
            <p className="text-gray-500 max-w-md text-lg text-center md:text-right">
              빠르게 변화하는 중국 마케팅 시장, 핵심 타겟의 소비 패턴을 정확히 분석합니다.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {consumerTrendsData.map((card, idx) => (
            <div 
              key={card.title} 
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle top border highlight */}
              <div className={`absolute top-0 left-0 w-full h-1 ${idx === 0 ? 'bg-xhs-red' : idx === 1 ? 'bg-amber-500' : 'bg-pink-500'}`}></div>
              
              <div className="mb-8 p-4 bg-gray-50 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500">
                {getIcon(card.icon)}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{card.title}</h3>
              <ul className="space-y-4">
                {card.points.map((point) => (
                  <li key={point} className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-gray-300 mt-0.5 shrink-0 group-hover:text-xhs-red transition-colors" />
                    <span className="text-gray-600 font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
