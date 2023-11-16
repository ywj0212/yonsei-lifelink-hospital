import { useState, useEffect } from "react";
import styles from "./EmrgPatientStack.module.css";
import NormalPatientCard from "./NormalPatientCard";
import SpecialPatientCard from "./SpecialPatientCard";

export default function EmrgPatientStack() {
  const [patients5minNormal, setPatients5minNormal] = useState([]);
  const [patients10minNormal, setPatients10minNormal] = useState([]);
  const [patients15minNormal, setPatients15minNormal] = useState([]);
  const [patients20minNormal, setPatients20minNormal] = useState([]);
  const [patients25minNormal, setPatients25minNormal] = useState([]);
  const [patients30minNormal, setPatients30minNormal] = useState([]);
  const [patientsOver30minNormal, setPatientsOver30minNormal] = useState([]);
  const [patients5minSpecial, setPatients5minSpecial] = useState([]);
  const [patients10minSpecial, setPatients10minSpecial] = useState([]);
  const [patients15minSpecial, setPatients15minSpecial] = useState([]);
  const [patients20minSpecial, setPatients20minSpecial] = useState([]);
  const [patients25minSpecial, setPatients25minSpecial] = useState([]);
  const [patients30minSpecial, setPatients30minSpecial] = useState([]);
  const [patientsOver30minSpecial, setPatientsOver30minSpecial] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("https://lifelink-api.mirix.kr/web/getinfo/0/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setPatients5minNormal(result.patients.under5min.normal);
        setPatients10minNormal(result.patients.under10min.normal);
        setPatients15minNormal(result.patients.under15min.normal);
        setPatients20minNormal(result.patients.under20min.normal);
        setPatients25minNormal(result.patients.under25min.normal);
        setPatients30minNormal(result.patients.under30min.normal);
        setPatientsOver30minNormal(result.patients.over30min.normal);
        setPatients5minSpecial(result.patients.under5min.special);
        setPatients10minSpecial(result.patients.under10min.special);
        setPatients15minSpecial(result.patients.under15min.special);
        setPatients20minSpecial(result.patients.under20min.special);
        setPatients25minSpecial(result.patients.under25min.special);
        setPatients30minSpecial(result.patients.under30min.special);
        setPatientsOver30minSpecial(result.patients.over30min.special);
      })
      .catch((error) => console.log("error".error));
    let timer = setInterval(() => {
      fetch("https://lifelink-api.mirix.kr/web/getinfo/0/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setPatients5minNormal(result.patients.under5min.normal);
          setPatients10minNormal(result.patients.under10min.normal);
          setPatients15minNormal(result.patients.under15min.normal);
          setPatients20minNormal(result.patients.under20min.normal);
          setPatients25minNormal(result.patients.under25min.normal);
          setPatients30minNormal(result.patients.under30min.normal);
          setPatientsOver30minNormal(result.patients.over30min.normal);
          setPatients5minSpecial(result.patients.under5min.special);
          setPatients10minSpecial(result.patients.under10min.special);
          setPatients15minSpecial(result.patients.under15min.special);
          setPatients20minSpecial(result.patients.under20min.special);
          setPatients25minSpecial(result.patients.under25min.special);
          setPatients30minSpecial(result.patients.under30min.special);
          setPatientsOver30minSpecial(result.patients.over30min.special);
        })
        .catch((error) => console.log("error".error));
    }, 5000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className={styles.emr_pati_stack}>
      <div className={styles.emr_pati_stack_frame_top}>
        <div className={styles.frame_timeline}> </div>
        <div className={styles.frame_nor_emi_pati}>기본 응급 환자</div>
        <div className={styles.frame_spe_emi_pati}>특수 환자</div>
      </div>
      <div className={styles.emr_pati_stack_frame_bottom}>
        <div className={`${styles.eps_lessThanFive} ${styles.eps_timeline}`}>
          <div className={styles.eps_timeline_title}>5분 미만</div>
          <div className={styles.eps_normal}>
            {patients5minNormal.map(
              (item) =>
                patients5minNormal &&
                patients5minNormal.length > 0 && (
                    <NormalPatientCard
                      ktasNum={item.preKTAS}
                      name={item.name}
                      sexType={item.sex}
                      age={item.age}
                    />
                    )
              )}
          </div>
          <div className={styles.eps_special}>
            {patients5minSpecial.map(
              (item) =>
                patients5minSpecial &&
                patients5minSpecial.length > 0 && (
                    <SpecialPatientCard
                      ktasNum={item.preKTAS}
                      name={item.name}
                      sexType={item.sex}
                      age={item.age}
                    />
                    )
                    )}
          </div>
        </div>

        <div className={`${styles.eps_lessThanTen} ${styles.eps_timeline}`}>
          <div className={styles.eps_timeline_title}>10분 미만</div>
          <div className={styles.eps_normal}>
          {patients10minNormal.map(
            (item) =>
              patients10minNormal &&
              patients10minNormal.length > 0 && (
                  <NormalPatientCard
                    ktasNum={item.preKTAS}
                    name={item.name}
                    sexType={item.sex}
                    age={item.age}
                  />
                  )
                  )}
                  </div>
                  <div className={styles.eps_special}>
          {patients10minSpecial.map(
            (item) =>
              patients10minSpecial &&
              patients10minSpecial.length > 0 && (
                  <SpecialPatientCard
                    ktasNum={item.preKTAS}
                    name={item.name}
                    sexType={item.sex}
                    age={item.age}
                  />
                  )
                  )}
                  </div>
        </div>
        <div className={`${styles.eps_lessThanFifteen} ${styles.eps_timeline}`}>
          <div className={styles.eps_timeline_title}>15분 미만</div>
          <div className={styles.eps_normal}>
          {patients15minNormal.map(
            (item) =>
              patients15minNormal &&
              patients15minNormal.length > 0 && (
                  <NormalPatientCard
                    ktasNum={item.preKTAS}
                    name={item.name}
                    sexType={item.sex}
                    age={item.age}
                  />
                  )
                  )}
                  </div>
                  <div className={styles.eps_special}>
          {patients15minSpecial.map(
            (item) =>
              patients15minSpecial &&
              patients15minSpecial.length > 0 && (
                  <SpecialPatientCard
                    ktasNum={item.preKTAS}
                    name={item.name}
                    sexType={item.sex}
                    age={item.age}
                  />
                  )
                  )}
                  </div>
        </div>
        <div className={`${styles.eps_lessThanTwenty} ${styles.eps_timeline}`}>
          <div className={styles.eps_timeline_title}>20분 미만</div>
          <div className={styles.eps_normal}>
          {patients20minNormal.map(
            (item) =>
              patients20minNormal &&
              patients20minNormal.length > 0 && (
                  <NormalPatientCard
                    ktasNum={item.preKTAS}
                    name={item.name}
                    sexType={item.sex}
                    age={item.age}
                  />
                  )
                  )}
                  </div>
                  <div className={styles.eps_special}>
          {patients20minSpecial.map(
            (item) =>
              patients20minSpecial &&
              patients20minSpecial.length > 0 && (
                  <SpecialPatientCard
                    ktasNum={item.preKTAS}
                    name={item.name}
                    sexType={item.sex}
                    age={item.age}
                  />
                  )
                  )}
                  </div>
        </div>
        <div
          className={`${styles.eps_lessThanTwenfive} ${styles.eps_timeline}`}
        >
          <div className={styles.eps_timeline_title}>25분 미만</div>
          <div className={styles.eps_normal}>
          {patients25minNormal.map(
            (item) =>
              patients25minNormal &&
              patients25minNormal.length > 0 && (
                  <NormalPatientCard
                    ktasNum={item.preKTAS}
                    name={item.name}
                    sexType={item.sex}
                    age={item.age}
                  />
                  )
                  )}
                  </div>
                  <div className={styles.eps_special}>
          {patients25minSpecial.map(
            (item) =>
              patients25minSpecial &&
              patients25minSpecial.length > 0 && (
                  <SpecialPatientCard
                    ktasNum={item.preKTAS}
                    name={item.name}
                    sexType={item.sex}
                    age={item.age}
                  />
                  )
                  )}
                  </div>
        </div>
        <div className={`${styles.eps_lessThanThirty} ${styles.eps_timeline}`}>
          <div className={styles.eps_timeline_title}>30분 미만</div>
          <div className={styles.eps_normal}>
          {patients30minNormal.map(
            (item) =>
              patients30minNormal &&
              patients30minNormal.length > 0 && (
                  <NormalPatientCard
                    ktasNum={item.preKTAS}
                    name={item.name}
                    sexType={item.sex}
                    age={item.age}
                  />
                  )
                  )}
                  </div>
                  <div className={styles.eps_special}>
          {patients30minSpecial.map(
            (item) =>
              patients30minSpecial &&
              patients30minSpecial.length > 0 && (
                  <SpecialPatientCard
                    ktasNum={item.preKTAS}
                    name={item.name}
                    sexType={item.sex}
                    age={item.age}
                  />
                  )
                  )}
                  </div>
        </div>
        <div className={`${styles.eps_moreThanThirty} ${styles.eps_timeline}`}>
          <div className={styles.eps_timeline_title}>30분 이상</div>
          <div className={styles.eps_normal}>
          {patientsOver30minNormal.map(
            (item) =>
              patientsOver30minNormal &&
              patientsOver30minNormal.length > 0 && (
                  <NormalPatientCard
                    ktasNum={item.preKTAS}
                    name={item.name}
                    sexType={item.sex}
                    age={item.age}
                  />
                  )
                  )}
                  </div>
                  <div className={styles.eps_special}>
          {patientsOver30minSpecial.map(
            (item) =>
              patientsOver30minSpecial &&
              patientsOver30minSpecial.length > 0 && (
                  <SpecialPatientCard
                    ktasNum={item.preKTAS}
                    name={item.name}
                    sexType={item.sex}
                    age={item.age}
                  />
                  )
                  )}
                  </div>
        </div>
      </div>
    </div>
  );
}
