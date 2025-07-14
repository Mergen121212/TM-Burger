import { ShoppingCart, User } from "lucide-react"
import { Button } from "./Button"
import { SearchBar } from "./SearchBar"
import { ThemeToggle } from "./ThemeToggle"
import { LanguageSelector } from "./LanguageSelector"
import boom from "../assets/6586898.png"

export function Header({
  cartItemsCount = 0,
  onCartClick,
  isDark,
  onThemeToggle,
  searchQuery,
  onSearchChange,
  currentLanguage,
  onLanguageChange,
  onLoginClick,
  t,
}) {
  return (
    <header
      className={`border-b px-4 py-3 transition-colors duration-300 ${
        isDark ? "bg-black border-gray-700" : "bg-amber-50 border-amber-200"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <div className={`rounded-full flex justify-center items-center`}>
            <img src={boom} alt="burger" className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full" />
          </div>
        </div>

        {/* SearchBar (takes full width on small screens) */}
        <div className="flex-1 min-w-[200px] sm:min-w-[300px] md:min-w-[400px]">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={onSearchChange}
            isDark={isDark}
            placeholder={t("searchPlaceholder")}
          />
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap sm:flex-nowrap justify-end">
          <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />

          <LanguageSelector
            isDark={isDark}
            currentLanguage={currentLanguage}
            onLanguageChange={onLanguageChange}
          />

          {/* Cart Icon */}
          <button
            onClick={onCartClick}
            className={`flex items-center justify-center w-9 h-9 rounded-md relative transition-all duration-200 ${
              isDark
                ? "text-white hover:bg-gray-700 hover:text-gray-200"
                : "text-gray-700 hover:bg-gray-200 hover:text-gray-900"
            }`}
          >
            <ShoppingCart className="w-5 h-5" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {cartItemsCount}
              </span>
            )}
          </button>

          {/* Login button */}
          <Button
            onClick={onLoginClick}
            className={`flex items-center gap-1 rounded-full px-3 py-2 text-xs sm:text-sm font-medium ${
              isDark
                ? "bg-gray-800 hover:bg-gray-700 text-white border border-gray-600"
                : "bg-yellow-400 hover:bg-yellow-500 text-black"
            }`}
          >
            <User className="w-4 h-4" />
            {t("login")}
          </Button>
        </div>
      </div>
    </header>
  )
}
