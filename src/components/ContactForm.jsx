import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

// Validates Israeli phone numbers (mobile & landline, with or without country code)
// Accepts formats: 050-1234567 / 050 1234567 / 0501234567 / +972501234567 / 972501234567
function validateIsraeliPhone(raw) {
  const phone = raw.replace(/[\s\-()]/g, '') // strip spaces, dashes, parens
  return /^(\+972|972|0)(5\d{8}|[2-9]\d{7})$/.test(phone)
}

export default function ContactForm() {
  const formRef = useRef()
  const [status, setStatus] = useState('idle') // idle | loading | success | error
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

    // Re-validate phone before sending
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
    <section id="contact" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 text-xs font-semibold tracking-widest mb-4">
            בואו נדבר
          </p>
          <h2 className="font-heading font-black text-[clamp(3rem,8vw,6rem)] leading-none text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              השאר
            </span>{' '}
            פרטים
          </h2>
          <p className="text-gray-500 mt-5 text-sm leading-relaxed">
            השאר את הפרטים שלך ואחזור אליך בהקדם לתיאום פגישת היכרות חינמית.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-8 md:p-12">
          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-2xl mb-2">ההודעה נשלחה!</h3>
              <p className="text-gray-400 text-sm">אחזור אליך בהקדם האפשרי. תודה!</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-8 text-orange-500 hover:text-orange-400 text-sm font-semibold transition-colors"
              >
                שלח הודעה נוספת
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Phone row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 text-sm mb-2" htmlFor="user_name">
                    שם מלא *
                  </label>
                  <input
                    id="user_name"
                    name="user_name"
                    type="text"
                    required
                    placeholder="ישראל ישראלי"
                    className="w-full bg-[#1a1a1a] border border-gray-700 hover:border-gray-600 focus:border-orange-500 text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2" htmlFor="user_phone">
                    טלפון *
                  </label>
                  <input
                    id="user_phone"
                    name="user_phone"
                    type="tel"
                    required
                    placeholder="050-0000000"
                    onBlur={handlePhoneBlur}
                    onChange={handlePhoneChange}
                    className={`w-full bg-[#1a1a1a] border text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors duration-200 ${
                      phoneError
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-700 hover:border-gray-600 focus:border-orange-500'
                    }`}
                  />
                  {phoneError && (
                    <p className="mt-1.5 text-red-400 text-xs">{phoneError}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-400 text-sm mb-2" htmlFor="user_email">
                  אימייל *
                </label>
                <input
                  id="user_email"
                  name="user_email"
                  type="email"
                  required
                  placeholder="israel@example.com"
                  className="w-full bg-[#1a1a1a] border border-gray-700 hover:border-gray-600 focus:border-orange-500 text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors duration-200"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-400 text-sm mb-2" htmlFor="message">
                  הודעה (אופציונלי)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="ספר לי על המטרות שלך, רמת הכושר הנוכחית שלך, או כל דבר אחר שתרצה לשתף..."
                  className="w-full bg-[#1a1a1a] border border-gray-700 hover:border-gray-600 focus:border-orange-500 text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors duration-200 resize-none"
                />
              </div>

              {/* Error */}
              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">
                  משהו השתבש. נסה שוב או צור קשר ישירות.
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-lg text-sm font-bold transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/25"
              >
                {status === 'loading' ? 'שולח...' : 'שלח פרטים'}
              </button>

              <p className="text-gray-600 text-xs text-center">
                הפרטים שלך מוגנים ולא יועברו לצד שלישי.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
