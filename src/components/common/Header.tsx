import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black text-xhs-red flex items-center gap-2">
          잘파는연구소 제주점
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#hero" className="text-gray-700 hover:text-xhs-red font-medium transition-colors">홈</Link>
          <Link href="#intro" className="text-gray-700 hover:text-xhs-red font-medium transition-colors">소개</Link>
          <Link href="#service" className="text-gray-700 hover:text-xhs-red font-medium transition-colors">서비스</Link>
          <Link href="#pricing" className="text-gray-700 hover:text-xhs-red font-medium transition-colors">상품안내</Link>
        </nav>
        <Link 
          href="https://open.kakao.com/o/s51feKli"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-xhs-red text-white px-6 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-xhs-red-dark transition-all transform hover:-translate-y-0.5 shadow-lg shadow-xhs-red/20"
        >
          <MessageCircle size={18} />
          <span>문의하기</span>
        </Link>
      </div>
    </header>
  );
}
