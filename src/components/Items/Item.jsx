import React, { useEffect, useRef, useState } from "react";
import { data } from "../../data";
import { useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { useTranslation } from "react-i18next";

function Item() {
  const {t} = useTranslation()
  const popupRefs = useRef({});
  const navigate = useNavigate();
  const [state, setState] = useState({});

  function handleClick(id) {
    setState((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isClickOutside = !Object.values(popupRefs.current).some(
        (ref) => ref && ref.contains(event.target)
      );

      if (isClickOutside) {
        setState((prev) => {
          const newState = { ...prev };
          Object.keys(newState).forEach((key) => {
            newState[key] = false;
          });
          return newState;
        });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
                <h3>
                 {t("alternative")}
                </h3>
              </div>
            </div>
          </div>
          {data.map((el) => (
            <div className="block" key={el.id}>
              <div className="block-text">
                <h2>{el.marka}</h2>
              </div>
              <div className="block-info">
                <div className="block-content">
                  <div className="block-logo block-logo-image">
                    <img src={el.img} alt="" />
                  </div>
                  <div className="block-category">
                    <h2 className={el.boycott?"boykotlu":"uygun"}>{el.boycott?"Boykotlu":"Uygun"}</h2>
                  </div>
                </div>
                <div className="block-button">
                  <button
                    onClick={() => navigate(el.boycott&&`texts/${el.id}`)}
                    className={`button ${
                      el.boycott ? "button-true" : "button-false"
                    }`}
                  >
                    why 
                    {/* <FaAngleDown className="fa-up" /> */}
                    {/* <div
                      ref={(element) => (popupRefs.current[el.id] = element)}
                      className={`why ${el.boycott && state[el.id] ? "why-flex" : "why-none"}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <IoIosArrowUp onClick={() => handleClick(el.id)} className="fa-down" />
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure laudantium temporibus, possimus qui enim quidem
                        dolorum repellendus amet ipsam ea hic cupiditate,
                        laboriosam consequuntur mollitia nisi labore porro quos
                        cum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, velit! Doloremque similique, sint omnis voluptatem itaque iure quas eos velit culpa hic saepe consectetur, temporibus, corrupti sed! Placeat, ipsa unde?
                        Quam distinctio voluptatum officia modi reiciendis itaque vero dicta, dignissimos animi incidunt sequi sunt voluptate optio rem? Ullam, sapiente? Facere perferendis quasi asperiores magnam sapiente error pariatur commodi possimus praesentium.
                        Quos voluptate velit animi eaque aperiam odio. Suscipit culpa odio id numquam laudantium ducimus amet dolores, minus enim? Vitae vero tenetur doloremque necessitatibus! Quidem laborum, placeat hic earum inventore unde!
                      </p>
                    </div> */}
                  </button>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      if (el.boycott) {
                        navigate(`/products/${el.id}`);
                      }
                    }}
                    className={`button-2 ${
                      el.boycott ? "button-true" : "button-false"
                    }`}
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
