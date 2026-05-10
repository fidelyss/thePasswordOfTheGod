import { useState } from 'react';

/**
 * CTAButton Component
 * 
 * Design Philosophy: Celestial Luxury
 * - Botão CTA premium e milionário
 * - Animação pulse contínua elegante
 * - Glow dourado sutil e sofisticado
 * - Hover effects modernos
 * - Sensação de urgência e destaque
 */

export default function CTAButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full flex flex-col items-center justify-center py-12 md:py-20 px-4">
      <div className="relative w-full max-w-md">
        {/* Outer Glow Container - Animated */}
        <div
          className="absolute inset-0 rounded-full transition-all duration-500"
          style={{
            transform: isHovered ? 'scale(1.15)' : 'scale(1)',
            boxShadow: isHovered
              ? '0 0 50px oklch(0.72 0.18 45 / 0.6), 0 0 100px oklch(0.72 0.18 45 / 0.3)'
              : '0 0 30px oklch(0.72 0.18 45 / 0.4), 0 0 60px oklch(0.72 0.18 45 / 0.2)',
            filter: 'blur(12px)',
          }}
        ></div>

        {/* Main Button - Premium */}
        <button
          onClick={() => {
            window.location.href =
              'https://pay.hotmart.com/L102450306N?off=h5sfo4xr&ref=E105749804Q&bid=1778339229596';
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-base md:text-lg text-white transition-all duration-300 transform hover:scale-105 active:scale-95 uppercase tracking-widest shadow-2xl"
          style={{
            background:
              'linear-gradient(135deg, oklch(0.72 0.18 45) 0%, oklch(0.68 0.15 50) 50%, oklch(0.65 0.12 55) 100%)',
            boxShadow: isHovered
              ? '0 0 40px oklch(0.72 0.18 45 / 0.6), 0 0 80px oklch(0.72 0.18 45 / 0.3), inset 0 0 20px rgba(255,255,255,0.2)'
              : '0 0 30px oklch(0.72 0.18 45 / 0.4), 0 0 60px oklch(0.72 0.18 45 / 0.2)',
            letterSpacing: '0.08em',
            animation:
              'pulse-premium 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          }}
        >
          QUERO CONTINUAR AGORA
        </button>

        {/* Inner Shine Effect */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none overflow-hidden"
          style={{
            opacity: isHovered ? 0.4 : 0.15,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%)',
            transition: 'opacity 0.3s ease-out',
          }}
        ></div>

        {/* Animated Border */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none transition-all duration-300"
          style={{
            border: '2px solid',
            borderColor: isHovered
              ? 'oklch(0.72 0.18 45 / 0.8)'
              : 'oklch(0.72 0.18 45 / 0.4)',
            opacity: isHovered ? 1 : 0.8,
            boxShadow: isHovered
              ? 'inset 0 0 20px oklch(0.72 0.18 45 / 0.2)'
              : 'none',
          }}
        ></div>
      </div>

      {/* Subtitle Text - Premium */}
      <div className="mt-8 text-center">
        <p className="text-xs md:text-sm text-muted-foreground font-semibold tracking-wide">
          ⏱️ OFERTA POR TEMPO LIMITADO
        </p>
        <p className="text-xs text-muted-foreground/70 mt-2 font-light">
          Vagas limitadas • Acesso exclusivo • Garantia de satisfação
        </p>
      </div>
    </div>
  );
}
