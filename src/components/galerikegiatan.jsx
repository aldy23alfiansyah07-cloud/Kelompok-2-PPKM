import { useState } from 'react'

const galleryImages = [
    '/assets/mentoring/foto1.jpg',
    '/assets/mentoring/foto2.jpg',
    '/assets/mentoring/foto3.jpg',
    '/assets/mentoring/foto4.jpg',
    '/assets/mentoring/foto5.jpg',
    '/assets/mentoring/foto6.jpg',
    '/assets/mentoring/foto7.jpg',
    '/assets/mentoring/foto8.jpg',
]

export default function GaleriKegiatan() {
  const [page, setPage] = useState(0)
  const imagesPerPage = 4
  const pageCount = Math.ceil(galleryImages.length / imagesPerPage)
  const visibleImages = galleryImages.slice(
    page * imagesPerPage,
    (page + 1) * imagesPerPage,
  )

  return (
    <section id="galeri" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
            <h2 className=" text-center mb-4 text-3xl font-bold">Galeri Kegiatan</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {visibleImages.map((image, index) => (
                    <div key={image} className="overflow-hidden rounded-lg shadow-md">
                        <img
                            src={image}
                            alt={`Kegiatan ${page * imagesPerPage + index + 1}`}
                            className="aspect-square w-full object-cover"
                        />
                    </div>
                ))}
            </div>
            <div className="mt-6 flex items-center justify-center gap-4">
                <button
                    type="button"
                    onClick={() => setPage((currentPage) => currentPage - 1)}
                    disabled={page === 0}
                    aria-label="Lihat foto sebelumnya"
                    className="rounded-lg bg-[#3C2F2F] px-4 py-2 font-semibold text-[#FAF0E6] transition-colors hover:bg-[#5C463E] disabled:cursor-not-allowed disabled:opacity-50"
                >
                    Sebelumnya
                </button>
                <span aria-live="polite" className="text-sm text-gray-700">
                    {page + 1} / {pageCount}
                </span>
                <button
                    type="button"
                    onClick={() => setPage((currentPage) => currentPage + 1)}
                    disabled={page === pageCount - 1}
                    aria-label="Lihat foto berikutnya"
                    className="rounded-lg bg-[#3C2F2F] px-4 py-2 font-semibold text-[#FAF0E6] transition-colors hover:bg-[#5C463E] disabled:cursor-not-allowed disabled:opacity-50"
                >
                    Berikutnya
                </button>
            </div>
        </div>
    </section>
  )
}
