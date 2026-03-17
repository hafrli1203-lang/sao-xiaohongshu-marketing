import type { ServicePackage } from "@/types/sections";

export const servicePackagesData: ServicePackage[] = [
  {
    name: "진단형",
    subtitle: "우리 매장이 샤오홍슈에 맞는지 보는 시작안",
    description:
      "샤오홍슈가 처음이거나 확신이 없을 때, 업종과 지역의 적합도를 먼저 정리합니다.",
    includes: [
      "업종/지역 적합도 정리",
      "핵심 키워드 방향",
      "경쟁 사례 체크",
      "추천 시작 방식 제안",
    ],
    cta: "진단 신청하기",
  },
  {
    name: "파일럿형",
    subtitle: "작게 시작하는 첫 프로젝트",
    description:
      "처음부터 큰 계약 대신, 작은 규모로 반응을 먼저 확인하는 테스트 프로젝트입니다.",
    includes: [
      "1차 프로젝트 방향 설정",
      "초기 운영 구성",
      "발행 일정 관리",
      "1차 결과 정리",
    ],
    cta: "파일럿 시작하기",
    highlighted: true,
  },
  {
    name: "월운영형",
    subtitle: "반복 노출과 월간 관리를 위한 구조",
    description:
      "필요성이 확인된 후, 월 단위로 방향을 조정하며 꾸준히 관리하는 구조입니다.",
    includes: [
      "월간 운영안",
      "진행 스케줄",
      "품질 검수",
      "월간 결과 정리",
      "다음 달 액션 제안",
    ],
    cta: "운영 문의하기",
  },
];

export const medicalNotice =
  "병의원/의료 관련 업종은 의료광고 규제에 따라 별도 검토가 필요합니다. 개별 상담을 통해 안내드립니다.";
