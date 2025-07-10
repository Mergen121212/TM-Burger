export function Input({ className = "", isDark, ...props }) {
  const baseStyles =
    "flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"

  const themeStyles = isDark
    ? "bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus-visible:ring-yellow-400 focus-visible:border-yellow-400"
    : "bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus-visible:ring-blue-500 focus-visible:border-blue-500"

  return <input className={`${baseStyles} ${themeStyles} ${className}`} {...props} />
}
