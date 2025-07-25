import { ProductCard } from "./ProductCard"

export function ProductGrid({ products, onProductClick, isDark }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onProductClick={onProductClick} isDark={isDark} />
      ))}
    </div>
  )
}
