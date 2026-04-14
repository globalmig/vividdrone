import Image from "next/image";
import HeroVideo from "./components/HeroVideo";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import FadeIn from "./components/FadeIn";

const featuredProducts = [
  {
    title: "맥심가옥, 행복 이리오너라~!",
    category: "Commercial Film",
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
    category: "Music Video",
    description: "밝고 경쾌한 곡의 무드에 맞춰 에너지 있는 화면으로 구성한 공식 MV입니다.",
    src: "/images/2.jpg",
  },
  {
    title: "우기 (YUQI) 'M.O.' Official Music Video",
    category: "Music Video",
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

export default function Home() {
  return (
    <main className="bg-[linear-gradient(180deg,#f6f8fb_0%,#eef4fb_32%,#f8f7f2_72%,#f3efe5_100%)] text-slate-900">
      <Header />

      <section id="top" className="relative overflow-hidden border-b border-slate-200/70">
        <HeroVideo />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="relative flex h-svh w-full flex-col items-center justify-center px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
              드론 촬영은
              <br />
              VIVID DRONE
            </h1>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="inline-flex h-10 md:h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-medium text-slate-950 transition hover:bg-white/90">
                문의 남기기
              </a>
              <a href="#products" className="inline-flex h-10 md:h-12 items-center justify-center rounded-full px-7 bg-[#5dadfc] text-sm font-medium text-white transition hover:bg-[#fee014]">
                작업 보기
              </a>
            </div>
          </div>

          {/* 스크롤 유도 */}
          <a href="#products" aria-label="아래로 스크롤" className="absolute bottom-10 flex flex-col items-center gap-1 text-white/70 transition hover:text-white">
            <span className="text-xs font-medium uppercase tracking-[0.25em]">Scroll</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 animate-bounce">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
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
                  </div>ㄹ
                </div>
              </div>
            </div>
          </div> */}
      </section>

      <section id="products" className="border-b border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.62),rgba(232,243,255,0.7))]">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
          <FadeIn>
            <div className="w-full border-b border-[#5aaafa] pb-4">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-700">Portfolio</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl ">대표 참여 작품</h2>
            </div>
          </FadeIn>

          <div className="mt-14 space-y-6">
            {featuredProducts.map((product, index) => {
              const isRight = index % 2 === 1;

              const card = (
                <article
                  className={`group grid gap-6 rounded-[2rem] border border-white/75 bg-white/75 p-3 md:p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur lg:grid-cols-2 lg:p-8 ${
                    isRight ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100">
                    <div className="relative aspect-video w-full overflow-hidden rounded-[1.75rem]">
                      <Image src={product.src} alt={product.title} fill className="object-cover transition duration-500 group-hover:scale-[1.03]" sizes="(max-width: 1024px) 100vw, 50vw" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center px-4 pb-4 md:px-1">
                    <div className="flex items-center justify-between gap-3 text-sm">
                      {/* <p className="font-semibold uppercase tracking-[0.32em] text-sky-700">0{index + 1}</p> */}
                      <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-400">{product.category}</p>
                      {product.href && (
                        <span className="lg:hidden flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-300 px-3 py-1 text-xs font-medium text-slate-500">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                            <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.52V8.48L15.5 12l-5.75 3.52z" />
                          </svg>
                          YouTube
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </span>
                      )}
                    </div>
                    <h3 className="mt-4 text-xl font-medium tracking-[-0.04em]  text-slate-950 md:text-2xl">{product.title}</h3>
                    {product.href && (
                      <span className="hidden lg:inline-flex mt-3 items-center gap-1.5 self-start rounded-full bg-slate-100 border border-slate-300 px-3 py-1 text-xs font-medium text-slate-500">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                          <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.52V8.48L15.5 12l-5.75 3.52z" />
                        </svg>
                        YouTube
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </span>
                    )}
                    {/* <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">{product.description}</p> */}
                  </div>
                </article>
              );

              if (product.href) {
                return (
                  <FadeIn key={product.title}>
                    <a href={product.href} target="_blank" rel="noreferrer" className="block">
                      {card}
                    </a>
                  </FadeIn>
                );
              }

              return <FadeIn key={product.title}>{card}</FadeIn>;
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="border-b border-slate-200/70 bg-[linear-gradient(180deg,rgba(230, 227, 213, 0.72),rgba(255,255,255,0.92))]">
        <div className="mx-auto w-full max-w-4xl px-4 py-24 lg:px-8">
          <FadeIn>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-800">Contact</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl  w-full border-b border-[#ffe014] pb-4">문의하기</h2>
              <p className="mt-6 text-md md:text-lg leading-8 text-slate-700 break-keep">촬영 목적, 일정, 예산 범위를 간단히 적어주세요</p>
            </div>
          </FadeIn>
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

          <FadeIn delay={100}>
            <ContactForm />
          </FadeIn>
        </div>
      </section>

      <footer className="bg-[#eaecee] text-slate-800">
        <div className="mx-auto w-full max-w-6xl px-6 py-8 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-col gap-1 text-xs text-slate-600 lg:text-left">
              <p>
                <span className="font-medium text-slate-700">상호 </span> &nbsp;비비드드론
              </p>
              <p>
                <span className="font-medium text-slate-700">대표자</span> &nbsp;김승환
              </p>
              <p>
                <span className="font-medium text-slate-700">사업자등록번호</span> &nbsp;530-50-00883
              </p>
              <p>
                <span className="font-medium text-slate-700">주소</span> &nbsp;경기도 용인시 기흥구 흥덕4로30번길 16, 401호 (영덕동)
              </p>
            </div>
          </div>
          <div className="mt-6 border-t border-slate-300/60 pt-4 text-xs text-slate-500">© {new Date().getFullYear()} 비비드드론. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}
