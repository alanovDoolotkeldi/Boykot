import React, { useState } from 'react'

function Item() {
  const [data ,setData] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,5,5,5,5,5,5,5,])
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
                    <h3>Альтарнативаны <br /> коруу</h3>
                  </div>

                </div>

            </div>
          {
            data.map((el)=>(
              <>
                <div className="block">
                <div className="block-text">
                  <h2>Marka</h2>
                </div>
                <div className="block-info">
                  <div className="block-content">
                    <div className="block-logo block-logo-image">
                      <img src="https://boykotyolu.com.tr/markalar/658ea8793533f.png" alt="" />
                    </div>
                    <div className="block-category">
                      <h2>Uygun</h2>

                    </div>

                  </div>
                  <div className="block-button">
                    <button className='button'>why</button>
                    <button className='button-2'>Alnetifi gor <i class="fa fa-eye" aria-hidden="true"></i> </button>
                  </div>
                </div>

            </div></>
            ))
          }
          </div>
        </div>
      
    </section>
  )
}

export default Item
