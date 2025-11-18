import React, { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export function AppointmentForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: 'Routine Checkup', appointment_date: '', time_slot: '', notes: ''
  })
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  async function submit(e) {
    e.preventDefault()
    setStatus({ state: 'loading', message: 'Booking your appointment...' })
    try {
      const res = await fetch(`${API_BASE}/api/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to book')
      setStatus({ state: 'success', message: 'Thanks! We will confirm shortly via email.' })
      setForm({ name: '', email: '', phone: '', service: 'Routine Checkup', appointment_date: '', time_slot: '', notes: '' })
    } catch (err) {
      setStatus({ state: 'error', message: 'Something went wrong. Please try again.' })
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input className="input" placeholder="Full name" name="name" value={form.name} onChange={onChange} required />
        <input className="input" placeholder="Email" name="email" type="email" value={form.email} onChange={onChange} required />
        <input className="input" placeholder="Phone" name="phone" value={form.phone} onChange={onChange} required />
        <select className="input" name="service" value={form.service} onChange={onChange}>
          <option>Routine Checkup</option>
          <option>Whitening</option>
          <option>Invisalign</option>
          <option>Crowns & Veneers</option>
        </select>
        <input className="input" placeholder="Preferred date" name="appointment_date" type="date" value={form.appointment_date} onChange={onChange} required />
        <input className="input" placeholder="Time slot" name="time_slot" value={form.time_slot} onChange={onChange} required />
      </div>
      <textarea className="input" rows={4} placeholder="Notes (optional)" name="notes" value={form.notes} onChange={onChange} />
      <button className="btn-primary w-full" disabled={status.state==='loading'}>
        {status.state==='loading' ? 'Submitting...' : 'Book appointment'}
      </button>
      {status.state!=='idle' && (
        <p className={`${status.state==='success' ? 'text-green-600' : status.state==='error' ? 'text-red-600' : 'text-slate-600'} text-sm`}>{status.message}</p>
      )}
    </form>
  )
}

export function ConsultationForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', preferred_date: '' })
  const [status, setStatus] = useState({ state: 'idle', message: '' })
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  async function submit(e) {
    e.preventDefault()
    setStatus({ state: 'loading', message: 'Sending your request...' })
    try {
      const res = await fetch(`${API_BASE}/api/consultations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus({ state: 'success', message: 'Thanks! We will reach out shortly.' })
      setForm({ name: '', email: '', phone: '', message: '', preferred_date: '' })
    } catch (err) {
      setStatus({ state: 'error', message: 'Something went wrong. Please try again.' })
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input className="input" placeholder="Full name" name="name" value={form.name} onChange={onChange} required />
        <input className="input" placeholder="Email" name="email" type="email" value={form.email} onChange={onChange} required />
        <input className="input sm:col-span-2" placeholder="Phone (optional)" name="phone" value={form.phone} onChange={onChange} />
        <input className="input" placeholder="Preferred date (optional)" name="preferred_date" type="date" value={form.preferred_date} onChange={onChange} />
      </div>
      <textarea className="input" rows={4} placeholder="What would you like to discuss?" name="message" value={form.message} onChange={onChange} required />
      <button className="btn-primary w-full" disabled={status.state==='loading'}>
        {status.state==='loading' ? 'Submitting...' : 'Request consultation'}
      </button>
      {status.state!=='idle' && (
        <p className={`${status.state==='success' ? 'text-green-600' : status.state==='error' ? 'text-red-600' : 'text-slate-600'} text-sm`}>{status.message}</p>
      )}
    </form>
  )
}
