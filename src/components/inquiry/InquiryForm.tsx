"use client";

import { useState } from "react";
import type { InquiryFormData, InquiryFormState } from "@/types/inquiry";
import { BUSINESS_CATEGORIES } from "@/types/inquiry";
import { validateInquiryForm, hasErrors } from "@/lib/validation";

const initialFormData: InquiryFormData = {
  businessName: "",
  contactName: "",
  phone: "",
  email: "",
  category: "맛집/레스토랑",
  message: "",
};

export default function InquiryForm() {
  const [formData, setFormData] = useState<InquiryFormData>(initialFormData);
  const [formState, setFormState] = useState<InquiryFormState>({
    status: "idle",
    errors: {},
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormState((prev) => ({
      ...prev,
      errors: { ...prev.errors, [name]: undefined },
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const errors = validateInquiryForm(formData);
    if (hasErrors(errors)) {
      setFormState({ status: "idle", errors });
      return;
    }

    setFormState({ status: "submitting", errors: {} });

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        signal: AbortSignal.timeout(10000),
      });

      const result = await res.json();

      if (res.ok) {
        setFormState({
          status: "success",
          errors: {},
          message: "문의가 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.",
        });
        setFormData(initialFormData);
      } else {
        setFormState({
          status: "error",
          errors: {},
          message: result.message || "문의 접수에 실패했습니다. 카카오톡으로 문의해주세요.",
        });
      }
    } catch {
      setFormState({
        status: "error",
        errors: {},
        message: "네트워크 오류가 발생했습니다. 카카오톡으로 문의해주세요.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="businessName">업체명</label>
        <input
          id="businessName"
          name="businessName"
          type="text"
          value={formData.businessName}
          onChange={handleChange}
          required
        />
        {formState.errors.businessName && (
          <p role="alert">{formState.errors.businessName}</p>
        )}
      </div>

      <div>
        <label htmlFor="contactName">담당자명</label>
        <input
          id="contactName"
          name="contactName"
          type="text"
          value={formData.contactName}
          onChange={handleChange}
          required
        />
        {formState.errors.contactName && (
          <p role="alert">{formState.errors.contactName}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone">연락처</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="010-1234-5678"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        {formState.errors.phone && (
          <p role="alert">{formState.errors.phone}</p>
        )}
      </div>

      <div>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {formState.errors.email && (
          <p role="alert">{formState.errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="category">업종</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          {BUSINESS_CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        {formState.errors.category && (
          <p role="alert">{formState.errors.category}</p>
        )}
      </div>

      <div>
        <label htmlFor="message">문의 내용</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
        />
        {formState.errors.message && (
          <p role="alert">{formState.errors.message}</p>
        )}
      </div>

      <button type="submit" disabled={formState.status === "submitting"}>
        {formState.status === "submitting" ? "접수 중..." : "문의하기"}
      </button>

      {formState.status === "success" && <p role="status">{formState.message}</p>}
      {formState.status === "error" && <p role="alert">{formState.message}</p>}
    </form>
  );
}
