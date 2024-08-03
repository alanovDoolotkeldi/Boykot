import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import i18next from "i18next";

function TextPage() {
  const [element,setElement] = useState([1,2,3])
  const { data } = useSelector((state) => state.product);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const isData = data.filter((x) => x.uuid === id);
    if (isData.length > 0) {
      setItem(isData[0]);
    }
  }, [id, data]);

  return (
    <div className="no-body-2">
      <section>
        <Navbar />
        <div className="container">
          <div className="text-button">
            <button>{t("why")}</button>
          </div>
          <div className="text-logo">
            <div className="text-logo-image">
              <img src={item.logo} alt="" />
            <h1>{item.brand}</h1>
            </div>
            <button onClick={() => navigate("/")}>{t("next")}</button>
          </div>

          <div className="cause-container">
            <div className="cause-button">
              <button>Себеби</button>
            </div>
            <div className="cause-blocks">
    
<>          <div className="cause-block">
                <p>
                  {item.description}
                </p>
              </div></>

            </div>
          </div>
          <div className="text-phone">
            <div className="text-phone-info">
              <div className="text-phone-container">
                <p>
                  Маалымат кайдан алынды
                </p>
              </div>
              <a href="https://boykotyolu.com.tr/index.php" target="_blank" className="link-text">
              https://boykot-ten.vercel.app/texts/5

              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <h2>{t("why")}</h2> */}
      {/*<button onClick={() => navigate("/")}>{t("next")}</button> */}
    </div>
  );
}

export default TextPage;
