import Link from 'next/link'
import { useState } from 'react'

function Content({ href, text, category, color }) {
  return (
    <Link href={href} passHref>
      <a
        className={`block m-2 w-[250px] h-[250px] cursor-pointer overflow-hidden rounded-lg shadow-sm border-[1px] border-gray-500 transition-all hover:shadow-${color} shadow-${color}`}
      >
        <div className="p-3 h-full flex flex-col justify-between">
          <div className="flex justify-end">
            <p className={`inline-block bg-${color} text-white px-1 rounded`}>
              {category}
            </p>
          </div>
          <p className="text-center font-semibold">{text}</p>
        </div>
      </a>
    </Link>
  )
}

export default Content
