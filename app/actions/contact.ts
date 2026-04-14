"use server";

import { SolapiMessageService } from "solapi";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = (formData.get("name") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !phone || !message) {
    return { status: "error", message: "모든 항목을 입력해주세요." };
  }

  const apiKey = process.env.SOLAPI_API_KEY;
  const apiSecret = process.env.SOLAPI_API_SECRET;
  const to = process.env.SOLAPI_TO;
  const from = process.env.SOLAPI_FROM;

  if (!apiKey || !apiSecret || !to || !from) {
    console.error("Solapi 환경변수가 설정되지 않았습니다.");
    return { status: "error", message: "서버 설정 오류입니다. 잠시 후 다시 시도해주세요." };
  }

  const client = new SolapiMessageService(apiKey, apiSecret);

  const text = `[비비드드론 문의]\n이름: ${name}\n연락처: ${phone}\n내용: ${message}`;

  try {
    await client.sendOne({ to, from, text });
    return { status: "success" };
  } catch (err) {
    console.error("SMS 발송 실패:", err);
    return { status: "error", message: "발송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요." };
  }
}
