import React, { useState, useEffect } from 'react';

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: 'all',
    price: 'all'
  });

  // This would typically fetch data from an API
  useEffect(() => {
    // Mock product data
    const mockProducts = [
      {
        id: 1,
        name: 'Premium Headphones',
        price: 99.99,
        category: 'electronics',
        image: '/api/placeholder/400/320'
      },
      {
        id: 2,
        name: 'Wireless Speaker',
        price: 79.99,
        category: 'electronics',
        image: '/api/placeholder/400/320'
      },
      {
        id: 3,
        name: 'Smart Watch',
        price: 129.99,
        category: 'electronics',
        image: '/api/placeholder/400/320'
      },
      {
        id: 4,
        name: 'Casual T-Shirt',
        price: 24.99,
        category: 'clothing',
        image: '/api/placeholder/400/320'
      },
      {
        id: 5,
        name: 'Designer Jeans',
        price: 59.99,
        category: 'clothing',
        image: '/api/placeholder/400/320'
      },
      {
        id: 6,
        name: 'Coffee Maker',
        price: 89.99,
        category: 'home',
        image: '/api/placeholder/400/320'
      },
      {
        id: 7,
        name: 'Sunglasses',
        price: 49.99,
        category: 'accessories',
        image: '/api/placeholder/400/320'
      },
      {
        id: 8,
        name: 'Smartwatch Band',
        price: 19.99,
        category: 'accessories',
        image: '/api/placeholder/400/320'
      }
    ];
    
    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
  }, []);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.id]: e.target.value
    });
  };

  const applyFilters = () => {
    let result = [...products];
    
    // Filter by category
    if (filters.category !== 'all') {
      result = result.filter(product => product.category === filters.category);
    }
    
    // Filter by price
    if (filters.price !== 'all') {
      switch(filters.price) {
        case 'under50':
          result = result.filter(product => product.price < 50);
          break;
        case '50to100':
          result = result.filter(product => product.price >= 50 && product.price <= 100);
          break;
        case 'over100':
          result = result.filter(product => product.price > 100);
          break;
        default:
          break;
      }
    }
    
    setFilteredProducts(result);
  };

  const addToCart = (product) => {
    // This would typically add the product to your cart state/context
    console.log('Added to cart:', product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <>
      <section className="products-header">
        <h2>Our Products</h2>
        <div className="filters">
          <select 
            id="category" 
            value={filters.category}
            onChange={handleFilterChange}
          >
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="home">Home Goods</option>
            <option value="accessories">Accessories</option>
          </select>
          <select 
            id="price"
            value={filters.price}
            onChange={handleFilterChange}
          >
            <option value="all">All Prices</option>
            <option value="under50">Under $50</option>
            <option value="50to100">$50 - $100</option>
            <option value="over100">Over $100</option>
          </select>
          <button className="btn" onClick={applyFilters}>Apply Filters</button>
        </div>
      </section>

      <section className="product-listing">
        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="price">${product.price.toFixed(2)}</p>
                <button className="btn" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <div className="no-products">
              <p>No products match your filter criteria.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Products;