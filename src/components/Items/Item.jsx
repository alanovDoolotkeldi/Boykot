import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useSelector } from "react-redux";
function Item() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {data} = useSelector((state)=>state.product)
  // const [products, setProducts] = useState([]);
    const [products, setProducts] = useState([]);

  // async function getService() {
  //   try {
  //     const res = await axios.get("http://159.223.230.188/api/v1/products/")
  //     setProducts(res.data); // Сохраните данные в состоянии
  //     console.log(res)
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //   }
  // }

  // useEffect(() => {
  //   axios.get('/api/v1/products')
  //     .then((response) => {
  //       setProducts(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching products:', error);
  //     });
  // }, []);



  return (
    <section>
      <div className="container item-container">
        <div className="blocks">
          <div className="block block-2">
            <div className="block-text">
              <h1>{t("marka")}</h1>
            </div>
            <div className="block-info">
              <div className="block-content">
                <div className="block-logo">
                  <h1>{t("logo")}</h1>
                </div>
                <div className="block-category">
                  <h1>{t("situation")}</h1>
                </div>
              </div>
              <div className="block-button">
                <h2>{t("why1")}</h2>
                <h3>{t("alternative")}</h3>
              </div>
            </div>
          </div>
          {data.map((el) => (
            <div className="block" key={el.id}>
              <div className="block-text">
                <h2>{el.brand}</h2>
              </div>
              <div className="block-info">
                <div className="block-content">
                  <div className="block-logo block-logo-image">
                    <img src={el.logo} alt={el.logo} />
                  </div>
                  <div className="block-category">
                    <h2 className={el.status ? "boykotlu" : "uygun"}>
                      {el.status ? t("uyogun").slice(0,6) : "Uygun"}
                    </h2>
                  </div>
                </div>
                <div className="block-button">
                  <button
                    onClick={() => navigate(el.status && `texts/${el.uuid}`)}
                    className={`button ${el.status ? "button-true" : "button-false"}`}
                  >
                    why
                  </button>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      if (el.status) {
                        navigate(`/products/${el.uuid}`);
                      }
                    }}
                    className={`button-2 ${el.status ? "button-true" : "button-false"}`}
                  >
                    Alnetifi gor <i className="fa fa-eye"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Item;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Item() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get('/api/v1/products')
//       .then((response) => {
//         setProducts(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching products:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Products</h1>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>{product.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Item;
