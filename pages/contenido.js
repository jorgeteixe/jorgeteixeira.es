import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Seo from '../components/seo'

export default function Contenido() {
  return (
    <>
      <Seo />
      <div className="mx-auto max-w-screen-xl">
        <Navbar />
        <div className="mx-5">
          <h2 className="text-center lg:text-left font-semibold text-2xl m-2 mb-4 underline decoration-3 decoration-primary">
            Cursos
          </h2>
          <h2 className="text-center lg:text-left font-semibold text-2xl m-2 mb-4 underline decoration-3 decoration-secondary">
            Artículos
          </h2>
          <h2 className="text-center lg:text-left font-semibold text-2xl m-2 mb-4 underline decoration-3 decoration-yellow">
            Snippets
          </h2>
        </div>
        <Footer />
      </div>
    </>
  )
}
