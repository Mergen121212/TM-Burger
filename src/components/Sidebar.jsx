import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Sidebar({ onItemSelect, selectedItem, isDark }) {
  const [isOpen, setIsOpen] = useState(false)

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
    <>
      {/* Кнопка для мобильного меню */}
      <div className="md:hidden flex justify-between items-center px-4 py-2">
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-orange-600">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <span className="font-bold text-lg text-gray-800 dark:text-white">Меню</span>
      </div>

      {/* Боковая панель */}
      <aside
        className={`
          ${isOpen ? "block" : "hidden"} md:block
          w-full md:w-64 md:mr-8
        `}
      >
        <div className={`rounded-lg shadow-sm p-4 transition-colors duration-300 ${isDark ? "bg-gray-800" : "bg-white"}`}>
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                onItemSelect(item.category)
                setIsOpen(false) // Закрыть меню после выбора на мобилке
              }}
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
    </>
  )
}
