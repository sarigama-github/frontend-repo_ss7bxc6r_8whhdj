import React from 'react'
import { AppointmentForm, ConsultationForm } from './Forms'

export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50" id="appointment">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-start">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h3 className="text-xl font-semibold text-slate-900">Book an appointment</h3>
          <p className="text-slate-600 text-sm mt-1">Pick a date and time that works best for you.</p>
          <div className="mt-6">
            <AppointmentForm />
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200" id="consultation">
          <h3 className="text-xl font-semibold text-slate-900">Free consultation</h3>
          <p className="text-slate-600 text-sm mt-1">Have questions? Tell us a bit and we’ll guide you.</p>
          <div className="mt-6">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  )
}
