import React, { useEffect } from 'react';
import { X, MessageCircle, Check } from 'lucide-react';
import { Product, getWhatsAppProductUrl } from '../data/products';
import { ResilientImage } from './ResilientImage';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (product) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#3B2418]/70 backdrop-blur-xs animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#FAF5EC] rounded-2xl border border-[#3B2418]/15 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close product details"
          className="absolute top-4 right-4 z-10 inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FFFFFF]/90 text-[#3B2418] hover:bg-[#FFFFFF] border border-[#3B2418]/15 transition-colors shadow-xs"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Left Column: Image */}
          <div className="md:col-span-6 bg-[#EFE6D5] flex items-stretch">
            <ResilientImage
              src={product.image}
              fallbackSrc={product.fallbackPublicPath}
              alt={product.name}
              containerClassName="w-full h-full min-h-[260px] md:min-h-[380px]"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Right Column: Contiguous Enquiry & Craft Module */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#765035]">
                <span>{product.category}</span>
                <span aria-hidden="true">·</span>
                <span>RM Furnitures Chiniot</span>
              </div>

              <h2
                id="modal-product-title"
                className="mt-2 font-display text-2xl sm:text-3xl font-bold text-[#3B2418] leading-snug"
              >
                {product.name}
              </h2>

              <p className="mt-3 text-sm sm:text-base text-[#3B2418]/80 leading-relaxed">
                {product.detailedDescription}
              </p>

              {/* Design Highlights */}
              <div className="mt-5 pt-4 border-t border-[#3B2418]/10">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#765035]">
                  Design &amp; Craft Highlights
                </h3>
                <ul className="mt-2.5 space-y-2">
                  {product.craftDetails.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2 text-sm text-[#3B2418]/85"
                    >
                      <Check
                        className="w-4 h-4 text-[#765035] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WhatsApp Enquiry Details */}
              <div className="mt-5 pt-4 border-t border-[#3B2418]/10">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#765035]">
                  Confirm via WhatsApp
                </h3>
                <p className="mt-1.5 text-xs text-[#3B2418]/75 leading-relaxed">
                  {product.enquiryOptions.join(' · ')}
                </p>
              </div>
            </div>

            {/* Primary WhatsApp Price CTA */}
            <div className="mt-6 pt-4 border-t border-[#3B2418]/10 flex flex-col gap-2.5">
              <a
                href={getWhatsAppProductUrl(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-[#3B2418] text-[#FAF5EC] text-sm font-semibold hover:bg-[#533524] transition-colors shadow-sm whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4 text-[#C9A45C] shrink-0" aria-hidden="true" />
                <span>Ask Price on WhatsApp</span>
              </a>
              <p className="text-[11px] text-center text-[#765035]">
                Opens WhatsApp with a pre-filled enquiry for this item.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
