import React, { useState } from 'react';
import { Menu, X, Code2, Users, Calendar, ChevronRight, Github, Terminal, Cpu } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Code2 className="h-8 w-8 text-komatech-purple" />
              <span className="ml-2 text-2xl font-bold text-komatech-purple">komatech</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-komatech-purple">About</a>
              <a href="#activities" className="text-gray-700 hover:text-komatech-purple">Activities</a>
              <a href="#projects" className="text-gray-700 hover:text-komatech-purple">Projects</a>
              <a href="#join" className="bg-komatech-purple text-white px-4 py-2 rounded-md hover:bg-komatech-purple-dark transition">
                Join Us
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-700">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-komatech-purple">About</a>
              <a href="#activities" className="block px-3 py-2 text-gray-700 hover:text-komatech-purple">Activities</a>
              <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-komatech-purple">Projects</a>
              <a href="#join" className="block px-3 py-2 text-komatech-purple font-medium">Join Us</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 bg-gradient-to-br from-komatech-purple to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovate. Code. Research.
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join komatech, the premier programming research society where innovation meets academic excellence.
            </p>
            <a href="#join" className="inline-flex items-center bg-white text-komatech-purple px-6 py-3 rounded-md font-medium hover:bg-purple-50 transition">
              Get Started
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Komatech</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Terminal className="h-12 w-12 text-komatech-purple mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Research Focus</h3>
              <p className="text-gray-600">Exploring cutting-edge programming paradigms and technologies.</p>
            </div>
            <div className="text-center p-6">
              <Users className="h-12 w-12 text-komatech-purple mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">A vibrant community of passionate programmers and researchers.</p>
            </div>
            <div className="text-center p-6">
              <Cpu className="h-12 w-12 text-komatech-purple mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">Building tomorrow's solutions with today's technology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Activities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Calendar className="h-8 w-8 text-komatech-purple mb-4" />
              <h3 className="text-xl font-semibold mb-2">Weekly Workshops</h3>
              <p className="text-gray-600 mb-4">Join our hands-on workshops covering various programming topics and research methodologies.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Advanced Programming Techniques</li>
                <li>• Research Paper Reviews</li>
                <li>• Coding Challenges</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Github className="h-8 w-8 text-komatech-purple mb-4" />
              <h3 className="text-xl font-semibold mb-2">Research Projects</h3>
              <p className="text-gray-600 mb-4">Collaborate on meaningful research projects with real-world applications.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Open Source Contributions</li>
                <li>• Academic Research</li>
                <li>• Industry Collaborations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-komatech-purple rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join Komatech</h2>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Ready to be part of something extraordinary? Join our community of passionate programmers and researchers.
            </p>
            <form className="max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <button
                type="submit"
                className="w-full bg-white text-komatech-purple px-6 py-3 rounded-md font-medium hover:bg-purple-50 transition"
              >
                Request to Join
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Code2 className="h-8 w-8 text-komatech-purple" />
              <span className="ml-2 text-xl font-bold">komatech</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-komatech-purple">Twitter</a>
              <a href="#" className="hover:text-komatech-purple">GitHub</a>
              <a href="#" className="hover:text-komatech-purple">LinkedIn</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Komatech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;