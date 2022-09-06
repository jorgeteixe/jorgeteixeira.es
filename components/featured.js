import Content from './content'

function Featured() {
  return (
    <div className="m-5">
      <h2 className="text-center lg:text-left font-semibold text-2xl m-2 mb-4">
        Destacado
      </h2>
      <div className="flex justify-around flex-wrap">
        <Content
          href="#"
          category="curso"
          color="primary"
          text="Intro a AWS para estudiantes de informática"
        />
        <Content
          href="#"
          category="articulo"
          color="secondary"
          text="Cómo empezar a usar un gestor de contraseñas"
        />
        <Content
          href="#"
          category="curso"
          color="primary"
          text="Organiza tu correo electrónico de manera efectiva"
        />
        <Content
          href="#"
          category="snippet"
          color="yellow"
          text="Llama la atención en LinkedIn con estos pasos"
        />
      </div>
    </div>
  )
}

export default Featured
