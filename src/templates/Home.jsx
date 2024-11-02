import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Home.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  const { productId } = useParams();
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/products/all`);
        setProductData(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch product data');
        setLoading(false);
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, [productId]);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  // Filter the last 5 latest products
  const latestProducts = productData.slice(0,5);

  // Handle next and previous slides
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % latestProducts.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? latestProducts.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className={styles.container}>
  

      {/* Slider Section */}
      <div className={styles.slider}>
        <button onClick={handlePrevSlide} className={styles.arrowButton}>❮</button>
        
        <div className={styles.slide}>
          <img src={latestProducts[currentSlide].featured_image} alt={latestProducts[currentSlide].name} className={styles.sliderImage} />
          {/* <div className={styles.slideCaption}>
            <h2>{latestProducts[currentSlide].name}</h2>
            <p>Tk {latestProducts[currentSlide].price}</p>
          </div> */}
        </div>

        <button onClick={handleNextSlide} className={styles.arrowButton}>❯</button>
      </div>

      {/* Product Grid Section */}
      <h1 className={styles.title}>New Arrivals</h1>
      <div className={styles.grid}>
        {productData.map((product) => (
          <div key={product.id} className={styles.card}>
            {product.isNew && <span className={styles.newBadge}>New</span>}
            <img src={product.featured_image} alt={product.name} className={styles.productImage} />
            <div className={styles.productInfo}>
              
              <div className={styles.cardAndview}>
              <Link to={`/${product.id}`} className={styles.viewButton}><i class="fa-regular fa-eye"></i></Link>
              <Link to={`#`} className={styles.viewButton}><i class="fa-solid fa-cart-shopping"></i></Link>
              </div>
<div className={styles.productandname}>
<h2 className={styles.productName}>{product.name}</h2>
<p className={styles.productPrice}>Tk {product.price}</p>
</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
