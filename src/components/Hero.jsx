import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

function validateIsraeliPhone(raw) {
  const phone = raw.replace(/[\s\-()]/g, '')
  return /^(\+972|972|0)(5\d{8}|[2-9]\d{7})$/.test(phone)
}

export default function Hero() {
  const formRef = useRef()
  const [status, setStatus] = useState('idle')
  const [phoneError, setPhoneError] = useState('')

  const handlePhoneBlur = (e) => {
    const val = e.target.value.trim()
    if (val && !validateIsraeliPhone(val)) {
      setPhoneError('מספר טלפון לא תקין. לדוגמה: 050-1234567')
    }
  }

  const handlePhoneChange = () => {
    if (phoneError) setPhoneError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const phoneVal = formRef.current.user_phone.value.trim()
    if (!validateIsraeliPhone(phoneVal)) {
      setPhoneError('מספר טלפון לא תקין. לדוגמה: 050-1234567')
      return
    }
    setStatus('loading')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      )
      setStatus('success')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }

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
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center pt-28 pb-16">
        <p className="text-orange-500 text-xs font-semibold tracking-widest mb-6">
          מאמן ריצה {' '}
          <strong className="text-white text-sm bg-gradient-to-r from-orange-500 to-red-600 px-2 py-0.5 rounded">אונליין</strong>
        </p>

        <h1 className="font-heading font-black leading-none text-white mb-4">
          <span className="block text-[clamp(2.8rem,9vw,6rem)]">ליווי אישי</span>
          <span className="block text-[clamp(2.8rem,9vw,6rem)] text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
            1 על 1
          </span>
        </h1>

        <p className="text-gray-300 text-xl md:text-2xl font-semibold mb-4 leading-snug">
          תהליך מדויק לרצים שרוצים להשתפר באמת
        </p>

        <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          תוכנית אישית שמותאמת בדיוק לחיים, ללו״ז ולמטרה שלך
        </p>

        {/* Lead form */}
        <div className="bg-[#111]/80 border border-gray-800 rounded-2xl p-8 max-w-md mx-auto backdrop-blur-sm">
          <p className="text-white font-bold text-lg mb-6">תשאירו פרטים ואחזור אליכם</p>

          {status === 'success' ? (
            <div className="text-center py-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-white font-bold text-lg mb-1">קיבלתי! אחזור אליך בקרוב.</p>
              <p className="text-gray-500 text-sm">תודה שהשארת פרטים</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <input
                name="user_name"
                type="text"
                required
                dir="rtl"
                placeholder="שם מלא"
                className="w-full bg-[#1a1a1a] border border-gray-700 hover:border-gray-600 focus:border-orange-500 text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors duration-200"
              />
              <div>
                <input
                  name="user_phone"
                  type="tel"
                  required
                  dir="rtl"
                  placeholder="טלפון"
                  onBlur={handlePhoneBlur}
                  onChange={handlePhoneChange}
                  className={`w-full bg-[#1a1a1a] border text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors duration-200 ${
                    phoneError
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-gray-700 hover:border-gray-600 focus:border-orange-500'
                  }`}
                />
                {phoneError && <p className="mt-1.5 text-red-400 text-xs text-right">{phoneError}</p>}
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">משהו השתבש. נסה שוב.</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-lg text-sm font-bold transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/25"
              >
                {status === 'loading' ? 'שולח...' : 'שלח פרטים'}
              </button>

              <p className="text-gray-600 text-xs text-center">
                אחזור לשיחת התאמה אישית (ללא התחייבות)
              </p>
            </form>
          )}
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
