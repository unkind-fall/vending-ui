import { NextResponse } from 'next/server';
import { allProducts, categories, gridConfig } from '@/lib/data/products';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  if (category && allProducts[category]) {
    return NextResponse.json({
      products: allProducts[category],
      gridConfig: gridConfig[category],
    });
  }

  return NextResponse.json({
    products: allProducts,
    categories,
    gridConfig,
  });
}
