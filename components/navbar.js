import Link from 'next/link'

function Navbar() {
  return (
    <div className="flex flex-col sm:flex-row pb-8 justify-around max-w-4xl font-medium">
      <Link href="https://github.com/jorgeteixe" passHref>
        <a className="mt-2 sm:mt-0 hover:text-primary transition-colors">
          GitHub
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/jorge-teixeira-crespo">
        <a className="mt-2 sm:mt-0 hover:text-primary transition-colors">
          LinkedIn
        </a>
      </Link>
      <Link href="https://twitter.com/jorgeteixe_">
        <a className="mt-2 sm:mt-0 hover:text-primary transition-colors">
          Twitter
        </a>
      </Link>
      <Link href="https://instagram.com/jorgeteixe_">
        <a className="mt-2 sm:mt-0 hover:text-primary transition-colors">
          Instagram
        </a>
      </Link>
    </div>
  )
}

export default Navbar
