import React, { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";

function Element() {
  const { value } = useSelector((state) => state.value);
  const { t } = useTranslation();
  const { data } = useSelector((state) => state.product);
  const [item, setItem] = useState([]);
  const handleSearch = useCallback(
    
    debounce((searchValue) => {
    
      if (Array.isArray(data)) {
        const filteredData = data.filter((x) =>
          x.brand.toLowerCase().includes(searchValue.toLowerCase())
        );
        setItem(filteredData);
      } else {
        console.error("Data is not an array:", data);
        setItem([]);
      }
    }, 300), // Adjust debounce delay as needed
    
    [data]
  );

  // Trigger the debounced search when `value` changes
  useEffect(() => {
    
    handleSearch(value);
  }, [value, handleSearch]);

  return (
    <>
       {
      data===null ? <h1>Loading...</h1>:    <section>
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
            <div key={el.uuid} className="block">
              <div className="block-brand">
                <h2>{el.brand}</h2>
              </div>
              <div className="block-logo">
                <div className="block-logo-image">
                  <img src={el.logo} alt={el.brand} />
                </div>
              </div>
              <div className="block-category">
                <div className={el.status ? "block-category-image" : "block-category-image-2"}>
                  <img
                    src={el.status
                      ? "../../../public/istockphoto-466612830-612x612-removebg-preview.png"
                      : "../../../public/maxresdefault-removebg-preview.png"}
                    alt=""
                  />
                </div>
              </div>
              <Link to={el.status&&`/texts/${el.uuid}`} className="block-why">
                <button className={el.status?"":"button-no"}>{t("why1")}</button>
              </Link>
              <Link to={el.status&&`/products/${el.uuid}`} className="block-alternative">
                <button className={el.status?"":"button-no"}>
                  {t("alternative")} <i className="fa fa-eye"></i>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
    }
    </>

  );
}

export default Element;
