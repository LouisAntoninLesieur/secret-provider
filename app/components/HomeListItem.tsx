import React from 'react'
import Link from 'next/link'
import { HomeListItemProps } from '../types/interfaces'

const HomeListItem = ({title, link}: HomeListItemProps) => {
  return (
    <li key={title} className="flex flex-col items-center">
      <Link href={link}>
        <div className="flex flex-col p-2 text-center rounded my-2 mx-auto bg-slate-300 hover:bg-green-700 cursor-pointer">
          <div className="font-bold">{title}</div>
        </div>
      </Link>
    </li>
  )
}

export default HomeListItem