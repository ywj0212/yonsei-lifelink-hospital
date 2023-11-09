import { useState } from "react";
import styles from "./EmrgPatientStack.module.css";
import NormalPatientCard from "./NormalPatientCard";
import SpecialPatientCard from "./SpecialPatientCard";

export default function EmrgPatientStack() {
  const [ktasNum, setktasNum] = useState(1);
  return (
    <div className={styles.emr_pati_stack}>
      <div className={styles.emr_pati_stack_frame_top}>
        <div className={styles.frame_timeline}> </div>
        <div className={styles.frame_nor_emi_pati}>기본 응급 환자</div>
        <div className={styles.frame_spe_emi_pati}>특수 환자</div>
      </div>
      <div className={styles.emr_pati_stack_frame_bottom}>
        <div className={`${styles.eps_arriveSoon} ${styles.eps_timeline}`}>
          <div className={styles.eps_timeline_title}>곧도착</div>
          <div className={styles.eps_normal}>
            <NormalPatientCard
              ktasNum={2}
              name={"전수혁"}
              sex={"남"}
              age={19}
            />{" "}
            <NormalPatientCard
              ktasNum={3}
              name={"김민형"}
              sex={"남"}
              age={32}
            />
            <NormalPatientCard
              ktasNum={4}
              name={"박채빈"}
              sex={"남"}
              age={55}
            />
          </div>
          <div className={styles.eps_special}></div>
        </div>
        <div className={`${styles.eps_lessThanFive} ${styles.eps_timeline}`}>
          <div className={styles.eps_timeline_title}>5분 미만</div>
          <div className={styles.eps_normal}>
            <NormalPatientCard
              ktasNum={1}
              name={"전시영"}
              sex={"여"}
              age={18}
            />
          </div>
          <div className={styles.eps_special}>
            <SpecialPatientCard
              patientType={5}
              name={"전시영"}
              sex={"여"}
              age={18}
            />
          </div>
        </div>
        <div className={`${styles.eps_lessThanTen} ${styles.eps_timeline}`}>
          <div className={styles.eps_timeline_title}>10분 미만</div>
          <div className={styles.eps_normal}> </div>
          <div className={styles.eps_special}> </div>
        </div>
        <div className={`${styles.eps_lessThanFifteen} ${styles.eps_timeline}`}>
          <div className={styles.eps_timeline_title}>15분 미만</div>
          <div className={styles.eps_normal}> </div>
          <div className={styles.eps_special}> </div>
        </div>
        <div className={`${styles.eps_lessThanTwenty} ${styles.eps_timeline}`}>
          <div className={styles.eps_timeline_title}>20분 미만</div>
          <div className={styles.eps_normal}> </div>
          <div className={styles.eps_special}> </div>
        </div>
        <div
          className={`${styles.eps_lessThanTwenfive} ${styles.eps_timeline}`}
        >
          <div className={styles.eps_timeline_title}>25분 미만</div>
          <div className={styles.eps_normal}> </div>
          <div className={styles.eps_special}> </div>
        </div>
        <div className={`${styles.eps_lessThanThirty} ${styles.eps_timeline}`}>
          <div className={styles.eps_timeline_title}>30분 미만</div>
          <div className={styles.eps_normal}> </div>
          <div className={styles.eps_special}> </div>
        </div>
        <div className={`${styles.eps_moreThanThirty} ${styles.eps_timeline}`}>
          <div className={styles.eps_timeline_title}>30분 이상</div>
          <div className={styles.eps_normal}> </div>
          <div className={styles.eps_special}> </div>
        </div>
      </div>
    </div>
  );
}
