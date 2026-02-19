const certifications = [
  'NASM Certified Personal Trainer',
  'Precision Nutrition Level 1',
  'TRX Suspension Training Certified',
  'Functional Movement Specialist',
]

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-orange-500 text-xs font-semibold tracking-widest mb-4">
            מי אני
          </p>
          <h2 className="font-heading font-black text-[clamp(3rem,8vw,6rem)] leading-none text-white">
            קצת{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              עליי
            </span>
          </h2>
        </div>

        {/* text first in RTL, image second */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div>
            <h3 className="font-heading font-black text-4xl md:text-5xl text-white leading-tight mb-6">
              לא רק מאמן.
              <br />
              <span className="text-orange-500">בונה אלופים.</span>
            </h3>

            <p className="text-gray-400 leading-relaxed mb-5">
              עם למעלה מ-8 שנות ניסיון בתחום הכושר, עזרתי למאות אנשים לשבור את המחסומים שלהם
              ולהשיג תוצאות שלא האמינו שאפשריות. הגישה שלי משלבת מדע מוכח עם ניסיון מהשטח
              כדי לייצר תוצאות שנשארות לאורך זמן.
            </p>

            <p className="text-gray-400 leading-relaxed mb-10">
              בין אם אתה מתחיל דרך חדשה או רוצה לקחת את הביצועים שלך לרמה הבאה —
              אני אבנה לך תוכנית שמתאימה לאורח החיים, המטרות והיכולות שלך.
            </p>

            {/* Certifications */}
            <div>
              <p className="text-white text-xs font-semibold tracking-widest mb-5">
                הסמכות
              </p>
              <div className="space-y-3">
                {certifications.map(cert => (
                  <div key={cert} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block mt-10 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 text-sm font-bold rounded transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-600/25"
            >
              בוא נעבוד יחד
            </a>
          </div>

          {/* Photo placeholder */}
          <div className="relative group">
            <div className="aspect-[3/4] bg-gradient-to-br from-gray-900 via-[#1a0d00] to-gray-900 rounded-2xl overflow-hidden border border-gray-800 flex flex-col items-center justify-center gap-4">
              <div className="w-36 h-36 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <svg
                  className="w-20 h-20 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <p className="text-gray-600 text-sm">החלף בתמונת המאמן</p>
            </div>
            {/* Decorative corners */}
            <div className="absolute -bottom-5 -left-5 w-36 h-36 bg-orange-500/8 rounded-2xl -z-10" />
            <div className="absolute -top-5 -right-5 w-28 h-28 border border-orange-500/15 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
