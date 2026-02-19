import { useRef } from 'react'

const images = [
  '/testimonials/whatsapp-1.jpeg',
  '/testimonials/whatsapp-2.jpeg',
  '/testimonials/whatsapp-3.jpeg',
  '/testimonials/whatsapp-4.jpeg',
]

export default function Testimonials() {
  const scrollRef = useRef()

  const scroll = (dir) => {
    scrollRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' })
  }

  return (
    <section id="testimonials" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 text-xs font-semibold tracking-widest mb-4">
            המלצות
          </p>
          <h2 className="font-heading font-black text-[clamp(2.4rem,7vw,5rem)] leading-none text-white">
            מה מתאמנים{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              מספרים
            </span>
          </h2>
        </div>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll(-1)}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#1a1a1a] border border-gray-700 hover:border-orange-500 text-gray-400 hover:text-orange-500 flex items-center justify-center transition-all duration-200 shadow-lg"
            aria-label="הקודם"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {images.map((src, i) => (
              <div
                key={i}
                className="flex-none w-72 rounded-2xl overflow-hidden border border-gray-800 bg-[#111] shadow-lg hover:border-orange-500/40 transition-colors duration-300"
              >
                <img
                  src={src}
                  alt={`המלצה ${i + 1}`}
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll(1)}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#1a1a1a] border border-gray-700 hover:border-orange-500 text-gray-400 hover:text-orange-500 flex items-center justify-center transition-all duration-200 shadow-lg"
            aria-label="הבא"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
