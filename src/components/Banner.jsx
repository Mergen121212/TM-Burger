export function Banner({ image = "https://www.paperockcreative.com/wp-content/uploads/2021/04/veggie-burger-burger-and-sauce-banner-billboard.jpg", className = "",  }) {
  return (
    <div
      className={`rounded-lg h-48 mb-8 overflow-hidden transition-colors duration-300 ${className}`}
    >
      <img
        src={image}
        alt="Banner"
        className="w-full h-full object-cover"
      />
    </div>
  )
}

