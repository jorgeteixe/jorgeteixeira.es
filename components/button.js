function Button({ text, href, onClick }) {
  return (
    <button
      className="bg-black text-sm sm:text-base hover:shadow-md w-full text-white font-semibold py-[6px] px-4 rounded focus:outline-none focus:shadow-outline transition-all"
      type="button"
    >
      {text}
    </button>
  )
}

export default Button
