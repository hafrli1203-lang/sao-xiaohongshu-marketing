import Image from "next/image";
import { contactInfo } from "@/data/contact";

export default function KakaoChannel() {
  return (
    <aside>
      <h3>카카오톡으로 문의하기</h3>
      <p>카카오톡 ID: {contactInfo.kakaoId}</p>
      <figure>
        <Image
          src={contactInfo.qrCodeImage}
          alt="잘파는 연구소 카카오톡 QR코드"
          width={200}
          height={200}
        />
        <figcaption>카카오톡에서 QR코드를 스캔하세요</figcaption>
      </figure>
    </aside>
  );
}
