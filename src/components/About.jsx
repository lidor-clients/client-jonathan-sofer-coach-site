export default function About() {
  return (
    <section id="about" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 text-xs font-semibold tracking-widest mb-4">
            מי אני
          </p>
          <h2 className="font-heading font-black text-[clamp(3rem,8vw,5rem)] leading-none text-white">
            נעים{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              להכיר
            </span>
          </h2>
        </div>

        {/* Content card */}
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-8 md:p-12 space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            קוראים לי יונתן, אני אבא לשתי בנות וגר במושב בדרום.
          </p>

          <p className="text-gray-400 leading-relaxed">
            אני מאמן ריצה שמלווה רצים בתהליך אישי ומדויק — מהצעד הראשון ועד יעדים גדולים
            כמו 10 ק״מ, חצי מרתון ומרתון.
          </p>

          <p className="text-gray-400 leading-relaxed">
            כרץ בעצמי וכמאמן, אני מאמין בתהליך חכם, הדרגתי ומותאם אישית — ובעיקר
            כזה שמתפתח יחד אתכם. כזה שמייצר תוצאות אמיתיות לאורך זמן, ולא רק עומס זמני.
          </p>

          <p className="text-gray-400 leading-relaxed">
            כל מתאמן מקבל ליווי אישי 1 על 1, עם התאמה מלאה לרמה, ללו״ז ולאורח החיים.
          </p>

          <div className="pt-4">
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 text-sm font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-600/25"
            >
              בואו נדבר
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
