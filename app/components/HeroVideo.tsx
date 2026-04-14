"use client";

import { useEffect, useRef, useState } from "react";

const videos = [
  "/videos/260406_main_video_optimized_1.mp4",
  "/videos/260406_main_video_optimized_2.mp4",
  "/videos/260406_main_video_optimized_3.mp4",
  "/videos/260406_main_video_optimized_4.mp4",
  "/videos/260406_main_video_optimized_5.mp4",
  "/videos/260406_main_video_optimized_6.mp4",
  "/videos/260406_main_video_optimized_7.mp4",
  "/videos/260406_main_video_optimized_8.mp4",
  "/videos/260406_main_video_optimized_9.mp4",
  "/videos/260406_main_video_optimized_10.mp4",
  "/videos/260406_main_video_optimized_11.mp4",
];

const CROSSFADE_MS = 600; // 전환 페이드 시간
const PRELOAD_BEFORE_END_S = 3; // 끝나기 몇 초 전에 다음 영상 로드 시작

export default function HeroVideo() {
  const [active, setActive] = useState(0); // 0 or 1 (두 슬롯 중 현재 보이는 것)
  const indexRef = useRef(0); // 현재 재생 중인 videos 배열 인덱스
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([null, null]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function getNextIndex() {
    return (indexRef.current + 1) % videos.length;
  }

  function scheduleTransition(video: HTMLVideoElement, slot: number) {
    if (timerRef.current) clearTimeout(timerRef.current);

    const remaining = (video.duration - video.currentTime - PRELOAD_BEFORE_END_S) * 1000;
    const delay = Math.max(remaining, 0);

    timerRef.current = setTimeout(() => {
      const nextSlot = slot === 0 ? 1 : 0;
      const nextVideoIndex = getNextIndex();
      const nextVideo = videoRefs.current[nextSlot];
      if (!nextVideo) return;

      // 다음 슬롯에 영상 로드
      nextVideo.src = videos[nextVideoIndex];
      nextVideo.load();
      nextVideo.play().catch(() => {});

      // crossfade: 다음 슬롯을 visible로
      setActive(nextSlot);
      indexRef.current = nextVideoIndex;

      // 다음 전환 스케줄 등록
      nextVideo.addEventListener(
        "timeupdate",
        function onTimeUpdate() {
          if (nextVideo.duration - nextVideo.currentTime <= PRELOAD_BEFORE_END_S + 0.1) {
            nextVideo.removeEventListener("timeupdate", onTimeUpdate);
            scheduleTransition(nextVideo, nextSlot);
          }
        }
      );
    }, delay);
  }

  useEffect(() => {
    const video = videoRefs.current[0];
    if (!video) return;

    video.src = videos[0];
    video.load();
    video.play().catch(() => {});

    function onTimeUpdate() {
      if (!video) return;
      if (video.duration - video.currentTime <= PRELOAD_BEFORE_END_S + 0.1) {
        video.removeEventListener("timeupdate", onTimeUpdate);
        scheduleTransition(video, 0);
      }
    }

    video.addEventListener("timeupdate", onTimeUpdate);
    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {[0, 1].map((slot) => (
        <video
          key={slot}
          ref={(el) => { videoRefs.current[slot] = el; }}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover transition-opacity"
          style={{
            opacity: active === slot ? 1 : 0,
            transitionDuration: `${CROSSFADE_MS}ms`,
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
