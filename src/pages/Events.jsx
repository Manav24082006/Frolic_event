import React from "react";

function Events() {
  return (
    <>
      <div className="bg-gradient-to-br h-full from-purple-900 via-blue-900 to-indigo-900 min-h-screen text-white">
        {/* <!-- Hero Section --> */}
    <section id="home" class="pt-24 pb-20 text-center">
        <div class="max-w-4xl mx-auto px-6">
            <h2 class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Magical Event Experiences
            </h2>
            <p class="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
                Create unforgettable moments with Frolic. From grand galas to intimate gatherings, we make every event extraordinary.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="#create" class="bg-gradient-to-r from-yellow-500 to-pink-500 hover:from-yellow-400 hover:to-pink-400 text-lg font-bold px-12 py-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300">
                    Create Event Now
                </a>
                <a href="#events" class="border-2 border-white/30 hover:border-yellow-400 text-lg font-bold px-12 py-4 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    View Events
                </a>
            </div>
        </div>
    </section>

 {/* <!-- Upcoming Events --> */}
<section id="events" class="py-24 bg-white/5 backdrop-blur-md">
    <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-20">
            <h3 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
                Upcoming Events
            </h3>
            <p class="text-xl opacity-90 max-w-2xl mx-auto">
                Discover our magical events waiting for you
            </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Singing Night Card--> */}
            <div class="card-purple relative p-8 rounded-3xl border border-white/20 hover:scale-105 hover:shadow-3xl transition-all duration-500 group bg-gradient-to-br from-purple-500/80 to-pink-400/80 hover:from-purple-400 hover:to-pink-300">
                <h4 class="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">Singing Night</h4>
                <p class="text-lg opacity-90 mb-4">Live vocal performances with guest artists</p>
                <div class="flex items-center justify-between mb-6">
                    <span class="bg-yellow-500 text-xs px-3 py-1 rounded-full font-bold">Dec 28</span>
                    <span class="text-2xl font-bold text-yellow-400">180 spots</span>
                </div>
                <button class="w-full bg-gradient-to-r from-yellow-500 to-pink-500 hover:from-yellow-400 hover:to-pink-400 font-bold py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    Book Now
                </button>
            </div>

            {/* <!-- Comedy Show Card--> */}
            <div class="card-green relative p-8 rounded-3xl border border-white/20 hover:scale-105 hover:shadow-3xl transition-all duration-500 group bg-gradient-to-br from-emerald-500/80 to-yellow-400/80 hover:from-emerald-400 hover:to-yellow-300">
                <h4 class="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">Comedy Show</h4>
                <p class="text-lg opacity-90 mb-4">Laugh-out-loud stand-up with top comedians</p>
                <div class="flex items-center justify-between mb-6">
                    <span class="bg-yellow-500 text-xs px-3 py-1 rounded-full font-bold">Jan 5</span>
                    <span class="text-2xl font-bold text-yellow-400">300 spots</span>
                </div>
                <button class="w-full bg-gradient-to-r from-yellow-500 to-pink-500 hover:from-yellow-400 hover:to-pink-400 font-bold py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    Book Now
                </button>
            </div>

            {/* <!-- Quiz Night Card --> */}
            <div class="card-blue relative p-8 rounded-3xl border border-white/20 hover:scale-105 hover:shadow-3xl transition-all duration-500 group bg-gradient-to-br from-blue-500/80 to-indigo-400/80 hover:from-blue-400 hover:to-indigo-300">
                <h4 class="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">Quiz Night</h4>
                <p class="text-lg opacity-90 mb-4">Test your knowledge with trivia masters</p>
                <div class="flex items-center justify-between mb-6">
                    <span class="bg-yellow-500 text-xs px-3 py-1 rounded-full font-bold">Jan 12</span>
                    <span class="text-2xl font-bold text-yellow-400">120 spots</span>
                </div>
                <button class="w-full bg-gradient-to-r from-yellow-500 to-pink-500 hover:from-yellow-400 hover:to-pink-400 font-bold py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    Book Now
                </button>
            </div>

            {/* <!-- Dance Battle Card  */}
            <div class="card-pink relative p-8 rounded-3xl border border-white/20 hover:scale-105 hover:shadow-3xl transition-all duration-500 group bg-gradient-to-br from-pink-500/80 to-rose-400/80 hover:from-pink-400 hover:to-rose-300">
                <h4 class="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">Dance Battle</h4>
                <p class="text-lg opacity-90 mb-4">Epic dance competition with live DJ</p>
                <div class="flex items-center justify-between mb-6">
                    <span class="bg-yellow-500 text-xs px-3 py-1 rounded-full font-bold">Jan 18</span>
                    <span class="text-2xl font-bold text-yellow-400">200 spots</span>
                </div>
                <button class="w-full bg-gradient-to-r from-yellow-500 to-pink-500 hover:from-yellow-400 hover:to-pink-400 font-bold py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    Book Now
                </button>
            </div>

            {/* <!-- Magic Show Card --> */}
            <div class="card-magic relative p-8 rounded-3xl border border-white/20 hover:scale-105 hover:shadow-3xl transition-all duration-500 group bg-gradient-to-br from-indigo-500/80 to-purple-400/80 hover:from-indigo-400 hover:to-purple-300">
                <h4 class="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">Magic Show</h4>
                <p class="text-lg opacity-90 mb-4">Mind-blowing illusions and close-up magic</p>
                <div class="flex items-center justify-between mb-6">
                    <span class="bg-yellow-500 text-xs px-3 py-1 rounded-full font-bold">Jan 25</span>
                    <span class="text-2xl font-bold text-yellow-400">150 spots</span>
                </div>
                <button class="w-full bg-gradient-to-r from-yellow-500 to-pink-500 hover:from-yellow-400 hover:to-pink-400 font-bold py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    Book Now
                </button>
            </div>
        </div>
    </div>
</section>


    {/* <!-- Create Event --> */}
    <section id="create" class="py-24">
        <div class="max-w-4xl mx-auto px-6">
            <div class="text-center mb-20">
                <h3 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
                    Create Your Event
                </h3>
                <p class="text-xl opacity-90">Plan your dream event with our intuitive creator</p>
            </div>

            <div class="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
                <form class="grid md:grid-cols-2 gap-8">
                    <div>
                        <label class="block text-lg font-semibold mb-3">Event Name</label>
                        <input type="text" placeholder="e.g. Summer Music Festival" 
                               class="w-full p-5 rounded-2xl bg-white/20 border border-white/30 focus:border-yellow-400 focus:outline-none text-white placeholder-white/70 transition-all duration-300"/>
                    </div>
                    <div>
                        <label class="block text-lg font-semibold mb-3">Event Date</label>
                        <input type="date" class="w-full p-5 rounded-2xl bg-white/20 border border-white/30 focus:border-yellow-400 focus:outline-none text-white transition-all duration-300"/>
                    </div>
                    <div>
                        <label class="block text-lg font-semibold mb-3">Venue</label>
                        <input type="text" placeholder="e.g. Central Park" 
                               class="w-full p-5 rounded-2xl bg-white/20 border border-white/30 focus:border-yellow-400 focus:outline-none text-white placeholder-white/70 transition-all duration-300"/>
                    </div>
                    <div>
                        <label class="block text-lg font-semibold mb-3">Capacity</label>
                        <input type="number" placeholder="500" 
                               class="w-full p-5 rounded-2xl bg-white/20 border border-white/30 focus:border-yellow-400 focus:outline-none text-white placeholder-white/70 transition-all duration-300"/>
                    </div>
                    <div class="md:col-span-2">
                        <label class="block text-lg font-semibold mb-3">Event Description</label>
                        <textarea rows="4" placeholder="Tell us about your amazing event..." 
                                  class="w-full p-5 rounded-2xl bg-white/20 border border-white/30 focus:border-yellow-400 focus:outline-none text-white placeholder-white/70 resize-vertical transition-all duration-300"></textarea>
                    </div>
                    <div class="md:col-span-2">
                        <button type="submit" 
                                class="w-full bg-gradient-to-r from-yellow-500 to-pink-500 hover:from-yellow-400 hover:to-pink-400 text-xl font-bold py-6 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300">
                            <i class="fas fa-rocket mr-3"></i>Launch Your Event
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>

    {/* <!-- Stats Section --> */}
    <section class="py-20 bg-gradient-to-r from-purple-800 to-blue-900">
        <div class="max-w-6xl mx-auto px-6">
            <div class="grid md:grid-cols-4 gap-8 text-center">
                <div>
                    <div class="text-4xl md:text-5xl font-bold text-yellow-400 mb-3">500+</div>
                    <div class="text-xl opacity-90">Events Hosted</div>
                </div>
                <div>
                    <div class="text-4xl md:text-5xl font-bold text-yellow-400 mb-3">25K+</div>
                    <div class="text-xl opacity-90">Happy Attendees</div>
                </div>
                <div>
                    <div class="text-4xl md:text-5xl font-bold text-yellow-400 mb-3">98%</div>
                    <div class="text-xl opacity-90">Success Rate</div>
                </div>
                <div>
                    <div class="text-4xl md:text-5xl font-bold text-yellow-400 mb-3">50+</div>
                    <div class="text-xl opacity-90">Venues Covered</div>
                </div>
            </div>
        </div>
    </section>
      </div>
    </>
  );
}

export default Events;
