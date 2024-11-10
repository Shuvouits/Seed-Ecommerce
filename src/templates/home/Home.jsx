import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Home.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Loader from '../../component/loader';
import Topbar from '../../component/home/Topbar';
import Header from "../../component/home/Header.jsx"
import Category from '../../component/home/Category.jsx';
import Care from '../../component/home/Care.jsx';


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
        return <Loader />;
    }

    if (error) {
        return <div className={styles.error}>Error: {error}</div>;
    }

    // Filter the last 5 latest products
    const latestProducts = productData.slice(0, 5);

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


            <Topbar />

            <Header />

            <div className={styles.slider}>
                <button onClick={handlePrevSlide} className={styles.arrowButton}>❮</button>

                <div className={styles.slide}>
                    <img src={latestProducts[currentSlide].featured_image} alt={latestProducts[currentSlide].name} className={styles.sliderImage} />

                </div>

                <button onClick={handleNextSlide} className={styles.arrowButton}>❯</button>
            </div>

            <Category />






            <section id="products">
                <div className="container-fluid">
                    <div className="content">

                        {productData.map((product) => (
                            <div className="product">
                                <div className="img">
                                    <div className="new">New</div>
                                    <Link to={`/${product.slug}`} className="d-block">
                                        <img src={product.featured_image} alt={product.name} loading="lazy" />
                                    </Link>
                                    <div className="cart-btn">
                                        <Link Link to={`/${product.slug}`} className="single-link">
                                            <span className="material-icons-outlined">
                                                visibility
                                            </span>
                                        </Link>
                                        <form action="https://www.softexel.com/cart/add-to-cart/70" method="POST">
                                            <input type="hidden" name="_token" value="1YuJW0vn4E3kuV79W5ykd06GHt3Q74WIfpzxvtoS"
                                                autoComplete="off" /> <button name="submit" value="add" className="single-link">
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


            <Care />


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
                                        loading="lazy" />
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
                            <img className="footer-logo" src="fontend/img/softexel-logofibal-1.webp" />

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
                                <img src="fontend/img/ssl_comerge.png" alt="" loading="lazy" />
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
                                        <img src="fontend/img/facebook.svg" alt="" loading="lazy" />
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
