export function DropdownMenu({ children }) {
  return <div className="relative inline-block text-left">{children}</div>
}

export function DropdownMenuTrigger({ children}) {
  return <div>{children}</div>
}

export function DropdownMenuContent({ children }) {
  return (
    <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
      <div className="py-1">{children}</div>
    </div>
  )
}

export function DropdownMenuItem({ children, ...props }) {
  return (
    <button
      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
      {...props}
    >
      {children}
    </button>
  )
}
