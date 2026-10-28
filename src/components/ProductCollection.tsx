import React from 'react';
import { Search, X, Eye, MessageCircle, RotateCcw } from 'lucide-react';
import {
  PRODUCTS,
  PRODUCT_CATEGORIES,
  Product,
  ProductCategory,
  getWhatsAppProductUrl,
  getWhatsAppGeneralUrl,
} from '../data/products';
import { ResilientImage } from './ResilientImage';

interface ProductCollectionProps {
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onViewProduct: (product: Product) => void;
}

export const ProductCollection: React.FC<ProductCollectionProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onViewProduct,
}) => {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All Products' || product.category === selectedCategory;

    if (!normalizedQuery) {
      return matchesCategory;
    }

    const matchesQuery =
      product.name.toLowerCase().includes(normalizedQuery) ||
      product.category.toLowerCase().includes(normalizedQuery) ||
      product.shortDescription.toLowerCase().includes(normalizedQuery);

    return matchesCategory && matchesQuery;
  });

  const handleResetFilters = () => {
    onSelectCategory('All Products');
    onSearchChange('');
  };

  return (
    <section
      id="collection"
      className="py-16 md:py-24 bg-[#FAF5EC] border-b border-[#3B2418]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#765035]">
            Catalogue &amp; Custom Orders
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-[#3B2418] tracking-tight [text-wrap:balance]">
            Explore Our Furniture &amp; Handicrafts Collection
          </h2>
          <p className="mt-3 text-base text-[#3B2418]/80 leading-relaxed">
            Browse wooden beds, complete bedroom sets, drawing room sofas, decorative consoles, and Chinioti handicrafts. Select any piece to request current pricing, custom sizes, and polish options directly on WhatsApp.
          </p>
        </div>

        {/* Search Input & Category Filters Bar */}
        <div className="mt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Functional Search Input */}
          <div className="relative w-full lg:max-w-md">
            <label htmlFor="furniture-search" className="sr-only">
              Search furniture and handicrafts
            </label>
            <Search
              className="w-5 h-5 text-[#765035] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
            <input
              id="furniture-search"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search beds, sofas, bedroom sets, handicrafts..."
              className="w-full pl-11 pr-10 py-3 rounded-xl bg-[#FFFFFF] border border-[#765035]/30 text-sm sm:text-base text-[#3B2418] placeholder:text-[#765035]/70 focus:outline-none focus:border-[#3B2418] focus:ring-2 focus:ring-[#C9A45C]/40 transition-all"
            />
            {searchQuery.length > 0 && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                aria-label="Clear search query"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-[#765035] hover:text-[#3B2418] hover:bg-[#3B2418]/5 transition-colors"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            )}
          </div>

          {/* Interactive Category Filter Controls */}
          <div
            role="tablist"
            aria-label="Furniture categories"
            className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar"
          >
            {PRODUCT_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => onSelectCategory(category)}
                  className={`px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B2418] ${
                    isActive
                      ? 'bg-[#3B2418] text-[#FAF5EC] shadow-xs'
                      : 'bg-[#FFFFFF] text-[#3B2418]/85 border border-[#3B2418]/10 hover:bg-[#765035]/10 hover:text-[#3B2418]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active filter summary & Representative imagery note */}
        <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#765035]">
          <p className="tabular-nums">
            Showing {filteredProducts.length} of {PRODUCTS.length} items
            {selectedCategory !== 'All Products' ? ` in ${selectedCategory}` : ''}
            {searchQuery.trim() ? ` matching "${searchQuery.trim()}"` : ''}
          </p>
          <p>
            Representative showcase imagery · Custom sizes, designs &amp; current prices confirmed via WhatsApp
          </p>
        </div>

        {/* Product Grid: 4 cols on xl, 3 on lg, 2 on sm, 1 on mobile */}
        {filteredProducts.length > 0 ? (
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="group bg-[#FFFFFF] rounded-2xl border border-[#3B2418]/10 overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* Product Image (4:3 aspect ratio) */}
                <div
                  onClick={() => onViewProduct(product)}
                  className="cursor-pointer relative aspect-[4/3] w-full overflow-hidden bg-[#EFE6D5]"
                >
                  <ResilientImage
                    src={product.image}
                    fallbackSrc={product.fallbackPublicPath}
                    alt={product.name}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed clean metadata (Zero-Pill discipline) */}
                    <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[#765035]">
                      <span>{product.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>Custom Enquiry</span>
                    </div>

                    <h3 className="mt-1.5 font-display text-xl font-bold text-[#3B2418] leading-snug">
                      <button
                        type="button"
                        onClick={() => onViewProduct(product)}
                        className="text-left hover:text-[#765035] transition-colors focus-visible:outline-2 focus-visible:outline-[#3B2418] rounded-xs"
                      >
                        {product.name}
                      </button>
                    </h3>

                    <p className="mt-2 text-sm text-[#3B2418]/75 leading-relaxed line-clamp-3">
                      {product.shortDescription}
                    </p>
                  </div>

                  {/* Card Actions: View Details & Ask Price on WhatsApp */}
                  <div className="mt-5 pt-4 border-t border-[#3B2418]/10 flex flex-col gap-2.5">
                    <a
                      href={getWhatsAppProductUrl(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#3B2418] text-[#FAF5EC] text-xs sm:text-sm font-semibold hover:bg-[#533524] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B2418]"
                    >
                      <MessageCircle className="w-4 h-4 text-[#C9A45C] shrink-0" aria-hidden="true" />
                      <span>Ask Price on WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => onViewProduct(product)}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#FAF5EC] text-[#3B2418] border border-[#3B2418]/15 text-xs sm:text-sm font-medium hover:bg-[#765035]/15 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#765035]"
                    >
                      <Eye className="w-4 h-4 text-[#765035] shrink-0" aria-hidden="true" />
                      <span>View Details</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Friendly Empty Search / Filter State */
          <div className="mt-8 bg-[#FFFFFF] rounded-2xl border border-[#3B2418]/10 p-8 sm:p-12 text-center max-w-xl mx-auto">
            <p className="font-display text-2xl font-bold text-[#3B2418]">
              No matching furniture items found
            </p>
            <p className="mt-2 text-sm sm:text-base text-[#3B2418]/75 leading-relaxed">
              We couldn’t find any products matching{' '}
              {searchQuery.trim() ? `"${searchQuery.trim()}"` : 'your selected filter'}. You can reset the filters below or send us a direct message on WhatsApp for custom furniture enquiries.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleResetFilters}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#3B2418] text-[#FAF5EC] text-sm font-semibold hover:bg-[#533524] transition-colors whitespace-nowrap shrink-0"
              >
                <RotateCcw className="w-4 h-4 text-[#C9A45C]" aria-hidden="true" />
                <span>Show All Products</span>
              </button>
              <a
                href={getWhatsAppGeneralUrl(searchQuery.trim() || undefined)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#FAF5EC] text-[#3B2418] border border-[#765035]/35 text-sm font-semibold hover:bg-[#765035]/10 transition-colors whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4 text-[#765035]" aria-hidden="true" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
