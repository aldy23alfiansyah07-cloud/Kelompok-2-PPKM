import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollPosition = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY

      if (currentScrollPosition <= 20 || currentScrollPosition < lastScrollPosition.current) {
        setIsVisible(true)
      } else if (currentScrollPosition > lastScrollPosition.current) {
        setIsVisible(false)
      }

      lastScrollPosition.current = currentScrollPosition
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`sticky top-4 z-40 mx-auto mt-4 w-[calc(100%-2rem)] max-w-7xl rounded-2xl border border-[#FAF0E6]/60 bg-[#C19A6B]/90 px-4 py-4 shadow-lg shadow-[#3C2F2F]/20 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-[calc(100%+1rem)]'}`}>
      <div className="container mx-auto flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-[#3C2F2F]">Kelompok 2</h1>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <li><a href="#hero" className="font-medium text-[#3C2F2F] transition-colors hover:text-[#FAF0E6]">Home</a></li>
          <li><a href="#anggota" className="font-medium text-[#3C2F2F] transition-colors hover:text-[#FAF0E6]">Anggota</a></li>
          <li><a href="#kakak-asuh" className="font-medium text-[#3C2F2F] transition-colors hover:text-[#FAF0E6]">Kakak Asuh</a></li>
          <li><a href="#galeri" className="font-medium text-[#3C2F2F] transition-colors hover:text-[#FAF0E6]">Galeri</a></li>
        </ul>
      </div>
    </nav>
  )
}

