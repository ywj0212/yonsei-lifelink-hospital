import { Link } from "react-router-dom";
import style1 from "./TotalPage.module.css";
import { useState, useEffect } from "react";
import EmrgPatientStack from "../components/EmrgPatientStack";

const TotalPage = () => {
  const [surgeryRoom, setSurgeryRoom] = useState(0);
  const [emrBed, setEmrBed] = useState(0);
  const [hospBed, setHospBed] = useState(0);
  const [congestion, setCongestion] = useState([]);
  const [hospitalName, setHospialName] = useState("세브란스 권역응급센터");
  const getStylesBasedOnValue = (value) => {
    if (value === 0) {
      return {
        color: "var(--color-limegreen-100)",
      };
    } else if (value === 1) {
      return {
        color: "var(--color-darkorange",
      };
    } else if (value === 3) {
      return {
        color: "var(--color-pink",
      };
    } else {
      return {
        color: "black",
      };
    }
  };
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://lifelink-api.mirix.kr/web/myinfo/0/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setSurgeryRoom(result.opBedRemaing);
        setEmrBed(result.emBedRemaining);
        setHospBed(result.icuBedRemaining);
        setCongestion([
          result.emBedCongestion,
          result.icuBedCongesiton,
          result.opBedCongestion,
        ]);
      })
      .catch((error) => console.log("error".error));
  }, []);

  return (
    <div className={style1.totalpage}>
      <div className={style1.topbar}>
        <img className={style1.logo_icon} alt="" src="/image-11@2x.png" />
        <div className={style1.topbar_navi}>
          <div className={style1.wrapper}>
            <div className={style1.topbar_total}>종합 상황판</div>
          </div>
          <Link to="/hospitalpage">
            <div className={style1.topbar_hospital}>이송 응급실 겁색</div>
          </Link>
          <Link to="/doctorpage">
            <div className={style1.topbar_doctor}>의료진 검색</div>
          </Link>
        </div>
      </div>
      <div className={style1.body}>
        <div className={style1.total_current_state}>
          <div className={style1.hospital_name}>{hospitalName} 현황</div>
          <div className={style1.total_current_state_frame}>
            <div className={style1.total_current_surgery}>
              <img
                className={style1.total_current_surgery_icon}
                alt=""
                src="/medicaliconisurgery.svg"
              />
              <div className={style1.total_current_surgery_title}>수술실</div>
              <div
                className={`${style1.total_current_num} ${getStylesBasedOnValue(
                  congestion[2]
                )}`}
              >
                {surgeryRoom}
              </div>
            </div>
            <div className={style1.total_current_emrBed}>
              <img
                className={style1.total_current_emrBed_icon}
                alt=""
                src="/medicaliconiemergency.svg"
              />
              <div className={style1.total_current_emrBed_title}>
                응급실 병상
              </div>
              <div
                className={`${style1.total_current_num} ${getStylesBasedOnValue(
                  congestion[0]
                )}`}
              >
                {emrBed}
              </div>
            </div>
            <div className={style1.total_current_hospBed}>
              <img
                className={style1.total_current_hospBed_icon}
                alt=""
                src="/mingcutebedfill.svg"
              />
              <div className={style1.total_current_hospBed_title}>
                입원실 병상
              </div>
              <div
                className={`${style1.total_current_num} ${getStylesBasedOnValue(
                  congestion[1]
                )}`}
              >
                {hospBed}
              </div>
            </div>
          </div>
          <div className={style1.notification}>
            모든 수치는 잔여 수를 기준으로 합니다.
          </div>
        </div>
        <EmrgPatientStack />
      </div>
    </div>
  );
};

export default TotalPage;
