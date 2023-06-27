import React from 'react'
import Link from 'next/link'

export default function About() {
  return (
    <>
    
    <h1>This is About Page</h1>
    <h2><Link href='/about/1'>Yash</Link></h2>
    <h2> <Link href='/about/2'>Vaibhav</Link></h2>
    <h2><Link href='/about/3'>Suresh</Link></h2>
    </>
  )
}
