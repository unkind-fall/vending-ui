'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { categories, allProducts, gridConfig, type Product } from '@/lib/data/products';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/contexts/ToastContext';
import { PromoBanner } from '@/components/layout/PromoBanner';
import { BottomBar } from '@/components/layout/BottomBar';
import { CategorySidebar } from '@/components/product/CategorySidebar';
import { ProductGrid } from '@/components/product/ProductGrid';
import { Pagination } from '@/components/product/Pagination';

const ITEMS_PER_PAGE = 9;

export default function BrowsePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { selectProduct } = useCart();
  const { showToast } = useToast();

  // Get category from URL or default to 'featured'
  const categoryFromUrl = searchParams.get('category') || 'featured';
  const [activeCategory, setActiveCategory] = useState(categoryFromUrl);
  const [currentPage, setCurrentPage] = useState(1);

  // Update category when URL changes
  useEffect(() => {
    setActiveCategory(categoryFromUrl);
    setCurrentPage(1);
  }, [categoryFromUrl]);

  // Get products for current category
  const products = allProducts[activeCategory] || [];
  const currentGridConfig = gridConfig[activeCategory] || gridConfig.sandwiches;
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const displayedProducts = activeCategory === 'featured'
    ? products
    : products.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handleCategoryChange = (categoryId: string) => {
    router.push(`/?category=${categoryId}`, { scroll: false });
  };

  const handleProductSelect = (product: Product) => {
    if (product.status === 'sold_out') {
      showToast('error', 'Sorry, this item is out of stock', '✕');
      return;
    }
    if (product.status === 'age_restricted') {
      showToast('warning', 'Age verification required', '⚠');
    }
    selectProduct(product);
    router.push('/confirm');
  };

  return (
    <>
      {/* Promo Banner */}
      <PromoBanner />

      {/* Content Area */}
      <div className="flex-1 flex gap-3 p-4 min-h-0">
        {/* Category Sidebar */}
        <CategorySidebar
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* Products Area */}
        <div className="flex-1 flex flex-col gap-2 min-h-0">
          {/* Pagination (only for non-featured with multiple pages) */}
          {activeCategory !== 'featured' && totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}

          {/* Product Grid */}
          <div className="flex-1 overflow-auto">
            <ProductGrid
              products={displayedProducts}
              gridConfig={currentGridConfig}
              onProductSelect={handleProductSelect}
              isFeatured={activeCategory === 'featured'}
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <BottomBar />
    </>
  );
}
