import styles from "./SpecialPatientCard.module.css";

export default function SpecialPatientCard({ ktasNum, name, sexType, age }) {
  const sexList = [
    { type: "M", description: "남" },
    { type: "F", description: "여" },
  ];

  const patientList = [
    { type: 0, description: "임산부" },
    { type: -3, description: "심정지" },
    { type: -4, description: "중증외상" },
    { type: -2, description: "뇌졸중" },
    { type: -1, description: "심근경색" },
  ];

  const selectedPatient = patientList.find(
    (patient) => patient.type === ktasNum
  );
  const patientDescription = selectedPatient ? selectedPatient.description : "";

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
          <div>{patientDescription}</div>
        </div>
      </div>
    </div>
  );
}
