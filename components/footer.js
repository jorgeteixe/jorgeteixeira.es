import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <div className="m-6 text-gray-800 text-sm sm:text-base flex justify-between">
      <div className="flex justify-around w-[200px]">
        <Link href="https://twitter.com/jorgeteixe_">
          <a>
            <Image
              src="/twitter.svg"
              height={20}
              width={20}
              alt="Twitter logo."
              className="cursor-pointer"
            />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/jorge-teixeira-crespo">
          <a>
            <Image
              src="/linkedin.svg"
              height={20}
              width={20}
              alt="Linkedin logo."
              className="cursor-pointer"
            />
          </a>
        </Link>
        <Link href="https://github.com/jorgeteixe">
          <a>
            <Image
              src="/github.svg"
              height={20}
              width={20}
              alt="Github logo."
              className="cursor-pointer"
            />
          </a>
        </Link>
        <Link href="https://instagram.com/jorgeteixe_">
          <a>
            <Image
              src="/instagram.svg"
              height={20}
              width={20}
              alt="Instagram logo."
              className="cursor-pointer"
            />
          </a>
        </Link>
      </div>
      <div>
        © Jorge Teixeira 2022 —{' '}
        <Link href="https://github.com/jorgeteixe/jorgeteixeira.es">
          <a className=" hover:underline">Source code</a>
        </Link>
      </div>
    </div>
  )
}

export default Footer
