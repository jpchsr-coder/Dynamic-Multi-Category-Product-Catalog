import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import ItemDetails from '../components/ItemDetails.jsx'

const ItemDetail = () => {
  const { id } = useParams()
  
  const {
    data: item,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      const response = await fetch('/data.json')
      if (!response.ok) {
        throw new Error('Failed to fetch products')
      }
      const products = await response.json()
      
      // Find product by name (convert URL-friendly name back to original)
      const productName = id.replace(/-/g, ' ').toLowerCase()
      return products.find(product => 
        product.itemname.toLowerCase() === productName
      )
    },
    enabled: !!id,
  })

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <div className="text-red-600 mb-4">
            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Product</h2>
          <p className="text-gray-600 mb-6">Failed to load product details. Please try again later.</p>
          <button 
            onClick={() => window.location.reload()}
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mr-4"
          >
            Retry
          </button>
          <a 
            href="/"
            className="inline-block px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ItemDetails item={item} loading={isLoading} />
    </div>
  )
}

export default ItemDetail
