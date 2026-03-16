import Image from "next/image";
import { contactInfo } from "@/data/contact";

export default function KakaoChannel() {
  return (
    <aside className="flex flex-col items-center text-center gap-4 py-6">
      <h3 className="text-lg font-semibold text-gray-800">카카오톡으로 문의하기</h3>
      <p className="text-sm text-gray-600">
        카카오톡 ID:{" "}
        <span className="font-medium text-gray-900 select-all">{contactInfo.kakaoId}</span>
      </p>
      <figure className="flex flex-col items-center gap-2">
        <div className="w-48 h-48 relative">
          <Image
            src={contactInfo.qrCodeImage}
            alt="잘파는 연구소 카카오톡 QR코드"
            width={192}
            height={192}
            className="rounded-md"
          />
        </div>
        <figcaption className="text-xs text-gray-500">카카오톡에서 QR코드를 스캔하세요</figcaption>
      </figure>
    </aside>
  );
}
