import { useEffect, useRef, useState } from 'react'

const members = [
    { name: 'Aldy Alfiansyah', role: 'Ketua', npm: '267006111003', instagram: '@zirox', github: 'github.com/aldy23alfiansyah07-cloud', photo: '/assets/foto-anggota/Aldy%20Alfiansyah.jpeg' },
    { name: 'Rizqi Ghaniya aliy', role: 'Anggota', npm: '267006111067', instagram: '@rzqghny21', github: 'github.com/ghanirizqi-beep', photo: '/assets/foto-anggota/Rizqi%20Ghaniya%20Aliy.jpg' },
    { name: 'Fiki Fathiril Haq', role: 'Anggota', npm: '267006111101', instagram: '@fikifthrl', github: 'github.com/fikifthrl', photo: '/assets/foto-anggota/fiki.jpg' },
    { name: 'Raisa Hanipah Soleha', role: 'Anggota', npm: '267006111150', instagram: '@piwpiwnanaa_', github: 'github.com/raisahanipah', photo: '/assets/foto-anggota/Raisa.jpg' },
    { name: 'Jovita Tita Bilqis', role: 'Anggota', npm: '267006111152', instagram: '@jovitaatb_', github: 'github.com/jovitaatb', photo: '/assets/foto-anggota/Jovita.webp' },
    { name: 'Hirzan Khairurrizal Ahza', role: 'Anggota', npm: '267006111168', instagram: '@ahdzho_', github: 'github.com/ahdzho3', photo: '/assets/foto-anggota/Hirzan.jpg' },
    { name: 'Hisyam Makki', role: 'Anggota', npm: '267006111169', instagram: '@hisyamakki_', github: 'github.com/username', photo: '/assets/foto-anggota/Hisyam.jpg' },
    { name: 'Fahri Fauzira', role: 'Anggota', npm: '267006111171', instagram: '@fahrifauziraa', github: 'github.com/fahrifauziraa', photo: '/assets/foto-anggota/paldo.jpg' },
    { name: 'Fahri Januar', role: 'Anggota', npm: '267006111172', instagram: '@fahrijanuarpratama', github: 'github.com/username', photo: '/assets/foto-anggota/Fahri.jpg' },
    { name: 'Mohammad Keanu Raadhia Fasya', role: 'Anggota', npm: '267006111177', instagram: '@mhmdrdhii_', github: 'github.com/Kenshimaruw', photo: '/assets/foto-anggota/Ken.jpg' },
]

export default function Anggota() {
    return (
        <section id="anggota" className="bg-gray-100 py-20">
            <div className="container mx-auto px-4">
                <h1 className="text-center text-4xl font-bold mb-4">Anggota</h1>
                <MemberCarousel />
            </div>
        </section>
    )
}

function MemberCarousel() {
    const [selectedMember, setSelectedMember] = useState(null)
    const [isDragging, setIsDragging] = useState(false)
    const carouselRef = useRef(null)
    const dragState = useRef({ startX: 0, startScrollLeft: 0, hasMoved: false })
    const loopingMembers = [...members, ...members]

    const startDragging = (event) => {
        if (event.pointerType === 'mouse' && event.button !== 0) return
        if (event.target.closest?.('button')) return

        dragState.current = {
            startX: event.clientX,
            startScrollLeft: carouselRef.current.scrollLeft,
            hasMoved: false,
        }
        carouselRef.current.setPointerCapture(event.pointerId)
        setIsDragging(true)
    }

    const dragCarousel = (event) => {
        if (!isDragging) return

        const distance = event.clientX - dragState.current.startX
        if (Math.abs(distance) > 5) {
            dragState.current.hasMoved = true
        }
        carouselRef.current.scrollLeft = dragState.current.startScrollLeft - distance
    }

    const stopDragging = (event) => {
        if (!isDragging) return

        carouselRef.current.releasePointerCapture(event.pointerId)
        setIsDragging(false)
    }

    useEffect(() => {
        const closeOnEscape = (event) => {
            if (event.key === 'Escape') {
                setSelectedMember(null)
            }
        }

        window.addEventListener('keydown', closeOnEscape)
        return () => window.removeEventListener('keydown', closeOnEscape)
    }, [])

    return (
        <>
            <div
                ref={carouselRef}
                onPointerDown={startDragging}
                onPointerMove={dragCarousel}
                onPointerUp={stopDragging}
                onPointerCancel={stopDragging}
                className="relative overflow-x-auto overflow-y-hidden rounded-lg scrollbar-thin cursor-grab select-none active:cursor-grabbing"
            >
                <div className={`member-carousel-track flex w-full ${isDragging ? 'member-carousel-track-dragging' : ''}`}>
                    {loopingMembers.map((member, index) => (
                        <article
                            key={`${member.name}-${index}`}
                            className="w-full shrink-0 px-2 text-left md:w-1/2 lg:w-1/4"
                        >
                        <div className="h-full rounded-lg bg-[#C19A6B] p-8 text-center text-[#3C2F2F] shadow">
                            <img
                                src={member.photo}
                                alt={`Foto ${member.name}`}
                                onError={(event) => {
                                    event.currentTarget.src = '/assets/mentoring/hero-placeholder.svg'
                                }}
                                className="mx-auto mb-5 h-40 w-full rounded-lg object-cover"
                            />
                            <h2 className="mb-2 text-center text-2xl font-semibold">{member.name}</h2>
                            <p className="text-lg font-medium text-[#5C463E]">{member.role}</p>
                            <button
                                type="button"
                                onPointerDown={(event) => event.stopPropagation()}
                                onClick={() => setSelectedMember(member)}
                                className="mt-5 rounded-lg bg-[#3C2F2F] px-4 py-2 font-semibold text-[#FAF0E6] transition-colors hover:bg-[#5C463E]"
                            >
                                Selengkapnya
                            </button>
                        </div>
                        </article>
                    ))}
                </div>
            </div>
            {selectedMember && (
                <div
                    role="presentation"
                    onClick={() => setSelectedMember(null)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-8"
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="member-modal-title"
                        onClick={(event) => event.stopPropagation()}
                        className="relative grid max-h-[90vh] w-full max-w-2xl gap-6 overflow-y-auto rounded-lg bg-white p-6 shadow-2xl md:grid-cols-[180px_1fr] md:items-center"
                    >
                        <button
                            type="button"
                            onClick={() => setSelectedMember(null)}
                            aria-label="Tutup detail anggota"
                            className="absolute right-4 top-3 text-2xl text-gray-500 hover:text-gray-900"
                        >
                            &times;
                        </button>
                        <img
                            src={selectedMember.photo}
                            alt={`Foto ${selectedMember.name}`}
                            onError={(event) => {
                                event.currentTarget.src = '/assets/mentoring/hero-placeholder.svg'
                            }}
                            className="mx-auto h-40 w-full rounded-lg object-cover md:mx-0"
                        />
                        <div>
                            <h2 id="member-modal-title" className="mb-5 text-center text-2xl font-bold md:text-left">{selectedMember.name}</h2>
                            <div className="space-y-3 border-t border-gray-200 pt-4 text-gray-700">
                                <p><span className="font-semibold">Role:</span> {selectedMember.role}</p>
                                <p><span className="font-semibold">NPM:</span> {selectedMember.npm}</p>
                                <p><span className="font-semibold">Instagram:</span> {selectedMember.instagram}</p>
                                <p>
                                    <span className="font-semibold">GitHub:</span>{' '}
                                    <a
                                        href={`https://${selectedMember.github}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        {selectedMember.github}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}