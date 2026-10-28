import React, { useState } from 'react';

interface ResilientImageProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  fallbackSrc,
  alt,
  className = '',
  containerClassName = '',
  priority = false,
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [triedFallback, setTriedFallback] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const handleError = () => {
    if (!triedFallback && fallbackSrc && fallbackSrc !== currentSrc) {
      setTriedFallback(true);
      setCurrentSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#3B2418] via-[#533524] to-[#765035] text-[#FAF5EC] p-6 text-center ${containerClassName}`}
        role="img"
        aria-label={alt}
      >
        <svg
          className="w-10 h-10 text-[#C9A45C] mb-3 opacity-90"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6" />
          <path d="M3 12h18v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4Z" />
          <path d="M5 18v3" />
          <path d="M19 18v3" />
        </svg>
        <span className="font-display text-base font-semibold tracking-wide text-[#FAF5EC] line-clamp-2">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#EFE6D5] ${containerClassName}`}>
      <img
        src={currentSrc}
        alt={alt}
        referrerPolicy="no-referrer"
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-95'
        } ${className}`}
      />
    </div>
  );
};
