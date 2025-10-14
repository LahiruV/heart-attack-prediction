import { Hero } from '../components/Hero'
import { HeartPulse, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'

interface FeedbackItem {
  id: string
  name: string
  message: string
  type: string
  createdAt: Date
}

const dummyFeedbacks: FeedbackItem[] = [
  {
    id: '1',
    name: 'Dr. Kavin Perera',
    message: 'Zenra Healths helped me assess my patients’ heart attack risks quickly and accurately. Excellent tool!',
    type: 'positive',
    createdAt: new Date('2025-03-14'),
  },
  {
    id: '2',
    name: 'Ruwan Silva',
    message: 'The heart attack probability predictor gave me peace of mind and clear insights about my health.',
    type: 'positive',
    createdAt: new Date('2025-04-02'),
  },
  {
    id: '3',
    name: 'Isabelle Thomas',
    message: 'Beautiful, simple interface. I used Zenra Healths to check my vitals and track my results over time.',
    type: 'positive',
    createdAt: new Date('2025-05-21'),
  },
]

export function Home() {
  const feedbacks = dummyFeedbacks

  return (
    <>
      <Hero />

      {/* Health Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <HeartPulse className="h-8 w-8 text-red-500" />
              <h2 className="text-3xl font-bold text-gray-900">Zenra Healths Feedback</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how people are using Zenra Healths to monitor their vitals, predict heart attack risks, and live healthier lives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {feedbacks.map((feedback) => (
              <motion.div
                key={feedback.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-gray-600 mb-4 italic">"{feedback.message}"</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-900">{feedback.name}</span>
                  <span className="text-sm text-gray-500">
                    {new Date(feedback.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}