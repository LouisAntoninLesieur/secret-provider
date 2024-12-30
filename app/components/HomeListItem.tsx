import React from 'react'
import Link from 'next/link'

const HomeListItem = ({title, description, link}: {title: string, description: string, link: string}) => {
  return (
    <li key={title}>
      <Link href={link}>
        <div className="flex flex-col items-center gap-4 p-2 border border-black my-2 w-1/3 mx-auto">
          <div className="font-bold">{title}</div>
          <div className='italic'>{description}</div>
        </div>
      </Link>
    </li>
  )
}

export default HomeListItem