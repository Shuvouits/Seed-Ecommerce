import React from "react";
import { useParams, Link } from 'react-router-dom';

function Care() {
  return (
    <div>
      <section id="care">
        <div className="overlay">
          <div className="container-fluid">
            <div className="content">
              <div className="">
                <h2 className="title">We CARE</h2>
                <p className="tagline">
                  The more we care for the earth, the better our product
                </p>
                <div className="cares">
                  <div className="care">
                    <img
                      className="care-img"
                      src="storage/FSVgff54fZUuxsodKuyOKViYRGBa69JpkmNP3IgR.png"
                      alt=""
                      loading="lazy"
                    />
                  </div>

                  <div className="care">
                    <img
                      className="care-img"
                      src="storage/Qm6Iv0lZQ1kwVbKPTTNibROyZEvpC1kvh0xaKkqS.png"
                      alt=""
                      loading="lazy"
                    />
                  </div>

                  <div className="care">
                    <img
                      className="care-img"
                      src="storage/yeo3M3DYnbWhXxZt80fAcGipICs4aJ8jVjSYoal9.png"
                      alt=""
                      loading="lazy"
                    />
                  </div>

                  <div className="care">
                    <img
                      className="care-img"
                      src="storage/6Ei1RZyUJGDeW8FgN64ZEEykWotkDDI4HtqFceE1.png"
                      alt=""
                      loading="lazy"
                    />
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
    </div>
  );
}

export default Care;
