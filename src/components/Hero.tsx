import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { HERO_IMAGE, getWhatsAppGeneralUrl } from '../data/products';
import { ResilientImage } from './ResilientImage';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#FAF5EC] pt-6 pb-14 md:pt-12 md:pb-20 border-b border-[#3B2418]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Editorial Copy & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center animate-fade-in">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#3B2418] leading-[1.12] tracking-tight [text-wrap:balance]">
              Crafted with Tradition. Designed for Your Home.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-[#3B2418]/80 leading-relaxed max-w-xl">
              Discover beautiful wooden furniture, elegant bedroom sets, and traditional handicrafts from RM Furnitures Chiniot.
            </p>

            {/* Primary & Secondary CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <a
                href="#collection"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#3B2418] text-[#FAF5EC] text-sm sm:text-base font-semibold hover:bg-[#533524] transition-all duration-150 shadow-sm hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B2418]"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4 text-[#C9A45C] shrink-0" aria-hidden="true" />
              </a>

              <a
                href={getWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#FFFFFF] text-[#3B2418] border border-[#765035]/35 text-sm sm:text-base font-semibold hover:bg-[#765035]/10 hover:border-[#765035] transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#765035]"
              >
                <MessageCircle className="w-4 h-4 text-[#765035] shrink-0" aria-hidden="true" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Subtle Craftsmanship Highlights Strip */}
            <div className="mt-10 pt-8 border-t border-[#3B2418]/10 grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <p className="font-display text-lg sm:text-xl font-bold text-[#3B2418]">
                  Custom Woodwork
                </p>
                <p className="text-xs sm:text-sm text-[#765035] mt-0.5">
                  Beds, sofas &amp; suites
                </p>
              </div>
              <div>
                <p className="font-display text-lg sm:text-xl font-bold text-[#3B2418]">
                  Chiniot Craft
                </p>
                <p className="text-xs sm:text-sm text-[#765035] mt-0.5">
                  Carved &amp; inlay artistry
                </p>
              </div>
              <div>
                <p className="font-display text-lg sm:text-xl font-bold text-[#3B2418]">
                  Direct Enquiry
                </p>
                <p className="text-xs sm:text-sm text-[#765035] mt-0.5">
                  Prices via WhatsApp
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: High-Quality Hero Bedroom Suite Image */}
          <div className="lg:col-span-6 flex items-stretch">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-md border border-[#3B2418]/10 bg-[#3B2418]">
              <ResilientImage
                src={HERO_IMAGE.src}
                fallbackSrc={HERO_IMAGE.fallbackPublicPath}
                alt={HERO_IMAGE.alt}
                priority={true}
                containerClassName="w-full h-full min-h-[280px] sm:min-h-[380px] lg:min-h-[460px]"
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
              />
              {/* Measured bottom scrim for caption legibility */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#3B2418]/90 via-[#3B2418]/45 to-transparent p-5 sm:p-6">
                <p className="text-xs tracking-wider uppercase text-[#C9A45C] font-medium">
                  Chiniot Wooden Craftsmanship
                </p>
                <p className="font-display text-lg sm:text-xl text-[#FAF5EC] font-semibold mt-0.5">
                  Hand-Carved Solid Wood Bedroom Sets &amp; Home Furnishings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
