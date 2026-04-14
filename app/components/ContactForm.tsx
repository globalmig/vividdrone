"use client";

import { useActionState } from "react";
import { submitContact, ContactState } from "../actions/contact";

const initialState: ContactState = { status: "idle" };

export default function ContactForm() {
  const [state, action, isPending] = useActionState(submitContact, initialState);

  if (state.status === "success") {
    return (
      <div className="mt-10 rounded-[2rem] border border-amber-200/90 bg-white/92 px-4 py-12 md:p-12 shadow-[0_24px_60px_rgba(161,98,7,0.14)] flex flex-col items-center text-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-700">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p className="text-lg font-semibold text-slate-900">문의가 접수되었습니다</p>
        <p className="text-sm text-slate-500">빠른 시일 내에 연락드리겠습니다.</p>
      </div>
    );
  }

  return (
    <form action={action} className="mt-10 rounded-[2rem] border border-amber-200/90 bg-white/92 px-4 py-6 md:p-6 shadow-[0_24px_60px_rgba(161,98,7,0.14)] sm:p-8">
      <div className="flex w-full flex-col gap-4 md:flex-row">
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 w-full">
          이름
          <input
            type="text"
            name="name"
            placeholder="성함"
            required
            className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-base outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:bg-white"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 w-full">
          연락처
          <input
            type="tel"
            name="phone"
            placeholder="010-0000-0000"
            required
            className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-base outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:bg-white"
          />
        </label>
      </div>

      <label className="mt-10 flex flex-col gap-2 text-sm font-medium text-slate-700">
        문의 내용
        <textarea
          name="message"
          rows={6}
          placeholder="촬영 목적, 희망 일정, 참고할 내용을 적어주세요."
          required
          className="rounded-[1.5rem] border border-slate-200 bg-slate-50 px-4 py-4 text-base leading-7 outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:bg-white"
        />
      </label>

      {state.status === "error" && (
        <p className="mt-4 text-sm text-red-500">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="mt-10 inline-flex h-12 w-full items-center justify-center rounded-full bg-amber-300 text-sm font-semibold text-slate-950 transition hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isPending ? "전송 중…" : "보내기"}
      </button>
    </form>
  );
}
