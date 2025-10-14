import { Link } from 'react-router-dom'
import { HeartPulse, Activity, ShieldCheck, Mail, Phone, MapPin, Lightbulb } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <HeartPulse className="h-6 w-6 text-red-500" />
              <h3 className="text-lg font-semibold text-gray-900">About Zenra Healths</h3>
            </div>
            <p className="text-gray-600">
              A smart health prediction platform that helps assess the probability of heart attack risks using AI-based analysis.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Activity className="h-6 w-6 text-red-500" />
              <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            </div>
            <ul className="space-y-2">
              <li><Link to="/predict" className="text-gray-600 hover:text-red-500">Heart Attack Predictor</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-red-500">How It Works</Link></li>
              <li><Link to="/health-tips" className="text-gray-600 hover:text-red-500">Health Tips</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-red-500">Contact Support</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="h-6 w-6 text-red-500" />
              <h3 className="text-lg font-semibold text-gray-900">Resources</h3>
            </div>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-red-500">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-500">Terms of Use</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-500">Research Sources</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-500">Admin Portal</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <HeartPulse className="h-6 w-6 text-red-500" />
              <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-4 w-4 text-red-500" />
                <span>support@Zenra Healths.ai</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-4 w-4 text-red-500" />
                <span>+94 71 234 5678</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-4 w-4 text-red-500" />
                <span>SLIIT, Malabe<br />Colombo, Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600">
              © {currentYear} Zenra Healths. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <span className="text-gray-600">Empowering lives with</span>
              <Lightbulb className="h-4 w-4 text-red-500" />
              <span className="text-gray-600">Smart Health Insights</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}