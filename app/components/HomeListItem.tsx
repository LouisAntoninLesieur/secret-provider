import React from 'react'
import Link from 'next/link'

const HomeListItem = ({title, description, link}: {title: string, description: string, link: string}) => {
  return (
    <li key={title}>
      <Link href={link}>
        <div className="flex flex-col p-2 border border-black rounded my-2 mx-auto">
          <div className="font-bold">{title}</div>
          <div className='italic'>{description}</div>
        </div>
      </Link>
    </li>
  )
}

export default HomeListItem