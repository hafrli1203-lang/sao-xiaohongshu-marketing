import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import InquiryForm from "@/components/inquiry/InquiryForm";
import KakaoChannel from "@/components/inquiry/KakaoChannel";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "고객문의 | 잘파는 연구소",
  description: "샤오홍슈 체험단 마케팅 문의. 이메일 또는 카카오톡으로 상담하세요.",
};

export default function InquiryPage() {
  return (
    <>
      <Header />
      <main className="px-4 sm:px-6 py-8 sm:py-12 max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">고객문의</h1>
        <p className="text-sm sm:text-base text-gray-600 mb-8">
          샤오홍슈 체험단 마케팅에 대해 궁금한 점을 남겨주세요.
        </p>
        <InquiryForm />
        <div className="mt-10 pt-10 border-t border-gray-200">
          <KakaoChannel />
        </div>
        <div className="mt-8">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
            ← 메인 페이지로 돌아가기
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
