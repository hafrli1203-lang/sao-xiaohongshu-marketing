export interface InquiryFormData {
  businessName: string;
  contactName: string;
  phone: string;
  email: string;
  region: Region;
  category: BusinessCategory;
  goal: BusinessGoal;
  message: string;
}

export type Region =
  | "서울"
  | "제주"
  | "부산"
  | "기타 지역";

export const REGIONS: Region[] = [
  "서울",
  "제주",
  "부산",
  "기타 지역",
];

export type BusinessCategory =
  | "맛집/레스토랑"
  | "카페"
  | "뷰티/화장품"
  | "여행/숙박"
  | "리테일/편집숍"
  | "체험/액티비티"
  | "기타";

export const BUSINESS_CATEGORIES: BusinessCategory[] = [
  "맛집/레스토랑",
  "카페",
  "뷰티/화장품",
  "여행/숙박",
  "리테일/편집숍",
  "체험/액티비티",
  "기타",
];

export type BusinessGoal =
  | "방문 유입"
  | "예약 증가"
  | "오픈 홍보"
  | "꾸준한 노출 관리"
  | "잘 모르겠음";

export const BUSINESS_GOALS: BusinessGoal[] = [
  "방문 유입",
  "예약 증가",
  "오픈 홍보",
  "꾸준한 노출 관리",
  "잘 모르겠음",
];

export interface InquiryFormState {
  status: "idle" | "submitting" | "success" | "error";
  errors: Partial<Record<keyof InquiryFormData, string>>;
  message?: string;
}
