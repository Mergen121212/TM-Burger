import { useEffect } from "react"
import { X } from "lucide-react"
import mms from "../assets/mms.avif"
import zl1 from "../assets/king.png"
import zl2 from "../assets/image.png"
import battle from "../assets/Battle.jpg"
import bokcses from "../assets/images.jpg"
import sous from "../assets/xxl.jpg"
import sber from "../assets/sber.png"

export function PromoModal({ isOpen, onClose, promoType = "burger" }) {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isOpen) return null

  const promoContent = {
    burger: {
      title: "БУРГЕР ПАТИ БОКС",
      subtitle: "Только в 🚚 Доставке",
      buttonText: "Заказать!",
      image: bokcses,
      bgColor: "linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #8B4513 100%)",
    },
    vote: {
      title: "ГОЛОСУЙ ЗА ЛЮБИМЫЙ БУРГЕР!",
      subtitle: "Участвуй в конкурсе",
      buttonText: "Голосовать!",
      image: battle,
      bgColor: "linear-gradient(135deg, #DC2626 0%, #EF4444 50%, #DC2626 100%)",
    },
    mms: {
      title: "M&M's ДЕСЕРТЫ",
      subtitle: "Сладкие новинки",
      buttonText: "Попробовать!",
      image: mms,
      bgColor: "linear-gradient(135deg, #EAB308 0%, #FDE047 50%, #EAB308 100%)",
    },
    party: {
      title: "ТУСА КОМБО!",
      subtitle: "Для большой компании",
      buttonText: "Заказать!",
      image: zl1,
      bgColor: "linear-gradient(135deg, #DC2626 0%, #B91C1C 50%, #DC2626 100%)",
    },
    xxl: {
      title: "XXL СОУС 4 СЫРА",
      subtitle: "Двойная порция вкуса",
      buttonText: "Добавить!",
      image: sous,
      bgColor: "linear-gradient(135deg, #EA580C 0%, #FB923C 50%, #EA580C 100%)",
    },
    taste: {
      title: "ЯРЧЕ ВКУС!",
      subtitle: "Новые соусы и добавки",
      buttonText: "Попробовать!",
      image: zl2,
      bgColor: "linear-gradient(135deg, #CA8A04 0%, #EAB308 50%, #CA8A04 100%)",
    },
    sber: {
      title: "WOW",
      subtitle: "Платите бонусами",
      buttonText: "Узнать больше!",
      image: sber,
      bgColor: "linear-gradient(135deg, #16A34A 0%, #22C55E 50%, #16A34A 100%)",
    },
  }

  const content = promoContent[promoType] || promoContent.burger

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-sm w-full">
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg z-10 hover:bg-gray-100"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div
          className="rounded-3xl overflow-hidden shadow-2xl"
          style={{
            background: content.bgColor,
          }}
        >
          <div className="relative px-6 pt-6 pb-4">
            <div
              className="absolute top-4 left-6 right-6 h-0.5 bg-yellow-200 opacity-50"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, transparent, transparent 8px, #FFF 8px, #FFF 12px)",
              }}
            ></div>

            <h1 className="text-center text-white font-bold text-xl mb-2 tracking-wide leading-tight">
              {content.title}
            </h1>
          </div>

          <div className="px-6 py-4">
            <img
              src={content.image || sous}
              alt={content.title}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          <div className="px-6 pb-4">
            <div className="bg-red-600 text-white px-4 py-2 rounded-full text-center font-bold text-sm inline-block">
              {content.subtitle}
            </div>
          </div>

          <div className="px-6 pb-6">
            <button
              onClick={onClose}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-full text-lg transition-colors shadow-lg"
            >
              {content.buttonText}
            </button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
    </div>
  )
}
