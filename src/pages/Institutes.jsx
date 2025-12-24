import React from 'react'

function Institutes() {
  return (
    <>
      <div className='bg-gray-50 font-sans'>

        {/* <!-- Hero Section --> */}
  <section class="relative bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 text-white py-32 overflow-hidden">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-5xl md:text-6xl font-extrabold mb-6">Welcome to Frolic EMS Institute</h2>
      <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Your central hub for organizing, coordinating, and experiencing all college events and student activities efficiently.</p>
      <a href="#mission" class="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition transform">Learn About Us</a>
    </div>

    <div class="absolute -bottom-20 -left-20 w-60 h-60 bg-pink-300 rounded-full opacity-50 animate-pulse"></div>
    <div class="absolute -top-16 -right-16 w-72 h-72 bg-indigo-300 rounded-full opacity-50 animate-pulse delay-200"></div>
  </section>

  {/* <!-- About Frolic Institute --> */}
  <section id="about" class="container mx-auto py-24 px-6">
    <h3 class="text-4xl font-bold text-center mb-12">About Frolic Institute</h3>
    <div class="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-6">
      <p>Frolic EMS Institute is the official platform for managing all campus events, activities, and student programs. It connects departments, students, and administration to ensure smooth coordination and successful events.</p>
      <p>Our institute emphasizes innovation, collaboration, and active participation, providing every department with tools to organize events seamlessly and make them impactful.</p>
      <p>We aim to create a vibrant campus life where students can explore their talents, contribute creatively, and engage in organized events that enrich the academic environment.</p>
    </div>
  </section>

  {/* <!-- Mission & Vision --> */}
  <section id="mission" class="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 py-24">
    <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div class="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center">
        <i class="fas fa-bullseye text-indigo-600 text-4xl mb-4"></i>
        <h4 class="text-3xl font-semibold mb-4">Our Mission</h4>
        <p class="text-gray-700">To provide a centralized, efficient platform for organizing campus events and fostering collaboration, creativity, and participation among students and departments.</p>
      </div>
      <div class="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center">
        <i class="fas fa-eye text-purple-600 text-4xl mb-4"></i>
        <h4 class="text-3xl font-semibold mb-4">Our Vision</h4>
        <p class="text-gray-700">To be the leading institute for organized and memorable campus experiences, empowering students and departments to execute events flawlessly.</p>
      </div>
    </div>
  </section>

 {/* <!-- Departments & Roles --> */}
<section id="departments" class="container mx-auto py-24 px-6">
  <h3 class="text-4xl font-bold text-center mb-12">Departments & Their Responsibilities</h3>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-10">    <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105 text-center">
      <i class="fas fa-laptop-code text-pink-500 text-4xl mb-4"></i>
      <h4 class="text-2xl font-semibold mb-2">Computer Science</h4>
      <p class="text-gray-600 mb-4">Manages the Frolic platform, online registration, and technical support for events.</p>
      <a href="#cs-members" class="inline-block bg-indigo-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-indigo-700 transition">View Members</a>
    </div>
    <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105 text-center">
      <i class="fas fa-cogs text-indigo-500 text-4xl mb-4"></i>
      <h4 class="text-2xl font-semibold mb-2">Mechanical Engineering</h4>
      <p class="text-gray-600 mb-4">Responsible for stage setups, equipment arrangement, and logistical support for all events.</p>
      <a href="#mech-members" class="inline-block bg-indigo-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-indigo-700 transition">View Members</a>
    </div>


    <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105 text-center">
      <i class="fas fa-hand-holding-usd text-purple-500 text-4xl mb-4"></i>
      <h4 class="text-2xl font-semibold mb-2">Business Administration</h4>
      <p class="text-gray-600 mb-4">Handles promotions, sponsorships, budgets, and coordination with vendors for smooth operations.</p>
      <a href="#ba-members" class="inline-block bg-indigo-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-indigo-700 transition">View Members</a>
    </div>
  </div>
</section>


  {/* <!-- Facilities --> */}
  <section id="facilities" class="bg-indigo-50 py-24">
    <div class="container mx-auto px-6">
      <h3 class="text-4xl font-bold text-center mb-12">Facilities Offered by Frolic</h3>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105 text-center">
          <i class="fas fa-building text-pink-500 text-4xl mb-4"></i>
          <h4 class="text-xl font-semibold mb-2">Event Halls</h4>
          <p class="text-gray-600">Equipped halls for workshops, seminars, and cultural programs.</p>
        </div>
        <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105 text-center">
          <i class="fas fa-volume-up text-indigo-500 text-4xl mb-4"></i>
          <h4 class="text-xl font-semibold mb-2">Audio & Visual Setup</h4>
          <p class="text-gray-600">High-quality sound systems, projectors, and screens for smooth events.</p>
        </div>
        <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105 text-center">
          <i class="fas fa-user-check text-purple-500 text-4xl mb-4"></i>
          <h4 class="text-xl font-semibold mb-2">Online Registration</h4>
          <p class="text-gray-600">Efficient digital registration for all participants and attendees.</p>
        </div>
        <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105 text-center">
          <i class="fas fa-utensils text-pink-500 text-4xl mb-4"></i>
          <h4 class="text-xl font-semibold mb-2">Catering & Refreshments</h4>
          <p class="text-gray-600">Managed catering services for events and student programs.</p>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- Event Statistics --> */}
  <section id="stats" class="bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 py-24">
    <div class="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
      <div class="transition transform hover:scale-110">
        <h4 class="text-4xl font-bold">50+</h4>
        <p>Events Managed</p>
      </div>
      <div class="transition transform hover:scale-110">
        <h4 class="text-4xl font-bold">10+</h4>
        <p>Departments Involved</p>
      </div>
      <div class="transition transform hover:scale-110">
        <h4 class="text-4xl font-bold">5000+</h4>
        <p>Participants</p>
      </div>
      <div class="transition transform hover:scale-110">
        <h4 class="text-4xl font-bold">100%</h4>
        <p>Event Success Rate</p>
      </div>
    </div>
  </section>

  {/* <!-- Contact --> */}
  <section id="contact" class="container mx-auto py-24 px-6 text-center">
    <h3 class="text-4xl font-bold mb-6">Contact Us</h3>
    <p class="text-gray-700 mb-4">123 College Avenue, City, State</p>
    <p class="text-gray-700 mb-2">Email: info@frolic.edu</p>
    <p class="text-gray-700">Phone: +1 234 567 890</p>
  </section>

      </div>
    </>
  )
}

export default Institutes
