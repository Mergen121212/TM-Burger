
import { X, Minus, Plus } from "lucide-react"
import { Button } from "./Button"

export function CartModal({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onProceedToCheckout }) {
  if (!isOpen) return null

  const totalPrice = cartItems.reduce((total, item) => {
    const price = Number.parseFloat(item.price.replace(" манат", ""))
    return total + price * item.quantity
  }, 0)

  const deliveryFee = 20
  const finalTotal = totalPrice + deliveryFee

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-amber-50 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">

        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Sebet</h2>
          <button onClick={onClose} className="p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center space-x-3 bg-white p-3 rounded-lg">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0"></div>

              <div className="flex-1">
                <h3 className="font-medium text-sm">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.price}</p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="font-semibold text-sm">{item.quantity}</span>
                <button
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>

              <button onClick={() => onRemoveItem(item.id)} className="text-red-500 p-1">
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="p-4 border-t space-y-2">
          <div className="flex justify-between text-sm">
            <span>Harytlaryň jemi bahasy:</span>
            <span>{totalPrice} manat</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Eltip bermeginiň bahasy:</span>
            <span>+{deliveryFee} manat</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-2">
            <span>Jemi:</span>
            <span>{finalTotal} manat</span>
          </div>
        </div>
        <div className="p-4">
          <Button
            onClick={onProceedToCheckout}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg"
          >
            Sargyt bermek
          </Button>
        </div>
      </div>
    </div>
  )
}
