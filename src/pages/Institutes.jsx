import React, { useState } from 'react'

const Institutes = () => {
  const [projects]=useState([
    {
      campus:'Innovatech University',
      program:'RoboFest 2025',
      scope:"Robotics challenge & coding Hackathon",
      reach:'3500+',
      revenue:'₹8.2cr',
      timeline:'Feb 8-12',
      status:'planning'
    },
    {
      campus:'Harmony Arts College',
      program:'Rythm & Beats',
      scope:"Dance competition and Live Music Nights",
      reach:'2000+',
      revenue:'₹4.5cr',
      timeline:'Jan 22-25',
      status:'Ongoing'
    },
    {
      campus:'Summit Business Academy',
      program:'Laugh and Lead Summit',
      scope:"Comedy night and Open Mic performance",
      reach:'800+',
      revenue:'₹6.8cr',
      timeline:'March 5-6',
      status:'Confirmed'
    },
    {
      campus:'Starlight Arts Academy',
      program:'Glow Fest 2025',
      scope:"Talent Show",
      reach:'1200+',
      revenue:'₹7.5cr',
      timeline:'April 10-12',
      status:'Completed'
    },
  ])
  return (
    <>
      <div className="bg-gradient-to-br from-emerald-50 via-white to-cyan-50 min-h-screen font-sans">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Hero section */}

        <div className='text-center mb-16'>
          <div className='inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 rounded-full mb-6 shadow-xl'>
            <svg className='w-6 h-6 text-white'  fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
            </svg>
            <h1 className='text-2xl font-bold text-white drop-shadow-lg'>Frolic Institute Collabrations </h1>
          </div>
          <p className='text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed'>Track Frolic's partnership with premier institutes for cultural fest,tech symposiums, and campus events.</p>
        </div>


      {/* stats and action */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
            <div className='bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-emerald-100'>
              <div className='text-3xl font-bold text-emerald-600'>4</div>
              <div className='text-gray-600 font-medium'>Institute partner</div>
            </div>

            <div className='bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-cyan-100'>
              <div className='text-3xl font-bold text-cyan-600'>7500+</div>
              <div className='text-gray-600 font-medium'>Total participants</div>
            </div>

            <div className='bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-purple-100 flex items-center justify-between'>
              <div>
                <div className='text-3xl font-bold text-purple-600'>₹28Cr</div>
                <div className='text-gray-600 font-medium'>Event Revenue</div>
            </div>
            {/* svg */}
            <div className='w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center'>
              <svg className='w-6 h-6 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
              </svg>
              </div>
            </div>
          </div>


        {/* Main table */}

         <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="px-8 py-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Frolic Partnerships</h2>
              <p className="text-gray-500">Manage institute collaborations and track event progress</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <select className="w-full sm:w-48 px-4 py-2.5 bg-white border border-gray-200 rounded-2xl text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:border-transparent shadow-sm appearance-none">
                  <option>All Status</option>
                  <option>Planning</option>
                  <option>Ongoing</option>
                  <option>Confirmed</option>
                  <option>Completed</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
              <button className="px-8 py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-2xl shadow-lg hover:from-emerald-600 hover:to-cyan-600 transition-all duration-200 transform hover:-translate-y-0.5">
                + New Partnership
              </button>
            </div>
          </div>

          {/* Data Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
                  <th className="px-6 py-5 text-left text-xs font-bold text-gray-700 uppercase tracking-wider w-32 max-w-32">Institute</th>
                  <th className="px-8 py-5 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Event Type</th>
                  <th className="px-8 py-5 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Frolic Role</th>
                  <th className="px-8 py-5 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Participants</th>
                  <th className="px-8 py-5 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Revenue</th>
                  <th className="px-8 py-5 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Timeline</th>
                  <th className="px-6 py-5 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {projects.map((project, index) => (
                  <tr key={index} className={`hover:bg-emerald-50/50 transition-colors duration-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="px-6 py-6 font-semibold text-gray-900 group-hover:text-emerald-700">
                      {project.campus}
                      <div className="text-xs text-gray-500 font-normal mt-1"></div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="font-medium text-gray-900">{project.program}</div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="text-sm text-gray-700 max-w-xs">{project.scope}</div>
                    </td>
                    <td className="px-8 py-6 font-mono text-sm text-emerald-700 font-semibold">{project.reach}</td>
                    <td className="px-8 py-6">
                      <div className="font-bold text-purple-600 text-lg">{project.revenue}</div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-800 font-medium">{project.timeline}</span>
                    </td>
                    <td className="px-6 py-6 text-right flex gap-1 justify-end">
                      <button className="p-2 text-emerald-600 hover:bg-emerald-100 rounded-lg transition-all group-hover:scale-105 flex-shrink-0" title="View">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                      </button>
                      <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-all group-hover:scale-105 flex-shrink-0" title="Edit">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        </svg>
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-all group-hover:scale-105 flex-shrink-0" title="Delete">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        </div>
      </div>
    </>
  )
}

export default Institutes
