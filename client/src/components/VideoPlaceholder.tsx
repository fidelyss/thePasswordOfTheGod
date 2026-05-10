import { Play } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

/**
 * VideoPlaceholder Component
 * 
 * Design Philosophy: Celestial Luxury
 * - Placeholder elegante e moderno para vídeo vertical
 * - Glow dourado sutil com animação pulsante
 * - Botão play premium com hover effect
 * - Responsivo para todos os dispositivos
 */

export default function VideoPlaceholder({ videoSrc = "https://subtle-kitten-9d0bfe.netlify.app/video/v.mp4" }: { videoSrc?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Autoplay muted on page load
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.volume = 1;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (err) {
        console.log('Autoplay prevented:', err);
      }
    };

    playVideo();

    const handlePause = () => setIsPaused(true);
    const handlePlay = () => setIsPaused(false);

    video.addEventListener('pause', handlePause);
    video.addEventListener('play', handlePlay);

    return () => {
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('play', handlePlay);
    };
  }, [videoSrc]);

  const handleContainerClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      if (video.muted) {
        // Primeira interação: libera áudio em volume máximo
        video.muted = false;
        video.volume = 1;
      } else {
        // Cliques seguintes: pausar (mostra overlay da imagem)
        video.pause();
      }
    }
  };

  const handleResume = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (video) {
      video.play();
    }
  };

  return (
    <div className="w-full flex justify-center py-12 md:py-16 px-4">
      <div
        className="relative w-full max-w-sm rounded-3xl overflow-hidden group cursor-pointer transition-all duration-300"
        style={{
          aspectRatio: '9 / 16',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleContainerClick}
      >
        {/* Vídeo real no centro */}
        <video
          ref={videoRef}
          src={videoSrc}
          className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          playsInline
          loop
        />

        {/* Animated Glow Background */}
        <div
          className="absolute inset-0 rounded-3xl transition-all duration-500 pointer-events-none"
          style={{
            boxShadow: isHovered
              ? '0 0 40px oklch(0.72 0.18 45 / 0.5), 0 0 80px oklch(0.72 0.18 45 / 0.25), inset 0 0 30px oklch(0.72 0.18 45 / 0.1)'
              : '0 0 30px oklch(0.72 0.18 45 / 0.3), 0 0 60px oklch(0.72 0.18 45 / 0.15)',
          }}
        ></div>

        {/* Overlay da imagem (aparece ao pausar) */}
        {isPaused && (
          <div className="absolute inset-0 bg-black flex flex-col items-center justify-center p-6 md:p-8 z-20 text-center">
            {/* Textos exatos da imagem */}
            <div className="text-center space-y-3 mb-8 z-10">
              <p className="text-white text-sm md:text-base font-semibold leading-relaxed tracking-wide">
                Esse vídeo sairá do ar em breve!
              </p>
              <p className="text-white/90 text-xs md:text-sm leading-relaxed font-light">
                Essa é sua última chance de aprender ativar o Código de Deus e viver a vida dos seus sonhos
              </p>
            </div>

            {/* Stop hand icon (exatamente como na imagem) */}
            <div className="mb-8 z-10 animate-bounce" style={{ animationDuration: '2s' }}>
              <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-3xl flex items-center justify-center shadow-2xl border-4 border-red-400">
                <span className="text-6xl md:text-7xl drop-shadow-lg">🖐️</span>
              </div>
            </div>

            {/* Botão "Continuar assistindo" */}
            <button
              onClick={handleResume}
              className="px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-sm md:text-base font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 uppercase tracking-wide"
            >
              Continuar assistindo
            </button>

            {/* Cursor de mão apontando (como na imagem) */}
            <div className="absolute bottom-8 right-8 text-white animate-pulse text-4xl">👆</div>
          </div>
        )}

        {/* Border Glow - Premium */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none transition-all duration-300"
          style={{
            border: '2px solid',
            borderColor: isHovered
              ? 'oklch(0.72 0.18 45 / 0.6)'
              : 'oklch(0.72 0.18 45 / 0.2)',
            opacity: isHovered ? 1 : 0.6,
          }}
        ></div>
      </div>
    </div>
  );
}