const items = [
  'תוכנית אימונים מותאמת אישית',
  'מעקב אחרי כל אימון ופידבק מידי',
  'התאמה מלאה לחיים האמיתיים (עבודה, משפחה, עומס)',
  'מניעת פציעות ובניית עומס חכמה',
  'הכנה מקצועית ליעדים ותחרויות',
  'זמינות וליווי אישי לאורך כל הדרך',
]

export default function Services() {
  return (
    <section id="services" className="py-28 bg-[#0d0d0d]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 text-xs font-semibold tracking-widest mb-4">
            הליווי
          </p>
          <h2 className="font-heading font-black text-[clamp(2.4rem,7vw,5rem)] leading-none text-white">
            מה כולל{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              הליווי האישי?
            </span>
          </h2>
        </div>

        {/* Items */}
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-8 md:p-12 space-y-5">
          {items.map((item) => (
            <div key={item} className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">{item}</p>
            </div>
          ))}

          {/* Closing line */}
          <div className="pt-6 border-t border-gray-800 text-center">
            <p className="text-white font-heading font-black text-2xl md:text-3xl">
              לא תכנית —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                תהליך
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
