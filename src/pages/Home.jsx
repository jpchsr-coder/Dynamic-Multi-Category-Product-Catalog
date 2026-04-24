import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { groupByCategory } from '../services/api.js'
import CategorySection from '../components/CategorySection.jsx'

const Home = () => {
  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await fetch('/data.json')
      if (!response.ok) {
        throw new Error('Failed to fetch products')
      }
      return response.json()
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  })

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 skeleton h-12 w-64 mx-auto mb-4"></h1>
          <p className="text-gray-600 skeleton h-6 w-48 mx-auto"></p>
        </div>
        
        {/* Skeleton loading for categories */}
        <div className="space-y-12">
          {['Cars', 'Bikes', 'Phones', 'Computers'].map((category) => (
            <div key={category}>
              <div className="skeleton h-8 w-32 mb-6"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="skeleton h-80 rounded-lg"></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <div className="text-red-600 mb-4">
            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Products</h2>
          <p className="text-gray-600 mb-6">Failed to load product data. Please try again later.</p>
          <button 
            onClick={() => window.location.reload()}
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  const groupedProducts = groupByCategory(products)
  const categories = Object.keys(groupedProducts).sort()

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Product Catalog
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our amazing collection of products across multiple categories
        </p>
      </div>

      {/* Category Sections */}
      <div className="space-y-12">
        {categories.map((category) => (
          <CategorySection 
            key={category}
            category={category}
            items={groupedProducts[category]}
          />
        ))}
      </div>

      {/* No products state */}
      {products.length === 0 && (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Products Available</h2>
          <p className="text-gray-600">Check back later for new products.</p>
        </div>
      )}
    </div>
  )
}

export default Home
