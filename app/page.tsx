import Image from "next/image";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M4.5 7l7.5 6 7.5-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      <path d="M6.9 4.5h2.6l1.3 4.1-1.9 1.7a15 15 0 0 0 4.8 4.8l1.7-1.9 4.1 1.3v2.6c0 .8-.6 1.5-1.4 1.6-1 .1-2 .1-3-.1A17.5 17.5 0 0 1 5.3 8.9c-.2-1-.2-2-.1-3 0-.8.7-1.4 1.7-1.4Z" />
    </svg>
  );
}

const featuredProducts = [
  {
    title: "맥심가옥, 행복 이리오너라~!",
    category: "Music Video",
    description: "공간의 분위기와 브랜드 무드를 감각적으로 담아낸 프로모션 영상 작업입니다.",
    src: "/images/1.jpg",
    href: "https://www.youtube.com/watch?v=eCry8GHYozU",
  },
  {
    title: "Hearts2Hearts 하츠투하츠 'The Chase' MV",
    category: "Music Video",
    description: "퍼포먼스와 장면 전환의 리듬을 살려 완성한 뮤직비디오 촬영 작업입니다.",
    src: "/images/4.jpg",
  },
  {
    title: "TWS (투어스) 'はじめまして' Official MV",
    category: "Official MV",
    description: "밝고 경쾌한 곡의 무드에 맞춰 에너지 있는 화면으로 구성한 공식 MV입니다.",
    src: "/images/2.jpg",
  },
  {
    title: "우기 (YUQI) 'M.O.' Official Music Video",
    category: "Official MV",
    description: "아티스트의 존재감과 트랙의 분위기를 선명하게 담아낸 뮤직비디오 작업입니다.",
    src: "/images/3.jpg",
  },
  {
    title: "tvN 예능프로그램 헬스파머",
    category: "Broadcast",
    description: "예능 프로그램 현장의 생동감과 공간 흐름을 안정적으로 기록한 방송 촬영 작업입니다.",
    src: "/images/5.jpg",
  },
];

const contactItems = [
  {
    label: "Instagram",
    value: "@vivid_rone",
    href: "https://www.instagram.com/vivid_rone?igsh=MXQ4bzVyNmZwN3BlZg==",
    icon: InstagramIcon,
  },
  {
    label: "Email",
    value: "vividrone@naver.com",
    href: "mailto:vividrone@naver.com",
    icon: MailIcon,
  },
  {
    label: "Phone",
    value: "010-2762-0987",
    href: "tel:01027620987",
    icon: PhoneIcon,
  },
];

export default function Home() {
  return (
    <main className="bg-[linear-gradient(180deg,#f6f8fb_0%,#eef4fb_32%,#f8f7f2_72%,#f3efe5_100%)] text-slate-900">
      <header className="sticky top-0 z-30 border-b border-white/60 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <Image src="/images/비비드드론로고2.png" alt="Vivid Drone Studio logo" width={132} height={44} className="h-11 w-auto" priority />
            <span className="hidden text-sm font-medium text-slate-500 sm:block">Vivid Drone Studio</span>
          </a>
          <div className="flex items-center gap-4">
            <nav className="flex items-center gap-5 text-sm text-slate-600">
              <a href="#products" className="transition hover:text-slate-950">
                Products
              </a>
              <a href="#contact" className="transition hover:text-slate-950">
                Contact
              </a>
            </nav>
            <div className="flex items-center gap-2">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === "Instagram" ? "_blank" : undefined}
                    rel={item.label === "Instagram" ? "noreferrer" : undefined}
                    aria-label={`${item.label}: ${item.value}`}
                    title={`${item.label}: ${item.value}`}
                    className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 transition hover:border-amber-300 hover:text-slate-950"
                  >
                    <Icon />
                    <span className="pointer-events-none absolute right-0 top-[calc(100%+0.5rem)] whitespace-nowrap rounded-full bg-slate-950 px-3 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition group-hover:opacity-100 group-focus-visible:opacity-100">
                      {item.value}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden border-b border-slate-200/70">
        <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top,#d8ecff_0,transparent_48%),radial-gradient(circle_at_85%_20%,#fff3bf_0,transparent_28%)]" />
        <div className="mx-auto grid min-h-[78svh] w-full max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
          <div className="relative flex flex-col justify-center">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-sky-700">Landing Page</p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
              선명하게 보여주고
              <br />
              유려하게 담아내는
              <br />
              드론 영상.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              현장 기록부터 브랜드 영상까지, 필요한 화면만 명확하게 담아 간결한 결과물로 연결합니다. 불필요한 군더더기 없이, 첫 화면부터 작업 방향이 바로 전달되는 랜딩 페이지입니다.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-7 text-sm font-medium text-white transition hover:bg-slate-800">
                문의 남기기
              </a>
              <a
                href="#products"
                className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-white/80 px-7 text-sm font-medium text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
              >
                작업 보기
              </a>
            </div>
          </div>

          {/* <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md rounded-[2rem] border border-white/70 bg-white/75 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.14)] backdrop-blur">
              <div className="rounded-[1.5rem] border border-slate-200 bg-[linear-gradient(145deg,#f7fbff_0%,#e1eefb_45%,#f4efe1_100%)] p-6">
                <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.28em] text-slate-500">
                  <span>Preview</span>
                  <span>01</span>
                </div>
                <div className="mt-16 rounded-[1.75rem] border border-white/90 bg-white/55 px-6 py-10 shadow-inner">
                  <p className="text-sm font-medium text-sky-700">
                    aerial story direction
                  </p>
                  <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                    Dynamic
                    <br />
                    Visual
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-[1.25rem] bg-slate-950 px-4 py-5 text-white">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/60">
                      shots
                    </p>
                    <p className="mt-2 text-2xl font-semibold">4K</p>
                  </div>
                  <div className="rounded-[1.25rem] bg-amber-200/80 px-4 py-5 text-slate-900">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-600">
                      response
                    </p>
                    <p className="mt-2 text-2xl font-semibold">24h</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <section id="products" className="border-b border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.62),rgba(232,243,255,0.7))]">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
          <div className="w-full border-b border-[#5aaafa] pb-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-700">Products</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl ">대표 참여 작품</h2>
          </div>

          <div className="mt-14 space-y-6">
            {featuredProducts.map((product, index) => {
              const isRight = index % 2 === 1;

              const card = (
                <article
                  className={`group grid gap-6 rounded-[2rem] border border-white/75 bg-white/75 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur lg:grid-cols-2 lg:p-8 ${
                    isRight ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-gradient-to-br from-white via-sky-50 to-amber-50">
                    <div className="h-[280px] w-full overflow-hidden rounded-[1.75rem] bg-slate-100">
                      <Image
                        src={product.src}
                        alt={product.title}
                        width={1600}
                        height={1200}
                        className="h-auto w-full transition duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center px-1">
                    <div className="flex items-center justify-between gap-3 text-sm">
                      <p className="font-semibold uppercase tracking-[0.32em] text-sky-700">0{index + 1}</p>
                      <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-400">{product.category}</p>
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-3xl">{product.title}</h3>
                    <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">{product.description}</p>
                  </div>
                </article>
              );

              if (product.href) {
                return (
                  <a key={product.title} href={product.href} target="_blank" rel="noreferrer" className="block">
                    {card}
                  </a>
                );
              }

              return <div key={product.title}>{card}</div>;
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="border-b border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,248,214,0.72),rgba(255,255,255,0.92))]">
        <div className="mx-auto w-full max-w-4xl px-6 py-24 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-800">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl  w-full border-b border-[#ffe014] pb-4">문의하기</h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">촬영 목적, 일정, 예산 범위를 간단히 적어주시면 작업 가능 범위와 진행 방식을 정리해드립니다.</p>
            {/* <div className="mt-8 space-y-3">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === "Instagram" ? "_blank" : undefined}
                    rel={item.label === "Instagram" ? "noreferrer" : undefined}
                    className="flex items-center justify-between rounded-2xl border border-amber-100/80 bg-white/72 px-5 py-4 text-sm text-slate-700 shadow-[0_18px_40px_rgba(161,98,7,0.10)] transition hover:border-amber-400 hover:bg-white hover:text-slate-950"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-200 bg-amber-50 text-amber-700">
                        <Icon />
                      </span>
                      <span className="font-semibold uppercase tracking-[0.18em] text-amber-800">{item.label}</span>
                    </span>
                    <span>{item.value}</span>
                  </a>
                );
              })}
            </div> */}
          </div>

          <form className="mt-10 rounded-[2rem] border border-amber-200/90 bg-white/92 p-6 shadow-[0_24px_60px_rgba(161,98,7,0.14)] sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                이름
                <input
                  type="text"
                  name="name"
                  placeholder="성함"
                  className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-base outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:bg-white"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                연락처
                <input
                  type="tel"
                  name="phone"
                  placeholder="010-0000-0000"
                  className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-base outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:bg-white"
                />
              </label>
            </div>

            <label className="mt-4 flex flex-col gap-2 text-sm font-medium text-slate-700">
              이메일
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-base outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:bg-white"
              />
            </label>

            <label className="mt-4 flex flex-col gap-2 text-sm font-medium text-slate-700">
              문의 내용
              <textarea
                name="message"
                rows={6}
                placeholder="촬영 목적, 희망 일정, 참고할 내용을 적어주세요."
                className="rounded-[1.5rem] border border-slate-200 bg-slate-50 px-4 py-4 text-base leading-7 outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:bg-white"
              />
            </label>

            <button type="submit" className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-amber-300 text-sm font-semibold text-slate-950 transition hover:bg-amber-400">
              보내기
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[#c9bfaf] text-slate-800">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="font-semibold">Vivid Drone Studio</p>
            <p className="mt-1 text-slate-700">필요한 영상만 정확하게 담아내는 드론 비주얼 스튜디오</p>
          </div>
          <div className="space-y-1 text-slate-700">
            <p>Instagram. @vivid_rone</p>
            <p>vividrone@naver.com</p>
            <p>010-2762-0987</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
