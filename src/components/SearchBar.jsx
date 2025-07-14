import { Search } from "lucide-react"
import { Input } from "./Input"

export function SearchBar({ searchQuery, onSearchChange, isDark, placeholder }) {
  return (
    <div className="w-full max-w-md px-4 sm:px-6 md:px-8">
      <div className="relative">
        <Search
          className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 
            ${isDark ? "text-gray-400" : "text-gray-500"}`}
        />
        <Input
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className={`w-full pl-10 pr-4 py-2 rounded-full text-sm sm:text-base transition-colors 
            ${isDark
              ? "bg-gray-800 border-gray-600 placeholder-gray-400 focus:border-yellow-400 focus:ring-yellow-400"
              : "bg-white border-gray-200 placeholder-gray-500 focus:border-amber-500 focus:ring-amber-200"
            }`}
        />
      </div>
    </div>
  )
}
