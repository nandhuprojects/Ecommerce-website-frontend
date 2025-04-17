import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const redirectToProduct = (id) => {
    // This would typically navigate to a product detail page
    console.log(`Navigating to product ${id}`);
  };

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h2>Welcome to ShopEasy</h2>
          <p>Your one-stop shop for amazing products at amazing prices!</p>
          <Link to="/products" className="btn">Shop Now</Link>
        </div>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img
              src="https://m.media-amazon.com/images/I/61ULAZmt9NL.jpg"
              alt="Premium Headphones"
            />
            <h3>Premium Headphones</h3>
            <p className="price">$99.99</p>
            <button className="btn" onClick={() => redirectToProduct(1)}>
              Add to Cart
            </button>
          </div>
          <div className="product-card">
            <img
              src="https://rukminim2.flixcart.com/image/850/1000/xif0q/speaker/mobile-tablet-speaker/2/c/u/best-buy-super-bass-portable-wireless-premium-sound-box-original-imaggd976hmmrxzz.jpeg?q=90&crop=false"
              alt="Wireless Speaker"
            />
            <h3>Wireless Speaker</h3>
            <p className="price">$79.99</p>
            <button className="btn" onClick={() => redirectToProduct(2)}>
              Add to Cart
            </button>
          </div>
          <div className="product-card">
            <img
              src="https://t4.ftcdn.net/jpg/06/60/68/37/360_F_660683718_qo0q1V2RuLO56S7cu4VMb078m10U6WW8.jpg"
              alt="Smart Watch"
            />
            <h3>Smart Watch</h3>
            <p className="price">$129.99</p>
            <button className="btn" onClick={() => redirectToProduct(3)}>
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <div className="category-card">
            <img
              src="https://t4.ftcdn.net/jpg/03/64/41/07/360_F_364410756_Ev3WoDfNyxO9c9n4tYIsU5YBQWAP3UF8.jpg"
              alt="Electronics"
            />
            <h3>Electronics</h3>
          </div>
          <div className="category-card">
            <img
              src="https://t3.ftcdn.net/jpg/03/34/79/68/360_F_334796865_VVTjg49nbLgQPG6rgKDjVqSb5XUhBVsW.jpg"
              alt="Clothing"
            />
            <h3>Clothing</h3>
          </div>
          <div className="category-card">
            <img
              src="https://img.freepik.com/free-photo/top-view-oil-bottle-stacked-pots-grater-wooden-cutting-board-colorful-surface_140725-94272.jpg?semt=ais_hybrid&w=740"
              alt="Home Goods"
            />
            <h3>Home Goods</h3>
          </div>
          <div className="category-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTW1PEKBXatM3jdbduRXhOsz-kLDhLLo4bjA&s"
              alt="Accessories"
            />
            <h3>Accessories</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;