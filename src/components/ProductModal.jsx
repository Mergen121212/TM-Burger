import { useState } from "react"
import { X, Minus, Plus, Images } from "lucide-react"
import { Button } from "./Button"

export function ProductModal({ product, isOpen, onClose, onAddToCart, isDark }) {
  const [quantity, setQuantity] = useState(1)

  if (!isOpen || !product) return null

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity })
    onClose()
  }

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1))

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div
        className={`rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto ${isDark ? "bg-gray-800" : "bg-amber-50"}`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-800"}`}>{product.name}</h2>
          <button
            onClick={onClose}
            className={`p-1 ${isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-800"}`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4">
          {product.badges && product.badges.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {product.badges.map((badge, index) => (
                <span
                  key={index}
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    badge === "Новинка"
                      ? isDark
                        ? "bg-gray-700 text-white"
                        : "bg-gray-800 text-white"
                      : isDark
                        ? "bg-green-800 text-green-200"
                        : "bg-green-100 text-green-800"
                  }`}
                >
                  {badge}
                </span>
              ))}
            </div>
          )}

          <div className="mb-4">
            <img
              src={product.image }
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>

        {product.description && (
  <p className={`text-sm mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
    {product.description}
  </p>
)}
 


          <p className={`text-sm mb-4 ${isDark ? "text-gray-400" : "text-gray-500"}`}>Вес по заказу!!!!!!</p>

          <div className="flex items-center justify-between mb-6">
            <span className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-800"}`}>{product.price}</span>

            <div className="flex items-center space-x-3">
              <button
                onClick={decrementQuantity}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  isDark ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className={`font-semibold ${isDark ? "text-white" : "text-gray-800"}`}>{quantity}</span>
              <button
                onClick={incrementQuantity}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  isDark ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <Button
            onClick={handleAddToCart}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg"
          >
            Sebede goş
          </Button>
        </div>
      </div>
    </div>
  )
}
