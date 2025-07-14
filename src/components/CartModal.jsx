import { X, Minus, Plus } from "lucide-react"
import { Button } from "./Button"

export function CartModal({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) {
  if (!isOpen) return null

  const totalPrice = cartItems.reduce((total, item) => {
    const price = Number.parseFloat(item.price.replace(" манат", ""))
    return total + price * item.quantity
  }, 0)

  const deliveryFee = 20
  const finalTotal = totalPrice + deliveryFee

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-amber-50 rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg sm:text-xl font-semibold">Sebet</h2>
          <button onClick={onClose} className="p-1 text-gray-600 hover:text-black">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="p-4 space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-sm text-gray-600">Sebet boş</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-200 rounded-lg flex-shrink-0" />

                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm truncate">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.price}</p>
                </div>

                <div className="flex items-center space-x-1 sm:space-x-2">
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="font-semibold text-sm w-5 text-center">{item.quantity}</span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>

                <button onClick={() => onRemoveItem(item.id)} className="text-red-500 p-1">
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Summary */}
        <div className="p-4 border-t space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Harytlaryň jemi bahasy:</span>
            <span>{totalPrice.toFixed(2)} manat</span>
          </div>
          <div className="flex justify-between">
            <span>Eltip bermeginiň bahasy:</span>
            <span>+{deliveryFee} manat</span>
          </div>
          <div className="flex justify-between font-bold text-base border-t pt-2">
            <span>Jemi:</span>
            <span>{finalTotal.toFixed(2)} manat</span>
          </div>
        </div>

        {/* Checkout */}
        <div className="p-4">
          <Button
            onClick={onProceedToCheckout}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg text-sm sm:text-base"
          >
            Sargyt bermek
          </Button>
        </div>
      </div>
    </div>
  )
}
