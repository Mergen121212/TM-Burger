import { Sun, Moon } from "lucide-react"

export function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={`flex items-center justify-center w-8 h-8 rounded-md transition-all duration-200 ${
        isDark
          ? "text-yellow-400 hover:bg-gray-700 hover:text-yellow-300"
          : "text-gray-700 hover:bg-gray-200 hover:text-gray-900"
      }`}
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  )
}
