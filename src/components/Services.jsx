const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: 'אימון אישי 1:1',
    description:
      'אימונים מותאמים אישית לגוף, למטרות ולרמת הכושר שלך. תשומת לב מלאה = תוצאות מקסימליות.',
    features: ['תוכנית אימון אישית', 'תיקון טכניקה בזמן אמת', 'מעקב התקדמות', 'גמישות בלוח הזמנים'],
    price: 'מ-₪280 / אימון',
    highlighted: false,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: 'ייעוץ תזונה',
    description:
      'אסטרטגיות תזונה ברות-קיימא שמניעות ביצועים ללא דיאטות מגבילות. אכול חכם, תרגיש מדהים.',
    features: ['תפריט מותאם אישית', 'חישוב מאקרו', 'מעקב שבועי', 'הדרכה על מתכונים'],
    price: 'מ-₪550 / חודש',
    highlighted: true,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: 'אימון אונליין',
    description:
      'אימון ברמה עולמית מכל מקום בעולם. מושלם לאנשים עם לוח זמנים עמוס שרוצים להתאמן בעצמם.',
    features: ['תוכנית חודשית מותאמת', 'בדיקת טכניקה בוידאו', 'ליווי יומי בהודעות', 'מעקב באפליקציה'],
    price: 'מ-₪750 / חודש',
    highlighted: false,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-orange-500 text-xs font-semibold tracking-widest mb-4">
            מה אני מציע
          </p>
          <h2 className="font-heading font-black text-[clamp(3rem,8vw,6rem)] leading-none text-white">
            ה
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              שירותים
            </span>
            {' '}שלי
          </h2>
          <p className="text-gray-500 mt-5 max-w-lg mx-auto text-sm leading-relaxed">
            כל תוכנית בנויה סביבך. בחר את הפורמט שמתאים לחיים שלך ונתחיל לעבוד.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map(service => (
            <div
              key={service.title}
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 group ${
                service.highlighted
                  ? 'bg-gradient-to-b from-orange-500/10 to-transparent border-orange-500/40'
                  : 'bg-[#111] border-gray-800 hover:border-gray-700'
              }`}
            >
              {service.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full">
                  הכי פופולרי
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-7 transition-colors duration-300 ${
                  service.highlighted
                    ? 'bg-gradient-to-br from-orange-500 to-red-600 text-white'
                    : 'bg-gray-800/80 text-orange-500 group-hover:bg-orange-500/10'
                }`}
              >
                {service.icon}
              </div>

              <h3 className="text-white font-bold text-xl mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-7">{service.description}</p>

              {/* Feature list */}
              <ul className="space-y-2.5 mb-8">
                {service.features.map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-gray-300">
                    <svg
                      className="w-4 h-4 text-orange-500 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Price + CTA */}
              <div className="border-t border-gray-800 pt-6">
                <p className="text-orange-400 font-bold text-lg mb-5">{service.price}</p>
                <a
                  href="#contact"
                  className={`block text-center py-3 rounded-lg text-sm font-bold transition-all duration-300 ${
                    service.highlighted
                      ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700 hover:shadow-lg hover:shadow-orange-600/25'
                      : 'border border-gray-700 text-gray-300 hover:border-orange-500 hover:text-orange-400'
                  }`}
                >
                  בואו נתחיל
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
