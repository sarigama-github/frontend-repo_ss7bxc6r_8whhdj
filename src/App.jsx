import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import CTA from './components/CTA'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header />
      <main>
        <Hero />
        <Services />
        <CTA />
        <footer id="contact" className="py-12 bg-white border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-6 text-sm text-slate-600">
            <div>
              <h4 className="font-semibold text-slate-900">SmileCraft Dental</h4>
              <p className="mt-2">123 Main Street, Suite 200<br/>Your City, ST 12345</p>
              <p className="mt-2">(555) 123-4567</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">Hours</h4>
              <p className="mt-2">Mon–Fri: 8:00am – 6:00pm<br/>Sat: 9:00am – 2:00pm</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">Stay in touch</h4>
              <p className="mt-2">Email: hello@smilecraft.example</p>
            </div>
          </div>
          <p className="text-center text-xs text-slate-500 mt-8">© {new Date().getFullYear()} SmileCraft Dental. All rights reserved.</p>
        </footer>
      </main>

      <style>{`
        .input { @apply w-full px-3 py-2 rounded-xl border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500; }
        .btn-primary { @apply inline-flex items-center justify-center px-4 py-2 rounded-xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition-colors; }
      `}</style>
    </div>
  )
}

export default App
