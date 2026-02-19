import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
