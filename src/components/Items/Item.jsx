import React, { useEffect, useRef, useState } from "react";
import { data } from "../../data";
import { useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

function Item() {
  const popupRefs = useRef({});
  const navigate = useNavigate();
  const [state, setState] = useState({});
  console.log(state);

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
              <h1>Marka</h1>
            </div>
            <div className="block-info">
              <div className="block-content">
                <div className="block-logo">
                  <h1>Logo</h1>
                </div>
                <div className="block-category">
                  <h1>Жагдайы</h1>
                </div>
              </div>
              <div className="block-button">
                <h2>эмне учун</h2>
                <h3>
                  Альтарнативаны <br /> коруу
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
                    <h2>Uygun</h2>
                  </div>
                </div>
                <div className="block-button">
                  <button
                    onClick={() => handleClick(el.id)}
                    className={`button ${
                      el.boycott ? "button-true" : "button-false"
                    }`}
                  >
                    why <IoIosArrowUp className="fa-up" />
                    <div
                      ref={(element) => (popupRefs.current[el.id] = element)}
                      className={`why ${el.boycott && state[el.id] ? "why-flex" : "why-none"}`}
                    >
                      <FaAngleDown className="fa-down" />
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure laudantium temporibus, possimus qui enim quidem
                        dolorum repellendus amet ipsam ea hic cupiditate,
                        laboriosam consequuntur mollitia nisi labore porro quos
                        cum?
                      </p>
                    </div>
                  </button>
                  <button
                    onClick={() =>
                      navigate(el.boycott && `/products/${el.id}`)
                    }
                    className={`button-2 ${
                      el.boycott ? "button-true" : "button-false"
                    }`}
                  >
                    Alnetifi gor <i className="fa fa-eye" aria-hidden="true"></i>{" "}
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
