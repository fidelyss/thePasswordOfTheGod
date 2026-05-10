// CommentsSection.tsx

import CommentCard from './CommentCard';

const COMMENTS = [
  {
    name: 'Ingrid Medeiros',
    text: 'Adorei! Consegui entender tudo. Código é lindo demais. Recomendo muito. Valeu de verdade.',
    timestamp: 'Responder · Curtir · Seguir · 2h',
    likes: 3,
    hasEmoji: true,
    emojiText: '💜',
    img: '/imgs/1.webp',
  },
  {
    name: 'Lucas Silva',
    text: 'Excelente conteúdo! Muito bom mesmo. Aprendi bastante com a aula. Parabéns pelo trabalho. Muito obrigado!',
    timestamp: 'Responder · Curtir · Seguir · 1h',
    likes: 2,
    img: '/imgs/2.webp',
  },
  {
    name: 'Marina Santos',
    text: 'Perfeito! Consegui entender tudo que você explicou. Muito claro e objetivo. Obrigada por compartilhar. Ótimo conteúdo!',
    timestamp: 'Responder · Curtir · Seguir · 45m',
    likes: 5,
    img: '/imgs/3.webp',
  },
  {
    name: 'João Martins',
    text: 'Muito bom! Consegui aprender bastante. Obrigado pela dedicação em ensinar. Parabéns pelo excelente trabalho. Recomendo!',
    timestamp: 'Responder · Curtir · Seguir · 30m',
    likes: 1,
    img: '/imgs/4.webp',
  },
  {
    name: 'Rodrigo Freitas',
    text: 'Excelente! Muito didático e fácil de entender. Aprendi demais com essa aula. Parabéns! Muito obrigado pela dedicação.',
    timestamp: 'Responder · Curtir · Seguir · 25m',
    likes: 4,
    img: '/imgs/8.webp',
  },
  {
    name: 'Camila Santos',
    text: 'Adorei! Muito bom mesmo. Consegui entender tudo perfeitamente. Obrigada por compartilhar esse conhecimento valioso!',
    timestamp: 'Responder · Curtir · Seguir · 20m',
    likes: 3,
    hasEmoji: true,
    emojiText: '✨',
    img: '/imgs/7.webp',
  },
  {
    name: 'Beatriz Oliveira',
    text: 'Perfeito! Muito claro e objetivo. Aprendi bastante com essa aula. Parabéns pelo excelente conteúdo. Muito obrigada!',
    timestamp: 'Responder · Curtir · Seguir · 15m',
    likes: 2,
    img: '/imgs/5.webp',
  },
  {
    name: 'Alfredo Duarte',
    text: 'Ótimo! Consegui entender tudo. Muito bom mesmo. Obrigado pela dedicação. Parabéns pelo trabalho excelente. Recomendo!',
    timestamp: 'Responder · Curtir · Seguir · 10m',
    likes: 6,
    hasEmoji: true,
    emojiText: '👏',
    img: '/imgs/9.webp',
  },
  {
    name: 'Fernanda Goulart',
    text: 'Muito bom! Consegui aprender bastante. Obrigada por compartilhar esse conhecimento. Parabéns pelo excelente trabalho!',
    timestamp: 'Responder · Curtir · Seguir · 8m',
    likes: 3,
    img: '/imgs/10.webp',
  },
  {
    name: 'Isabella Lima',
    text: 'Adorei! Muito claro e didático. Aprendi demais com essa aula. Parabéns! Muito obrigada pela dedicação. Recomendo muito!',
    timestamp: 'Responder · Curtir · Seguir · 5m',
    likes: 7,
    hasEmoji: true,
    emojiText: '💖',
    img: '/imgs/11.webp',
  },
];

export default function CommentsSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container">
        
        {/* Section Header */}
        <div className="mb-8 md:mb-12 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
            Mostrando 25 de 191 Comentários
          </h2>

          <p className="text-muted-foreground text-sm md:text-base">
            Veja o que as pessoas estão dizendo sobre este conteúdo
          </p>
        </div>

        {/* Comments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {COMMENTS.map((comment, index) => (
            <div
              key={index}
              style={{
                animation: `fade-in-up 0.6s ease-out`,
                animationDelay: `${index * 50}ms`,
                animationFillMode: 'both',
              }}
            >
              <CommentCard
                name={comment.name}
                text={comment.text}
                timestamp={comment.timestamp}
                likes={comment.likes}
                hasEmoji={comment.hasEmoji}
                emojiText={comment.emojiText}
                img={comment.img}
              />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-8 md:mt-12 lg:mt-16">
          <button className="px-8 py-3 md:px-10 md:py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-full transition-all duration-200 hover:shadow-lg active:scale-95 transform hover:scale-105 uppercase tracking-wide shadow-md">
            Ver mais comentários
          </button>
        </div>
      </div>
    </section>
  );
}