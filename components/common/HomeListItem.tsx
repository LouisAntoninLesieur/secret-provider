import React from 'react'
import Link from 'next/link'
import { HomeListItemProps } from '../../types/index'

export const HomeListItem = ({title, link}: HomeListItemProps) => {
  return (
      <Link href={link}>
        <div className="flex flex-col p-2 text-center rounded my-2 mx-auto bg-slate-300 hover:bg-green-700 cursor-pointer">
          <div className="font-bold">{title}</div>
        </div>
      </Link>
  )
}