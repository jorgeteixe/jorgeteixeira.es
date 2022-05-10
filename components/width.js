function Width({ children, ...props }) {
  return (
    <div {...props}>
      <div className="md:w-[768px] mx-auto px-10">{children}</div>
    </div>
  )
}

export default Width
