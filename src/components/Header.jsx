import React from 'react'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-sm">D</div>
          <span className="font-semibold text-slate-800 tracking-tight">SmileCraft Dental</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-700">
          <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#appointment" className="hover:text-blue-600 transition-colors">Book</a>
          <a href="#consultation" className="hover:text-blue-600 transition-colors">Consultation</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </nav>
        <a href="#appointment" className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium shadow hover:bg-blue-700 transition-colors">Book Now</a>
      </div>
    </header>
  )
}
