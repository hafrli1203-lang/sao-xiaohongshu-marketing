import type { InquiryFormData } from "@/types/inquiry";
import { BUSINESS_CATEGORIES } from "@/types/inquiry";

export type ValidationErrors = Partial<Record<keyof InquiryFormData, string>>;

const PHONE_REGEX = /^01[0-9]-?\d{3,4}-?\d{4}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateInquiryForm(
  data: InquiryFormData
): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!data.businessName || data.businessName.length < 2 || data.businessName.length > 50) {
    errors.businessName = "업체명을 2~50자로 입력해주세요.";
  }

  if (!data.contactName || data.contactName.length < 2 || data.contactName.length > 20) {
    errors.contactName = "담당자명을 2~20자로 입력해주세요.";
  }

  if (!data.phone || !PHONE_REGEX.test(data.phone)) {
    errors.phone = "올바른 전화번호를 입력해주세요. (예: 010-1234-5678)";
  }

  if (!data.email || !EMAIL_REGEX.test(data.email)) {
    errors.email = "올바른 이메일 주소를 입력해주세요.";
  }

  if (
    !data.category ||
    !BUSINESS_CATEGORIES.includes(data.category)
  ) {
    errors.category = "업종을 선택해주세요.";
  }

  if (!data.message || data.message.length < 10 || data.message.length > 1000) {
    errors.message = "문의 내용을 10~1000자로 입력해주세요.";
  }

  return errors;
}

export function hasErrors(errors: ValidationErrors): boolean {
  return Object.keys(errors).length > 0;
}
