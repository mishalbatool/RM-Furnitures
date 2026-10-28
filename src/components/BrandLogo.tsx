import React from 'react';

interface BrandLogoProps {
  variant?: 'header' | 'footer';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'header',
  className = '',
}) => {
  const isFooter = variant === 'footer';

  return (
    <span
      className={`inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 select-none ${className}`}
    >
      {/* Minimalist carved wooden armchair emblem */}
      <span
        className={`inline-flex items-center justify-center w-9 h-9 rounded-lg border transition-colors ${
          isFooter
            ? 'bg-[#FAF5EC]/10 border-[#C9A45C]/40 text-[#C9A45C]'
            : 'bg-[#3B2418] border-[#765035] text-[#C9A45C]'
        }`}
        aria-hidden="true"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Traditional arched chair backrest & seat */}
          <path d="M6 11V6.5C6 4.8 8.7 3.5 12 3.5C15.3 3.5 18 4.8 18 6.5V11" />
          <path d="M9 7.5C9.8 6.7 10.8 6.3 12 6.3C13.2 6.3 14.2 6.7 15 7.5" />
          <path d="M4 11.5H20V15C20 15.8 19.3 16.5 18.5 16.5H5.5C4.7 16.5 4 15.8 4 15V11.5Z" />
          <path d="M6 16.5V20" />
          <path d="M18 16.5V20" />
        </svg>
      </span>
      <span
        className={`font-display text-2xl font-bold tracking-tight ${
          isFooter ? 'text-[#FAF5EC]' : 'text-[#3B2418]'
        }`}
      >
        RM Furnitures
      </span>
    </span>
  );
};
