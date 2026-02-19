import { useRef } from 'react'

const testimonials = [
  {
    name: 'מתאמנת 1',
    time: '09:42',
    avatar: 'מ',
    color: '#e05c7c',
    message:
      'היי יוני, בדיוק סיימתי את החצי מרתון ואני חייבת לומר שכשהתחלנו את האימונים לפני שלושה חודשים לא האמנתי שאצליח לסיים אותו, מאדם שלא רץ לאדם שרץ חצי מרתון זה מטורף!!\nתודה רבה על הכל, לא הייתי יכולה לעשות את זה בלעדייך 💪💪🫶🫶',
  },
  {
    name: 'מתאמנת 2',
    time: '14:17',
    avatar: 'מ',
    color: '#7c6fe0',
    message:
      'חייבת להגיד לך שלא חשבתי שאצליח להגיע לתוצאות כאלו ובכללי זה פשוט סיפוק עצום לא הייתי מצליחה לעשות את זה בלי התיווך שלך!!\nובזים המלח? לא האמנתי שאצליח ככה',
  },
  {
    name: 'מתאמן 3',
    time: '20:03',
    avatar: 'מ',
    color: '#3dbf7e',
    message:
      'שמע יוני חייב להגיד לך שאני כבר שבעה חודשים באימונים ולא האמנתי שאני אתמיד ככה..\nמהשחרור מהצבא 6 שנים לא זזתי מהכיסא וכל פעם שניסיתי לרוץ זה לא הלך, ועכשיו אני מבין שזה כי לא ידעתי מה אני עושה לא הייתה לי תכנית מסודרת ומעקב והייתי נפצע ומשתעמם ומאבד מוטיבציה..\n\nעכשיו הכל שונה אני רץ מרחקים וקצבים שלא האמנתי והנה מכל אימון, התכניות מגוונות ומסודרות וגם ממוקדות למטרה וכל הליווי הכי טוב שיכלתי לבקש\n\nרק רציתי להגיד תודה מלך 💪 שנמשיך לשבור שיאים 😎',
  },
  {
    name: 'מתאמן 4',
    time: '11:28',
    avatar: 'מ',
    color: '#e09c3d',
    message:
      'אני רץ כבר שנים והשתתפתי בכמה וכמה מירוצים כולל חצי מרתון תל אביב.\nאבל מאז שהתחלתי לקבל ליווי ממך אני ממש נהנה מהריצה, לא רץ סתם כי צריך.\nאני מרגיש שאני משתפר בכל יום הרבה יותר מאשר באימונים שהתאמנתי בעבר.\nלכל אורך התהליך אני רגוע כי אני יודע שמישהו מקצועי מלווה אותי ויודע לכוון אותי כדי להשיג את המקסימום מהאימונים שלי.\nוכמובן שאין על התחושה שיש תמיד למי לפנות עם כל שאלה ולקבל את התשובה הכי מקצועית שיש.',
  },
]

function DoubleCheck() {
  return (
    <svg viewBox="0 0 16 11" width="16" height="11" className="inline-block mr-1">
      <path
        d="M11.071.653a.457.457 0 0 0-.304-.13.44.44 0 0 0-.299.13L4.917 6.204l-2.07-2.07a.44.44 0 0 0-.299-.13.457.457 0 0 0-.304.13l-.87.87a.44.44 0 0 0 0 .621l3.244 3.245a.44.44 0 0 0 .621 0l6.703-6.704a.44.44 0 0 0 0-.62l-.871-.893z"
        fill="#53bdeb"
      />
      <path
        d="M15.071.653a.457.457 0 0 0-.304-.13.44.44 0 0 0-.299.13L8.917 6.204l-.912-.912-.87.87 1.477 1.477a.44.44 0 0 0 .621 0l6.703-6.704a.44.44 0 0 0 0-.62l-.865-.662z"
        fill="#53bdeb"
      />
    </svg>
  )
}

function WhatsAppCard({ name, time, avatar, color, message }) {
  return (
    <div
      className="flex-none w-80 rounded-2xl overflow-hidden shadow-xl"
      style={{ background: '#0b141a' }}
      dir="rtl"
    >
      {/* Top bar */}
      <div
        className="flex items-center gap-3 px-4 py-3"
        style={{ background: '#202c33' }}
      >
        {/* Avatar */}
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
          style={{ background: color }}
        >
          {avatar}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold truncate" style={{ color }}>
            {name}
          </p>
          <p className="text-[11px]" style={{ color: '#8696a0' }}>
            מתאמן של יונתן
          </p>
        </div>
        {/* WhatsApp icon */}
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#00a884">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.975-1.418A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm4.93 14.07c-.207.583-1.215 1.116-1.663 1.157-.448.042-.46.335-2.895-.736-2.434-1.07-3.895-3.63-4.01-3.797-.114-.167-.932-1.286-.886-2.426.046-1.14.627-1.68.843-1.908.217-.228.472-.285.629-.288.157-.003.314.001.452.007.145.006.34-.055.532.446.198.514.673 1.744.733 1.872.06.127.097.276.015.444-.082.168-.123.272-.243.42-.12.146-.252.325-.36.437-.12.123-.246.256-.107.503.14.247.62 1.059 1.334 1.715.918.839 1.69 1.098 1.93 1.218.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.58-.147 1.167z" />
        </svg>
      </div>

      {/* Chat background with wallpaper feel */}
      <div className="px-4 py-4" style={{ background: '#0b141a', minHeight: '120px' }}>
        {/* Bubble */}
        <div className="relative max-w-[90%]">
          {/* Tail */}
          <div
            className="absolute top-0 -right-[7px] w-0 h-0"
            style={{
              borderLeft: '8px solid #202c33',
              borderTop: '8px solid transparent',
              borderBottom: '0px solid transparent',
            }}
          />
          <div
            className="rounded-2xl rounded-tr-none px-3 pt-2 pb-1"
            style={{ background: '#202c33' }}
          >
            <p
              className="text-sm leading-relaxed whitespace-pre-line mb-2"
              style={{ color: '#e9edef' }}
            >
              {message}
            </p>
            <div className="flex items-center justify-end gap-1">
              <span className="text-[11px]" style={{ color: '#8696a0' }}>
                {time}
              </span>
              <DoubleCheck />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const scrollRef = useRef()

  const scroll = (dir) => {
    scrollRef.current.scrollBy({ left: dir * 340, behavior: 'smooth' })
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

        {/* Carousel */}
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
            className="flex gap-5 overflow-x-auto scroll-smooth pb-4 items-start"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((t, i) => (
              <WhatsAppCard key={i} {...t} />
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
