import { useEffect, useState } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'

interface Job {
  id: string
  title: string
  department: string
  location: string
  description: string
}

export default function CareersSection() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, 'jobs'),
      snapshot => {
        setJobs(snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Job)))
        setLoading(false)
        setError('')
      },
      err => {
        console.error('Firestore error:', err)
        setError(err.message)
        setLoading(false)
      }
    )
    return unsub
  }, [])

  return (
    <section id="careers" className="py-20 bg-gray-50">
      <div className="w-full px-10">
        <h2 className="font-heading font-bold text-charcoal text-3xl md:text-4xl uppercase tracking-wide mb-2">
          Careers
        </h2>
        <div className="w-16 h-1 bg-gold mb-6" />
        <p className="text-gray-600 text-base leading-relaxed max-w-3xl mb-10">
          Join a team that    innovation, professionalism, and excellence.
          We are always looking for talented engineers, project managers, and
          specialists to grow with us.
        </p>

        {loading ? (
          <p className="text-gray-400 text-sm">Loading positions…</p>
        ) : error ? (
          <p className="text-red-400 text-sm">Error: {error}</p>
        ) : jobs.length === 0 ? (
          <p className="text-gray-400 text-sm">No open positions at the moment. Check back soon.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map(job => (
              <div key={job.id} className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-heading font-bold text-charcoal text-lg leading-snug">{job.title}</h3>
                <div className="flex gap-2 flex-wrap">
                  {job.department && (
                    <span className="text-xs bg-gold/10 text-gold font-semibold px-2.5 py-0.5 rounded-full">{job.department}</span>
                  )}
                  {job.location && (
                    <span className="text-xs bg-gray-100 text-gray-600 font-medium px-2.5 py-0.5 rounded-full">{job.location}</span>
                  )}
                </div>
                {job.description && (
                  <p className="text-gray-500 text-sm leading-relaxed">{job.description}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
