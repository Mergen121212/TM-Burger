import { useEffect, useState } from "react"
import { Button } from "./Button"

export function ProductCard({ product, onProductClick, isDark }) {
  const [showDescription, setShowDescription] = useState(false)


  useEffect(() => {
    if (showDescription) {
      document.documentElement.style.overflow = "hidden"
      document.body.style.overflow = "hidden"
    } else {
      document.documentElement.style.overflow = ""
      document.body.style.overflow = ""
    }

    return () => {
      document.documentElement.style.overflow = ""
      document.body.style.overflow = ""
    }
  }, [showDescription])

  const toggleDescription = () => {
    setShowDescription((prev) => !prev)
  }

 

  return (
    <>
      <div
        className={`rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 relative ${
          isDark ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="relative cursor-pointer" onClick={toggleDescription}>
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-2 left-2 flex flex-col space-y-1">
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
        </div>

        <div className="p-4">
          <h3 className={`font-semibold mb-2 ${isDark ? "text-white" : "text-gray-800"}`}>
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <span className={`text-lg font-bold ${isDark ? "text-white" : "text-gray-800"}`}>
              {product.price}
            </span>
            <Button
              className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-full px-4 py-2 text-sm font-semibold"
              onClick={() => onProductClick(product)}
            >
              Sebede goş
            </Button>
          </div>
        </div>
      </div>

      {showDescription && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white max-w-sm w-full rounded-xl p-6 relative shadow-lg">
            <button
              className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
              onClick={toggleDescription}
            >
              ×
            </button>
            <img src={product.image} alt="" className="mb-4 rounded-md" />
            <h2 className="text-lg font-bold mb-2">{product.name}</h2>
            <p className="text-sm text-gray-700 mb-4">
              {product.description || "Описание отсутствует"}
            </p>

            

            <div className="flex flex-col gap-2">
            </div>
          </div>
        </div>
      )}
    </>
  )
}
