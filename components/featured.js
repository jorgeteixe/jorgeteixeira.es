import Link from 'next/link'
import Content from './content'

function Featured() {
  return (
    <div className="m-5">
      <h2 className="text-center lg:text-left font-semibold text-2xl m-2 mb-4">
        Destacado
      </h2>
      <div className="flex justify-between flex-wrap">
        <div className="mx-auto">
          <Content
            href="#"
            category="curso"
            color="primary"
            text="Intro a AWS para estudiantes de informática"
          />
        </div>
        <div className="mx-auto">
          <Content
            href="#"
            category="articulo"
            color="secondary"
            text="Cómo empezar a usar un gestor de contraseñas"
          />
        </div>
        <div className="mx-auto">
          <Content
            href="#"
            category="curso"
            color="primary"
            text="Organiza tu correo electrónico de manera efectiva"
          />
        </div>
        <div className="mx-auto">
          <Content
            href="#"
            category="snippet"
            color="yellow"
            text="Llama la atención en LinkedIn con estos pasos"
          />
        </div>
      </div>
      <div className="underline text-gray-500 hover:text-gray-700 text-sm sm:text-base flex justify-end mr-8 my-2 cursor-pointer">
        <Link href="/contenido">
          <a>Ver todo →</a>
        </Link>
      </div>
    </div>
  )
}

export default Featured
