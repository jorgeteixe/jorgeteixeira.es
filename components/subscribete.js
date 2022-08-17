import Button from './button'
import Input from './input'

function Suscribete() {
  return (
    <div className="m-5 p-3 h-fit w-[300px] sm:w-[350px] rounded-lg shadow-[0_0_10px] shadow-secondary">
      <p className="text-sm sm:text-base font-semibold">
        Mantente al día, recibe las novedades directamente en tu email
      </p>
      <div className="my-2">
        <Input />
      </div>
      <div>
        <Button text="Suscríbete" />
      </div>
    </div>
  )
}

export default Suscribete
