import { useEffect, useState } from 'react'

const mentors = [
    { name: 'Kakak Asuh 1', role: 'Kakak Asuh', instagram: '@belaoctya', github: 'github.com/username', photo: '/assets/foto-anggota/sasa.jpg' },
    { name: 'Kakak Asuh 2', role: 'Kakak Asuh', instagram: '@mythmeyy', github: 'github.com/username', photo: '/assets/foto-anggota/Mitha.jpg' },
]

export default function KakakAsuh() {
    return (
        <section id="kakak-asuh" className="bg-white py-20">
            <div className="container mx-auto px-4">
                <h1 className="text-center mb-4 text-4xl font-bold">Kakak Asuh</h1>
                <MentorCarousel />
            </div>
        </section>
    )
}

function MentorCarousel() {
    const [selectedMentor, setSelectedMentor] = useState(null)

    useEffect(() => {
        const closeOnEscape = (event) => {
            if (event.key === 'Escape') {
                setSelectedMentor(null)
            }
        }

        window.addEventListener('keydown', closeOnEscape)
        return () => window.removeEventListener('keydown', closeOnEscape)
    }, [])

    return (
        <>
            <div className="relative flex flex-col items-center justify-center gap-6 md:flex-row">
                    {mentors.map((mentor) => (
                        <button
                            key={mentor.name}
                            type="button"
                            onClick={() => setSelectedMentor(mentor)}
                            className="w-full max-w-sm text-left"
                        >
                            <div className="h-full rounded-lg bg-[#C19A6B] p-8 text-center text-[#3C2F2F] shadow">
                                <img
                                    src={mentor.photo}
                                    alt={`Foto ${mentor.name}`}
                                    onError={(event) => {
                                        event.currentTarget.src = '/assets/mentoring/hero-placeholder.svg'
                                    }}
                                    className="mx-auto mb-5 h-40 w-full rounded-lg object-cover"
                                />
                                <h2 className="mb-2 text-center text-2xl font-semibold">{mentor.name}</h2>
                                <p className="text-center text-sm text-[#5C463E]">Klik untuk melihat detail</p>
                            </div>
                        </button>
                    ))}
            </div>
            {selectedMentor && (
                <div
                    role="presentation"
                    onClick={() => setSelectedMentor(null)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-8"
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="mentor-modal-title"
                        onClick={(event) => event.stopPropagation()}
                        className="relative grid w-full max-w-2xl gap-6 rounded-lg bg-white p-6 shadow-2xl md:grid-cols-[180px_1fr] md:items-center"
                    >
                        <button
                            type="button"
                            onClick={() => setSelectedMentor(null)}
                            aria-label="Tutup detail kakak asuh"
                            className="absolute right-4 top-3 text-2xl text-gray-500 hover:text-gray-900"
                        >
                            &times;
                        </button>
                        <img
                            src={selectedMentor.photo}
                            alt={`Foto ${selectedMentor.name}`}
                            onError={(event) => {
                                event.currentTarget.src = '/assets/mentoring/hero-placeholder.svg'
                            }}
                            className="mx-auto h-40 w-full rounded-lg object-cover md:mx-0"
                        />
                        <div>
                            <h2 id="mentor-modal-title" className="mb-5 text-center text-2xl font-bold md:text-left">{selectedMentor.name}</h2>
                            <div className="space-y-3 border-t border-gray-200 pt-4 text-gray-700">
                                <p><span className="font-semibold">Peran:</span> {selectedMentor.role}</p>
                                <p><span className="font-semibold">Instagram:</span> {selectedMentor.instagram}</p>
                                <p>
                                    <span className="font-semibold">GitHub:</span>{' '}
                                    <a
                                        href={`https://${selectedMentor.github}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        {selectedMentor.github}
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
