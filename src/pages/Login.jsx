import React from 'react'

function Login() {
  return (
    <>
        <div>
            <div className="grid grid-cols-2 min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Login</h2>
          <p className="text-gray-500 mt-2">If you have an account, please login</p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email Address</label>
            <input 
              type="email" 
              placeholder="Enter Email Address" 
              className="w-full px-4 py-3 rounded-lg bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input 
              type="password" 
              placeholder="Enter Password" 
              className="w-full px-4 py-3 rounded-lg bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            />
            <div className="text-right mt-2">
              <a href="#" className="text-sm text-gray-600 hover:underline font-semibold">Forgot Password?</a>
            </div>
          </div>

          <button className="w-full bg-[#00AEEF] text-white font-bold py-3 rounded-lg hover:bg-blue-500 transition duration-300">
            Log In
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Login */}
        <button className="w-full border border-gray-300 flex items-center justify-center py-3 rounded-lg bg-white hover:bg-gray-50 transition">
          <img 
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
            alt="Google" 
            className="w-5 h-5 mr-2" 
          />
          <span className="text-gray-600 font-medium">Login with Google</span>
        </button>

        {/* Register Link */}
        <div className="flex items-center justify-between pt-4">
          <p className="text-sm text-gray-600">If you don't have an account...</p>
          <button className="px-6 py-2 border-2 border-[#00AEEF] text-[#00AEEF] rounded-xl font-bold hover:bg-blue-50 transition">
            Register
          </button>
        </div>
      </div>
        <div className='border-2'>
            <img className='w-full' src='https://img.freepik.com/free-psd/carnival-celebration-landing-page_23-2151149984.jpg?semt=ais_hybrid&w=740&q=80'/>
        </div>
    </div>
    </div>
    </>
  )
}

export default Login







//  <div className="min-h-screen bg-cover bg-center flex justify-center items-center p-6"
//       style={{
//         backgroundImage:
//           "url('//img.freepik.com/free-psd/carnival-celebration-landing-page_23-2151149984.jpg?semt=ais_hybrid&w=740&q=80')",
//       }}
//     >
//       {/* Glassmorphism Card */}
//       <div className="backdrop-blur-md bg-white/25 border border-white/40 rounded-xl shadow-2xl max-w-4xl w-full p-10 text-black">
//         <h1 className="text-3xl font-bold mb-4">Login</h1>
//         <p className="mb-6 text-gray-700">If you have an account, please login</p>

//         <form className="space-y-4">
//           <div>
//             <label htmlFor="email" className="block mb-1 font-medium">
//               Email Address
//             </label>
//             <input
//               id="email"
//               type="email"
//               placeholder="Enter Email Address"
//               className="w-full rounded-md border border-gray-300 p-2"
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block mb-1 font-medium">
//               Password
//             </label>
//             <input
//               id="password"
//               type="password"
//               placeholder="Enter Password"
//               className="w-full rounded-md border border-gray-300 p-2"
//             />
//           </div>
//           <div className="text-right text-sm text-blue-600 hover:underline cursor-pointer">
//             Forgot Password?
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition"
//           >
//             Log In
//           </button>
//         </form>

//         <div className="mt-6 text-center text-gray-600">OR</div>

//         <button className="mt-6 w-full border border-gray-400 rounded-md py-3 flex items-center justify-center gap-2 text-gray-700 hover:bg-gray-100 transition">
//           <img
//             src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
//             alt="Google"
//             className="w-5 h-5"
//           />
//           Login with Google
//         </button>

//         <div className="mt-6 text-center text-gray-600">
//           If you don't have an account...{" "}
//           <a href="#" className="text-blue-600 hover:underline font-semibold">
//             Register
//           </a>
//         </div>
//       </div>
//     </div>