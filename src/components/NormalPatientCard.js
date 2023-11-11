import styles from "./NormalPatientCard.module.css";

export default function NormalPatientCard({ ktasNum, name, sexType, age }) {
  const sexList = [
    { type: "M", description: "남" },
    { type: "F", description: "여" },
  ];

  const selectedSex = sexList.find((sex) => sex.type === sexType);
  const sexDescription = selectedSex ? selectedSex.description : "";
  return (
    <div className={styles.patient_card}>
      <div className={styles.patient_card_front}>
        <div className={styles.patient_card_name}>{name}</div>
        <div className={styles.patient_card_sex}>{sexDescription}</div>
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
