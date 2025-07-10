export function CategoryNavigation({ categories, selectedCategory, onCategorySelect, isDark, onPromoClick }) {
  const categoryStyles = [
    { bg: "bg-red-500", text: "text-white", label: "ГОЛОСУЙ!", border: "border-red-600" },
    { bg: "bg-green-400", text: "text-white", label: "БОКС", border: "border-green-500" },
    { bg: "bg-yellow-500", text: "text-black", label: "M&M's", border: "border-yellow-600" },
    { bg: "bg-red-600", text: "text-white", label: "ТУСА!", border: "border-red-700" },
    { bg: "bg-orange-500", text: "text-white", label: "XXL соус", border: "border-orange-600" },
    { bg: "bg-yellow-600", text: "text-white", label: "Ярче вкус!", border: "border-yellow-700" },
    { bg: "bg-green-500", text: "text-white", label: "СберСпасибо", border: "border-green-600" },
  ]

  return (
    <nav className={`py-6 transition-colors duration-300 ${isDark ? "bg-yellow-400" : "bg-gray-800"}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center flex-wrap gap-16">
          {categories.map((category, index) => {
            const style = categoryStyles[index % categoryStyles.length]
            const isNewItems = category.id === "новинки"

            return (
              <button
                key={category.id}
                onClick={() => {
                  if (isNewItems) {
                    onPromoClick()
                  } else {
                    onCategorySelect(category.id)
                  }
                }}
                className={`flex flex-col items-center space-y-2 transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "opacity-100 scale-105"
                    : "opacity-90 hover:opacity-100 hover:scale-105"
                }`}
              >
                <div
                  className={`w-[110px] h-[110px] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg border-4 ${style.bg} ${style.text} ${style.border} hover:shadow-xl`}
                >
                  <span className="text-sm font-bold text-center leading-tight px-2">{style.label}</span>
                </div>
                <span
                  className={`text-sm text-center whitespace-nowrap font-medium transition-colors ${
                    isDark ? "text-gray-800" : "text-white"
                  }`}
                >
                  {category.name}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
