import Image from 'next/image'
import Link from 'next/link'

function Hero() {
  return (
    <div className="m-5 max-w-xl">
      <div className="flex justify-end">
        <Link href="https://instagram.com/jorgeteixe_">
          <a className="px-1 underline -rotate-6 bg-primary-light text-primary rounded-lg">
            @jorgeteixe_
          </a>
        </Link>
      </div>
      <div className="float-right mr-10">
        <Image
          src="/arrow.svg"
          height={70}
          width={50}
          alt="Arrow pointing Instagram link."
        />
      </div>
      <h1 className="font-bold text-4xl sm:text-6xl">Jorge Teixeira</h1>
      <p className="text-sm sm:text-lg my-4">
        Lorem ipsum dolor sit amet — consectetur adipiscing elit. Nam dignissim
        &amp; justo ut porttitor interdum. Pellentesque eget.
      </p>
      <Link href="/sobre-mi">
        <a className="underline text-gray-500 hover:text-gray-700 text-sm sm:text-base">
          Más sobre mi →
        </a>
      </Link>
    </div>
  )
}

export default Hero
