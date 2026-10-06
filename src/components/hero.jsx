import { useEffect, useState } from 'react'

const heroImages = [
  '/assets/mentoring/foto1.jpg',
  '/assets/mentoring/foto2.jpg',
  '/assets/mentoring/foto3.jpg',
  '/assets/mentoring/foto4.jpg',
  '/assets/mentoring/foto5.jpg',
  '/assets/mentoring/foto6.jpg',
  '/assets/mentoring/foto7.jpg',
  '/assets/mentoring/foto8.jpg',
]

export default function Hero() {
  return (
  <header id="hero" className="bg-[#FAF0E6] py-16 md:py-24">
    <section className="container mx-auto grid items-center gap-10 px-4 md:grid-cols-2">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C19A6B]">Web PPKM</p>
        <h1 className="mb-4 text-4xl font-bold text-[#3C2F2F] md:text-6xl">Kelompok 2</h1>
        <a href="#profil" className="inline-block rounded-lg bg-[#3C2F2F] px-6 py-3 font-semibold text-[#FAF0E6] transition-colors hover:bg-[#5C463E]">Learn More</a>
      </div>
      <HeroCollage />
    </section>
  </header>
  )
}

function HeroCollage() {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const slideshowTimer = setInterval(() => {
      setActiveImage((currentImage) => (currentImage + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(slideshowTimer)
  }, [])

  const secondaryImage = (activeImage + 1) % heroImages.length

  return (
    <div className="relative mx-auto min-h-[420px] w-full max-w-xl overflow-hidden bg-transparent">
      <div className="absolute left-[4%] top-[8%] w-[72%] rotate-[-4deg] border-[14px] border-[#FAF0E6] shadow-2xl animate-[hero-fade_700ms_ease-in-out]">
        <img
          key={heroImages[activeImage]}
          src={heroImages[activeImage]}
          alt={`Foto kelompok ${activeImage + 1}`}
          onError={(event) => {
            event.currentTarget.src = '/assets/mentoring/hero-placeholder.svg'
          }}
          className="aspect-[4/3] w-full object-cover"
        />
      </div>
      <div className="absolute bottom-[8%] right-[2%] w-[64%] rotate-[5deg] border-[14px] border-[#FAF0E6] shadow-2xl animate-[hero-fade_700ms_ease-in-out]">
        <img
          key={heroImages[secondaryImage]}
          src={heroImages[secondaryImage]}
          alt={`Foto kelompok ${secondaryImage + 1}`}
          onError={(event) => {
            event.currentTarget.src = '/assets/mentoring/hero-placeholder.svg'
          }}
          className="aspect-[4/3] w-full object-cover"
        />
      </div>
    </div>
  )
}
