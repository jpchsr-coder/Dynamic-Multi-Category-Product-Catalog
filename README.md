# Dynamic Multi-Category Product Catalog

A modern, production-ready React application for displaying products across multiple categories with dynamic filtering, search, and detailed views.

## 🚀 Features

- **Dynamic Category Grouping** - Automatically groups products by category (Cars, Bikes, Phones, Computers)
- **Responsive Design** - Mobile-first approach with breakpoints for tablet and desktop
- **Product Detail Pages** - Detailed view with dynamic property rendering
- **Modern UI/UX** - Clean design with hover effects, loading states, and error handling
- **State Management** - Redux Toolkit for global state, React Query for server state
- **Routing** - React Router DOM for navigation
- **Performance Optimized** - Lazy loading, caching, and efficient rendering

## 🛠 Tech Stack

- **Frontend**: React 18 with Vite
- **Routing**: React Router DOM v6
- **State Management**: Redux Toolkit + React Redux
- **Data Fetching**: TanStack Query (React Query)
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Language**: JavaScript (ES6+)

## 📁 Project Structure

```
src/
├── components/
│   ├── ItemCard.jsx          # Product card component
│   ├── CategorySection.jsx   # Category section component
│   └── ItemDetails.jsx       # Product detail component
├── pages/
│   ├── Home.jsx              # Home page with category overview
│   └── ItemDetail.jsx        # Product detail page
├── store/
│   ├── store.js              # Redux store configuration
│   └── slices/
│       └── itemsSlice.js     # Items slice for Redux
├── services/
│   └── api.js                # API service functions
├── App.jsx                   # Main App component with routing
├── main.jsx                  # Application entry point
└── index.css                 # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (if applicable) or navigate to the project directory

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📱 Responsive Breakpoints

- **Mobile**: 1 column grid (default)
- **Tablet**: 2 columns grid (`sm:` breakpoint)
- **Desktop**: 3-4 columns grid (`lg:` and `xl:` breakpoints)

## 🔧 Configuration

### Data Source

The application uses the `data.json` file located in the public directory. The data structure includes:

```json
{
  "itemname": "Product Name",
  "category": "Category Name",
  "image": "https://example.com/image.jpg",
  "itemprops": [
    {
      "label": "Property Label",
      "value": "Property Value"
    }
  ]
}
```

### Customization

- **Tailwind CSS**: Modify `tailwind.config.js` for theme customization
- **Vite Configuration**: Update `vite.config.js` for build settings
- **Redux Store**: Add new slices in `store/slices/` directory

## 🎯 Key Features Implementation

### Dynamic Category Grouping
Products are automatically grouped by category using the `groupByCategory` utility function.

### Dynamic Property Rendering
Product properties are rendered dynamically without hardcoding any field names.

### Error Handling
- Network error handling with retry functionality
- 404 page for invalid routes
- Image fallback handling

### Loading States
- Skeleton loaders for product cards
- Loading spinners for async operations
- Smooth transitions and animations

## 🔄 State Management

### Redux Toolkit
- Selected item tracking
- Category grouping state
- Loading and error states

### React Query
- Product data fetching with caching
- Background refetching
- Stale time configuration

## 🎨 UI Components

### ItemCard
- Hover effects with scale transformation
- Image lazy loading
- Responsive design
- Category badges

### CategorySection
- Dynamic grid layout
- Category headers with item counts
- Responsive breakpoints

### ItemDetails
- Large product images
- Dynamic property display
- Back navigation
- Error states

## 🚀 Performance Features

- **Code Splitting**: Automatic with Vite
- **Image Optimization**: Lazy loading and error fallbacks
- **Caching**: React Query with 5-minute stale time
- **Bundle Optimization**: Tree shaking and minification

## 🛠 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For any questions or issues, please open an issue in the repository.
