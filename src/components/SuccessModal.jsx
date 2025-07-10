import { CheckCircle } from "lucide-react"
import { Button } from "./Button"

export function SuccessModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-amber-50 rounded-lg max-w-sm w-full p-8 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Sargytyňyz kabul edildi!</h2>
        </div>

        <Button
          onClick={onClose}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg">
          Dowam et
        </Button>
      </div>
    </div>
  )
}
