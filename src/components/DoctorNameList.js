import styles from "./DoctorNameList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function DoctorNameList({ name, document, isclinic }) {
  return (
    <div className={styles.list_card}>
      <div className={styles.list_card_head}>
        <div className={styles.list_card_name}>{name}</div>
        <div className={styles.list_card_department}>{document}</div>
        {isclinic ? (
          <div className={styles.list_card_isClinic_true}>진료 가능</div>
        ) : (
          <div className={styles.list_card_isClinic_false}>진료 불가능</div>
        )}
      </div>
      <div className={styles.list_card_icon}>
        <FontAwesomeIcon icon={faPhone} size="2xl" />
      </div>
    </div>
  );
}
