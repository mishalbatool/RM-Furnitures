import React, { useState } from 'react';
import { MapPin, MessageCircle, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppGeneralUrl } from '../data/products';
import { BrandLogo } from './BrandLogo';

const ENQUIRY_TOPICS = [
  'Bedroom Sets & Beds',
  'Drawing Room Sofas & Dewans',
  'Traditional Wooden Handicrafts',
  'Home Decor & Mirrors',
  'Custom Wooden Furniture Design',
];

export const ContactAndFooter: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>(ENQUIRY_TOPICS[0]);
  const [customNote, setCustomNote] = useState<string>('');

  const composedTopic = customNote.trim()
    ? `${selectedTopic} (${customNote.trim()})`
    : selectedTopic;

  return (
    <>
      {/* Contact Section (#contact) */}
      <section id="contact" className="py-16 md:py-24 bg-[#FAF5EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Column: Direct Business Info & Social/WhatsApp Links */}
            <div className="lg:col-span-6 bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#3B2418]/10 flex flex-col justify-between">
              <div>
                <p className="text-xs sm:text-sm font-medium uppercase tracking-wider text-[#765035]">
                  Get in Touch
                </p>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-[#3B2418] tracking-tight">
                  Contact {BUSINESS_INFO.name}
                </h2>
                <p className="mt-3 text-base text-[#3B2418]/80 leading-relaxed">
                  Have a question about a wooden bed, complete bedroom suite, sofa set, or traditional handicraft? Connect with us directly on WhatsApp or visit our showroom in Chiniot.
                </p>

                <div className="mt-8 space-y-5">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] border border-[#3B2418]/10 flex items-center justify-center shrink-0 text-[#765035]">
                      <MapPin className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#3B2418]">
                        Showroom Address
                      </h3>
                      <p className="mt-0.5 text-sm sm:text-base text-[#3B2418]/80">
                        {BUSINESS_INFO.name}
                      </p>
                      <p className="text-sm sm:text-base text-[#765035] font-medium">
                        {BUSINESS_INFO.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] border border-[#3B2418]/10 flex items-center justify-center shrink-0 text-[#765035]">
                      <MessageCircle className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#3B2418]">
                        Direct Price &amp; Order Enquiries
                      </h3>
                      <p className="mt-0.5 text-sm text-[#3B2418]/80 leading-relaxed">
                        All product prices, available sizes, polish finishes, and delivery details are shared directly via WhatsApp chat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Chat on WhatsApp & Facebook Page (No visible phone number anywhere) */}
              <div className="mt-8 pt-6 border-t border-[#3B2418]/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={getWhatsAppGeneralUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#3B2418] text-[#FAF5EC] text-sm sm:text-base font-semibold hover:bg-[#533524] transition-colors shadow-sm whitespace-nowrap shrink-0"
                >
                  <MessageCircle className="w-4 h-4 text-[#C9A45C] shrink-0" aria-hidden="true" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={BUSINESS_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#FAF5EC] text-[#3B2418] border border-[#765035]/35 text-sm sm:text-base font-semibold hover:bg-[#765035]/10 transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Visit Facebook Page</span>
                  <ExternalLink className="w-4 h-4 text-[#765035] shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Right Column: Quick WhatsApp Enquiry Composer */}
            <div className="lg:col-span-6 bg-[#3B2418] text-[#FAF5EC] rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#3B2418] flex flex-col justify-between">
              <div>
                <p className="text-xs sm:text-sm font-medium uppercase tracking-wider text-[#C9A45C]">
                  Custom WhatsApp Message
                </p>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-[#FAF5EC]">
                  Prepare Your Furniture Enquiry
                </h3>
                <p className="mt-2 text-sm sm:text-base text-[#FAF5EC]/80 leading-relaxed">
                  Select a category below and add any specific size or design notes to open a pre-filled WhatsApp message with our team.
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-[#C9A45C] mb-2">
                      1. Select Furniture Category
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {ENQUIRY_TOPICS.map((topic) => {
                        const isSelected = selectedTopic === topic;
                        return (
                          <button
                            key={topic}
                            type="button"
                            onClick={() => setSelectedTopic(topic)}
                            className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                              isSelected
                                ? 'bg-[#C9A45C] text-[#3B2418] font-semibold'
                                : 'bg-[#482D1F] text-[#FAF5EC]/85 hover:bg-[#573827]'
                            }`}
                          >
                            {topic}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="custom-enquiry-note"
                      className="block text-xs font-medium uppercase tracking-wider text-[#C9A45C] mb-2"
                    >
                      2. Optional Details (Size, Polish, or City)
                    </label>
                    <input
                      id="custom-enquiry-note"
                      type="text"
                      value={customNote}
                      onChange={(e) => setCustomNote(e.target.value)}
                      placeholder="e.g., King size walnut polish, delivery to Lahore..."
                      className="w-full px-4 py-3 rounded-xl bg-[#482D1F] border border-[#FAF5EC]/15 text-sm text-[#FAF5EC] placeholder:text-[#FAF5EC]/45 focus:outline-none focus:border-[#C9A45C]"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#FAF5EC]/15">
                <a
                  href={getWhatsAppGeneralUrl(composedTopic)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#C9A45C] text-[#3B2418] text-sm sm:text-base font-bold hover:bg-[#d4b26d] transition-colors shadow-sm whitespace-nowrap shrink-0"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>Send Enquiry on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3B2418] text-[#FAF5EC] border-t border-[#C9A45C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#FAF5EC]/10">
            {/* Brand & Description */}
            <div className="md:col-span-5">
              <a href="#home" className="inline-block">
                <BrandLogo variant="footer" />
              </a>
              <p className="mt-4 text-sm text-[#FAF5EC]/80 max-w-sm leading-relaxed">
                {BUSINESS_INFO.description}
              </p>
              <p className="mt-3 text-sm text-[#C9A45C] flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{BUSINESS_INFO.address}</span>
              </p>
            </div>

            {/* Quick Navigation Links */}
            <div className="md:col-span-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#C9A45C]">
                Navigation
              </h3>
              <ul className="mt-3 space-y-2.5 text-sm text-[#FAF5EC]/85">
                <li>
                  <a href="#home" className="hover:text-[#C9A45C] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#collection" className="hover:text-[#C9A45C] transition-colors">
                    Furniture Collection
                  </a>
                </li>
                <li>
                  <a href="#handicrafts" className="hover:text-[#C9A45C] transition-colors">
                    Handicrafts
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#C9A45C] transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-[#C9A45C] transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#C9A45C] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect Links */}
            <div className="md:col-span-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#C9A45C]">
                Connect With Us
              </h3>
              <p className="mt-3 text-sm text-[#FAF5EC]/80 leading-relaxed">
                Enquire on WhatsApp for prices and custom wooden furniture orders, or visit our official Facebook page.
              </p>
              <div className="mt-4 flex flex-col gap-2.5">
                <a
                  href={getWhatsAppGeneralUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#C9A45C] text-[#3B2418] text-xs font-bold hover:bg-[#d4b26d] transition-colors whitespace-nowrap shrink-0"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href={BUSINESS_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#FAF5EC]/10 text-[#FAF5EC] text-xs font-medium hover:bg-[#FAF5EC]/20 transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Facebook Page</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF5EC]/65">
            <p>
              &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
            </p>
            <p>{BUSINESS_INFO.address}</p>
          </div>
        </div>
      </footer>
    </>
  );
};
