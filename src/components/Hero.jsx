import React from 'react'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="absolute -top-32 -right-24 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">Gentle, modern dental care</h1>
          <p className="mt-4 text-slate-600 text-lg">From routine cleanings to cosmetic dentistry, our team delivers comfortable care in a calm, welcoming space.</p>
          <div className="mt-8 flex gap-3">
            <a href="#appointment" className="px-5 py-3 rounded-full bg-blue-600 text-white font-medium shadow hover:bg-blue-700">Book an appointment</a>
            <a href="#consultation" className="px-5 py-3 rounded-full bg-white text-slate-700 border border-slate-200 hover:border-slate-300 shadow-sm">Free consultation</a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
            <div className="flex -space-x-2">
              <img src="https://i.pravatar.cc/40?img=1" className="w-8 h-8 rounded-full border-2 border-white" />
              <img src="https://i.pravatar.cc/40?img=2" className="w-8 h-8 rounded-full border-2 border-white" />
              <img src="https://i.pravatar.cc/40?img=3" className="w-8 h-8 rounded-full border-2 border-white" />
            </div>
            <span>1,200+ happy smiles this year</span>
          </div>
        </div>
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop" alt="Dental clinic" className="rounded-3xl shadow-2xl border border-slate-200" />
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg border border-slate-200">
            <p className="text-slate-700 text-sm"><span className="font-semibold">Open Mon–Sat</span><br/> Early morning and evening slots</p>
          </div>
        </div>
      </div>
    </section>
  )
}
