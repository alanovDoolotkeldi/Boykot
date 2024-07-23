import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Element() {
    const {value} = useSelector((state)=>state.value)
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.product);
  const [item , setItem]= useState([])

  useEffect(()=>{
     const isData = data.filter(x=>x.brand.toLowerCase().startsWith(value.toLowerCase()))
    setItem(isData)
  },[value,data])
  return (
    <section>
      <div className="container block-container">
        <div className="blocks">
          <div className="block">
            <div className="block-brand">
              <h1>{t("marka")}</h1>
            </div>
            <div className="block-logo">
              <h1>{t("logo")}</h1>
            </div>
            <div className="block-category">
              <h1>{t("situation")}</h1>
            </div>
            <div className="block-why">
              <h1>{t("why")}</h1>
            </div>
            <div className="block-alternative">
              <h1>{t("alternative")}</h1>
            </div>
          </div>
          {item.map((el) => (
            <>
              <div key={el.uuid} className="block">
                <div className="block-brand">
                  <h2>{el.brand}</h2>
                </div>
                <div className="block-logo">
                  <div className="block-logo-image">
                    <img
                      src={el.logo}
                      alt=""
                    />
                  </div>
                </div>
                <div className="block-category">
                  <h2>
                    {t("uyogun").slice(0, 6)} <br /> {t("uyogun").slice(6, 10)}
                  </h2>
                </div>
                <Link to={`/texts/${el.uuid}`} className="block-why">
                  <button>{t("why1")}</button>
                </Link>
                <Link to={`/products/${el.uuid}`} className="block-alternative">
                  <button>
                    Alnetifi gor <i className="fa fa-eye"></i>
                  </button>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Element;
