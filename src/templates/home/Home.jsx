import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Home.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Loader from '../../component/loader';
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
    return <Loader/>;
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
    <div className='home'>
    <div>
        <Link className="call-to-btn" to="tel:01601901566">
            <span className="material-icons-outlined me-1">
                call
            </span>
            01601901566
        </Link>
    </div>


    <section id="top">
        <div className="container">
            <div className="content">
                <div className="left d-flex align-items-center">
                    <span className="material-icons-outlined me-1">
                        call
                    </span>
                    <Link to="callto:01601901566" className="call">01601901566</Link>
                </div>
                <div className="center d-flex align-items-center">
                    <span className="material-icons-outlined me-1">
                        auto_fix_normal
                    </span>
                    Discover the Power of Nature with softexel
                </div>

                <div className="right d-flex align-items-center">
                    <div className="d-flex align-items-center me-2">
                        <span className="material-icons-outlined me-1">
                            help_outline
                        </span>

                        <Link to="tel:8801601901566" title="8801601901566">Customer Help</Link>
                    </div>
                    <div>
                        <div className="dropdown lang">
                            <div className="head dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                <img className="flag" src="fontend/img/bd.svg" alt="" loading="lazy"/>
                                <span className="label">EN</span>
                            </div>
                            <ul className="dropdown-menu">
                                <div className="item">
                                    <Link className="dropdown-item" to="#">
                                        <img className="flag" src="fontend/img/bd.svg" alt="" loading="lazy"/>
                                        <span className="label">BD</span>
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link className="dropdown-item" to="#">
                                        <img className="flag" src="fontend/img/us.svg" alt="" loading="lazy"/>
                                        <span className="label">EN</span>
                                    </Link>
                                </div>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <header id="nav">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <Link className="navbar-brand" to="index.html">
                    <img className="main-logo" src="fontend/img/softexel-logofibal-1.webp" alt="" style={{width:'200px'}} loading="lazy"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse form-menu navbar-collapse" id="navbarSupportedContent">
                    <div className="nav-menu">
                        <form className="d-flex search" role="search" action="https://www.softexel.com/shop" method="GET">
                            <div className="input-group">
                                <span className="input-group-text">
                                    <span className="material-icons-outlined">
                                        search
                                    </span>
                                </span>
                                <input className="form-control" type="search" name="search" placeholder="Search in Naturo"/>
                                <button className="btn input-group-text search-btn">
                                    Search
                                </button>
                            </div>
                        </form>
                        <div className="right">
                            <div className="user-info">

                                <div className="name">
                                  
                                    <div className="tagline"><Link to="login.html">Login</Link></div>


                                </div>
                            </div>
                            <div className="favorite badge-icon">

                            </div>

                            <Link to="order/summery.html" className="cart-area">
                                <div className="cart badge-icon">
                                    <span className="material-icons-outlined">
                                        shopping_cart
                                    </span>
                                    <span className="badge-tag" id="totalCartCount">
                                        0
                                    </span>
                                </div>
                                <div className="cart-text">
                                    Cart
                                    <div>

                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>

    <div className={styles.slider}>
        <button onClick={handlePrevSlide} className={styles.arrowButton}>❮</button>
        
        <div className={styles.slide}>
          <img src={latestProducts[currentSlide].featured_image} alt={latestProducts[currentSlide].name} className={styles.sliderImage} />
         
        </div>

        <button onClick={handleNextSlide} className={styles.arrowButton}>❯</button>
      </div>



    <section id="trending">
        <div className="container">
            <div className="content">
                <div className="owl-carousel category-carousel owl-loaded owl-drag">
                    <Link className="item" to="#">
                        <img className="icon" src="storage/ggaJSilyldtpzB2VAm6YLIcIgVfQbPSiLuGDHIlj.png" alt=""
                            loading="lazy"/>
                        <p className="caption">Trending</p>
                    </Link>
                    <Link className="item" to="#7">
                        <img className="icon" src="storage/THqSJcY9Jqfhh6jdrPXb9zDC3XmpRuMVO3eiGp8E.png" alt=""
                            loading="lazy"/>
                        <p className="caption">Honey</p>
                    </Link>
                    <Link className="item" to="#">
                        <img className="icon" src="storage/G392CBn4RHwJiRv0O8FlXUyYkM28QW3J6vRRvEFl.png" alt=""
                            loading="lazy"/>
                        <p className="caption">Herbs</p>
                    </Link>
                    <Link className="item" to="#">
                        <img className="icon" src="storage/2dInVJ0aFXSsXs2lm2pZGPlcQJwLojZKwW6iXdG4.png" alt=""
                            loading="lazy"/>
                        <p className="caption">Combo</p>
                    </Link>
                    <Link className="item" to="#">
                        <img className="icon" src="storage/moq4gOR8R5l2IFeLD9qAdG1gHcOOKAovO0KtsK8D.png" alt=""
                            loading="lazy"/>
                        <p className="caption">Seeds</p>
                    </Link>
                    <Link className="item" to="#">
                        <img className="icon" src="storage/OAjt7XmdsmK56lfSyEVHGjAMYtd0rud2KN5wxLN1.png" alt=""
                            loading="lazy"/>
                        <p className="caption">Nuts</p>
                    </Link>
                    <Link className="item" to="#">
                        <img className="icon" src="storage/v65PdkCWnRHfCWvkp4TJxRF1YBAAFxzEOcS7VOe3.png" alt=""
                            loading="lazy"/>
                        <p className="caption">Dates</p>
                    </Link>
                    <Link className="item" to="#">
                        <img className="icon" src="storage/kXBlCZ2WrKSjf4FS0sL832u3C7ixnC1isU4u3ar5.png" alt=""
                            loading="lazy"/>
                        <p className="caption">Dry Fruits</p>
                    </Link>
                    <Link className="item" to="#">
                        <img className="icon" src="storage/XnxSkpu2A1AKiEd7L5vhcFn5Xmtcu9EnC2kUhdIq.png" alt=""
                            loading="lazy"/>
                        <p className="caption">Baby Food</p>
                    </Link>
                    <Link className="item" to="#">
                        <img className="icon" src="storage/u5raG6K8XtlFWVhafbELRTuLFGowCp74ivRT7UAv.png" alt=""
                            loading="lazy"/>
                        <p className="caption">Tea</p>
                    </Link>
                    <Link className="item" to="#">
                        <img className="icon" src="storage/jHrW3ZPmz6GPGfCDE2n50Xgcl1oGqjXSNLq4uYyx.png" alt=""
                            loading="lazy"/>
                        <p className="caption">Shorbot</p>
                    </Link>
                    <Link className="item" to="#">
                        <img className="icon" src="storage/33FEGesIn4f1mBvQv0BjaP8Pt3NyU9yUADxKHuoh.png" alt=""
                            loading="lazy"/>
                        <p className="caption">Ghee &amp; Oil</p>
                    </Link>
                    <Link className="item" to="#">
                        <img className="icon" src="storage/MLBW7OYh6b80ckWAi2Xo8F4Gv3SbzVE0XbFkJrIS.png" alt=""
                            loading="lazy"/>
                        <p className="caption">All</p>
                    </Link>
                </div>
            </div>
        </div>
    </section>
    <section id="products">
        <div className="container-fluid">
            <div className="content">

            {productData.map((product) => (
                <div className="product">
                    <div className="img">
                        <div className="new">New</div>
                        <Link to={`/${product.slug}`} className="d-block">
                            <img src={product.featured_image} alt={product.name} loading="lazy"/>
                        </Link>
                        <div className="cart-btn">
                            <Link Link to={`/${product.slug}`} className="single-link">
                                <span className="material-icons-outlined">
                                    visibility
                                </span>
                            </Link>
                            <form action="https://www.softexel.com/cart/add-to-cart/70" method="POST">
                                <input type="hidden" name="_token" value="1YuJW0vn4E3kuV79W5ykd06GHt3Q74WIfpzxvtoS"
                                    autoComplete="off"/> <button name="submit" value="add" className="single-link">
                                    <span className="material-icons-outlined">
                                        shopping_cart
                                    </span>
                                </button>

                            </form>
                        </div>
                    </div>
                    <div className="description">
                        <Link className="caption d-block" to="product/arai-mithai.html">
                        {product.name}
                        </Link>
                        <div className="price">TK {product.price}</div>
                    </div>
                </div>

            ))}
              
            </div>

            <div className="text-center">
                <Link to="#" className="btn more-btn">
                    More Product
                    <span className="material-icons-outlined">
                        chevron_right
                    </span>
                </Link>
            </div>
        </div>
    </section>
    <section id="care">
        <div className="overlay">
            <div className="container-fluid">
                <div className="content">
                    <div className="">
                        <h2 className="title">
                            We CARE
                        </h2>
                        <p className="tagline">The more we care for the earth, the better our product</p>
                        <div className="cares">

                            <div className="care">
                                <img className="care-img" src="storage/FSVgff54fZUuxsodKuyOKViYRGBa69JpkmNP3IgR.png" alt=""
                                    loading="lazy"/>
                            </div>

                            <div className="care">
                                <img className="care-img" src="storage/Qm6Iv0lZQ1kwVbKPTTNibROyZEvpC1kvh0xaKkqS.png" alt=""
                                    loading="lazy"/>
                            </div>

                            <div className="care">
                                <img className="care-img" src="storage/yeo3M3DYnbWhXxZt80fAcGipICs4aJ8jVjSYoal9.png" alt=""
                                    loading="lazy"/>
                            </div>

                            <div className="care">
                                <img className="care-img" src="storage/6Ei1RZyUJGDeW8FgN64ZEEykWotkDDI4HtqFceE1.png" alt=""
                                    loading="lazy"/>
                            </div>
                        </div>

                        <div className="text-center">
                            <Link to="#" className="btn more-btn">
                                Find More On Blog
                                <span className="material-icons-outlined">
                                    chevron_right
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="testimonial_custom">
        <div className="container-fluid">
            <div className="content">
                <h2 className="title">Testimonial</h2>
                <p className="tagline">Hear from real customers about Naturo</p>

                <div className="testimonials">
                    <div className="testimonial">
                        <p className="comment">
                            <iframe src="https://www.youtube.com/embed/Of4d92w_Axc"></iframe>
                        </p>
                        <div className="user-info">
                            <img className="user-photo" src="storage/cdopMGzMa0cbbYfJVUrGuJ6AcjOrALA27CQzyp9z.jpg" alt=""
                                loading="lazy"/>
                            <div>
                                <div className="name">Tariqul</div>
                                <div className="designation">Test</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <Link to="testimonial.html" className="btn more-btn">
                        See More
                        <span className="material-icons-outlined">
                            chevron_right
                        </span>
                    </Link>
                </div>

            </div>
        </div>
    </section>

    <footer id="footer">
            <div className="container-fluid">
                <div className="content">
                    <div className="logo-section">
                        <img className="footer-logo" src="fontend/img/softexel-logofibal-1.webp"/>

                        <div className="contacts">
                            <div className="contact">
                                <span className="material-icons-outlined">
                                    phone
                                </span>
                                <Link to="tel:01601901566" className="text">01601901566</Link>
                            </div>
                            <div className="contact">
                                <span className="material-icons-outlined">
                                    email
                                </span>
                                <Link to="mailto:info@softexel.com" className="text">info@softexel.com</Link>

                            </div>
                            <div className="contact">
                                <span className="material-icons-outlined">
                                    place
                                </span>
                                <span className="text">
                                    <div className="head">Dhaka Office</div>

                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="help-section">
                        <div>
                            <p className="head">Help</p>

                            <Link to="pages/help-support.html" className="link">Help &amp;
                                Support</Link>
                            <Link to="exchange-and-refund-policy.html" className="link">Refund Policy</Link>
          


                        </div>
                    </div>

                    <div className="link-section">
                        <div>

                            <Link to="pages/blogs.html" className="link">Blogs</Link>
                            <Link to="pages/contact-us.html" className="link">Contact Us</Link>
                            <Link to="pages/sitemap.html" className="link">Our Sitemap</Link>
                            <Link to="pages/wishlist.html" className="link">Wishlist</Link>
                            <Link to="pages/my-order-history.html" className="link">Order History</Link>
                          

                        </div>
                    </div>

                    <div className="product-section">
                        <div>
                            <p className="head">Products</p>
                            <Link to="pages/shop.html" className="link">Honey &amp; Dates</Link>
                            <Link to="pages/honey%20-dates.html" className="link">Hair &amp; Skin Care</Link>
                            <Link to="pages/finest-herbs.html" className="link">Finest Herbs</Link>
                            <Link to="pages/nut-seeds.html" className="link">Nut &amp; Seeds</Link>
                            <Link to="pages/organic-oil%20-ghee.html" className="link">Organic Oil &amp; Ghee</Link>
                            <Link to="pages/energy-essentials.html" className="link">Energy Essentials</Link>
                           

                        </div>
                    </div>

                    <div className="payment-section">
                        <div>
                            <p className="head">We Accepts</p>
                            <img src="fontend/img/ssl_comerge.png" alt="" loading="lazy"/>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer-bottom">
                <div className="container-fluid">
                    <div className="content">
                        <div className="copyright">
                            &copy; 2024 Softexel All rights reserved. Developed by <Link to="https://softexel.com/"
                                title="+8801601901566">Softexel</Link>

                        </div>
                        <div className="menu">
                            <Link to="#">Terms</Link>
                            <Link to="#">Privacy</Link>
                            <Link to="#">Cookie Policy</Link>
                      

                        </div>
                        <div className="d-flex align-items-center right">
                            <div className="title">
                                Find Us On
                            </div>
                            <div className="social">

                                <Link to="#" className="social-link">
                                    <img src="fontend/img/facebook.svg" alt="" loading="lazy"/>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    </div>
  );
}
