import { Link } from "react-router-dom";
import { useState } from "react";
import style1 from "./Doctor.module.css";
import DoctorNameList from "../components/DoctorNameList.js";

import EmrgPatientStack from "../components/EmrgPatientStack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const DoctorPage = () => {
  const [documentName, setDocumentName] = useState("");

  const onDocumentNameChange = (event) => {
    console.log(event.target.value);
    setDocumentName(event.target.value);
  };
  return (
    <div className={style1.doctorpage}>
      <div className={style1.topbar}>
        <img className={style1.logo_icon} alt="" src="/image-11@2x.png" />
        <div className={style1.topbar_navi}>
          <Link to="/totalpage">
            <div className={style1.topbar_total}>종합 상황판</div>
          </Link>
          <Link to="/hospitalpage">
            <div className={style1.topbar_hospital}>이송 응급실 겁색</div>
          </Link>
          <div className={style1.wrapper}>
            <div className={style1.topbar_doctor}>의료진 검색</div>
          </div>
        </div>
      </div>
      <div className={style1.body}>
        <div className={style1.docu_name_search}>
          <div className={style1.docu_name_search_input}>
            <div className={style1.docu_name_search_inputgroup}>
              <FontAwesomeIcon
                className={style1.icon}
                icon={faMagnifyingGlass}
                size="2xl"
              />
              <div className={style1.docu_name_search_inputframe}>
                <input
                  className={style1.docu_name_search_inputbox}
                  value={documentName}
                  onChange={onDocumentNameChange}
                  required
                  placeholder="진료과 이름을 입력해주세요"
                  id="document_name"
                  type="text"
                ></input>
              </div>
            </div>
            <div className={style1.docu_name_search_button}>검색</div>
          </div>
          <div className={style1.docu_name_search_list}>
            <DoctorNameList
              name="안재석"
              document="이비인후과"
              isclinic={true}
            />
          </div>
        </div>
        <EmrgPatientStack />
      </div>
    </div>
  );
};

export default DoctorPage;
