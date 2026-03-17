import nodemailer from "nodemailer";
import type { InquiryFormData } from "@/types/inquiry";

export class EmailConfigError extends Error {
  constructor() {
    super("이메일 서비스가 설정되지 않았습니다.");
    this.name = "EmailConfigError";
  }
}

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!host || !port || !user || !pass || !contactEmail) {
    throw new EmailConfigError();
  }

  return { host, port: Number(port), user, pass, contactEmail };
}

export async function sendInquiryEmail(data: InquiryFormData): Promise<void> {
  const config = getSmtpConfig();

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });

  const timestamp = new Date().toLocaleString("ko-KR", {
    timeZone: "Asia/Seoul",
  });

  await transporter.sendMail({
    from: `"잘파는 연구소 웹사이트" <${config.user}>`,
    to: config.contactEmail,
    subject: `[샤오홍슈 마케팅] 새 문의 - ${data.businessName}`,
    text: `업체명: ${data.businessName}
담당자명: ${data.contactName}
연락처: ${data.phone}
이메일: ${data.email}
지역: ${data.region}
업종: ${data.category}
목표: ${data.goal}

문의 내용:
${data.message}

---
발송 시각: ${timestamp}`,
  });
}
