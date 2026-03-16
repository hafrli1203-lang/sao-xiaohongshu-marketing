export interface InquiryFormData {
  businessName: string;
  contactName: string;
  phone: string;
  email: string;
  category: BusinessCategory;
  message: string;
}

export type BusinessCategory =
  | "맛집/레스토랑"
  | "카페"
  | "뷰티/화장품"
  | "여행/숙박"
  | "패션/의류"
  | "기타";

export const BUSINESS_CATEGORIES: BusinessCategory[] = [
  "맛집/레스토랑",
  "카페",
  "뷰티/화장품",
  "여행/숙박",
  "패션/의류",
  "기타",
];

export interface InquiryFormState {
  status: "idle" | "submitting" | "success" | "error";
  errors: Partial<Record<keyof InquiryFormData, string>>;
  message?: string;
}
