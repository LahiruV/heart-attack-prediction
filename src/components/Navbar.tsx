import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, LogOut, Activity } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { PredictFormModal } from './PredictFormModal'

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isPredictModalOpen, setPredictModalOpen] = React.useState(false)
  const location = useLocation()
  const { isAuthenticated, logout } = useAuth()
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register'

  const isActive = (path: string) => {
    return location.pathname === path
      ? 'text-red-500'
      : 'text-gray-700 hover:text-red-500'
  }

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <Activity className="h-6 w-6 text-red-500" />
            <Link to="/" className="text-xl font-bold text-red-500">
              <span className="text-gray-500">Zenra</span> Health
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {!isAuthPage && (
              <>
                <Link to="/" className={isActive('/')}>
                  Home
                </Link>
                <Link to="/mycheckups" className={isActive('/mycheckups')}>
                  My Checkups
                </Link>
              </>
            )}
            {!isAuthenticated ? (
              <>
                <Link to="/login" className={isActive('/login')}>
                  Sign In
                </Link>
                <Link to="/register" className={isActive('/register')}>
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <button
                  onClick={() => setPredictModalOpen(true)}
                  className="ml-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition"
                >
                  Predict Now
                </button>
                <button
                  onClick={logout}
                  className="text-gray-700 hover:text-red-500 flex items-center space-x-1"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </>
            )}
            <PredictFormModal
              isOpen={isPredictModalOpen}
              onClose={() => setPredictModalOpen(false)}
            />
            {/* Predict Heart Probability Button */}
            {/* {!isAuthPage && (
              <Link
                to="/predict"
                className="ml-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition"
              >
                Predict Now
              </Link>
            )} */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-red-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {!isAuthPage && (
                <>
                  <Link to="/" className={`block px-3 py-2 ${isActive('/')}`}>
                    Home
                  </Link>
                  <Link to="/mycheckups" className={`block px-3 py-2 ${isActive('/mycheckups')}`}>
                    My Checkups
                  </Link>
                  <Link to="/chatbot" className={`block px-3 py-2 ${isActive('/chatbot')}`}>
                    Health Chat
                  </Link>
                  <Link to="/contact" className={`block px-3 py-2 ${isActive('/contact')}`}>
                    Contact
                  </Link>
                  <Link
                    to="/predict"
                    className="block px-3 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md text-center"
                  >
                    Predict Now
                  </Link>
                </>
              )}
              {!isAuthenticated ? (
                <>
                  <Link to="/login" className={`block px-3 py-2 ${isActive('/login')}`}>
                    Sign In
                  </Link>
                  <Link to="/register" className={`block px-3 py-2 ${isActive('/register')}`}>
                    Sign Up
                  </Link>
                </>
              ) : (
                <button
                  onClick={logout}
                  className="block px-3 py-2 text-gray-700 hover:text-red-500 w-full text-left flex items-center space-x-1"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}