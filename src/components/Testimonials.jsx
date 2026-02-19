// WhatsApp screenshot images should be placed in public/testimonials/
// Name them: whatsapp-1.jpg, whatsapp-2.jpg, whatsapp-3.jpg, etc.
// Update the `images` array below to match your actual file names.
const images = [
  '/testimonials/whatsapp-1.jpeg',
  '/testimonials/whatsapp-2.jpeg',
  '/testimonials/whatsapp-3.jpeg',
  '/testimonials/whatsapp-4.jpeg',
]

export default function Testimonials() {
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

        {/* WhatsApp screenshots – masonry columns so each image shows at its natural height */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-0">
          {images.map((src, i) => (
            <div
              key={i}
              className="break-inside-avoid mb-6 rounded-2xl overflow-hidden border border-gray-800 bg-[#111] shadow-lg"
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
      </div>
    </section>
  )
}
