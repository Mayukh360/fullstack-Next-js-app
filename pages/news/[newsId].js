import React from 'react'
import { useRouter } from 'next/router'

export default function DetailsPage() {
  const router=useRouter();
  console.log(router.query.newsId)
  return (
    <h1>This is Details Page</h1>
  )
}
