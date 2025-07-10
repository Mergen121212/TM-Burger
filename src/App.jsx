import { useState } from "react"
import { Header } from "./components/Header"
import { CategoryNavigation } from "./components/CategoryNavigation"
import { Sidebar } from "./components/Sidebar"
import { Banner } from "./components/Banner"
import { ProductGrid } from "./components/ProductGrid"
import { ProductModal } from "./components/ProductModal"
import { CartModal } from "./components/CartModal"
import { CheckoutModal } from "./components/CheckoutModal"
import { SuccessModal } from "./components/SuccessModal"
import { PromoModal } from "./components/PromoModal"
import { LoginModal } from "./components/LoginModal"
import { categories, sidebarItems, products } from "./data/mockData"
import { useCart } from "./hooks/useCart"
import { useTheme } from "./hooks/useTheme"

const translations = {
  ru: {
    searchPlaceholder: "Поиск блюд",
    login: "Войти",
    newItems: "Новинки",
    kingCombo: "Кинг комбо",
    rolls: "Роллы",
    potato: "Картофель",
    addToCart: "Sebede goş",
    loginTitle: "Вход на сайт",
    loginSubtitle: "Подарим короны за регистрацию, покажем личные купоны и сохраним адрес доставки",
    phoneLabel: "",
    promoCode: "Есть промокод друга?",
    agreeText: "Соглашаюс+993 xx xx xx xxь с обработкой персональных данных",
    getCode: "Получить код",
    searchResults: "РЕЗУЛЬТАТЫ ПОИСКА",
    noResults: "Товары не найдены",
    noResultsText: "Попробуйте изменить поисковый запрос или выбрать другую категорию",
  },
  tm: {
    searchPlaceholder: "Nahar gözleg",
    login: "Girmek",
    newItems: "Täzelikler",
    kingCombo: "Şa kombo",
    rolls: "Rulonlar",
    potato: "Kartoşka",
    addToCart: "Sebede goş",
    loginTitle: "Sahypa girmek",
    loginSubtitle: "Hasaba alynmak üçin täç bereris, şahsy kuponlary görkezeris we eltip bermegiň salgysy saklanarys",
    phoneLabel: "+993 xx xx xx xx",
    promoCode: "Dostuň promokody barmy?",
    agreeText: "Şahsy maglumatlary gaýtadan işlemek bilen razy",
    getCode: "Kod almak",
    searchResults: "GÖZLEG NETIJELERI",
    noResults: "Harytlar tapylmady",
    noResultsText: "Gözleg sözüni üýtgetmegi ýa-da başga kategoriýa saýlamagy synanyň",
  },
  en: {
    searchPlaceholder: "Search dishes",
    login: "Login",
    newItems: "New Items",
    kingCombo: "King Combo",
    rolls: "Rolls",
    potato: "Potato",
    addToCart: "Add to Cart",
    loginTitle: "Login to Site",
    loginSubtitle: "We'll give you crowns for registration, show personal coupons and save delivery address",
    phoneLabel: "+993 xx xx xx xx",
    promoCode: "Have a friend's promo code?",
    agreeText: "I agree to personal data processing",
    getCode: "Get Code",
    searchResults: "SEARCH RESULTS",
    noResults: "No products found",
    noResultsText: "Try changing your search query or selecting a different category",
  },
}

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("новинки")
  const [selectedSidebarItem, setSelectedSidebarItem] = useState("новинки")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentLanguage, setCurrentLanguage] = useState("ru")

  const { isDark, toggleTheme } = useTheme()

  const [selectedProduct, setSelectedProduct] = useState(null)
  const [showProductModal, setShowProductModal] = useState(false)
  const [showCartModal, setShowCartModal] = useState(false)
  const [showCheckoutModal, setShowCheckoutModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showPromoModal, setShowPromoModal] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [promoType, setPromoType] = useState("burger")

  const { cartItems, addToCart, updateQuantity, removeFromCart, getTotalItems, clearCart } = useCart()

  const filteredProducts = products.filter((product) => {
    const matchesSearch = searchQuery === "" || product.name.toLowerCase().includes(searchQuery.toLowerCase())

    let matchesCategory = true
    if (selectedSidebarItem) {
      if (selectedSidebarItem === "новинки") {
        matchesCategory = product.badges.includes("Новинка")
      } else if (selectedSidebarItem === "кинг-комбо") {
        matchesCategory = product.category === "кинг-комбо"
      } else {
        matchesCategory = product.category === selectedSidebarItem
      }
    } else {
      if (selectedCategory === "новинки") {
        matchesCategory = product.badges.includes("Новинка")
      } else if (selectedCategory === "кинг-комбо") {
        matchesCategory = product.category === "кинг-комбо"
      } else {
        matchesCategory = product.category === selectedCategory
      }
    }

    return matchesSearch && matchesCategory
  })

  const handleCategorySelect = (categoryId) => {
    const promoTypes = {
      "burger-class": "vote",
      новинки: "burger",
      "burger-class-2": "mms",
      "кинг-комбо": "party",
      "burger-class-3": "xxl",
      "burger-class-4": "taste",
      "burger-class-5": "sber",
    }

    const selectedPromoType = promoTypes[categoryId]
    if (selectedPromoType) {
      setPromoType(selectedPromoType)
      setShowPromoModal(true)
    } else {
      setSelectedCategory(categoryId)
      setSelectedSidebarItem("")
    }
  }

  const handleSidebarItemSelect = (category) => {
    setSelectedSidebarItem(category)
    setSelectedCategory("")
  }

  const handleSearchChange = (query) => {
    setSearchQuery(query)
  }

  const handleProductClick = (product) => {
    setSelectedProduct(product)
    setShowProductModal(true)
  }

  const handleAddToCart = (productWithQuantity) => {
    for (let i = 0; i < productWithQuantity.quantity; i++) {
      addToCart(productWithQuantity)
    }
    setShowProductModal(false)
    setShowCartModal(true)
  }

  const handleCartClick = () => {
    setShowCartModal(true)
  }

  const handleProceedToCheckout = () => {
    setShowCartModal(false)
    setShowCheckoutModal(true)
  }

  const handlePlaceOrder = (orderData) => {
    console.log("Order placed:", orderData, cartItems)
    setShowCheckoutModal(false)
    setShowSuccessModal(true)
    clearCart()
  }

  const handleCloseSuccess = () => {
    setShowSuccessModal(false)
  }

  const handlePromoClick = () => {
    setPromoType("burger")
    setShowPromoModal(true)
  }

  const handleLoginClick = () => {
    setShowLoginModal(true)
  }

  const changeLanguage = (langCode) => {
    setCurrentLanguage(langCode)
    localStorage.setItem("language", langCode)
  }

  const t = (key) => {
    return translations[currentLanguage]?.[key] || translations.ru[key] || key
  }

  const getSectionTitle = () => {
    if (searchQuery) {
      return `${t("searchResults")}: "${searchQuery.toUpperCase()}"`
    }

    const activeCategory = selectedSidebarItem || selectedCategory
    if (activeCategory === "новинки") return t("newItems").toUpperCase()
    if (activeCategory === "кинг-комбо") return t("kingCombo").toUpperCase()
    if (activeCategory === "роллы") return t("rolls").toUpperCase()
    if (activeCategory === "картофель") return t("potato").toUpperCase()
    return activeCategory.toUpperCase()
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-black" : "bg-amber-50"}`}>
      <Header
        cartItemsCount={getTotalItems()}
        onCartClick={handleCartClick}
        isDark={isDark}
        onThemeToggle={toggleTheme}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        currentLanguage={currentLanguage}
        onLanguageChange={changeLanguage}
        onLoginClick={handleLoginClick}
        t={t}
      />

      <CategoryNavigation
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
        onPromoClick={handlePromoClick}
        isDark={isDark}
      />

      <div className="max-w-7xl mx-auto px-4 py-6 flex">
        <Sidebar
          items={sidebarItems}
          onItemSelect={handleSidebarItemSelect}
          selectedItem={selectedSidebarItem}
          isDark={isDark}
        />

        <main className="flex-1">
          <Banner isDark={isDark} />

          <h1 className={`text-4xl font-bold mb-8 ${isDark ? "text-yellow-400" : "text-gray-800"}`}>
            {getSectionTitle()}
          </h1>

          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} onProductClick={handleProductClick} isDark={isDark} t={t} />
          ) : (
            <div className={`text-center py-12 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              <p className="text-xl">{t("noResults")}</p>
              <p className="text-sm mt-2">{t("noResultsText")}</p>
            </div>
          )}
        </main>
      </div>

    
      <ProductModal
        product={selectedProduct}
        isOpen={showProductModal}
        onClose={() => setShowProductModal(false)}
        onAddToCart={handleAddToCart}
        isDark={isDark}
        t={t}
      />

      <CartModal
        isOpen={showCartModal}
        onClose={() => setShowCartModal(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onProceedToCheckout={handleProceedToCheckout}
        isDark={isDark}
        t={t}
      />

      <CheckoutModal
        isOpen={showCheckoutModal}
        onClose={() => setShowCheckoutModal(false)}
        cartItems={cartItems}
        onPlaceOrder={handlePlaceOrder}
        isDark={isDark}
        t={t}
      />

      <SuccessModal isOpen={showSuccessModal} onClose={handleCloseSuccess} isDark={isDark} t={t} />

      <PromoModal
        isOpen={showPromoModal}
        onClose={() => setShowPromoModal(false)}
        isDark={isDark}
        promoType={promoType}
      />

      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} isDark={isDark} t={t} />
    </div>
  )
}
