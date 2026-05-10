import VideoPlaceholder from '@/components/VideoPlaceholder';
import CommentsSection from '@/components/CommentsSection';
import CTAButton from '@/components/CTAButton';
import Footer from '@/components/Footer';

/**
 * Home Page - Premium Landing Page
 * 
 * Design Philosophy: Celestial Luxury
 * - Layout minimalista e elegante
 * - Foco no vídeo central e comentários
 * - CTA premium ao final
 * - Footer escuro contrastante
 * 
 * Estrutura:
 * 1. Hero com vídeo placeholder
 * 2. Seção de comentários
 * 3. Botão CTA final
 * 4. Footer
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Main Content */}
      <main className="flex-1">
        {/* Celestial Background Section */}
        <section className="celestial-bg">
          <div className="container pt-8 md:pt-16">
            {/* Video Placeholder */}
            <VideoPlaceholder />
          </div>
        </section>

        {/* Comments Section */}
        <section className="bg-background">
          <CommentsSection />
        </section>

        {/* CTA Button Section */}
        <section className="bg-background py-8 md:py-12">
          <div className="container">
            <CTAButton />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
