import React, { useState } from 'react';
import { MapPin, ExternalLink, MessageCircle, X, Maximize2 } from 'lucide-react';
import {
  BUSINESS_INFO,
  GALLERY_ITEMS,
  GalleryItem,
  getWhatsAppGeneralUrl,
  getWhatsAppProductUrl,
} from '../data/products';
import { ResilientImage } from './ResilientImage';

export const AboutAndGallery: React.FC = () => {
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  return (
    <>
      {/* About Us Section (#about) */}
      <section
        id="about"
        className="py-16 md:py-24 bg-[#FAF5EC] border-b border-[#3B2418]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: About Narrative */}
            <div className="lg:col-span-7">
              <p className="text-xs sm:text-sm font-medium uppercase tracking-wider text-[#765035]">
                About Us
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-[#3B2418] tracking-tight [text-wrap:balance]">
                {BUSINESS_INFO.name} — Traditional Furniture &amp; Wooden Handicrafts
              </h2>

              <blockquote className="mt-5 p-5 rounded-xl bg-[#FFFFFF] border border-[#3B2418]/10 font-display text-xl sm:text-2xl italic text-[#3B2418]">
                “{BUSINESS_INFO.description}”
              </blockquote>

              <p className="mt-5 text-base text-[#3B2418]/80 leading-relaxed">
                Located on Saad Masjid Street in Chiniot, Pakistan,{' '}
                <strong className="font-semibold text-[#3B2418]">
                  {BUSINESS_INFO.name}
                </strong>{' '}
                is a local furniture and handicrafts business offering a variety of wooden furniture, complete bedroom sets, beds, drawing room sofas, home decoration pieces, and traditional wooden handicrafts.
              </p>

              <p className="mt-4 text-base text-[#3B2418]/80 leading-relaxed">
                Chiniot is widely recognized across Pakistan for its woodworking and carving traditions. Whether you are furnishing a bedroom, selecting a carved sofa set for your guest lounge, or looking for decorative wooden handicrafts, you can explore our collection online and message us directly on WhatsApp for price and design enquiries.
              </p>

              {/* Verified Business Details Strip */}
              <div className="mt-8 pt-6 border-t border-[#3B2418]/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#FFFFFF] p-4 rounded-xl border border-[#3B2418]/10">
                  <p className="text-xs font-medium uppercase tracking-wider text-[#765035]">
                    Location
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#3B2418] flex items-start gap-1.5">
                    <MapPin className="w-4 h-4 text-[#765035] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{BUSINESS_INFO.address}</span>
                  </p>
                </div>

                <div className="bg-[#FFFFFF] p-4 rounded-xl border border-[#3B2418]/10">
                  <p className="text-xs font-medium uppercase tracking-wider text-[#765035]">
                    Google Listing
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#3B2418] tabular-nums">
                    {BUSINESS_INFO.googleReviewsText}
                  </p>
                  <p className="text-xs text-[#765035] mt-0.5">
                    Local business presence in Chiniot
                  </p>
                </div>

                <div className="bg-[#FFFFFF] p-4 rounded-xl border border-[#3B2418]/10">
                  <p className="text-xs font-medium uppercase tracking-wider text-[#765035]">
                    Social Page
                  </p>
                  <a
                    href={BUSINESS_INFO.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-[#3B2418] hover:text-[#765035] transition-colors"
                  >
                    <span>Facebook Page</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#765035]" aria-hidden="true" />
                  </a>
                  <p className="text-xs text-[#765035] mt-0.5">
                    Follow updates &amp; posts
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Craft Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#3B2418]/10 shadow-xs">
                <div className="rounded-xl overflow-hidden aspect-[4/3]">
                  <ResilientImage
                    src={GALLERY_ITEMS[2].image}
                    fallbackSrc={GALLERY_ITEMS[2].fallbackPublicPath}
                    alt="Carved wooden sofa set by RM Furnitures Chiniot"
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="mt-4 px-1">
                  <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#765035]">
                    <span>Saad Masjid Street</span>
                    <span aria-hidden="true">·</span>
                    <span>Chiniot, Pakistan</span>
                  </div>
                  <h3 className="mt-1 font-display text-2xl font-bold text-[#3B2418]">
                    All Types of Furniture &amp; Handicrafts
                  </h3>
                  <p className="mt-1.5 text-sm text-[#3B2418]/75 leading-relaxed">
                    Enquire on WhatsApp to check current availability, custom sizes, polish finishes, and delivery details for your city.
                  </p>
                  <div className="mt-4">
                    <a
                      href={getWhatsAppGeneralUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#3B2418] text-[#FAF5EC] text-xs sm:text-sm font-semibold hover:bg-[#533524] transition-colors whitespace-nowrap shrink-0"
                    >
                      <MessageCircle className="w-4 h-4 text-[#C9A45C]" aria-hidden="true" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section (#gallery) */}
      <section
        id="gallery"
        className="py-16 md:py-24 bg-[#FAF5EC] border-b border-[#3B2418]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-xs sm:text-sm font-medium uppercase tracking-wider text-[#765035]">
                Visual Lookbook
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-[#3B2418] tracking-tight [text-wrap:balance]">
                Furniture &amp; Craftsmanship Gallery
              </h2>
              <p className="mt-3 text-base text-[#3B2418]/80 leading-relaxed">
                A closer look at wooden beds, carved furniture frames, bedroom suites, drawing room sofas, and traditional decorative handicrafts.
              </p>
            </div>
            <p className="text-xs text-[#765035]">
              Select any photograph to view larger details
            </p>
          </div>

          {/* Balanced Architectural Gallery Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedGalleryItem(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedGalleryItem(item);
                  }
                }}
                aria-label={`View larger image of ${item.title}`}
                className="group cursor-pointer relative rounded-2xl overflow-hidden border border-[#3B2418]/10 bg-[#FFFFFF] shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B2418]"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <ResilientImage
                    src={item.image}
                    fallbackSrc={item.fallbackPublicPath}
                    alt={item.title}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Measured Gradient Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B2418]/90 via-[#3B2418]/25 to-transparent flex flex-col justify-end p-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-medium uppercase tracking-wider text-[#C9A45C]">
                      {item.category}
                    </span>
                    <Maximize2
                      className="w-4 h-4 text-[#FAF5EC]/80 opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-1 font-display text-xl font-bold text-[#FAF5EC]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#FAF5EC]/85 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Gallery Item */}
      {selectedGalleryItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#3B2418]/80 backdrop-blur-xs animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label={selectedGalleryItem.title}
          onClick={() => setSelectedGalleryItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FAF5EC] rounded-2xl overflow-hidden border border-[#3B2418]/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedGalleryItem(null)}
              aria-label="Close gallery preview"
              className="absolute top-4 right-4 z-10 inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FFFFFF]/90 text-[#3B2418] hover:bg-[#FFFFFF] border border-[#3B2418]/15 transition-colors"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>

            <div className="aspect-[16/10] w-full bg-[#3B2418]">
              <ResilientImage
                src={selectedGalleryItem.image}
                fallbackSrc={selectedGalleryItem.fallbackPublicPath}
                alt={selectedGalleryItem.title}
                containerClassName="w-full h-full"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#FAF5EC]">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#765035]">
                  {selectedGalleryItem.category} · RM Furnitures Chiniot
                </p>
                <h3 className="mt-1 font-display text-2xl font-bold text-[#3B2418]">
                  {selectedGalleryItem.title}
                </h3>
                <p className="mt-1 text-sm text-[#3B2418]/80">
                  {selectedGalleryItem.caption}
                </p>
              </div>

              <a
                href={getWhatsAppProductUrl(selectedGalleryItem.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#3B2418] text-[#FAF5EC] text-sm font-semibold hover:bg-[#533524] transition-colors whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4 text-[#C9A45C]" aria-hidden="true" />
                <span>Ask Price on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
