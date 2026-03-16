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
      <main>
        <h1>고객문의</h1>
        <p>샤오홍슈 체험단 마케팅에 대해 궁금한 점을 남겨주세요.</p>
        <InquiryForm />
        <KakaoChannel />
        <Link href="/">← 메인 페이지로 돌아가기</Link>
      </main>
      <Footer />
    </>
  );
}
