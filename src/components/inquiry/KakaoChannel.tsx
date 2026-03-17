import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function KakaoChannel() {
  return (
    <aside className="flex flex-col items-center text-center gap-4 py-6">
      <h3 className="text-lg font-semibold text-gray-800">카카오톡으로도 문의할 수 있습니다</h3>
      <p className="text-sm text-gray-600">
        폼 작성이 번거로우시면 카카오톡으로 편하게 문의하세요.
      </p>
      <Link
        href="https://open.kakao.com/o/s51feKli"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#FEE500] hover:bg-[#FDD835] text-gray-900 font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-md"
      >
        <MessageCircle className="w-5 h-5" />
        카카오톡 문의하기
      </Link>
    </aside>
  );
}
