const socials = [
  { label: 'אינסטגרם', href: 'https://www.instagram.com/jonysofer?igsh=cnpoMTBmbW80a2k4&utm_source=qr' },
  { label: 'פייסבוק', href: 'https://www.facebook.com/share/1CJuNW1EJu/?mibextid=wwXIfr' },
  { label: 'טיקטוק', href: 'https://www.tiktok.com/@jonathan.sofer?_r=1&_t=ZS-943FHyCwyf7' },
]

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-gray-900 py-14">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div>
          <h2 className="font-heading font-black text-3xl text-white mb-1">
            יונתן <span className="text-orange-500">סופר</span>
          </h2>
          <p className="text-gray-600 text-xs">מאמן ריצה אישי</p>
        </div>

        {/* Socials */}
        <div className="flex gap-6">
          {socials.map(s => (
            <a
              key={s.label}
              href={s.href}
              className="text-gray-600 hover:text-orange-500 text-sm transition-colors duration-200"
            >
              {s.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-gray-800 text-xs">
          © {new Date().getFullYear()} יונתן סופר. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  )
}
