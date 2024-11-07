import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Home.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Loader from '../component/loader';
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
       




        <a className="call-to-btn" href="tel:09639812525">
            <span className="material-icons-outlined me-1">
                call
            </span>
            09639812525
        </a>
    </div>


    <section id="top">
        <div className="container">
            <div className="content">
                <div className="left d-flex align-items-center">
                    <span className="material-icons-outlined me-1">
                        call
                    </span>
                    <a href="callto:01979912525" className="call">01979912525</a>
                </div>
                <div className="center d-flex align-items-center">
                    <span className="material-icons-outlined me-1">
                        auto_fix_normal
                    </span>
                    Discover the Power of Nature with NaturoBD
                </div>

                <div className="right d-flex align-items-center">
                    <div className="d-flex align-items-center me-2">
                        <span className="material-icons-outlined me-1">
                            help_outline
                        </span>

                        <a href="tel:8809639812525" title="8809639812525">Customer Help</a>
                    </div>
                    <div>
                        <div className="dropdown lang">
                            <div className="head dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                <img className="flag" src="fontend/img/bd.svg" alt="" loading="lazy"/>
                                <span className="label">EN</span>
                            </div>
                            <ul className="dropdown-menu">
                                <div className="item">
                                    <a className="dropdown-item" href="#">
                                        <img className="flag" src="fontend/img/bd.svg" alt="" loading="lazy"/>
                                        <span className="label">BD</span>
                                    </a>
                                </div>
                                <div className="item">
                                    <a className="dropdown-item" href="#">
                                        <img className="flag" src="fontend/img/us.svg" alt="" loading="lazy"/>
                                        <span className="label">EN</span>
                                    </a>
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
                <a className="navbar-brand" href="index.html">
                    <img className="main-logo" src="fontend/img/logo.svg" alt="" loading="lazy"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse form-menu navbar-collapse" id="navbarSupportedContent">
                    <div className="nav-menu">
                        <form className="d-flex search" role="search" action="https://www.naturobd.com/shop" method="GET">
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
                                  
                                    <div className="tagline"><a href="login.html">Login</a></div>


                                </div>
                            </div>
                            <div className="favorite badge-icon">

                            </div>

                            <a href="order/summery.html" className="cart-area">
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
                            </a>
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
          {/* <div className={styles.slideCaption}>
            <h2>{latestProducts[currentSlide].name}</h2>
            <p>Tk {latestProducts[currentSlide].price}</p>
          </div> */}
        </div>

        <button onClick={handleNextSlide} className={styles.arrowButton}>❯</button>
      </div>
    {/* <div id="bannerCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="storage/2aTveUwF3pCsigDPX7wFtTo3PtSl9kG0hpPbhL5s.jpg" className="d-block w-100" alt="."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>.</h5>
                    <p></p>
                </div>
            </div>
            <div className="carousel-item ">
                <img src="storage/bJy7RZRlWKuya1Ga2i3FMlnPXxel9QeRqlMuI5oh.jpg" className="d-block w-100" alt="."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>.</h5>
                    <p></p>
                </div>
            </div>
            <div className="carousel-item ">
                <img src="storage/lgeJku9NX3JOZSpXIEy5rjENV3zRwadv3dbqUCfC.jpg" className="d-block w-100" alt="."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>.</h5>
                    <p></p>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div> */}


    <section id="trending">
        <div className="container">
            <div className="content">
                <div className="owl-carousel category-carousel">
                    <a className="item" href="shopa8ee.html?category=6">
                        <img className="icon" src="storage/ggaJSilyldtpzB2VAm6YLIcIgVfQbPSiLuGDHIlj.png" alt=""
                            loading="lazy"/>
                        <p className="caption">Trending</p>
                    </a>
                    <a className="item" href="shop2a93.html?category=7">
                        <img className="icon" src="storage/THqSJcY9Jqfhh6jdrPXb9zDC3XmpRuMVO3eiGp8E.png" alt=""
                            loading="lazy"/>
                        <p className="caption">Honey</p>
                    </a>
                    <a className="item" href="shopa771.html?category=8">
                        <img className="icon" src="storage/G392CBn4RHwJiRv0O8FlXUyYkM28QW3J6vRRvEFl.png" alt=""
                            loading="lazy"/>
                        <p className="caption">Herbs</p>
                    </a>
                    <a className="item" href="shop9a33.html?category=9">
                        <img className="icon" src="storage/2dInVJ0aFXSsXs2lm2pZGPlcQJwLojZKwW6iXdG4.png" alt=""
                            loading="lazy"/>
                        <p className="caption">Combo</p>
                    </a>
                    <a className="item" href="shop25f6.html?category=10">
                        <img className="icon" src="storage/moq4gOR8R5l2IFeLD9qAdG1gHcOOKAovO0KtsK8D.png" alt=""
                            loading="lazy"/>
                        <p className="caption">Seeds</p>
                    </a>
                    <a className="item" href="shopefaf.html?category=11">
                        <img className="icon" src="storage/OAjt7XmdsmK56lfSyEVHGjAMYtd0rud2KN5wxLN1.png" alt=""
                            loading="lazy"/>
                        <p className="caption">Nuts</p>
                    </a>
                    <a className="item" href="shop18c9.html?category=12">
                        <img className="icon" src="storage/v65PdkCWnRHfCWvkp4TJxRF1YBAAFxzEOcS7VOe3.png" alt=""
                            loading="lazy"/>
                        <p className="caption">Dates</p>
                    </a>
                    <a className="item" href="shop7b86.html?category=13">
                        <img className="icon" src="storage/kXBlCZ2WrKSjf4FS0sL832u3C7ixnC1isU4u3ar5.png" alt=""
                            loading="lazy"/>
                        <p className="caption">Dry Fruits</p>
                    </a>
                    <a className="item" href="shop0cf4.html?category=14">
                        <img className="icon" src="storage/XnxSkpu2A1AKiEd7L5vhcFn5Xmtcu9EnC2kUhdIq.png" alt=""
                            loading="lazy"/>
                        <p className="caption">Baby Food</p>
                    </a>
                    <a className="item" href="shopd5c2.html?category=15">
                        <img className="icon" src="storage/u5raG6K8XtlFWVhafbELRTuLFGowCp74ivRT7UAv.png" alt=""
                            loading="lazy"/>
                        <p className="caption">Tea</p>
                    </a>
                    <a className="item" href="shope1ed.html?category=16">
                        <img className="icon" src="storage/jHrW3ZPmz6GPGfCDE2n50Xgcl1oGqjXSNLq4uYyx.png" alt=""
                            loading="lazy"/>
                        <p className="caption">Shorbot</p>
                    </a>
                    <a className="item" href="shopca1e.html?category=17">
                        <img className="icon" src="storage/33FEGesIn4f1mBvQv0BjaP8Pt3NyU9yUADxKHuoh.png" alt=""
                            loading="lazy"/>
                        <p className="caption">Ghee &amp; Oil</p>
                    </a>
                    <a className="item" href="shop.html">
                        <img className="icon" src="storage/MLBW7OYh6b80ckWAi2Xo8F4Gv3SbzVE0XbFkJrIS.png" alt=""
                            loading="lazy"/>
                        <p className="caption">All</p>
                    </a>
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
                        <a href="product/arai-mithai.html" className="d-block">
                            <img src={product.featured_image} alt={product.name} loading="lazy"/>
                        </a>
                        <div className="cart-btn">
                            <Link Link to={`/${product.id}`} className="single-link">
                                <span className="material-icons-outlined">
                                    visibility
                                </span>
                            </Link>
                            <form action="https://www.naturobd.com/cart/add-to-cart/70" method="POST">
                                <input type="hidden" name="_token" value="1YuJW0vn4E3kuV79W5ykd06GHt3Q74WIfpzxvtoS"
                                    autocomplete="off"/> <button name="submit" value="add" className="single-link">
                                    <span className="material-icons-outlined">
                                        shopping_cart
                                    </span>
                                </button>

                            </form>
                        </div>
                    </div>
                    <div className="description">
                        <a className="caption d-block" href="product/arai-mithai.html">
                        {product.name}
                        </a>
                        <div className="price">{product.price}</div>
                    </div>
                </div>

            ))}
                <div className="product">
                    <div className="img">
                        <div className="new">New</div>
                        <a href="product/mithai-patali.html" className="d-block">
                            <img src="storage/EkHnVL8o49mB54sIscLXXmyXjhjqdrtyw0MfSs4x.jpg" alt="" loading="lazy"/>
                        </a>
                        <div className="cart-btn">
                            <a href="product/mithai-patali.html" className="single-link">
                                <span className="material-icons-outlined">
                                    visibility
                                </span>
                            </a>
                            <form action="https://www.naturobd.com/cart/add-to-cart/69" method="POST">
                                <input type="hidden" name="_token" value="1YuJW0vn4E3kuV79W5ykd06GHt3Q74WIfpzxvtoS"
                                    autocomplete="off"/> <button name="submit" value="add" className="single-link">
                                    <span className="material-icons-outlined">
                                        shopping_cart
                                    </span>
                                </button>

                            </form>
                        </div>
                    </div>
                    <div className="description">
                        <a className="caption d-block" href="product/mithai-patali.html">
                            Mithai Patali
                        </a>
                        <div className="price">
                            Tk 1,200.00
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="img">
                        <div className="new">New</div>
                        <a href="product/mustard-oil.html" className="d-block">
                            <img src="storage/uif8lGaMuQCqtUMR1HAS9ySjG2qM3HWQWsVkvANM.jpg" alt="" loading="lazy"/>
                        </a>
                        <div className="cart-btn">
                            <a href="product/mustard-oil.html" className="single-link">
                                <span className="material-icons-outlined">
                                    visibility
                                </span>
                            </a>
                            <form action="https://www.naturobd.com/cart/add-to-cart/63" method="POST">
                                <input type="hidden" name="_token" value="1YuJW0vn4E3kuV79W5ykd06GHt3Q74WIfpzxvtoS"
                                    autocomplete="off"/> <button name="submit" value="add" className="single-link">
                                    <span className="material-icons-outlined">
                                        shopping_cart
                                    </span>
                                </button>

                            </form>
                        </div>
                    </div>
                    <div className="description">
                        <a className="caption d-block" href="product/mustard-oil.html">
                            Mustard Oil
                        </a>
                        <div className="price">
                            Tk 1,400.00
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="img">
                        <div className="new">New</div>
                        <a href="product/miswak-powder.html" className="d-block">
                            <img src="storage/8tw3tGsW5po6J2cHdkoTyY2OXgiEob3Wd7bDjrBB.jpg" alt="" loading="lazy"/>
                        </a>
                        <div className="cart-btn">
                            <a href="product/miswak-powder.html" className="single-link">
                                <span className="material-icons-outlined">
                                    visibility
                                </span>
                            </a>
                            <form action="https://www.naturobd.com/cart/add-to-cart/65" method="POST">
                                <input type="hidden" name="_token" value="1YuJW0vn4E3kuV79W5ykd06GHt3Q74WIfpzxvtoS"
                                    autocomplete="off"/> <button name="submit" value="add" className="single-link">
                                    <span className="material-icons-outlined">
                                        shopping_cart
                                    </span>
                                </button>

                            </form>
                        </div>
                    </div>
                    <div className="description">
                        <a className="caption d-block" href="product/miswak-powder.html">
                            Miswak Powder
                        </a>
                        <div className="price">
                            Tk 300.00 -
                            Tk 550.00
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="img">
                        <div className="new">New</div>
                        <a href="product/lemon-mix-moringa-powder.html" className="d-block">
                            <img src="storage/ESy11QkAVrXQP3OB0mLlei7PvqoL1NcxIbjTbubm.jpg" alt="" loading="lazy"/>
                        </a>
                        <div className="cart-btn">
                            <a href="product/lemon-mix-moringa-powder.html" className="single-link">
                                <span className="material-icons-outlined">
                                    visibility
                                </span>
                            </a>
                            <form action="https://www.naturobd.com/cart/add-to-cart/64" method="POST">
                                <input type="hidden" name="_token" value="1YuJW0vn4E3kuV79W5ykd06GHt3Q74WIfpzxvtoS"
                                    autocomplete="off"/> <button name="submit" value="add" className="single-link">
                                    <span className="material-icons-outlined">
                                        shopping_cart
                                    </span>
                                </button>

                            </form>
                        </div>
                    </div>
                    <div className="description">
                        <a className="caption d-block" href="product/lemon-mix-moringa-powder.html">
                            Lemon Mix Moringa Powder
                        </a>
                        <div className="price">
                            Tk 750.00
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="img">
                        <div className="new">New</div>
                        <a href="product/arjun-mix.html" className="d-block">
                            <img src="storage/wAeWTuxSjkruIY2EZZahJYHoWE8s19MvMAeiOnXo.jpg" alt="" loading="lazy"/>
                        </a>
                        <div className="cart-btn">
                            <a href="product/arjun-mix.html" className="single-link">
                                <span className="material-icons-outlined">
                                    visibility
                                </span>
                            </a>
                            <form action="https://www.naturobd.com/cart/add-to-cart/60" method="POST">
                                <input type="hidden" name="_token" value="1YuJW0vn4E3kuV79W5ykd06GHt3Q74WIfpzxvtoS"
                                    autocomplete="off"/> <button name="submit" value="add" className="single-link">
                                    <span className="material-icons-outlined">
                                        shopping_cart
                                    </span>
                                </button>

                            </form>
                        </div>
                    </div>
                    <div className="description">
                        <a className="caption d-block" href="product/arjun-mix.html">
                            Arjun Mix
                        </a>
                        <div className="price">
                            Tk 650.00
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="img">
                        <div className="new">New</div>
                        <a href="product/cardio-care.html" className="d-block">
                            <img src="storage/eFNd882bNnw7Bj4dD8K4ezffV933ZdxJVyd86r3e.jpg" alt="" loading="lazy"/>
                        </a>
                        <div className="cart-btn">
                            <a href="product/cardio-care.html" className="single-link">
                                <span className="material-icons-outlined">
                                    visibility
                                </span>
                            </a>
                            <form action="https://www.naturobd.com/cart/add-to-cart/61" method="POST">
                                <input type="hidden" name="_token" value="1YuJW0vn4E3kuV79W5ykd06GHt3Q74WIfpzxvtoS"
                                    autocomplete="off"/> <button name="submit" value="add" className="single-link">
                                    <span className="material-icons-outlined">
                                        shopping_cart
                                    </span>
                                </button>

                            </form>
                        </div>
                    </div>
                    <div className="description">
                        <a className="caption d-block" href="product/cardio-care.html">
                            Cardio Care
                        </a>
                        <div className="price">
                            Tk 1,050.00
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="img">
                        <div className="new">New</div>
                        <a href="product/cardio-care-combo.html" className="d-block">
                            <img src="storage/v1DFSF60Ml33Db1NFi5mX3AB5imalDCx0HWLGUK4.jpg" alt="" loading="lazy"/>
                        </a>
                        <div className="cart-btn">
                            <a href="product/cardio-care-combo.html" className="single-link">
                                <span className="material-icons-outlined">
                                    visibility
                                </span>
                            </a>
                            <form action="https://www.naturobd.com/cart/add-to-cart/66" method="POST">
                                <input type="hidden" name="_token" value="1YuJW0vn4E3kuV79W5ykd06GHt3Q74WIfpzxvtoS"
                                    autocomplete="off"/> <button name="submit" value="add" className="single-link">
                                    <span className="material-icons-outlined">
                                        shopping_cart
                                    </span>
                                </button>

                            </form>
                        </div>
                    </div>
                    <div className="description">
                        <a className="caption d-block" href="product/cardio-care-combo.html">
                            Cardio Care Combo
                        </a>
                        <div className="price">
                            Tk 1,550.00
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="img">
                        <div className="new">New</div>
                        <a href="product/rose-tea.html" className="d-block">
                            <img src="storage/TOjfhbZfT95GoRQ6ZkhAGHBYxupiXJqGPuESiSRU.jpg" alt="" loading="lazy"/>
                        </a>
                        <div className="cart-btn">
                            <a href="product/rose-tea.html" className="single-link">
                                <span className="material-icons-outlined">
                                    visibility
                                </span>
                            </a>
                            <form action="https://www.naturobd.com/cart/add-to-cart/62" method="POST">
                                <input type="hidden" name="_token" value="1YuJW0vn4E3kuV79W5ykd06GHt3Q74WIfpzxvtoS"
                                    autocomplete="off"/> <button name="submit" value="add" className="single-link">
                                    <span className="material-icons-outlined">
                                        shopping_cart
                                    </span>
                                </button>

                            </form>
                        </div>
                    </div>
                    <div className="description">
                        <a className="caption d-block" href="product/rose-tea.html">
                            Rose Tea
                        </a>
                        <div className="price">
                            Tk 750.00
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="img">
                        <div className="new">New</div>
                        <a href="product/chia-seeds.html" className="d-block">
                            <img src="storage/ngcHidg803HvxyKALNu1t0yDGTMQgYncsygRuQlj.jpg" alt="" loading="lazy"/>
                        </a>
                        <div className="cart-btn">
                            <a href="product/chia-seeds.html" className="single-link">
                                <span className="material-icons-outlined">
                                    visibility
                                </span>
                            </a>
                            <form action="https://www.naturobd.com/cart/add-to-cart/30" method="POST">
                                <input type="hidden" name="_token" value="1YuJW0vn4E3kuV79W5ykd06GHt3Q74WIfpzxvtoS"
                                    autocomplete="off"/> <button name="submit" value="add" className="single-link">
                                    <span className="material-icons-outlined">
                                        shopping_cart
                                    </span>
                                </button>

                            </form>
                        </div>
                    </div>
                    <div className="description">
                        <a className="caption d-block" href="product/chia-seeds.html">
                            Chia Seeds
                        </a>
                        <div className="price">
                            Tk 350.00 -
                            Tk 1,100.00
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="img">
                        <a href="product/sundarban-box-honey.html" className="d-block">
                            <img src="storage/NhHX5Z2L1IYZWHmRLaj7ocWReu5kxf3AaJKCRShX.jpg" alt="" loading="lazy"/>
                        </a>
                        <div className="cart-btn">
                            <a href="product/sundarban-box-honey.html" className="single-link">
                                <span className="material-icons-outlined">
                                    visibility
                                </span>
                            </a>
                            <form action="https://www.naturobd.com/cart/add-to-cart/59" method="POST">
                                <input type="hidden" name="_token" value="1YuJW0vn4E3kuV79W5ykd06GHt3Q74WIfpzxvtoS"
                                    autocomplete="off"/> <button name="submit" value="add" className="single-link">
                                    <span className="material-icons-outlined">
                                        shopping_cart
                                    </span>
                                </button>

                            </form>
                        </div>
                    </div>
                    <div className="description">
                        <a className="caption d-block" href="product/sundarban-box-honey.html">
                            Sundarban Box Honey
                        </a>
                        <div className="price">
                            Tk 1,000.00
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="img">
                        <a href="product/lychee-honey-.html" className="d-block">
                            <img src="storage/MTYqJ7vefOMFDOSuP3fgLY9G6UoDxnHgCAW2nLhD.jpg" alt="" loading="lazy"/>
                        </a>
                        <div className="cart-btn">
                            <a href="product/lychee-honey-.html" className="single-link">
                                <span className="material-icons-outlined">
                                    visibility
                                </span>
                            </a>
                            <form action="https://www.naturobd.com/cart/add-to-cart/25" method="POST">
                                <input type="hidden" name="_token" value="1YuJW0vn4E3kuV79W5ykd06GHt3Q74WIfpzxvtoS"
                                    autocomplete="off"/> <button name="submit" value="add" className="single-link">
                                    <span className="material-icons-outlined">
                                        shopping_cart
                                    </span>
                                </button>

                            </form>
                        </div>
                    </div>
                    <div className="description">
                        <a className="caption d-block" href="product/lychee-honey-.html">
                            Lychee Honey
                        </a>
                        <div className="price">
                            Tk 530.00 -
                            Tk 1,050.00
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="img">
                        <a href="product/sundarban-natural-honey.html" className="d-block">
                            <img src="storage/86nlkZmPi0AFSaaOJAsuXl4okjHZSvMYsuCSBgQn.jpg" alt="" loading="lazy"/>
                        </a>
                        <div className="cart-btn">
                            <a href="product/sundarban-natural-honey.html" className="single-link">
                                <span className="material-icons-outlined">
                                    visibility
                                </span>
                            </a>
                            <form action="https://www.naturobd.com/cart/add-to-cart/13" method="POST">
                                <input type="hidden" name="_token" value="1YuJW0vn4E3kuV79W5ykd06GHt3Q74WIfpzxvtoS"
                                    autocomplete="off"/> <button name="submit" value="add" className="single-link">
                                    <span className="material-icons-outlined">
                                        shopping_cart
                                    </span>
                                </button>

                            </form>
                        </div>
                    </div>
                    <div className="description">
                        <a className="caption d-block" href="product/sundarban-natural-honey.html">
                            Sundarban Natural Honey
                        </a>
                        <div className="price">
                            Tk 800.00 -
                            Tk 1,500.00
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="img">
                        <a href="product/black-honey.html" className="d-block">
                            <img src="storage/DtyliNHjLEqLjrWgTpSFrxQPJlPzJcRJ9sulRAPe.jpg" alt="" loading="lazy"/>
                        </a>
                        <div className="cart-btn">
                            <a href="product/black-honey.html" className="single-link">
                                <span className="material-icons-outlined">
                                    visibility
                                </span>
                            </a>
                            <form action="https://www.naturobd.com/cart/add-to-cart/12" method="POST">
                                <input type="hidden" name="_token" value="1YuJW0vn4E3kuV79W5ykd06GHt3Q74WIfpzxvtoS"
                                    autocomplete="off"/> <button name="submit" value="add" className="single-link">
                                    <span className="material-icons-outlined">
                                        shopping_cart
                                    </span>
                                </button>

                            </form>
                        </div>
                    </div>
                    <div className="description">
                        <a className="caption d-block" href="product/black-honey.html">
                            Black Honey
                        </a>
                        <div className="price">
                            Tk 800.00 -
                            Tk 1,450.00
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="img">
                        <a href="product/mustard-honey-box.html" className="d-block">
                            <img src="storage/Tf88nVpWMdLLMndgTwFTNoh89TuCj2buS3UgYprG.jpg" alt="" loading="lazy"/>
                        </a>
                        <div className="cart-btn">
                            <a href="product/mustard-honey-box.html" className="single-link">
                                <span className="material-icons-outlined">
                                    visibility
                                </span>
                            </a>
                            <form action="https://www.naturobd.com/cart/add-to-cart/14" method="POST">
                                <input type="hidden" name="_token" value="1YuJW0vn4E3kuV79W5ykd06GHt3Q74WIfpzxvtoS"
                                    autocomplete="off"/> <button name="submit" value="add" className="single-link">
                                    <span className="material-icons-outlined">
                                        shopping_cart
                                    </span>
                                </button>

                            </form>
                        </div>
                    </div>
                    <div className="description">
                        <a className="caption d-block" href="product/mustard-honey-box.html">
                            Mustard Honey
                        </a>
                        <div className="price">
                            Tk 600.00 -
                            Tk 1,100.00
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="img">
                        <a href="product/ratione-quidem-suscipit-eaque-suscipit.html" className="d-block">
                            <img src="storage/HxPhtLrVGDOYpez5gayTMFk7St7FkTREcvOJ92VC.jpg" alt="" loading="lazy"/>
                        </a>
                        <div className="cart-btn">
                            <a href="product/ratione-quidem-suscipit-eaque-suscipit.html" className="single-link">
                                <span className="material-icons-outlined">
                                    visibility
                                </span>
                            </a>
                            <form action="https://www.naturobd.com/cart/add-to-cart/2" method="POST">
                                <input type="hidden" name="_token" value="1YuJW0vn4E3kuV79W5ykd06GHt3Q74WIfpzxvtoS"
                                    autocomplete="off"/> <button name="submit" value="add" className="single-link">
                                    <span className="material-icons-outlined">
                                        shopping_cart
                                    </span>
                                </button>

                            </form>
                        </div>
                    </div>
                    <div className="description">
                        <a className="caption d-block" href="product/ratione-quidem-suscipit-eaque-suscipit.html">
                            Brown Sugar
                        </a>
                        <div className="price">
                            Tk 1,050.00
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="img">
                        <a href="product/gawa-ghee.html" className="d-block">
                            <img src="storage/CSxpIDwWSygnFHtw50ccsKH67b0sNMdYE08o11nQ.jpg" alt="" loading="lazy"/>
                        </a>
                        <div className="cart-btn">
                            <a href="product/gawa-ghee.html" className="single-link">
                                <span className="material-icons-outlined">
                                    visibility
                                </span>
                            </a>
                            <form action="https://www.naturobd.com/cart/add-to-cart/16" method="POST">
                                <input type="hidden" name="_token" value="1YuJW0vn4E3kuV79W5ykd06GHt3Q74WIfpzxvtoS"
                                    autocomplete="off"/> <button name="submit" value="add" className="single-link">
                                    <span className="material-icons-outlined">
                                        shopping_cart
                                    </span>
                                </button>

                            </form>
                        </div>
                    </div>
                    <div className="description">
                        <a className="caption d-block" href="product/gawa-ghee.html">
                            Gawa Ghee
                        </a>
                        <div className="price">
                            Tk 800.00 -
                            Tk 1,500.00
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="img">
                        <a href="product/garlic-honey.html" className="d-block">
                            <img src="storage/DJcli4amh24EsRIgGSkj5PAWyIZtCQd7R2UfLTY7.jpg" alt="" loading="lazy"/>
                        </a>
                        <div className="cart-btn">
                            <a href="product/garlic-honey.html" className="single-link">
                                <span className="material-icons-outlined">
                                    visibility
                                </span>
                            </a>
                            <form action="https://www.naturobd.com/cart/add-to-cart/15" method="POST">
                                <input type="hidden" name="_token" value="1YuJW0vn4E3kuV79W5ykd06GHt3Q74WIfpzxvtoS"
                                    autocomplete="off"/> <button name="submit" value="add" className="single-link">
                                    <span className="material-icons-outlined">
                                        shopping_cart
                                    </span>
                                </button>

                            </form>
                        </div>
                    </div>
                    <div className="description">
                        <a className="caption d-block" href="product/garlic-honey.html">
                            Garlic Honey
                        </a>
                        <div className="price">
                            Tk 700.00 -
                            Tk 1,350.00
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="img">
                        <a href="product/honey-nut.html" className="d-block">
                            <img src="storage/OLy3a33VVeKvrDtIOwNdHgAP3GUvnT70EIoAe1gS.jpg" alt="" loading="lazy"/>
                        </a>
                        <div className="cart-btn">
                            <a href="product/honey-nut.html" className="single-link">
                                <span className="material-icons-outlined">
                                    visibility
                                </span>
                            </a>
                            <form action="https://www.naturobd.com/cart/add-to-cart/24" method="POST">
                                <input type="hidden" name="_token" value="1YuJW0vn4E3kuV79W5ykd06GHt3Q74WIfpzxvtoS"
                                    autocomplete="off"/> <button name="submit" value="add" className="single-link">
                                    <span className="material-icons-outlined">
                                        shopping_cart
                                    </span>
                                </button>

                            </form>
                        </div>
                    </div>
                    <div className="description">
                        <a className="caption d-block" href="product/honey-nut.html">
                            Honey Nut
                        </a>
                        <div className="price">
                            Tk 650.00 -
                            Tk 1,200.00
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="img">
                        <div className="new">New</div>
                        <a href="product/pilu-miswak.html" className="d-block">
                            <img src="storage/PVRbKLiRaXcpMuIs4gKswVHa83FIkYD296nCOYmq.jpg" alt="" loading="lazy"/>
                        </a>
                        <div className="cart-btn">
                            <a href="product/pilu-miswak.html" className="single-link">
                                <span className="material-icons-outlined">
                                    visibility
                                </span>
                            </a>
                            <form action="https://www.naturobd.com/cart/add-to-cart/68" method="POST">
                                <input type="hidden" name="_token" value="1YuJW0vn4E3kuV79W5ykd06GHt3Q74WIfpzxvtoS"
                                    autocomplete="off"/> <button name="submit" value="add" className="single-link">
                                    <span className="material-icons-outlined">
                                        shopping_cart
                                    </span>
                                </button>

                            </form>
                        </div>
                    </div>
                    <div className="description">
                        <a className="caption d-block" href="product/pilu-miswak.html">
                            Pilu Miswak
                        </a>
                        <div className="price">
                            Tk 20.00 -
                            Tk 20.00
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="img">
                        <a href="product/beej-honey-combo.html" className="d-block">
                            <img src="storage/emJID79GK41SCdaIngibMptSVPo1ZWR8ChDm15yi.jpg" alt="" loading="lazy"/>
                        </a>
                        <div className="cart-btn">
                            <a href="product/beej-honey-combo.html" className="single-link">
                                <span className="material-icons-outlined">
                                    visibility
                                </span>
                            </a>
                            <form action="https://www.naturobd.com/cart/add-to-cart/17" method="POST">
                                <input type="hidden" name="_token" value="1YuJW0vn4E3kuV79W5ykd06GHt3Q74WIfpzxvtoS"
                                    autocomplete="off"/> <button name="submit" value="add" className="single-link">
                                    <span className="material-icons-outlined">
                                        shopping_cart
                                    </span>
                                </button>

                            </form>
                        </div>
                    </div>
                    <div className="description">
                        <a className="caption d-block" href="product/beej-honey-combo.html">
                            Beej Honey Combo
                        </a>
                        <div className="price">
                            Tk 950.00
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="img">
                        <a href="product/moringa-powder.html" className="d-block">
                            <img src="storage/RVVmyOM7YyDmNutnaWFhqUolBNFSnJalfRifWNwF.jpg" alt="" loading="lazy"/>
                        </a>
                        <div className="cart-btn">
                            <a href="product/moringa-powder.html" className="single-link">
                                <span className="material-icons-outlined">
                                    visibility
                                </span>
                            </a>
                            <form action="https://www.naturobd.com/cart/add-to-cart/19" method="POST">
                                <input type="hidden" name="_token" value="1YuJW0vn4E3kuV79W5ykd06GHt3Q74WIfpzxvtoS"
                                    autocomplete="off"/> <button name="submit" value="add" className="single-link">
                                    <span className="material-icons-outlined">
                                        shopping_cart
                                    </span>
                                </button>

                            </form>
                        </div>
                    </div>
                    <div className="description">
                        <a className="caption d-block" href="product/moringa-powder.html">
                            Moringa Powder
                        </a>
                        <div className="price">
                            Tk 600.00
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="img">
                        <div className="new">New</div>
                        <a href="product/moringa-tablet.html" className="d-block">
                            <img src="storage/lUqReHzR059oG7roYC8a7VCon0toKLBio2DEEKLT.jpg" alt="" loading="lazy"/>
                        </a>
                        <div className="cart-btn">
                            <a href="product/moringa-tablet.html" className="single-link">
                                <span className="material-icons-outlined">
                                    visibility
                                </span>
                            </a>
                            <form action="https://www.naturobd.com/cart/add-to-cart/67" method="POST">
                                <input type="hidden" name="_token" value="1YuJW0vn4E3kuV79W5ykd06GHt3Q74WIfpzxvtoS"
                                    autocomplete="off"/> <button name="submit" value="add" className="single-link">
                                    <span className="material-icons-outlined">
                                        shopping_cart
                                    </span>
                                </button>

                            </form>
                        </div>
                    </div>
                    <div className="description">
                        <a className="caption d-block" href="product/moringa-tablet.html">
                            Moringa Tablet
                        </a>
                        <div className="price">
                            Tk 1,350.00
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="img">
                        <a href="product/josthimodhu.html" className="d-block">
                            <img src="storage/J6HHWyTvQ4KeIh59hw2le9iO6IV01D78WcNYnhbr.jpg" alt="" loading="lazy"/>
                        </a>
                        <div className="cart-btn">
                            <a href="product/josthimodhu.html" className="single-link">
                                <span className="material-icons-outlined">
                                    visibility
                                </span>
                            </a>
                            <form action="https://www.naturobd.com/cart/add-to-cart/20" method="POST">
                                <input type="hidden" name="_token" value="1YuJW0vn4E3kuV79W5ykd06GHt3Q74WIfpzxvtoS"
                                    autocomplete="off"/> <button name="submit" value="add" className="single-link">
                                    <span className="material-icons-outlined">
                                        shopping_cart
                                    </span>
                                </button>

                            </form>
                        </div>
                    </div>
                    <div className="description">
                        <a className="caption d-block" href="product/josthimodhu.html">
                            Josthimodhu
                        </a>
                        <div className="price">
                            Tk 450.00 -
                            Tk 850.00
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="img">
                        <a href="product/ashwagandha.html" className="d-block">
                            <img src="storage/edZJMuu4L7eumoZKjxQ6uAewXAchR8nEfeWkOngX.jpg" alt="" loading="lazy"/>
                        </a>
                        <div className="cart-btn">
                            <a href="product/ashwagandha.html" className="single-link">
                                <span className="material-icons-outlined">
                                    visibility
                                </span>
                            </a>
                            <form action="https://www.naturobd.com/cart/add-to-cart/21" method="POST">
                                <input type="hidden" name="_token" value="1YuJW0vn4E3kuV79W5ykd06GHt3Q74WIfpzxvtoS"
                                    autocomplete="off"/> <button name="submit" value="add" className="single-link">
                                    <span className="material-icons-outlined">
                                        shopping_cart
                                    </span>
                                </button>

                            </form>
                        </div>
                    </div>
                    <div className="description">
                        <a className="caption d-block" href="product/ashwagandha.html">
                            Ashwagandha
                        </a>
                        <div className="price">
                            Tk 600.00 -
                            Tk 1,050.00
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="img">
                        <a href="product/grow-up-baby-milk-shake.html" className="d-block">
                            <img src="storage/TTONviQ9zNhYM38jFF4EMQDO194YzXvdkPENa3d5.jpg" alt="" loading="lazy"/>
                        </a>
                        <div className="cart-btn">
                            <a href="product/grow-up-baby-milk-shake.html" className="single-link">
                                <span className="material-icons-outlined">
                                    visibility
                                </span>
                            </a>
                            <form action="https://www.naturobd.com/cart/add-to-cart/22" method="POST">
                                <input type="hidden" name="_token" value="1YuJW0vn4E3kuV79W5ykd06GHt3Q74WIfpzxvtoS"
                                    autocomplete="off"/> <button name="submit" value="add" className="single-link">
                                    <span className="material-icons-outlined">
                                        shopping_cart
                                    </span>
                                </button>

                            </form>
                        </div>
                    </div>
                    <div className="description">
                        <a className="caption d-block" href="product/grow-up-baby-milk-shake.html">
                            Grow Up Baby Milk Shake
                        </a>
                        <div className="price">
                            Tk 850.00
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="img">
                        <a href="product/shilajut.html" className="d-block">
                            <img src="storage/7gLWIgUpSP8zLnoiXJxkQ223px2rIkR4e3CM1Z0h.jpg" alt="" loading="lazy"/>
                        </a>
                        <div className="cart-btn">
                            <a href="product/shilajut.html" className="single-link">
                                <span className="material-icons-outlined">
                                    visibility
                                </span>
                            </a>
                            <form action="https://www.naturobd.com/cart/add-to-cart/36" method="POST">
                                <input type="hidden" name="_token" value="1YuJW0vn4E3kuV79W5ykd06GHt3Q74WIfpzxvtoS"
                                    autocomplete="off"/> <button name="submit" value="add" className="single-link">
                                    <span className="material-icons-outlined">
                                        shopping_cart
                                    </span>
                                </button>

                            </form>
                        </div>
                    </div>
                    <div className="description">
                        <a className="caption d-block" href="product/shilajut.html">
                            ShilaJut
                        </a>
                        <div className="price">
                            Tk 4,200.00
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="img">
                        <a href="product/chia-honey-combo.html" className="d-block">
                            <img src="storage/nkoFiSXgJGIg1NjmNe2aj1G4NF1FnDOvy7JrsERP.jpg" alt="" loading="lazy"/>
                        </a>
                        <div className="cart-btn">
                            <a href="product/chia-honey-combo.html" className="single-link">
                                <span className="material-icons-outlined">
                                    visibility
                                </span>
                            </a>
                            <form action="https://www.naturobd.com/cart/add-to-cart/39" method="POST">
                                <input type="hidden" name="_token" value="1YuJW0vn4E3kuV79W5ykd06GHt3Q74WIfpzxvtoS"
                                    autocomplete="off"/> <button name="submit" value="add" className="single-link">
                                    <span className="material-icons-outlined">
                                        shopping_cart
                                    </span>
                                </button>

                            </form>
                        </div>
                    </div>
                    <div className="description">
                        <a className="caption d-block" href="product/chia-honey-combo.html">
                            Chia Honey Combo
                        </a>
                        <div className="price">
                            Tk 900.00
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="img">
                        <a href="product/bujidana.html" className="d-block">
                            <img src="storage/yFnYvwQPUWIhv81UN2pBerBiMItAsNvdzDUICnoV.jpg" alt="" loading="lazy"/>
                        </a>
                        <div className="cart-btn">
                            <a href="product/bujidana.html" className="single-link">
                                <span className="material-icons-outlined">
                                    visibility
                                </span>
                            </a>
                            <form action="https://www.naturobd.com/cart/add-to-cart/47" method="POST">
                                <input type="hidden" name="_token" value="1YuJW0vn4E3kuV79W5ykd06GHt3Q74WIfpzxvtoS"
                                    autocomplete="off"/> <button name="submit" value="add" className="single-link">
                                    <span className="material-icons-outlined">
                                        shopping_cart
                                    </span>
                                </button>

                            </form>
                        </div>
                    </div>
                    <div className="description">
                        <a className="caption d-block" href="product/bujidana.html">
                            BujiDana
                        </a>
                        <div className="price">
                            Tk 2,500.00
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="img">
                        <a href="product/seed-shorbot.html" className="d-block">
                            <img src="storage/TfkShSekiD9xhpDcHD5V5Q6G3gj0n31oSFoASNqE.jpg" alt="" loading="lazy"/>
                        </a>
                        <div className="cart-btn">
                            <a href="product/seed-shorbot.html" className="single-link">
                                <span className="material-icons-outlined">
                                    visibility
                                </span>
                            </a>
                            <form action="https://www.naturobd.com/cart/add-to-cart/50" method="POST">
                                <input type="hidden" name="_token" value="1YuJW0vn4E3kuV79W5ykd06GHt3Q74WIfpzxvtoS"
                                    autocomplete="off"/> <button name="submit" value="add" className="single-link">
                                    <span className="material-icons-outlined">
                                        shopping_cart
                                    </span>
                                </button>

                            </form>
                        </div>
                    </div>
                    <div className="description">
                        <a className="caption d-block" href="product/seed-shorbot.html">
                            Seed Shorbot
                        </a>
                        <div className="price">
                            Tk 550.00 -
                            Tk 1,050.00
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <a href="shop.html" className="btn more-btn">
                    More Product
                    <span className="material-icons-outlined">
                        chevron_right
                    </span>
                </a>
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
                            <a href="#" className="btn more-btn">
                                Find More On Blog
                                <span className="material-icons-outlined">
                                    chevron_right
                                </span>
                            </a>
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
                    <a href="testimonial.html" className="btn more-btn">
                        See More
                        <span className="material-icons-outlined">
                            chevron_right
                        </span>
                    </a>
                </div>

            </div>
        </div>
    </section>

    <footer id="footer">
            <div class="container-fluid">
                <div class="content">
                    <div class="logo-section">
                        <img class="footer-logo" src="fontend/img/footer-logo.svg"/>

                        <div class="contacts">
                            <div class="contact">
                                <span class="material-icons-outlined">
                                    phone
                                </span>
                                <a href="tel:09639812525" class="text">09639-812525</a>
                            </div>
                            <div class="contact">
                                <span class="material-icons-outlined">
                                    email
                                </span>
                                <a href="mailto:helpdesk@naturo.com" class="text">helpdesk@naturo.com</a>

                            </div>
                            <div class="contact">
                                <span class="material-icons-outlined">
                                    place
                                </span>
                                <span class="text">
                                    <div class="head">Dhaka Office</div>

                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="help-section">
                        <div>
                            <p class="head">Help</p>

                            <a href="pages/help-support.html" class="link">Help &amp;
                                Support</a>
                            <a href="exchange-and-refund-policy.html" class="link">Refund Policy</a>
          


                        </div>
                    </div>

                    <div class="link-section">
                        <div>

                            <a href="pages/blogs.html" class="link">Blogs</a>
                            <a href="pages/contact-us.html" class="link">Contact Us</a>
                            <a href="pages/sitemap.html" class="link">Our Sitemap</a>
                            <a href="pages/wishlist.html" class="link">Wishlist</a>
                            <a href="pages/my-order-history.html" class="link">Order History</a>
                          

                        </div>
                    </div>

                    <div class="product-section">
                        <div>
                            <p class="head">Products</p>
                            <a href="pages/shop.html" class="link">Honey &amp; Dates</a>
                            <a href="pages/honey%20-dates.html" class="link">Hair &amp; Skin Care</a>
                            <a href="pages/finest-herbs.html" class="link">Finest Herbs</a>
                            <a href="pages/nut-seeds.html" class="link">Nut &amp; Seeds</a>
                            <a href="pages/organic-oil%20-ghee.html" class="link">Organic Oil &amp; Ghee</a>
                            <a href="pages/energy-essentials.html" class="link">Energy Essentials</a>
                           

                        </div>
                    </div>

                    <div class="payment-section">
                        <div>
                            <p class="head">We Accepts</p>
                            <img src="fontend/img/ssl_comerge.png" alt="" loading="lazy"/>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer-bottom">
                <div class="container-fluid">
                    <div class="content">
                        <div class="copyright">
                            &copy; 2024 Naturo All rights reserved. Developed by <a href="https://webspreed.com/"
                                title="+8801722878226">Webspreed</a>

                        </div>
                        <div class="menu">
                            <a href="pages/terms.html">Terms</a>
                            <a href="pages/privacy.html">Privacy</a>
                            <a href="pages/cookie-policy.html">Cookie Policy</a>
                      

                        </div>
                        <div class="d-flex align-items-center right">
                            <div class="title">
                                Find Us On
                            </div>
                            <div class="social">

                                <a href="https://www.facebook.com/naturobd" class="social-link">
                                    <img src="fontend/img/facebook.svg" alt="" loading="lazy"/>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    </div>
  );
}
