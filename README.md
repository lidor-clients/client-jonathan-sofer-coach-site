# יונתן סופר — אתר ויטרינה

אתר ויטרינה מודרני למאמן כושר אישי. בנוי עם React, Vite ו-Tailwind CSS. RTL מלא בעברית.

## טכנולוגיות

- **React 18** + **Vite**
- **Tailwind CSS**
- **EmailJS** — שליחת טפסי צור קשר ישירות מהדפדפן, ללא שרת

---

## התקנה והפעלה

```bash
# התקן תלויות
npm install

# הפעל שרת פיתוח
npm run dev

# בנה לפרודקשן
npm run build
```

---

## הגדרת EmailJS

1. העתק את `.env.example` לקובץ חדש בשם `.env`:
   ```bash
   cp .env.example .env
   ```

2. פתח את `.env` ומלא את הערכים:

   | משתנה | איפה מוצאים |
   |---|---|
   | `VITE_EMAILJS_SERVICE_ID` | EmailJS → Email Services → Service ID |
   | `VITE_EMAILJS_TEMPLATE_ID` | EmailJS → Email Templates → Template ID |
   | `VITE_EMAILJS_PUBLIC_KEY` | EmailJS → Account → API Keys → Public Key |

3. בתבנית ה-EmailJS, השתמש במשתנים הבאים:
   ```
   {{user_name}}   — שם מלא
   {{user_phone}}  — טלפון
   {{user_email}}  — אימייל
   {{message}}     — הודעה
   ```

> **שים לב:** קובץ `.env` מוגן ב-`.gitignore` ולעולם לא יועלה ל-Git.

---

## מבנה הפרויקט

```
src/
├── components/
│   ├── Navbar.jsx        # ניווט קבוע עם אנימציה על גלילה
│   ├── Hero.jsx          # מסך פתיחה עם CTA
│   ├── About.jsx         # קטע אודות עם הסמכות
│   ├── Services.jsx      # כרטיסי שירותים (3 שירותים)
│   ├── ContactForm.jsx   # טופס צור קשר עם EmailJS
│   └── Footer.jsx        # כותרת תחתונה
├── App.jsx
├── main.jsx
└── index.css
```

---
