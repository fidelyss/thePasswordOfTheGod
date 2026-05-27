import { Play } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Hls from "hls.js";

const HLS_SRC =
  "https://vz-3bd7e83a-9d7.b-cdn.net/515e9e95-ccb4-40e3-8262-da8a586c4c36/playlist.m3u8";

export default function VideoPlaceholder() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    // Safari native HLS
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_SRC;

      video.addEventListener("loadeddata", () => {
        setIsReady(true);
        video.play().catch(() => {});
      });

      return;
    }

    // Chrome / Edge / Firefox
    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });

      hls.loadSource(HLS_SRC);

      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        setIsReady(true);

        video.play().catch(() => {});
      });

      hls.on(Hls.Events.ERROR, (_, data) => {
        console.log("HLS ERROR", data);
      });

      return () => {
        hls.destroy();
      };
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const handlePause = () => setIsPaused(true);
    const handlePlay = () => setIsPaused(false);

    video.addEventListener("pause", handlePause);
    video.addEventListener("play", handlePlay);

    return () => {
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("play", handlePlay);
    };
  }, []);

  const handleContainerClick = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      video.play();
      return;
    }

    if (video.muted) {
      video.muted = false;
      video.volume = 1;
      return;
    }

    video.pause();
  };

  const handleResume = (e: React.MouseEvent) => {
    e.stopPropagation();

    videoRef.current?.play();
  };

  return (
    <div className="w-full flex justify-center py-12 md:py-16 px-4">
      <div
        className="relative w-full max-w-sm rounded-3xl overflow-hidden cursor-pointer"
        style={{
          aspectRatio: "9 / 16",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleContainerClick}
      >
        {/* VIDEO */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          loop
          muted
          playsInline
          preload="metadata"
        />

        {/* Skeleton leve para LCP */}
        {!isReady && (
          <div className="absolute inset-0 bg-black animate-pulse z-10" />
        )}

        {/* Glow */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none transition-all duration-300"
          style={{
            boxShadow: isHovered
              ? "0 0 40px oklch(0.72 0.18 45 / 0.4)"
              : "0 0 25px oklch(0.72 0.18 45 / 0.2)",
          }}
        />

        {/* Overlay pause */}
        {isPaused && (
          <div className="absolute inset-0 bg-black/90 z-20 flex flex-col items-center justify-center p-6 text-center">
            <p className="text-white text-sm font-semibold mb-2">
              Esse vídeo sairá do ar em breve!
            </p>

            <p className="text-white/80 text-xs mb-6">
              Essa é sua última chance de aprender ativar o Código de Deus.
            </p>

            <div className="mb-6 text-6xl animate-bounce">🖐️</div>

            <button
              onClick={handleResume}
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl transition-all"
            >
              Continuar assistindo
            </button>
          </div>
        )}

        {/* Play Icon */}
        {!isReady && (
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="bg-white/10 backdrop-blur-md rounded-full p-5 border border-white/20">
              <Play className="text-white fill-white" size={38} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}