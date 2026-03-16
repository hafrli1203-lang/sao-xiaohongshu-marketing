import type { SearchDataSection } from "@/types/sections";

export const searchDataSection: SearchDataSection = {
  headline:
    "인플루언서 콘텐츠를 통한 진정성 있는 체험 리뷰가",
  subheadline: "소비자 신뢰도와 구매결정에 결정적 영향",
  barChart: [
    { label: "한국맛집", value: 13 },
    { label: "서울맛집", value: 3 },
    { label: "한국카페", value: 2.5 },
    { label: "k뷰티", value: 2 },
  ],
  hashtags: [
    { tag: "#韩国美食", highlighted: true },
    { tag: "#韩国潮流", highlighted: false },
    { tag: "#首尔咖啡店", highlighted: false },
    { tag: "#韩国打卡", highlighted: true },
    { tag: "#韩国美妆", highlighted: true },
    { tag: "#韩国旅行", highlighted: false },
  ],
};
