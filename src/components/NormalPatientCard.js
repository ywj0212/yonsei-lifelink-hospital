import styles from "./NormalPatientCard.module.css";

export default function NormalPatientCard({ ktasNum, name, sex, age }) {
  return (
    <div className={styles.patient_card}>
      <div className={styles.patient_card_front}>
        <div className={styles.patient_card_name}>{name}</div>
        <div className={styles.patient_card_sex}>{sex}</div>
        <div className={styles.patient_card_age}>{age}세</div>
      </div>
      <div className={styles.patient_card_back}>
        <div className={styles.card_frame}>
          <div className={styles[`ktas${ktasNum}`]}>KTAS {ktasNum}</div>
        </div>
      </div>
    </div>
  );
}
