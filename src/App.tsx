import { useState } from 'react';
import { Product, ProductCategory } from './data/products';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCollection } from './components/ProductCollection';
import { HandicraftsAndFeatures } from './components/HandicraftsAndFeatures';
import { AboutAndGallery } from './components/AboutAndGallery';
import { ContactAndFooter } from './components/ContactAndFooter';
import { ProductDetailModal } from './components/ProductDetailModal';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All Products');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF5EC] text-[#3B2418]">
      <Navbar onSelectCategory={setSelectedCategory} />

      <main className="flex-1">
        <Hero />

        <ProductCollection
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onViewProduct={setActiveProduct}
        />

        <HandicraftsAndFeatures
          onSelectCategory={setSelectedCategory}
          onViewProduct={setActiveProduct}
        />

        <AboutAndGallery />

        <ContactAndFooter />
      </main>

      <ProductDetailModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
      />
    </div>
  );
}

