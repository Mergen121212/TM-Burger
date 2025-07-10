import { useState } from "react"
import { Globe } from "lucide-react"
import flag1 from "../assets/Turkmenistan (TM).svg"
import flag2 from '../assets/United Kingdom (GB).svg'

export function LanguageSelector({ isDark, currentLanguage, onLanguageChange }) {
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)

  const languages = [
    {
      code: "RU",
      name: "Русский",
      flag: (
        <div className="w-6 h-4 rounded-sm overflow-hidden flex flex-col border border-gray-300">
          <div className="h-1/3 bg-white"></div>
          <div className="h-1/3 bg-blue-500"></div>
          <div className="h-1/3 bg-red-500"></div>
        </div>
      ),
    },
    {
      code: "TM",
      name: "Türkmençe",
      flag: (
       <img className="w-6 h-4 rounded-sm overflow-hidden flex " src={flag1} alt="" />
      ),
    },
    {
      code: "EN",
      name: "English",
      flag: (
       <img className="w-6 h-4 rounded-sm overflow-hidden flex " src={flag2} alt="" />
      ),
    },
  ]

  const handleLanguageSelect = (langCode) => {
    onLanguageChange(langCode.toLowerCase())
    setShowLanguageMenu(false)
  }

  const getCurrentFlag = () => {
    const lang = languages.find((l) => l.code.toLowerCase() === currentLanguage)
    return lang ? lang.flag : languages[0].flag
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowLanguageMenu(!showLanguageMenu)}
        className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-200 ${
          isDark
            ? "text-white hover:bg-gray-700 hover:text-gray-200"
            : "text-gray-700 hover:bg-gray-200 hover:text-gray-900"
        }`}
      >
        {getCurrentFlag()}
        <span className="text-sm font-medium">{currentLanguage.toUpperCase()}</span>
        <Globe className="w-3 h-3" />
      </button>

      {showLanguageMenu && (
        <>
          <div
            className={`absolute right-0 top-12 w-40 rounded-lg shadow-xl border z-50 ${
              isDark ? "bg-gray-800 border-gray-600" : "bg-white border-gray-200"
            }`}
          >
            <div className="py-2">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageSelect(language.code)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-sm transition-colors ${
                    currentLanguage.toUpperCase() === language.code
                      ? isDark
                        ? "bg-gray-700 text-white"
                        : "bg-gray-100 text-gray-900"
                      : isDark
                        ? "text-gray-200 hover:bg-gray-700"
                        : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {language.flag}
                  <span className="font-medium">{language.code}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="fixed inset-0 z-40" onClick={() => setShowLanguageMenu(false)} />
        </>
      )}
    </div>
  )
}
