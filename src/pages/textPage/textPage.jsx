import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "../../data";
import { useTranslation } from "react-i18next";
function TextPage() {
  const {t} = useTranslation()
  const navigate = useNavigate()
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    const isData = data.filter((x) => x.id == id);
    setItem(isData[0]);
  }, [id]);
  return (
    <div className="">
      <Navbar />
      <div className="container text-page">
        <div className="text-image">
            <img src="https://boykotyolu.com.tr/markalar/658ea89ebfea6.png" alt="" />

        </div>
        <div className="text-content">
            <div className="text-conent-title">
                <h2>{t("why")}</h2>
                <div className="navigate-button">
                  <button onClick={()=>navigate("/")}>{t("next")}</button>
                </div>

            </div>
            <div className="text-content-p">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil consequuntur repellendus corrupti esse dolorem quia incidunt, totam qui ex mollitia laboriosam amet unde molestiae odio deleniti? Nemo, aut numquam? Voluptates.
                Distinctio ipsam quidem fuga qui ad, eligendi consequatur obcaecati corporis? Nam facilis quod quidem dicta optio, est deserunt culpa voluptates, dolore repellendus cumque et natus voluptatum perspiciatis deleniti possimus in!
                Nostrum fugiat maxime exercitationem perspiciatis consequatur dolore delectus in accusantium harum minima laboriosam non aut, esse aspernatur quidem placeat! Excepturi earum, dolorum delectus reiciendis corporis ab. Corrupti praesentium molestiae culpa?
                Consectetur cumque voluptatibus exercitationem. Exercitationem est voluptate nulla aliquid odit laudantium, maiores natus, delectus non amet animi consequuntur excepturi vero. Temporibus quo inventore, fuga sit et aperiam distinctio illo at?
                Sit libero ullam vero itaque exercitationem consectetur vitae dignissimos error, debitis suscipit assumenda illo tempore expedita molestias repellat ea reiciendis consequatur doloribus est a? Harum aliquam consectetur eaque facilis? Voluptatum!
                Corporis, voluptatem dicta. Fugiat accusamus veniam optio animi deleniti quo, illo in ipsa dicta accusantium, a, explicabo expedita harum quisquam ipsum! Sapiente ab vitae ipsa officia magni placeat molestiae quasi!
                Dolores provident voluptates cumque ducimus aliquam asperiores. Distinctio odio porro laudantium minus animi quaerat eaque quas, ut dolorem facilis perspiciatis adipisci nobis magnam! Iste delectus quam amet, ab eius corrupti.
                Cupiditate labore animi veniam nam totam sunt officia error eaque? Consequatur ea vitae quia illum sunt, eligendi magnam temporibus quidem commodi sit reprehenderit aut, molestias, quae cumque aspernatur iusto earum.
                Nulla, quaerat quisquam! Doloremque a aliquid culpa illum commodi omnis in fuga veniam enim doloribus. Omnis pariatur voluptates quae velit, architecto laboriosam voluptatibus unde maiores rem. Aut architecto voluptatem ullam!
                Dolorum alias quisquam asperiores. Magni voluptatibus labore repellat enim minima molestias fugit minus, veniam, sit tempora ratione error officiis molestiae delectus! Laboriosam dolorum quaerat eligendi ipsa fugit temporibus cupiditate fuga.</p>
            </div>

        </div>
        {/* <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          sapiente, beatae maiores eius cum dicta. Unde natus, voluptate fugit
          officiis blanditiis dolor voluptas mollitia nostrum! Commodi mollitia
          dolorum cupiditate unde. Similique consequatur explicabo totam quos?
          Ea temporibus inventore asperiores repudiandae quis vitae corporis?
          Tenetur veniam sed quibusdam. Ullam quam quia odit animi. Assumenda
          maiores optio magnam explicabo, possimus inventore quos?
          Exercitationem, necessitatibus iste doloribus nisi eaque animi
          dignissimos tempora perferendis eum officia aliquam magnam enim rem
          expedita impedit beatae repellendus. Expedita ipsam cumque obcaecati,
          incidunt tenetur unde iure temporibus delectus. Voluptas eum adipisci
          mollitia eos tenetur, cumque ad commodi nesciunt amet quisquam beatae
          deleniti explicabo asperiores. Laborum dolor optio fuga ipsum facere!
          Odio placeat velit ipsum veniam, enim veritatis corporis. Repellendus
          provident itaque ut accusamus repudiandae libero reiciendis. Omnis
          nemo rerum ducimus aut voluptatibus fuga veritatis placeat nesciunt
          non eius explicabo quis recusandae, ipsa aspernatur earum, fugiat illo
          eos sapiente! Quae sunt eius aperiam tenetur dolorem quidem est eaque
          minima, labore maiores aut mollitia fugiat doloremque odit commodi
          possimus soluta quo, harum aspernatur voluptates facilis voluptatibus?
          Vel reiciendis eos eius. Ipsam consequuntur hic esse dicta, libero
          eius adipisci vitae, ut laudantium est saepe? Quod excepturi amet
          quisquam ipsa? Saepe similique dolor asperiores illo tempore aut
          molestiae itaque quis maiores ea! Id eligendi reiciendis eaque
          accusantium perspiciatis commodi ipsam consequuntur est reprehenderit
          inventore deleniti, exercitationem, sunt perferendis labore quia, nemo
          quas quam? Eligendi et, ex inventore at commodi facere dolorum quam.
          In expedita illum incidunt, vero quae repudiandae cumque sed quod nam
          similique quam itaque blanditiis! Commodi, ut! Cum, voluptatem at
          commodi dolorem ab numquam consectetur quibusdam est ratione ad sunt!
          Assumenda soluta rerum laboriosam ratione earum sed maxime esse.
          Corporis placeat cum velit pariatur vitae fuga quas ipsum reiciendis
          porro architecto similique labore tempore, commodi sunt, aspernatur
          voluptatem alias est.
        </p> */}
      </div>
    </div>
  );
}

export default TextPage;
