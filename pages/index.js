import Navbar from '../components/navbar'
import Seo from '../components/seo'

export default function Home() {
  return (
    <>
      <Seo />
      <div className="mx-auto max-w-screen-xl">
        <Navbar />
      </div>
    </>
  )
}
