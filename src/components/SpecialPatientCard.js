import styles from "./SpecialPatientCard.module.css";

export default function SpecialPatientCard({ patientType, name, sex, age }) {
  const patientList = [
    { type: 1, description: "임산부" },
    { type: 2, description: "심정지" },
    { type: 3, description: "중증외상" },
    { type: 4, description: "뇌졸중" },
    { type: 5, description: "심근경색" },
  ];

  const selectedPatient = patientList.find(
    (patient) => patient.type === patientType
  );
  const patientDescription = selectedPatient ? selectedPatient.description : "";

  return (
    <div className={styles.patient_card}>
      <div className={styles.patient_card_front}>
        <div className={styles.patient_card_name}>{name}</div>
        <div className={styles.patient_card_sex}>{sex}</div>
        <div className={styles.patient_card_age}>{age}세</div>
      </div>
      <div className={styles.patient_card_back}>
        <div className={styles.card_frame}>
          <div className={styles[`patient${patientType}`]}>
            {patientDescription}
          </div>
        </div>
      </div>
    </div>
  );
}
