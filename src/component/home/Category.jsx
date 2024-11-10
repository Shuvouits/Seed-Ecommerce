import React from "react";
import { useParams, Link } from "react-router-dom";

function Category() {
  return (
    <div>
      <section id="trending">
        <div className="container">
          <div className="content">
            <div className="owl-carousel category-carousel owl-loaded owl-drag">
              <Link className="item" to="#">
                <img
                  className="icon"
                  src="storage/ggaJSilyldtpzB2VAm6YLIcIgVfQbPSiLuGDHIlj.png"
                  alt=""
                  loading="lazy"
                />
                <p className="caption">Trending</p>
              </Link>
              <Link className="item" to="#7">
                <img
                  className="icon"
                  src="storage/THqSJcY9Jqfhh6jdrPXb9zDC3XmpRuMVO3eiGp8E.png"
                  alt=""
                  loading="lazy"
                />
                <p className="caption">Honey</p>
              </Link>
              <Link className="item" to="#">
                <img
                  className="icon"
                  src="storage/G392CBn4RHwJiRv0O8FlXUyYkM28QW3J6vRRvEFl.png"
                  alt=""
                  loading="lazy"
                />
                <p className="caption">Herbs</p>
              </Link>
              <Link className="item" to="#">
                <img
                  className="icon"
                  src="storage/2dInVJ0aFXSsXs2lm2pZGPlcQJwLojZKwW6iXdG4.png"
                  alt=""
                  loading="lazy"
                />
                <p className="caption">Combo</p>
              </Link>
              <Link className="item" to="#">
                <img
                  className="icon"
                  src="storage/moq4gOR8R5l2IFeLD9qAdG1gHcOOKAovO0KtsK8D.png"
                  alt=""
                  loading="lazy"
                />
                <p className="caption">Seeds</p>
              </Link>
              <Link className="item" to="#">
                <img
                  className="icon"
                  src="storage/OAjt7XmdsmK56lfSyEVHGjAMYtd0rud2KN5wxLN1.png"
                  alt=""
                  loading="lazy"
                />
                <p className="caption">Nuts</p>
              </Link>
              <Link className="item" to="#">
                <img
                  className="icon"
                  src="storage/v65PdkCWnRHfCWvkp4TJxRF1YBAAFxzEOcS7VOe3.png"
                  alt=""
                  loading="lazy"
                />
                <p className="caption">Dates</p>
              </Link>
              <Link className="item" to="#">
                <img
                  className="icon"
                  src="storage/kXBlCZ2WrKSjf4FS0sL832u3C7ixnC1isU4u3ar5.png"
                  alt=""
                  loading="lazy"
                />
                <p className="caption">Dry Fruits</p>
              </Link>
              <Link className="item" to="#">
                <img
                  className="icon"
                  src="storage/XnxSkpu2A1AKiEd7L5vhcFn5Xmtcu9EnC2kUhdIq.png"
                  alt=""
                  loading="lazy"
                />
                <p className="caption">Baby Food</p>
              </Link>
              <Link className="item" to="#">
                <img
                  className="icon"
                  src="storage/u5raG6K8XtlFWVhafbELRTuLFGowCp74ivRT7UAv.png"
                  alt=""
                  loading="lazy"
                />
                <p className="caption">Tea</p>
              </Link>
              <Link className="item" to="#">
                <img
                  className="icon"
                  src="storage/jHrW3ZPmz6GPGfCDE2n50Xgcl1oGqjXSNLq4uYyx.png"
                  alt=""
                  loading="lazy"
                />
                <p className="caption">Shorbot</p>
              </Link>
              <Link className="item" to="#">
                <img
                  className="icon"
                  src="storage/33FEGesIn4f1mBvQv0BjaP8Pt3NyU9yUADxKHuoh.png"
                  alt=""
                  loading="lazy"
                />
                <p className="caption">Ghee &amp; Oil</p>
              </Link>
              <Link className="item" to="#">
                <img
                  className="icon"
                  src="storage/MLBW7OYh6b80ckWAi2Xo8F4Gv3SbzVE0XbFkJrIS.png"
                  alt=""
                  loading="lazy"
                />
                <p className="caption">All</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Category;
