import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

const ItemCard = ({ item }) => {
  const itemNameForUrl = item.itemname.toLowerCase().replace(/\s+/g, '-')

  return (
    <Link 
      to={`/item/${itemNameForUrl}`}
      className={clsx(
        'block bg-white rounded-lg shadow-md overflow-hidden card-hover cursor-pointer',
        'border border-gray-200 hover:border-blue-300'
      )}
    >
      <div className="aspect-square w-full overflow-hidden bg-gray-100">
        <img
          src={item.image}
          alt={item.itemname}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          loading="lazy"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/300x300?text=${encodeURIComponent(item.itemname)}`
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-lg mb-1 line-clamp-2">
          {item.itemname}
        </h3>
        <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
          {item.category}
        </span>
      </div>
    </Link>
  )
}

export default ItemCard
