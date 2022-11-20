import React from 'react'
import { useParams } from 'react-router-dom'

export default function Single() {
  const params=useParams()
  console.log(params)
  return (
    <div>
      {params.userId}
    </div>
  )
}
