/**
 * Footer Component
 * 
 * Design Philosophy: Celestial Luxury
 * - Footer escuro profundo contrastando com o design claro
 * - Links legais (copyright, termos, privacidade)
 * - Design premium e minimalista
 * - Responsivo para todos os dispositivos
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white mt-16 md:mt-24 lg:mt-32">
      <div className="container py-12 md:py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 pb-8 md:pb-12 border-b border-white/10">
          {/* Brand / Logo Area */}
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold text-white mb-1 tracking-wide">
              Código de Deus
            </h3>
            <p className="text-xs md:text-sm text-gray-400 font-light">
              Premium Landing Page Experience
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-6 text-xs md:text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200 font-medium"
            >
              Termos de Uso
            </a>
            <span className="text-gray-700">•</span>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200 font-medium"
            >
              Política de Privacidade
            </a>
            <span className="text-gray-700">•</span>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200 font-medium"
            >
              Contato
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 md:pt-12 text-center">
          <p className="text-xs md:text-sm text-gray-500 mb-2 font-light">
            © {currentYear} Código de Deus. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-600 font-light">
            Desenvolvido com ❤️ para excelência digital
          </p>
        </div>
      </div>
    </footer>
  );
}
