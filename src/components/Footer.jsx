const Footer = () => (
  <footer>
    <div className="footer-content">
      <div className="footer-section">
        <h3>ShopEasy</h3>
        <p>Your one-stop shop for amazing products at amazing prices!</p>
      </div>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/cart">Cart</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>Email: info@shopeasy.com</p>
        <p>Phone: (555) 123-4567</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2025 ShopEasy. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;