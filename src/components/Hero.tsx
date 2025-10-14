import { HeartPulse, Activity, Stethoscope, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-[600px] object-cover"
            src="https://images.pexels.com/photos/20897581/pexels-photo-20897581.jpeg"
            alt="Healthcare background"
          />
          <div className="absolute inset-0 bg-black mix-blend-multiply opacity-70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Welcome to <span className="text-red-400">Zenra Healths</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-3xl mx-auto text-xl text-gray-100"
          >
            Predict your heart attack risk instantly with AI-powered analysis.
            Monitor your vital signs and take control of your health with confidence.
          </motion.p>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 transform transition-all"
          >
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <HeartPulse className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Heart Risk Prediction</h3>
            <p className="text-gray-600">
              Instantly estimate your heart attack probability using AI trained on medical datasets.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 transform transition-all"
          >
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Activity className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-Time Vitals</h3>
            <p className="text-gray-600">
              Track heart rate, blood pressure, and key biomarkers with intuitive dashboards.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 transform transition-all"
          >
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Stethoscope className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Health Insights</h3>
            <p className="text-gray-600">
              Get personalized insights and recommendations based on your health profile and results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 transform transition-all"
          >
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <ShieldCheck className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Trusted Accuracy</h3>
            <p className="text-gray-600">
              Built on validated medical models and continuously improved with new health data.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-red-500 mb-2">10K+</div>
              <div className="text-gray-600">Health Checks Done</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-red-500 mb-2">95%</div>
              <div className="text-gray-600">Prediction Accuracy</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-red-500 mb-2">50+</div>
              <div className="text-gray-600">Clinics Connected</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-red-500 mb-2">4.9★</div>
              <div className="text-gray-600">User Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}