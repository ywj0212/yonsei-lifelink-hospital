import { Link } from "react-router-dom";
import style1 from "./Hospital.module.css";
import HospitalCard from "../components/HospitalCard.js";
import EmrgPatientStack from "../components/EmrgPatientStack";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const HospitalPage = () => {
  const [hospitalName, setHospitalName] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [hospitalInfo, setHospitalInfo] = useState([]);

  const onHospitalNameChange = (event) => {
    setHospitalName(event.target.value);
    filterHospitals(event.target.value);
  };

  const onButtonClick = () => {
    setHospitalName(hospitalName);
    filterHospitals(hospitalName);
  };
  const filterHospitals = (searchTerm) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase().trim();

    const filteredHospitals = hospitalInfo.filter((hospital) =>
      hospital["name"].toLowerCase().includes(lowerCaseSearchTerm)
    );

    setFilteredData(filteredHospitals);
  };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("https://lifelink-api.mirix.kr/web/getinfo/0/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setHospitalInfo(result.hospitals);
      })
      .catch((error) => console.log("error".error));
    let timer = setInterval(() => {
      fetch("https://lifelink-api.mirix.kr/web/getinfo/0/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setHospitalInfo(result.hospitals);
        })
        .catch((error) => console.log("error".error));
    }, 5000);

    return () => clearInterval(timer);
  }, []);
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
            {filteredData.map((item, index) => (
              <HospitalCard
                key={index}
                hosp_name={item.name}
                hosp_type={item.type}
                density={item.currentCongestion}
                hospBed_current={item.icuBedOccupied}
                hospBed_total={item.icuBedExists}
                emrgBed_current={item.emBedOccupied}
                emrgBed_total={item.emBedExists}
                trans_pati={item.trasferringPatient}
              />
            ))}
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
                  value={hospitalName}
                  onChange={onHospitalNameChange}
                  required
                  placeholder="이름을 입력해주세요"
                  id="name"
                  type="text"
                ></input>
              </div>
            </div>
            <div
              className={style1.hospital_list_search_button}
              onClick={onButtonClick}
            >
              검색
            </div>
          </div>
        </div>
        <EmrgPatientStack />
      </div>
    </div>
  );
};

export default HospitalPage;
