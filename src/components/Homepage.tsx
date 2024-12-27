import  { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';

interface Statistic {
  value: string;
  label: string;
}

interface BlogPost {
  title: string;
  link: string;
}

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const stats: Statistic[] = [
    { value: "23+", label: "No. of visitor" },
    { value: "45+", label: "No. of Project" },
    { value: "45+", label: "Active Clients" },
    { value: "45+", label: "Experts" }
  ];

  const blogPosts: BlogPost[] = [
    { title: "How to Build a Scalable Application up to 1 Million Users on AWS", link: "#" },
    { title: "How to Build a Scalable Application up to 1 Million Users on AWS", link: "#" },
    { title: "How to Build a Scalable Application up to 1 Million Users on AWS", link: "#" },
    { title: "How to Build a Scalable Application up to 1 Million Users on AWS", link: "#" },
    { title: "How to Build a Scalable Application up to 1 Million Users on AWS", link: "#" }
  ];

  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm relative">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl sm:text-2xl font-bold">Softmind</div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4 lg:space-x-8">
              <a href="#" className="text-sm lg:text-base text-gray-600 hover:text-gray-900">Insights</a>
              <a href="#" className="text-sm lg:text-base text-gray-600 hover:text-gray-900">Service</a>
              <a href="#" className="text-sm lg:text-base text-gray-600 hover:text-gray-900">Internships & Training</a>
              <a href="#" className="text-sm lg:text-base text-gray-600 hover:text-gray-900">Blogs</a>
              <a href="#" className="text-sm lg:text-base text-gray-600 hover:text-gray-900">Career</a>
              <a href="#" className="text-sm lg:text-base text-gray-600 hover:text-gray-900">About us</a>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden absolute top-full left-0 right-0 bg-white shadow-lg flex-col space-y-4 p-4 z-50`}>
            <a href="#" className="text-gray-600 hover:text-gray-900 px-4 py-2">Insights</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 px-4 py-2">Service</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 px-4 py-2">Internships & Training</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 px-4 py-2">Blogs</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 px-4 py-2">Career</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 px-4 py-2">About us</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              We Our Custom Software Development Service For Any Needs
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              Building the Future with Scalable Software Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Why choose us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Customized Solutions</h3>
              <p className="text-sm sm:text-base text-gray-600">
                We understand that every business is unique. We tailor our services to meet your specific needs, ensuring that the solutions we develop align perfectly with your goals and requirements.
              </p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Quality & Reliability</h3>
              <p className="text-sm sm:text-base text-gray-600">
                We are committed to delivering high-quality software that is robust, reliable, and scalable. Our rigorous testing and quality assurance processes ensure that you receive a product that performs flawlessly.
              </p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Comprehensive Support</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Our partnership doesn't end with the delivery of the software. We offer ongoing support and maintenance to ensure that your systems continue to operate smoothly and efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Our Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.slice(0, 3).map((post, index) => (
              <div key={index} className="bg-white border rounded-lg overflow-hidden">
                <img src="/api/placeholder/400/200" alt="Blog post" className="w-full h-40 sm:h-48 object-cover" />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{post.title}</h3>
                  <a href={post.link} className="text-blue-600 hover:text-blue-800 text-sm sm:text-base">Read More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Get in touch with our support team</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base">7321063552</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base break-all">info@softmindtechnologies.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">
                    SOFTMIND TECHNOLOGIES, House no 32, First Floor Chattarpur, New Delhi - 110074
                  </span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Your Email ID"
                  className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base"
                />
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 sm:py-3 rounded hover:bg-blue-700 text-sm sm:text-base"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm sm:text-base">© 2024 Softmind Technologies. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;