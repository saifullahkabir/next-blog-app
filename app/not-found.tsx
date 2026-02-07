// app/not-found.jsx
"use client"

import Link from 'next/link'

export default function NotFound() {
  const handleGoBack = () => {
    window.history.back()
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        {/* Simple 404 Display */}
        <div className="space-y-2">
          <div className="text-5xl font-bold text-gray-900">404</div>
          <div className="h-px w-16 bg-gray-300 mx-auto"></div>
        </div>

        {/* Message */}
        <div className="space-y-4">
          <p className="text-gray-600">Could not find the requested resource</p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-md font-medium transition-colors duration-200"
            >
              Return Home
            </Link>
            
            <button
              onClick={handleGoBack}
              className="inline-block border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-5 py-2.5 rounded-md font-medium transition-colors duration-200"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}