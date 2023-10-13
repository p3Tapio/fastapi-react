// 'use client'

import Link from 'next/link'
import './navigation.scss'
// import { usePathname } from 'next/navigation'

const Navigation = () => {
  // const pathname = usePathname()

  return (
    <nav>
      <Link className="nav-item" href="/">
        Home
      </Link>
      <Link className="nav-item" href="/about">
        About
      </Link>
    </nav>
  )
}

export default Navigation
