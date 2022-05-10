import Logo from './logo'
import Navbar from './navbar'
import Width from './width'

function Header() {
  return (
    <Width className="bg-[#e0e8f5]">
      <div className="h-[100px] flex justify-around flex-wrap select-none">
        <div className="flex flex-col justify-center">
          <Logo />
        </div>
        <div className="grow hidden md:block"></div>
        <Navbar />
      </div>
    </Width>
  )
}

export default Header
