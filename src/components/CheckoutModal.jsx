import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "./Button"
import { Input } from "./Input"

export function CheckoutModal({ isOpen, onClose, cartItems, onPlaceOrder }) {
  const [formData, setFormData] = useState({name: "",phone: "",address: "",})

  if (!isOpen) return null

  const totalPrice = cartItems.reduce((total, item) => {
    const price = Number.parseFloat(item.price.replace(" манат", ""))
    return total + price * item.quantity
  }, 0)

  const deliveryFee = 20
  const finalTotal = totalPrice + deliveryFee

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.phone && formData.address) {
      onPlaceOrder(formData)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-amber-50 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Sargyt et</h2>
          <button onClick={onClose} className="p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Adyňyz</label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Adyňyz"
              className="w-full"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+993 XX XXX XXX"
              className="w-full"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Salgy</label>
            <Input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Salgyňyz"
              className="w-full"
              required
            />
          </div>

          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span>Harytlaryň jemi bahasy:</span>
              <span>{totalPrice} манат</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Eltip bermeginiň bahasy:</span>
              <span>+{deliveryFee} манат</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Umumy summa:</span>
              <span>{finalTotal} манат</span>
            </div>
            <p className="text-xs text-red-500">*Ýa-da eltip bermeginiň tölegini nagt töläp bilersiňiz</p>
          </div>

          <Button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg mt-6"
          >
            Sargyt et
          </Button>
        </form>
      </div>
    </div>
  )
}
