import { Link } from "react-router-dom";
import style1 from "./Hospital.module.css";
import HospitalCard from "../components/HospitalCard.js";
import EmrgPatientStack from "../components/EmrgPatientStack";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const HospitalPage = () => {
  const [name, setName] = useState("");

  const onNameChange = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };
  return (
    <div className={style1.hospitalpage}>
      <div className={style1.topbar}>
        <img className={style1.logo_icon} alt="" src="/image-11@2x.png" />
        <div className={style1.topbar_navi}>
          <Link to="/totalpage">
            <div className={style1.topbar_total}>종합 상황판</div>
          </Link>
          <div className={style1.wrapper}>
            <div className={style1.topbar_hospital}>이송 응급실 겁색</div>
          </div>
          <Link to="/doctorpage">
            <div className={style1.topbar_doctor}>의료진 검색</div>
          </Link>
        </div>
      </div>
      <div className={style1.body}>
        <div className={style1.hospital_list}>
          <div className={style1.hospital_list_scrollview}>
            <HospitalCard
              hosp_name={"민형 병원"}
              density={4}
              hospBed_current={37}
              hospBed_total={45}
              emrgBed_current={50}
              emrgBed_total={60}
              trans_pati={4}
            />
            <HospitalCard hosp_name={"채빈 병원"} density={3} />
            <HospitalCard hosp_name={"킹왕짱 수혁병원"} density={2} />
            <HospitalCard hosp_name={"제레널 우진병원"} density={1} />
          </div>
          <div className={style1.hospital_list_search_input}>
            <div className={style1.hospital_list_search_inputgroup}>
              <FontAwesomeIcon
                className={style1.icon}
                icon={faMagnifyingGlass}
                size="2xl"
              />
              <div className={style1.hospital_list_search_inputframe}>
                <input
                  className={style1.hospital_list_search_inputbox}
                  value={name}
                  onChange={onNameChange}
                  required
                  placeholder="이름을 입력해주세요"
                  id="name"
                  type="text"
                ></input>
              </div>
            </div>
            <div className={style1.hospital_list_search_button}>검색</div>
          </div>
        </div>
        <EmrgPatientStack />
      </div>
    </div>
  );
};

export default HospitalPage;
