import { useState, useEffect } from "react"

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
    phoneLabel: "+993 xx xx xx xx",
    promoCode: "Есть промокод друга?",
    agreeText: "Соглашаюсь с обработкой персональных данных",
    getCode: "Получить код",

   
    cart: "Корзина",
    checkout: "Оформить заказ",
    total: "Итого",

  
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
    phoneLabel: "+993 __ ______",
    promoCode: "Dostuň promokody barmy?",
    agreeText: "Şahsy maglumatlary gaýtadan işlemek bilen razy",
    getCode: "Kod almak",

    cart: "Sebet",
    checkout: "Sargyt bermek",
    total: "Jemi",

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
    phoneLabel: "+993 чч чч чч чч",
    promoCode: "Have a friend's promo code?",
    agreeText: "I agree to personal data processing",
    getCode: "Get Code",

  
    cart: "Cart",
    checkout: "Checkout",
    total: "Total",

    searchResults: "SEARCH RESULTS",
    noResults: "No products found",
    noResultsText: "Try changing your search query or selecting a different category",
  },
}

export function useLanguage() {
  const [currentLanguage, setCurrentLanguage] = useState("ru")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage)
    }
  }, [])

  const changeLanguage = (langCode) => {
    setCurrentLanguage(langCode)
    localStorage.setItem("language", langCode)
  }

  const t = (key) => {
    return translations[currentLanguage]?.[key] || translations.ru[key] || key
  }

  return { currentLanguage, changeLanguage, t }
}
