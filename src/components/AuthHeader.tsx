import { Link, useLocation } from 'react-router-dom'
import { Activity, Sparkles } from 'lucide-react'

export function AuthHeader() {
  const location = useLocation()
  const isLogin = location.pathname === '/login'

  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <Activity className="h-6 w-6 text-red-500" />
            <Link to="/" className="text-xl font-bold text-red-500">
              <span className="text-gray-500">Zenra</span> Health
            </Link>
          </Link>

          {/* Action Link */}
          <div className="flex items-center space-x-4">
            <Link
              to={isLogin ? '/register' : '/login'}
              className="text-sm font-medium text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg shadow-md transition"
            >
              {isLogin ? 'Create Account' : 'Sign In'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}