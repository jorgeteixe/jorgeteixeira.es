import Navbar from '../components/navbar'
import Seo from '../components/seo'

export default function Contenido() {
  return (
    <>
      <Seo />
      <div className="mx-auto max-w-screen-xl">
        <Navbar />
        Contenido
      </div>
    </>
  )
}
