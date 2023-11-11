import { Link } from "react-router-dom";
import { useState } from "react";
import style1 from "./Doctor.module.css";
import DoctorNameList from "../components/DoctorNameList.js";
import doctorInfo from "../doctorInfo.json";

import EmrgPatientStack from "../components/EmrgPatientStack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const DoctorPage = () => {
  const [documentName, setDocumentName] = useState("");
  const [inputDocumentName, setInputDocumentName] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const onDocumentNameChange = (event) => {
    setDocumentName(event.target.value);
    filterDoctors(event.target.value);
  };

  const onButtonClick = () => {
    setInputDocumentName(documentName);
    filterDoctors(documentName);
  };

  const filterDoctors = (searchTerm) => {
    const filteredDoctors = [];
    for (const key in doctorInfo) {
      const doctors = doctorInfo[key];
      const filteredDoctor = doctors
        .filter((doctor) => doctor["department"].includes(searchTerm))
        .sort((a, b) => (a.isclinic === b.isclinic ? 0 : a.isclinic ? -1 : 1)); // Sort by isclinic
      filteredDoctors.push(...filteredDoctor);
    }
    setFilteredData(filteredDoctors);
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
            <div className={style1.topbar_hospital}>이송 응급실 검색</div>
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
            <button
              className={style1.docu_name_search_button}
              onClick={onButtonClick}
            >
              검색
            </button>
          </div>
          <div className={style1.docu_name_search_list}>
            <div className={style1.docu_name_search_list_scrollview}>
              {filteredData.map((item, index) => (
                <DoctorNameList
                  key={index}
                  name={item.name}
                  document={item.department}
                  isclinic={item.isclinic}
                />
              ))}
            </div>
          </div>
        </div>
        <EmrgPatientStack />
      </div>
    </div>
  );
};

export default DoctorPage;
