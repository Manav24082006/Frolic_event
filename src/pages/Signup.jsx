import React from 'react'

function Signup() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#42047E]/10 via-white to-[#07F49E]/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Background */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#42047E]/20 to-[#07F49E]/20 rounded-3xl blur-xl -z-10"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Visual Hero (Layout Style) */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-[#42047E] to-[#07F49E] rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="text-white text-center">
                  <div className="w-28 h-28 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h1 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent leading-tight">
                    Join Frolic
                  </h1>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed opacity-90">
                    Create your account and start managing events for institutes seamlessly.
                  </p>
                  <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
                    <div className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-semibold">500+ Institutes</span>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="font-semibold">Real-time Tracking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Signup Form (Layout Style) */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 max-w-md w-full mx-auto">
              {/* Header */}
              <div className="text-center mb-10">
                <div className="w-20 h-20 bg-gradient-to-r from-[#42047E] to-[#07F49E] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-black text-white">F</span>
                </div>
                <h2 className="text-4xl font-black text-gray-900 mb-3">Create Account</h2>
                <p className="text-gray-600 text-lg">Join thousands of event organizers</p>
              </div>

              {/* Form */}
              <form className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:border-[#42047E] focus:ring-2 focus:ring-[#42047E]/20 focus:bg-white transition-all duration-200 hover:shadow-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:border-[#42047E] focus:ring-2 focus:ring-[#42047E]/20 focus:bg-white transition-all duration-200 hover:shadow-md"
                      required
                    />
                  </div>
                </div>

                {/* Email & Institute */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:border-[#07F49E] focus:ring-2 focus:ring-[#07F49E]/20 focus:bg-white transition-all duration-200 hover:shadow-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Institute/College</label>
                    <input
                      type="text"
                      name="institute"
                      placeholder="e.g., XYZ University"
                      className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:border-[#07F49E] focus:ring-2 focus:ring-[#07F49E]/20 focus:bg-white transition-all duration-200 hover:shadow-md"
                    />
                  </div>
                </div>

                {/* Password Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="••••••••"
                      className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:border-[#42047E] focus:ring-2 focus:ring-[#42047E]/20 focus:bg-white transition-all duration-200 hover:shadow-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="••••••••"
                      className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:border-[#42047E] focus:ring-2 focus:ring-[#42047E]/20 focus:bg-white transition-all duration-200 hover:shadow-md"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#42047E] to-[#07F49E] text-white font-bold py-4 px-6 rounded-2xl text-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 transform"
                >
                  Create Account
                </button>
              </form>

              {/* Divider */}
              <div className="relative flex py-8 items-center">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink mx-6 text-gray-400 font-medium">OR</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>

              {/* Google Signup */}
              <button className="w-full border-2 border-gray-200 flex items-center justify-center py-4 px-6 rounded-2xl bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 hover:shadow-lg">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 font-medium">Continue with Google</span>
              </button>

              {/* Login Text */}
              <p className="text-center text-sm text-gray-600 pt-8">
                Already have an account?{' '}
                <span className="font-bold text-[#42047E] hover:text-[#07F49E] transition-colors duration-200 cursor-pointer">
                  Sign in here
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup
