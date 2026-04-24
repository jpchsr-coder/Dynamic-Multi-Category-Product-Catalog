import React from 'react'
import ItemCard from './ItemCard.jsx'

const CategorySection = ({ category, items }) => {
  if (!items || items.length === 0) {
    return null
  }

  return (
    <section className="mb-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2 inline-block">
          {category}
        </h2>
        <p className="text-gray-600 mt-2">{items.length} items available</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <ItemCard key={`${category}-${item.itemname}-${index}`} item={item} />
        ))}
      </div>
    </section>
  )
}

export default CategorySection
