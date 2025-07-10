import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "./Button"
import { Input } from "./Input"

export function LoginModal({ isOpen, onClose, t }) {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [promoCode, setPromoCode] = useState("")
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [showPromoInput, setShowPromoInput] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    if (phoneNumber && agreeToTerms) {
      console.log("Login attempt:", { phoneNumber, promoCode })
      onClose()
    }
  }

  const formatPhoneNumber = (value) => {

    const numbers = value.replace(/\D/g, "")

    if (numbers.length <= 5) 
      
    
    return value
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-md w-full">
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg z-10 hover:bg-gray-100"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="bg-amber-50 rounded-3xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">{t("loginTitle")}</h2>
          <p className="text-gray-600 text-center mb-8 text-sm leading-relaxed">{t("loginSubtitle")}</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 font-medium">+993</span>
                <Input
                  type="tel"
                  placeholder=" xx xxxxxx"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(formatPhoneNumber(e.target.value))}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 focus:outline-none"
                  maxLength="14"
                  required
                />
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={() => setShowPromoInput(!showPromoInput)}
                className="text-red-500 text-sm font-medium hover:text-red-600 transition-colors"
              >
                
                {t("promoCode")}
              </button>

              {showPromoInput && (
                <div className="mt-2">
                  <Input
                    type="text"
                    placeholder="Введите промокод"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 focus:outline-none"
                  />
                </div>
              )}
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="agree"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                required
              />
              <label htmlFor="agree" className="text-sm text-gray-600 leading-relaxed">
                {t("agreeText")},{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  политикой обработки персональных данных
                </a>{" "}
                и{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  условиями сервиса
                </a>
              </label>
            </div>

            <Button
              type="submit"
              disabled={!phoneNumber || !agreeToTerms}
              className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-4 rounded-xl text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
             
              {t("getCode")}
            </Button>
          </form>
        </div>
      </div>

      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
    </div>
  )
}
