import Logo from './logo'
import NavLink from './navlink'

function Navbar() {
  return (
    <div className="h-[100px] mx-8 flex justify-between">
      <div className="flex flex-col justify-center">
        <Logo href="/" />
      </div>
      <div className="flex flex-col justify-center">
        <div className="invisible sm:visible">
          <NavLink text="Inicio" href="/" />
          <NavLink text="Contenido" href="/contenido" />
          <NavLink text="Sobre mi" href="/sobre-mi" />
          <NavLink text="Contacto" href="/contacto" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
