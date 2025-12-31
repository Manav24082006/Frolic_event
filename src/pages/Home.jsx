import React from 'react'

function Home() {
  return (
    <>
      <div className='min-h-screen bg-gray-50'>
        {/* Hero section */}
        <div className="relative bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmgF8uhC7o6A1vXBOf0a45bDY1CJMHbzerNg&s')] text-white py-20 h-162 w-full bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className='relative max-w-7xl mx-auto px-4 text-center z-10'>
            <h1 className='text-4xl font-bold md:text-5xl mb-6 drop-shadow-lg'>Welcome to Frolic Event Management System</h1>
            <p className='text-xl md:text-2xl font-medium mb-8 drop-shadow-md'>Simplifying event management for institutes, departments, and students.</p>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Frolic Event?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Powerful features designed for seamless event management.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-[#42047E] to-[#07F49E] rounded-2xl mb-6 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#42047E] transition-colors">Manage Events Easily</h3>
                <p className="text-gray-600 leading-relaxed">Create, update, and track events in one centralized place.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-[#42047E] to-[#07F49E] rounded-2xl mb-6 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#42047E] transition-colors">Organize Departments & Institutes</h3>
                <p className="text-gray-600 leading-relaxed">Keep all academic units connected efficiently.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-[#42047E] to-[#07F49E] rounded-2xl mb-6 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#42047E] transition-colors">Dashboard Insights</h3>
                <p className="text-gray-600 leading-relaxed">Get quick overview of all events and statistics.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-[#42047E] to-[#07F49E] rounded-2xl mb-6 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#42047E] transition-colors">User-Friendly Interface</h3>
                <p className="text-gray-600 leading-relaxed">Clean design for effortless navigation and management.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Users Say</h2>
            <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">Real feedback from our satisfied users.</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-10 rounded-3xl shadow-xl border border-gray-100">
                <p className="text-xl text-gray-700 mb-6 italic leading-relaxed">"Frolic EMS helped us organize our events seamlessly! The dashboard gives us complete control."</p>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#42047E] to-[#07F49E] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">J</span>
                  </div>
                  <div>
                    <span className="font-bold text-xl text-gray-900 block">- John Doe</span>
                    <span className="text-gray-500">Admin, XYZ Institute</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-purple-50 p-10 rounded-3xl shadow-xl border border-gray-100">
                <p className="text-xl text-gray-700 mb-6 italic leading-relaxed">"The interface is so intuitive! Students can manage events without any training."</p>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#42047E] to-[#07F49E] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">S</span>
                  </div>
                  <div>
                    <span className="font-bold text-xl text-gray-900 block">- Sarah Kim</span>
                    <span className="text-gray-500">Student Coordinator</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
