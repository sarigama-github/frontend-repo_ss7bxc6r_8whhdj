import React from 'react'

const services = [
  { title: 'Routine Checkup', desc: 'Comprehensive exams and gentle cleanings for all ages.' },
  { title: 'Whitening', desc: 'Professional whitening for a brighter, confident smile.' },
  { title: 'Invisalign', desc: 'Clear aligner therapy to straighten teeth discreetly.' },
  { title: 'Crowns & Veneers', desc: 'Restore shape and color with natural-looking ceramics.' },
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-slate-900">Our services</h2>
        <p className="mt-2 text-slate-600">Quality care with modern technology and a gentle touch.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="w-10 h-10 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center font-semibold">{i+1}</div>
              <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-1 text-slate-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
