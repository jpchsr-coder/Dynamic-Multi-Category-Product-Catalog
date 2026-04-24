// Simulate API call to fetch product data
const fetchProducts = async () => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800))
  
  try {
    // Fetch the local JSON file
    const response = await fetch('/data.json')
    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}

// Get product by name
const getProductByName = async (name) => {
  const products = await fetchProducts()
  return products.find(product => 
    product.itemname.toLowerCase() === name.toLowerCase()
  )
}

// Group products by category
const groupByCategory = (products) => {
  return products.reduce((acc, product) => {
    const category = product.category
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(product)
    return acc
  }, {})
}

export { fetchProducts, getProductByName, groupByCategory }
