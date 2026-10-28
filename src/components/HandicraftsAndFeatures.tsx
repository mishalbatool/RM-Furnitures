import React from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import {
  PRODUCTS,
  Product,
  ProductCategory,
  getWhatsAppProductUrl,
  getWhatsAppGeneralUrl,
} from '../data/products';
import { ResilientImage } from './ResilientImage';

interface HandicraftsAndFeaturesProps {
  onSelectCategory: (category: ProductCategory) => void;
  onViewProduct: (product: Product) => void;
}

const EXPLORE_REASONS = [
  {
    index: '01',
    title: 'Variety of Furniture Designs',
    description:
      'Browse a broad range of wooden beds, coordinated bedroom sets, drawing room sofas, dewan settees, and hallway consoles suited for traditional and modern homes.',
  },
  {
    index: '02',
    title: 'Traditional Handicrafts',
    description:
      'Discover Chiniot wooden handicrafts, carved keepsake boxes, serving trays, mirror frames, and decorative accents rooted in local woodworking heritage.',
  },
  {
    index: '03',
    title: 'Custom Furniture Enquiries',
    description:
      'Discuss your preferred room measurements, seating configurations, wood finish tones, and upholstery preferences before placing an order.',
  },
  {
    index: '04',
    title: 'Direct WhatsApp Price Assistance',
    description:
      'Connect directly on WhatsApp to ask for current prices, view available designs, and discuss order details without intermediaries.',
  },
];

export const HandicraftsAndFeatures: React.FC<HandicraftsAndFeaturesProps> = ({
  onSelectCategory,
  onViewProduct,
}) => {
  const featuredHandicrafts = PRODUCTS.filter(
    (item) => item.category === 'Handicrafts' || item.category === 'Home Decor'
  );

  const handleFilterHandicrafts = () => {
    onSelectCategory('Handicrafts');
    const el = document.getElementById('collection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Traditional Handicrafts & Home Decor Spotlight (#handicrafts) */}
      <section
        id="handicrafts"
        className="py-16 md:py-24 bg-[#3B2418] text-[#FAF5EC] border-b border-[#C9A45C]/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs sm:text-sm font-medium uppercase tracking-wider text-[#C9A45C]">
                Chiniot Woodcraft &amp; Artistry
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-[#FAF5EC] tracking-wide [text-wrap:balance]">
                Traditional Wooden Handicrafts &amp; Home Decor
              </h2>
              <p className="mt-3 text-base text-[#FAF5EC]/80 leading-relaxed">
                Alongside full-scale bedroom suites and drawing room furniture, RM Furnitures Chiniot offers carved wooden handicrafts, decorative mirror frames, and tabletop pieces crafted in Chiniot.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={handleFilterHandicrafts}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C9A45C] text-[#3B2418] text-sm font-semibold hover:bg-[#d4b26d] transition-colors whitespace-nowrap shrink-0"
              >
                <span>Filter Handicrafts in Catalogue</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </button>
              <a
                href={getWhatsAppGeneralUrl('Traditional Wooden Handicrafts and Home Decor')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FAF5EC]/10 text-[#FAF5EC] border border-[#FAF5EC]/20 text-sm font-medium hover:bg-[#FAF5EC]/20 transition-colors whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4 text-[#C9A45C] shrink-0" aria-hidden="true" />
                <span>Enquire About Handicrafts</span>
              </a>
            </div>
          </div>

          {/* 2-Card Spotlight Grid for Handicrafts & Decor */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredHandicrafts.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl bg-[#482D1F] border border-[#FAF5EC]/10 overflow-hidden grid grid-cols-1 sm:grid-cols-12 items-stretch"
              >
                <div
                  onClick={() => onViewProduct(item)}
                  className="sm:col-span-5 cursor-pointer overflow-hidden bg-[#3B2418]"
                >
                  <ResilientImage
                    src={item.image}
                    fallbackSrc={item.fallbackPublicPath}
                    alt={item.name}
                    containerClassName="w-full h-full min-h-[220px]"
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="sm:col-span-7 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C9A45C]">
                      <span>{item.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>Chiniot Craft</span>
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-bold text-[#FAF5EC] leading-snug">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm text-[#FAF5EC]/80 leading-relaxed">
                      {item.shortDescription}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#FAF5EC]/10 flex flex-wrap items-center gap-3">
                    <a
                      href={getWhatsAppProductUrl(item.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#C9A45C] text-[#3B2418] text-xs sm:text-sm font-semibold hover:bg-[#d4b26d] transition-colors whitespace-nowrap shrink-0"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Ask Price on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => onViewProduct(item)}
                      className="px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium text-[#FAF5EC] border border-[#FAF5EC]/20 hover:bg-[#FAF5EC]/10 transition-colors whitespace-nowrap shrink-0"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Explore Our Collection? Section */}
      <section className="py-16 md:py-24 bg-[#FAF5EC] border-b border-[#3B2418]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-medium uppercase tracking-wider text-[#765035]">
              Our Approach
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-[#3B2418] tracking-tight [text-wrap:balance]">
              Why Explore Our Collection?
            </h2>
            <p className="mt-3 text-base text-[#3B2418]/80 leading-relaxed">
              We focus on straightforward communication, traditional Chinioti furniture designs, and direct assistance for every customer enquiry.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXPLORE_REASONS.map((reason) => (
              <div
                key={reason.index}
                className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#3B2418]/10 flex flex-col justify-between"
              >
                <div>
                  <span className="font-display text-2xl font-bold text-[#C9A45C] tabular-nums">
                    {reason.index}.
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold text-[#3B2418]">
                    {reason.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-[#3B2418]/75 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
