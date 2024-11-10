import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div>
          <header id="nav">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <Link className="navbar-brand" to="index.html">
              <img
                className="main-logo"
                src="fontend/img/softexel-logofibal-1.webp"
                alt=""
                style={{ width: "200px" }}
                loading="lazy"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse form-menu navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="nav-menu">
                <form
                  className="d-flex search"
                  role="search"
                  action="https://www.softexel.com/shop"
                  method="GET"
                >
                  <div className="input-group">
                    <span className="input-group-text">
                      <span className="material-icons-outlined">search</span>
                    </span>
                    <input
                      className="form-control"
                      type="search"
                      name="search"
                      placeholder="Search in Naturo"
                    />
                    <button className="btn input-group-text search-btn">
                      Search
                    </button>
                  </div>
                </form>
                <div className="right">
                  <div className="user-info">
                    <div className="name">
                      <div className="tagline">
                        <Link to="login.html">Login</Link>
                      </div>
                    </div>
                  </div>
                  <div className="favorite badge-icon"></div>

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
                      <div></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      
    </div>
  )
}

export default Header
