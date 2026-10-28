import heroBedroomImg from '../assets/images/hero_chiniot_bedroom_set_1793190352438.jpg';
import carvedWalnutBedImg from '../assets/images/product_carved_walnut_bed_1793190353342.jpg';
import royalBedroomSuiteImg from '../assets/images/product_royal_bedroom_suite_1793190355520.jpg';
import chiniotiSofaSetImg from '../assets/images/product_chinioti_sofa_set_1793190354614.jpg';
import carvedMirrorDecorImg from '../assets/images/product_carved_mirror_decor_1793190356008.jpg';
import brassInlayHandicraftImg from '../assets/images/product_brass_inlay_handicraft_1793190357667.jpg';
import modernCaneBedImg from '../assets/images/product_modern_cane_bed_1793190359317.jpg';
import dewanSetteeSofaImg from '../assets/images/product_dewan_settee_sofa_1793190359213.jpg';

export type ProductCategory =
  | 'All Products'
  | 'Beds'
  | 'Bedroom Sets'
  | 'Sofas'
  | 'Home Decor'
  | 'Handicrafts';

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  'All Products',
  'Beds',
  'Bedroom Sets',
  'Sofas',
  'Home Decor',
  'Handicrafts',
];

export interface Product {
  id: string;
  name: string;
  category: Exclude<ProductCategory, 'All Products'>;
  shortDescription: string;
  detailedDescription: string;
  image: string;
  fallbackPublicPath: string;
  craftDetails: string[];
  enquiryOptions: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  caption: string;
  image: string;
  fallbackPublicPath: string;
  aspectClass: string;
}

export const HERO_IMAGE = {
  src: heroBedroomImg,
  fallbackPublicPath: '/images/hero_chiniot_bedroom_set_1793190352438.jpg',
  alt: 'Handcrafted Chinioti solid wood bedroom set with traditional floral relief carving in a warm sunlit room',
};

/**
 * Generates a WhatsApp wa.me link for product enquiries or general business contact.
 * Privacy note: The contact identifier is used strictly inside the wa.me URL generator
 * and is never rendered as visible text in the UI.
 */
const WHATSAPP_ORDER_ID = ['92312', '7612294'].join('');

export function getWhatsAppProductUrl(productName: string): string {
  const message = `Assalam-o-Alaikum! I am interested in ${productName} from RM Furnitures Chiniot. Please share the price, available designs, sizes, and delivery details.`;
  return `https://wa.me/${WHATSAPP_ORDER_ID}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppGeneralUrl(customTopic?: string): string {
  const message = customTopic
    ? `Assalam-o-Alaikum! I am contacting RM Furnitures Chiniot regarding: ${customTopic}. Please share available designs, price details, and ordering information.`
    : `Assalam-o-Alaikum! I would like to enquire about wooden furniture and handicrafts from RM Furnitures Chiniot. Please share available designs and price details.`;
  return `https://wa.me/${WHATSAPP_ORDER_ID}?text=${encodeURIComponent(message)}`;
}

export const BUSINESS_INFO = {
  name: 'RM Furnitures Chiniot',
  shortBrand: 'RM Furnitures',
  address: 'Saad Masjid Street, Chiniot, Pakistan',
  description: 'RM Furniture Chiniot — We have all types of furniture and handicrafts available here.',
  googleReviewsText: '28 Google Reviews',
  facebookUrl: 'https://www.facebook.com/rmfurnitureschiniot/',
};

export const PRODUCTS: Product[] = [
  {
    id: 'chinioti-floral-walnut-bed',
    name: 'Chinioti Floral Carved Walnut Bed',
    category: 'Beds',
    shortDescription:
      'Hand-carved wooden bed frame featuring relief floral motifs along the headboard and solid turned legs.',
    detailedDescription:
      'Inspired by Chiniot’s woodworking heritage, this wooden bed frame showcases deep floral relief carving framed within a structured headboard. Available for custom size and wood finish enquiries.',
    image: carvedWalnutBedImg,
    fallbackPublicPath: '/images/product_carved_walnut_bed_1793190353342.jpg',
    craftDetails: [
      'Traditional Chinioti floral relief headboard',
      'Solid wooden frame with turned support legs',
      'Custom polish shade options upon enquiry',
    ],
    enquiryOptions: ['King or Queen size options', 'Wood finish & polish shade', 'Matching side tables availability'],
  },
  {
    id: 'heritage-bridal-bedroom-set',
    name: 'Chiniot Heritage Complete Bedroom Set',
    category: 'Bedroom Sets',
    shortDescription:
      'Coordinated wooden bedroom suite with a carved crown bed, matching dressing table with mirror, and bedside tables.',
    detailedDescription:
      'A complete bedroom furniture set crafted for cohesive traditional interiors. Includes a carved headboard and footboard bed frame, a multi-drawer vanity dressing table with an arched mirror, and a pair of matching bedside cabinets.',
    image: royalBedroomSuiteImg,
    fallbackPublicPath: '/images/product_royal_bedroom_suite_1793190355520.jpg',
    craftDetails: [
      'Coordinated bed, dressing vanity, and two bedside tables',
      'Arched crown carving with spindle accents',
      'Cabriole legs and traditional drawer joinery',
    ],
    enquiryOptions: ['Complete set or individual pieces', 'Custom wardrobe addition', 'Delivery arrangements to your city'],
  },
  {
    id: 'carved-walnut-living-sofa-set',
    name: 'Carved Walnut Wood Drawing Room Sofa Set',
    category: 'Sofas',
    shortDescription:
      'Traditional solid wood three-seater sofa and armchair set with carved wooden crest rails and neutral upholstery.',
    detailedDescription:
      'Designed for formal drawing rooms and family lounges, this sofa set pairs an intricately carved wooden frame, scrolled armrests, and cabriole legs with comfortable cushioned seating.',
    image: chiniotiSofaSetImg,
    fallbackPublicPath: '/images/product_chinioti_sofa_set_1793190354614.jpg',
    craftDetails: [
      'Hand-carved crest rail and lower apron detailing',
      'Curved wooden armrests with smooth hand-rubbed finish',
      'Upholstery fabric color customizable on order',
    ],
    enquiryOptions: ['5-seater, 7-seater, or custom seating layout', 'Fabric texture & color selection', 'Matching center table options'],
  },
  {
    id: 'arched-mirror-console-decor',
    name: 'Carved Wooden Console Table & Arched Mirror',
    category: 'Home Decor',
    shortDescription:
      'Entryway decorative console table with carved frieze and a matching Mughal-arch wooden wall mirror frame.',
    detailedDescription:
      'Elevate foyers, hallways, and living spaces with this handcrafted wooden console table and arched mirror set. Features finely chiseled botanical borders and a lower display shelf.',
    image: carvedMirrorDecorImg,
    fallbackPublicPath: '/images/product_carved_mirror_decor_1793190356008.jpg',
    craftDetails: [
      'Mughal-inspired cusped arch mirror frame',
      'Carved front apron and fluted pillar legs',
      'Lower solid wood shelf for decorative accents',
    ],
    enquiryOptions: ['Console and mirror together or separately', 'Custom width for hallway spaces', 'Finish tone customization'],
  },
  {
    id: 'tarkashi-wooden-handicraft-set',
    name: 'Carved Wooden Jewellery Box & Serving Tray Set',
    category: 'Handicrafts',
    shortDescription:
      'Traditional Chiniot wooden handicrafts featuring floral wood carving and delicate metallic inlay accents.',
    detailedDescription:
      'Artisanal wooden decorative pieces showcasing Chiniot’s renowned small-scale woodcraft. Includes a hinged keepsake box with brass latch, carved serving tray, and coaster set ideal for gifting and home styling.',
    image: brassInlayHandicraftImg,
    fallbackPublicPath: '/images/product_brass_inlay_handicraft_1793190357667.jpg',
    craftDetails: [
      'Fine relief floral carving on seasoned hardwood',
      'Traditional geometric inlay dot accents',
      'Suitable for home decor and traditional gifting',
    ],
    enquiryOptions: ['Individual handicraft pieces or gift sets', 'Available ready-stock designs', 'Bulk or custom gift enquiries'],
  },
  {
    id: 'walnut-cane-weave-bed',
    name: 'Arched Cane & Carved Wood Bed Frame',
    category: 'Beds',
    shortDescription:
      'Warm walnut wooden bed combining triple-arch woven cane panels with carved floral spandrels.',
    detailedDescription:
      'Blending classic Chinioti wood carving with breathable natural cane webbing, this bed brings warmth and architectural texture to both traditional and contemporary bedrooms.',
    image: modernCaneBedImg,
    fallbackPublicPath: '/images/product_modern_cane_bed_1793190359317.jpg',
    craftDetails: [
      'Triple-arch headboard with natural woven cane panels',
      'Carved botanical corner spandrels',
      'Clean tapered legs and solid side rails',
    ],
    enquiryOptions: ['King or Queen dimensions', 'Natural walnut or dark walnut stain', 'Matching cane bedside tables'],
  },
  {
    id: 'traditional-carved-dewan-settee',
    name: 'Traditional Chinioti Carved Wooden Dewan',
    category: 'Sofas',
    shortDescription:
      'Classic carved wooden lounge settee and daybed with bolster cushions and pierced lattice side panels.',
    detailedDescription:
      'A signature piece of traditional Pakistani living rooms, this carved wooden dewan features an ornate crest rail, lattice-carved side rests, and plush bolster pillows.',
    image: dewanSetteeSofaImg,
    fallbackPublicPath: '/images/product_dewan_settee_sofa_1793190359213.jpg',
    craftDetails: [
      'Pierced jali latticework on side panels',
      'Carved cabriole legs and scalloped apron',
      'Includes bolster and cushion upholstery options',
    ],
    enquiryOptions: ['Standard or custom length', 'Brocade, velvet, or textured linen upholstery', 'Matching side stools or tables'],
  },
  {
    id: 'royal-carved-master-bedroom-suite',
    name: 'Grand Chinioti Carved Master Bedroom Suite',
    category: 'Bedroom Sets',
    shortDescription:
      'Full master bedroom ensemble featuring an heirloom carved bed frame, matching nightstands, and accent seating.',
    detailedDescription:
      'Crafted for spacious master bedrooms, this ensemble highlights deep relief scrollwork across both the headboard and footboard, paired with carved two-door bedside cabinets.',
    image: heroBedroomImg,
    fallbackPublicPath: '/images/hero_chiniot_bedroom_set_1793190352438.jpg',
    craftDetails: [
      'High-relief carved headboard and matching footboard',
      'Finial bedposts with traditional turned profiles',
      'Two matching carved bedside cabinets included',
    ],
    enquiryOptions: ['Suite configuration options', 'Custom wood polish shade', 'Price & delivery enquiry via WhatsApp'],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Master Bedroom Suite in Dark Walnut',
    category: 'Bedroom Sets',
    caption: 'Deep floral relief carving on headboard, footboard, and matching nightstands.',
    image: heroBedroomImg,
    fallbackPublicPath: '/images/hero_chiniot_bedroom_set_1793190352438.jpg',
    aspectClass: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 'gal-2',
    title: 'Traditional Wooden Handicrafts & Boxes',
    category: 'Handicrafts',
    caption: 'Hand-carved keepsake boxes, serving trays, and tabletop decorative pieces.',
    image: brassInlayHandicraftImg,
    fallbackPublicPath: '/images/product_brass_inlay_handicraft_1793190357667.jpg',
    aspectClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'gal-3',
    title: 'Chinioti Drawing Room Sofa Ensemble',
    category: 'Sofas',
    caption: 'Carved walnut sofa frame paired with warm cream textured upholstery.',
    image: chiniotiSofaSetImg,
    fallbackPublicPath: '/images/product_chinioti_sofa_set_1793190354614.jpg',
    aspectClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'gal-4',
    title: 'Entryway Console & Mughal Arch Mirror',
    category: 'Home Decor',
    caption: 'Hand-chiseled botanical relief motifs on solid wood console and mirror frame.',
    image: carvedMirrorDecorImg,
    fallbackPublicPath: '/images/product_carved_mirror_decor_1793190356008.jpg',
    aspectClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'gal-5',
    title: 'Carved Wooden Dewan Daybed',
    category: 'Sofas',
    caption: 'Traditional lounge settee with pierced latticework armrests and bolster cushions.',
    image: dewanSetteeSofaImg,
    fallbackPublicPath: '/images/product_dewan_settee_sofa_1793190359213.jpg',
    aspectClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'gal-6',
    title: 'Arched Cane & Walnut Bed Frame',
    category: 'Beds',
    caption: 'Natural rattan cane webbing framed by hand-carved wooden arches.',
    image: modernCaneBedImg,
    fallbackPublicPath: '/images/product_modern_cane_bed_1793190359317.jpg',
    aspectClass: 'md:col-span-1 md:row-span-1',
  },
];
