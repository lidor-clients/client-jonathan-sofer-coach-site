export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#110800] to-[#0a0a0a]" />

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-orange-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-700/8 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(249,115,22,1) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,1) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <p className="text-orange-500 text-xs font-semibold tracking-widest mb-8">
          מאמן כושר אישי מוסמך
        </p>

        <h1 className="font-heading font-black leading-none text-white mb-8">
          <span className="block text-[clamp(4rem,14vw,10rem)]">תתחזק</span>
          <span className="block text-[clamp(4rem,14vw,10rem)] text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
            תשתנה
          </span>
          <span className="block text-[clamp(4rem,14vw,10rem)]">תנצח</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          שנה את הגוף ואת הגישה שלך עם תוכניות אימון מותאמות אישית.
          ללא קיצורי דרך. רק תוצאות אמיתיות.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-10 py-4 text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-600/25 rounded"
          >
            התחל עכשיו
          </a>
          <a
            href="#about"
            className="border border-gray-700 hover:border-orange-500 text-gray-300 hover:text-white px-10 py-4 text-sm font-bold transition-all duration-300 rounded"
          >
            קרא עוד
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-24 grid grid-cols-3 gap-6 max-w-md mx-auto">
          {[
            { number: '+8', label: 'שנות ניסיון' },
            { number: '+200', label: 'מתאמנים' },
            { number: '95%', label: 'שביעות רצון' },
          ].map((stat, i) => (
            <div key={stat.label} className="relative text-center">
              {i !== 0 && (
                <div className="absolute right-0 top-1/4 h-1/2 w-px bg-gray-800" />
              )}
              <div className="font-heading font-black text-4xl text-orange-500">{stat.number}</div>
              <div className="text-gray-600 text-[11px] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-gray-700 text-[10px]">גלול</span>
        <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
