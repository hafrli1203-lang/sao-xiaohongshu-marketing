import { NextResponse } from "next/server";
import type { InquiryFormData } from "@/types/inquiry";
import { validateInquiryForm, hasErrors } from "@/lib/validation";
import { sendInquiryEmail, EmailConfigError } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const data: InquiryFormData = await request.json();

    const errors = validateInquiryForm(data);
    if (hasErrors(errors)) {
      return NextResponse.json(
        { success: false, message: "입력값을 확인해주세요.", errors },
        { status: 400 }
      );
    }

    await sendInquiryEmail(data);

    return NextResponse.json({
      success: true,
      message: "문의가 성공적으로 접수되었습니다.",
    });
  } catch (error) {
    if (error instanceof EmailConfigError) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 503 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "서버 오류가 발생했습니다. 카카오톡으로 문의해주세요.",
      },
      { status: 500 }
    );
  }
}
