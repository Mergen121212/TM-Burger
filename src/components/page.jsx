import { useState } from "react"
import { Search, ShoppingCart, User, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import boom from '../assets/6586898.png'
import flag1 from '../assets/Russia (RU).svg'

export default function FoodDeliveryPage() {
  const [ setSelectedCategory] = useState("новинки")

  const categories = [

  ]

  const sidebarItems = [
    { name: "Новинки", icon: "", active: true },
  { name: "Кинг комбо", icon: "" },
  { name: "Роллы", icon: "" },
  { name: "Картофель", icon: "" },
  { name: "Напитки", icon: "" },
  { name: "Десерты", icon: "" },
  { name: "Салаты", icon: "" },
  { name: "Комбо", icon: "" },
  { name: "Чай", icon: "" },
  { name: "Кофе", icon: "" },
  { name: "Картофель", icon: "" },
  ]

  const products = [
    {
      id: 1,
      name: "Специальные шрифты для пиков",
      price: "120 manat",
      image: "/placeholder.svg?height=200&width=200",
      badges: ["Новинка", "Популярный выбор"],
    },
    {
      id: 2,
      name: "Специальные шрифты для пиков",
      price: "120 manat",
      image: "/placeholder.svg?height=200&width=200",
      badges: ["Новинка"],
    },
    {
      id: 3,
      name: "Специальные шрифты для пиков",
      price: "120 manat",
      image: "/placeholder.svg?height=200&width=200",
      badges: ["Новинка", "Популярный выбор"],
    },
  ]

  return (
    <div className="min-h-screen bg-amber-50">
      <header className="bg-amber-50 border-b border-amber-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
           
<div className="bg-green-300 flex justify-center items-center h-screen">
  <img src={boom} alt="burger" className="w-20 h-20" />
</div>

          </div>

          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Поиск блюд" className="pl-10 bg-white border-gray-200 rounded-full" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                  <div className="w-4 h-3 bg-red-500 rounded-sm"></div>
                  <span className="text-sm"> <img src={flag1} alt="" />RU</span>
                  <Globe className="w-3 h-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>🇷🇺 RU</DropdownMenuItem>
                <DropdownMenuItem><img src={flag1} alt="" /> TM</DropdownMenuItem>
                <DropdownMenuItem>🇬🇧 EN</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="sm">
              <ShoppingCart className="w-4 h-4" />
              <span className="ml-1 text-sm">0</span>
            </Button>

            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-full px-4 py-2 text-sm">
              <User className="w-4 h-4 mr-1" />
              Войти
            </Button>
          </div>
        </div>
      </header>

      <nav className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-8 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="flex flex-col items-center space-y-2 min-w-0 flex-shrink-0"
              >
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center text-2xl">
                  {category.icon}
                </div>
                <span className="text-white text-xs text-center whitespace-nowrap">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-6 flex">
        <aside className="w-64 mr-8">
          <div className="bg-white rounded-lg shadow-sm p-4">
            {sidebarItems.map((item, index) => (
              <button
                key={index}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left hover:bg-gray-50 ${
                  item.active ? "bg-orange-50 text-orange-600" : "text-gray-700"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </div>
        </aside>

        <main className="flex-1">
<div className="rounded-lg overflow-hidden mb-8">
  <img
    src="https://www.shutterstock.com/image-vector/delicious-homemade-burger-chili-bbq-600nw-1804330342.jpg" 
    alt="Banner"
    className="w-full h-48 object-cover"
  />
</div>

          <h1 className="text-4xl font-bold text-gray-800 mb-8">НОВИНКИ</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2 flex flex-col space-y-1">
                    {product.badges.map((badge, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          badge === "Новинка" ? "bg-gray-800 text-white" : "bg-green-100 text-green-800"
                        }`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-800">{product.price}</span>
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-full px-4 py-2 text-sm">
                      Заказ уже
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
