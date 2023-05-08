import React from 'react'
import { redirect } from 'next/navigation'

type Props = {}

export default function IPage({}: Props) {
    return (
      redirect('/')
  )
}