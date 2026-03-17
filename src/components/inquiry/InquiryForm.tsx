"use client";

import { useState } from "react";
import type { InquiryFormData, InquiryFormState } from "@/types/inquiry";
import { BUSINESS_CATEGORIES, REGIONS, BUSINESS_GOALS } from "@/types/inquiry";
import { validateInquiryForm, hasErrors } from "@/lib/validation";

const initialFormData: InquiryFormData = {
  businessName: "",
  contactName: "",
  phone: "",
  email: "",
  region: "서울",
  category: "맛집/레스토랑",
  goal: "방문 유입",
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
          message: "문의가 성공적으로 접수되었습니다. 업종/지역에 맞는 방향을 정리해 빠르게 안내드리겠습니다.",
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

  const selectClass = "w-full min-h-[44px] px-3 py-2 border border-gray-300 rounded-md text-base bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent";
  const inputClass = "w-full min-h-[44px] px-3 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="businessName" className="text-sm font-medium text-gray-700">
          업체명
        </label>
        <input
          id="businessName"
          name="businessName"
          type="text"
          value={formData.businessName}
          onChange={handleChange}
          required
          className={inputClass}
        />
        {formState.errors.businessName && (
          <p role="alert" className="text-sm text-red-600 mt-0.5">
            {formState.errors.businessName}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contactName" className="text-sm font-medium text-gray-700">
          담당자명
        </label>
        <input
          id="contactName"
          name="contactName"
          type="text"
          value={formData.contactName}
          onChange={handleChange}
          required
          className={inputClass}
        />
        {formState.errors.contactName && (
          <p role="alert" className="text-sm text-red-600 mt-0.5">
            {formState.errors.contactName}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
          연락처
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="010-1234-5678"
          value={formData.phone}
          onChange={handleChange}
          required
          className={inputClass}
        />
        {formState.errors.phone && (
          <p role="alert" className="text-sm text-red-600 mt-0.5">
            {formState.errors.phone}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          이메일
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={inputClass}
        />
        {formState.errors.email && (
          <p role="alert" className="text-sm text-red-600 mt-0.5">
            {formState.errors.email}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="region" className="text-sm font-medium text-gray-700">
            지역
          </label>
          <select
            id="region"
            name="region"
            value={formData.region}
            onChange={handleChange}
            required
            className={selectClass}
          >
            {REGIONS.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
          {formState.errors.region && (
            <p role="alert" className="text-sm text-red-600 mt-0.5">
              {formState.errors.region}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="category" className="text-sm font-medium text-gray-700">
            업종
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className={selectClass}
          >
            {BUSINESS_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {formState.errors.category && (
            <p role="alert" className="text-sm text-red-600 mt-0.5">
              {formState.errors.category}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="goal" className="text-sm font-medium text-gray-700">
          목표
        </label>
        <select
          id="goal"
          name="goal"
          value={formData.goal}
          onChange={handleChange}
          required
          className={selectClass}
        >
          {BUSINESS_GOALS.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
        {formState.errors.goal && (
          <p role="alert" className="text-sm text-red-600 mt-0.5">
            {formState.errors.goal}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          문의 내용
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="매장 소개나 궁금한 점을 자유롭게 작성해주세요."
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-base resize-y focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
        />
        {formState.errors.message && (
          <p role="alert" className="text-sm text-red-600 mt-0.5">
            {formState.errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={formState.status === "submitting"}
        className="w-full min-h-[48px] px-6 py-3 bg-xhs-red hover:bg-xhs-red-dark disabled:bg-red-300 disabled:cursor-not-allowed text-white font-bold rounded-md text-base transition-colors"
      >
        {formState.status === "submitting" ? "접수 중..." : "무료 상담 신청하기"}
      </button>

      {formState.status === "success" && (
        <p role="status" className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-md px-4 py-3">
          {formState.message}
        </p>
      )}
      {formState.status === "error" && (
        <p role="alert" className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-md px-4 py-3">
          {formState.message}
        </p>
      )}
    </form>
  );
}
