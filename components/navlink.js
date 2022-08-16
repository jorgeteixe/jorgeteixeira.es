import Link from 'next/link'

function NavLink({ text, href, active = false }) {
  return (
    <Link href={href}>
      <a className="font-semibold cursor-pointer mx-3">{text}</a>
    </Link>
  )
}

export default NavLink
