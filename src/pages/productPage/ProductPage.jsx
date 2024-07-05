import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProductPage() {
    const [data , setData] = useState([1,2,3,4])
  return (
    <div className="product-page">
      <div className="container product-content-container">
        <div className="product-page-text">
          <h2>Sorgulanan Marka</h2>
        </div>
        <div className="product-content-image">
          <img
            src="https://boykotyolu.com.tr/markalar/658ec3b6eae0f.png"
            alt=""
          />
          <div className="product-content-image-text">
            {/* <div className="product-content-image-text-p"> */}
            <p>Aligar</p>
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="container">
        <Link to="/" className="product-content-search">
          <p>Yeni Sorgu</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path>
          </svg>
        </Link>
        <div className="product-blocks">
            {/* <div className="product-block-container"> */}
            {
                data.map((el)=>(
                    <>
                              <div className="product-block">
            <div className="product-block-image">
            <img src="https://boykotyolu.com.tr/markalar/658eac128cd14.png" alt="" />
            </div>
            <div className="product-block-text">
                <h2>Ercan Burger</h2>
            </div>
          </div>
                    </>
                ))
            }


            {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
