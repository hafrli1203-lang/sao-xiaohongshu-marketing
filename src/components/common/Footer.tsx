import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-900">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white mb-2">잘파는연구소 제주점</h2>
          <p className="text-sm leading-relaxed">고객센터: 010-3990-9461</p>
          <p className="text-xs mt-4 text-gray-500">
            © {new Date().getFullYear()} 잘파는연구소 제주점. All rights reserved.
          </p>
        </div>
        <div className="flex gap-2 text-sm">
          <Link
            href="/terms"
            className="hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center px-3 rounded-lg hover:bg-gray-800"
          >
            이용약관
          </Link>
          <Link
            href="/privacy"
            className="hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center px-3 rounded-lg hover:bg-gray-800"
          >
            개인정보처리방침
          </Link>
        </div>
      </div>
    </footer>
  );
}
