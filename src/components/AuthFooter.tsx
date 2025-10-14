import { Link } from 'react-router-dom'
import { Activity, Mail, Phone, MapPin, Heart } from 'lucide-react'

export function AuthFooter() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-white mt-8 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* About Zenra Health */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Activity className="h-6 w-6 text-red-500" />
                            <Link to="/" className="text-xl font-bold text-red-500">
                                <span className="text-gray-500">Zenra</span> Health
                            </Link>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Zenra Health is your trusted AI-based platform for heart health monitoring and risk prediction. We empower individuals with insights to make proactive lifestyle choices.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li>
                                <Link to="/checkups" className="hover:text-red-500">My Checkups</Link>
                            </li>
                            <li>
                                <Link to="/predict" className="hover:text-red-500">Heart Risk Prediction</Link>
                            </li>
                            <li>
                                <Link to="/resources" className="hover:text-red-500">Health Resources</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-red-500">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
                        <div className="flex flex-col space-y-2 text-gray-600 text-sm">
                            <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4 text-red-500" />
                                <span>support@zenrahealth.com</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4 text-red-500" />
                                <span>+94 71 234 5678</span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <MapPin className="h-4 w-4 text-red-500 mt-0.5" />
                                <span>
                                    SLIIT, Malabe <br />
                                    Colombo, Sri Lanka
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-12 border-t border-gray-200 pt-6 text-center text-gray-600 text-sm space-y-1">
                    <p>© {currentYear} Zenra Health. All rights reserved.</p>
                    <p>Empowering heart health with AI-based predictions <Heart className="inline text-red-500 w-4 h-4" /></p>
                </div>
            </div>
        </footer>
    )
}