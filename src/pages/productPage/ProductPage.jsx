import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";


function ProductPage() {
  const {data} = useSelector((state)=>state.product)
  const { t } = useTranslation();
  const [item, setItem] = useState({});

  const { id } = useParams();

  const [dataa, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8]);


  useEffect(() => {
    const isData= data.filter(x=>x.uuid==id)
    setItem(isData[0])
  }, [id]);
  return (
    <div className="no_body">
      <Navbar/>
    <section className="product-page">
      <div className="container product-content-container">
        <div className="product-page-text">
          <h2>{t("queried")}</h2>
        </div>
        <div className="product-content-image">
          <img
            src={item.logo}
            alt=""
          />
          <div className="product-content-image-text">
            {/* <div className="product-content-image-text-p"> */}
            <p>{item.brand}</p>
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="container">
        <Link to="/" className="product-content-search">
          <p>{t("search")}</p>
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
                dataa.map((el)=>(
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
    </section>
    </div>
  );
}

export default ProductPage;
