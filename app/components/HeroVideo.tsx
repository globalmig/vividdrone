"use client";

import { useState, useRef, useEffect } from "react";

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

export default function HeroVideo() {
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    video.play().catch(() => {});
  }, [index]);

  function handleEnded() {
    setIndex((prev) => (prev + 1) % videos.length);
  }

  return (
    <video
      ref={videoRef}
      key={videos[index]}
      src={videos[index]}
      autoPlay
      muted
      playsInline
      onEnded={handleEnded}
      className="absolute inset-0 h-full w-full object-cover"
      aria-hidden="true"
    />
  );
}
