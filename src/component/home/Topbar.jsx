import React from "react";
import {Link} from 'react-router-dom';

function Topbar() {
  return (
    <div>
      <div>
        <Link className="call-to-btn" to="tel:01601901566">
          <span className="material-icons-outlined me-1">call</span>
          01601901566
        </Link>
      </div>

      <section id="top">
        <div className="container">
          <div className="content">
            <div className="left d-flex align-items-center">
              <span className="material-icons-outlined me-1">call</span>
              <Link to="callto:01601901566" className="call">
                01601901566
              </Link>
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

                <Link to="tel:8801601901566" title="8801601901566">
                  Customer Help
                </Link>
              </div>
              <div>
                <div className="dropdown lang">
                  <div
                    className="head dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    <img
                      className="flag"
                      src="fontend/img/bd.svg"
                      alt=""
                      loading="lazy"
                    />
                    <span className="label">EN</span>
                  </div>
                  <ul className="dropdown-menu">
                    <div className="item">
                      <Link className="dropdown-item" to="#">
                        <img
                          className="flag"
                          src="fontend/img/bd.svg"
                          alt=""
                          loading="lazy"
                        />
                        <span className="label">BD</span>
                      </Link>
                    </div>
                    <div className="item">
                      <Link className="dropdown-item" to="#">
                        <img
                          className="flag"
                          src="fontend/img/us.svg"
                          alt=""
                          loading="lazy"
                        />
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
    </div>
  );
}

export default Topbar;
