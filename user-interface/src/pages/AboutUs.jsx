import { Card } from '@chakra-ui/react'
import React from 'react'

function AboutUs() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-8 md:px-16">
    {/* Header Section */}
    <div className="text-center max-w-3xl mx-auto">
      <div className="mb-4 flex justify-center">
        <div className="bg-orange-100 p-4 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-indigo-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.911c.969 0 1.371 1.24.588 1.81l-3.975 2.888a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.975-2.888a1 1 0 00-1.176 0l-3.975 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.082 10.1c-.783-.57-.38-1.81.588-1.81h4.911a1 1 0 00.95-.69l1.518-4.674z"
            />
          </svg>
        </div>
      </div>
      <h2 className="text-4xl font-bold text-indigo-900 mb-4">What we do</h2>
      <p className="text-gray-600 text-lg leading-relaxed">
        When things are clear, easy and relevant for patients, providers form
        stronger relationships, minimize administrative burden and achieve
        better financial results, so what’s good for patients is good for
        providers. At Cedar, we foster that mutually beneficial relationship
        through proven expertise and modern technology. We combine the best
        techniques of fintech, ad tech, consumer and healthcare to help
        providers understand and engage patients more effectively.
      </p>
    </div>

    {/* Executive Card Section */}
    <div className="mt-20 flex justify-center">
      <Card className="flex flex-col md:flex-row md:items-center max-w-5xl p-6 gap-6 shadow-xl rounded-2xl">
        <div className="w-full md:w-1/3">
          <img
            src="/profile.jpg" 
            alt="Florian Otto"
            className="rounded-lg object-cover"
          />
        </div>
        <div className="w-full md:w-2/3 text-left">
          <h3 className="text-2xl font-bold text-indigo-900">
            Florian Otto, MD, PhD
          </h3>
          <p className="text-red-500 font-semibold mt-1 mb-3">
            Co-Founder / Chief Executive Officer
          </p>
          <p className="text-gray-600">
            An accomplished entrepreneur and former physician, Florian now
            drives growth and sets overall direction across all facets of
            Cedar’s business.
          </p>
        </div>
      </Card>
    </div>
  </div>
  )
}

export default AboutUs
