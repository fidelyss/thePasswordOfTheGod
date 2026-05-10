// CommentCard.tsx

import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { useState } from 'react';

interface CommentCardProps {
  name: string;
  text: string;
  timestamp: string;
  likes?: number;
  img: string;
  hasEmoji?: boolean;
  emojiText?: string;
}

export default function CommentCard({
  name,
  text,
  timestamp,
  img,
  likes = 0,
  hasEmoji = false,
  emojiText = '',
}: CommentCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className="glass-card p-4 md:p-5 hover:shadow-lg transition-all duration-300 fade-in-up hover:border-accent/30 hover:bg-white/80">
      {/* Header with Name and Avatar */}
      <div className="flex items-start gap-3 mb-3">
        
        {/* Avatar */}
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex-shrink-0 shadow-md hover:shadow-lg transition-shadow">
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name and Timestamp */}
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-foreground text-sm md:text-base hover:text-accent cursor-pointer transition-colors duration-200">
            {name}
          </h4>

          <p className="text-xs md:text-sm text-muted-foreground font-light">
            {timestamp}
          </p>
        </div>
      </div>

      {/* Comment Text */}
      <div className="mb-3 text-sm md:text-base text-foreground leading-relaxed font-light">
        <p>{text}</p>

        {hasEmoji && (
          <span
            className="ml-2 text-lg md:text-xl inline-block"
            style={{
              animation:
                'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }}
          >
            {emojiText}
          </span>
        )}
      </div>

      {/* Interaction Bar */}
      <div className="flex items-center gap-3 md:gap-5 pt-3 border-t border-border/20 text-xs md:text-sm text-muted-foreground">
        
        {/* Like Button */}
        <button
          onClick={handleLike}
          className={`flex items-center gap-1 transition-all duration-200 group font-medium ${
            isLiked
              ? 'text-red-500'
              : 'text-muted-foreground hover:text-red-500'
          }`}
        >
          <Heart
            className={`w-4 h-4 md:w-5 md:h-5 transition-all duration-200 ${
              isLiked
                ? 'fill-red-500 scale-110'
                : 'group-hover:scale-110'
            }`}
          />

          <span className="hidden sm:inline">
            {likeCount > 0
              ? `Curtir (${likeCount})`
              : 'Curtir'}
          </span>
        </button>

        {/* Reply Button */}
        <button className="flex items-center gap-1 hover:text-accent transition-all duration-200 group font-medium">
          <MessageCircle className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline">
            Responder
          </span>
        </button>

        {/* Share Button */}
        <button className="flex items-center gap-1 hover:text-accent transition-all duration-200 group font-medium">
          <Share2 className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline">
            Compartilhar
          </span>
        </button>

        {/* Follow Button */}
        <button className="ml-auto px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full font-bold text-xs md:text-sm transition-all duration-200 hover:shadow-lg transform hover:scale-105 active:scale-95 shadow-md">
          Seguir
        </button>
      </div>
    </div>
  );
}