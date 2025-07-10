export function Sidebar({onItemSelect, selectedItem, isDark }) {
  const menuItems = [
    { name: "Новинки", icon: "🍔", category: "новинки" },
    { name: "Кинг комбо", icon: "🍗", category: "кинг-комбо" },
    { name: "Роллы", icon: "🌯", category: "роллы" },
    { name: "Картофель", icon: "🍟", category: "картофель" },
    { name: "Напитки", icon: "🥤", category: "напитки" },
    { name: "Десерты", icon: "🍰", category: "десерты" },
    { name: "Салаты", icon: "🥗", category: "салаты" },
    { name: "Чай", icon: "🍃", category: "чай" },
    { name: "Кофе", icon: "☕", category: "кофе" },
    { name: "Коктели", icon: "🍹", category: "коктели" },
  ]

  return (
    <aside className="w-64 mr-8">
      <div className={`rounded-lg shadow-sm p-4 transition-colors duration-300 ${isDark ? "bg-gray-800" : "bg-white"}`}>
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => onItemSelect(item.category)}
            className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${
              selectedItem === item.category
                ? isDark
                  ? "bg-orange-900 text-orange-400"
                  : "bg-orange-50 text-orange-600"
                : isDark
                  ? "text-gray-300 hover:text-white hover:bg-gray-700"
                  : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </button>
        ))}
      </div>
    </aside>
  )
}
