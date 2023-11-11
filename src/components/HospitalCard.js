import styles from "./HospitalCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function HospitalCard({
  hosp_name = "세브란스",
  density,
  hospBed_current = 37,
  hospBed_total = 45,
  emrgBed_current = 40,
  emrgBed_total = 40,
  trans_pati = 3,
}) {
  return (
    <div className={styles.hospital_list_card}>
      <div className={styles.hospital_list_card_top}>
        <div className={styles.hospital_list_card_top_title}>
          <div className={styles.hospital_list_card_top_title_name}>
            {hosp_name}
          </div>
          <div className={styles.hospital_list_card_top_title_type}>
            권역응급의료센터
          </div>
        </div>
        <div className={styles.hospital_list_card_top_icons}>
          <div className={styles.hospital_list_card_top_icons_phone}>
            <FontAwesomeIcon icon={faPhone} size="2xl" />
          </div>
          <div className={styles.hospital_list_card_top_icons_map}>
            <FontAwesomeIcon icon={faLocationDot} size="2xl" />
          </div>
        </div>
      </div>
      <div className={styles.hospital_list_card_mid}>
        <div className={styles.hospital_list_card_mid_density}>
          <div className={styles.hospital_list_card_mid_density_title}>
            응급실 밀집도
          </div>
          <div className={styles.hospital_list_card_mid_density_blocks}>
            <div
              className={`${
                density == 3
                  ? styles.hospital_list_card_mid_density_blocks_red
                  : styles.hospital_list_card_mid_density_blocks_normal
              }`}
            >
              혼잡
            </div>
            <div
              className={`${
                density == 2
                  ? styles.hospital_list_card_mid_density_blocks_org
                  : styles.hospital_list_card_mid_density_blocks_normal
              }`}
            >
              주의
            </div>
            <div
              className={`${
                density == 1
                  ? styles.hospital_list_card_mid_density_blocks_yel
                  : styles.hospital_list_card_mid_density_blocks_normal
              }`}
            >
              보통
            </div>
            <div
              className={`${
                density == 0
                  ? styles.hospital_list_card_mid_density_blocks_gre
                  : styles.hospital_list_card_mid_density_blocks_normal
              }`}
            >
              여유
            </div>
          </div>
        </div>
        <div className={styles.hospital_list_card_mid_hospBed}>
          <div className={styles.hospital_list_card_mid_hospBed_title}>
            중환자실 병상
          </div>
          <div className={styles.hospital_list_card_mid_hospBed_number}>
            <div
              className={styles.hospital_list_card_mid_hospBed_number_current}
            >
              {hospBed_current}
            </div>
            <div className={styles.hospital_list_card_mid_hospBed_number_total}>
              /{hospBed_total}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.hospital_list_card_bottom}>
        <div className={styles.hospital_list_card_bottom_emrgBed}>
          <div className={styles.hospital_list_card_bottom_emrgBed_title}>
            응급실 병상
          </div>
          <div className={styles.hospital_list_card_bottom_emrgBed_number}>
            <div
              className={
                styles.hospital_list_card_bottom_emrgBed_number_current
              }
            >
              {emrgBed_current}
            </div>
            <div
              className={styles.hospital_list_card_bottom_emrgBed_number_total}
            >
              /{emrgBed_total}
            </div>
          </div>
        </div>
        <div className={styles.hospital_list_card_bottom_transPati}>
          <div className={styles.hospital_list_card_bottom_transPati_title}>
            이송 중인 환자
          </div>
          <div className={styles.hospital_list_card_bottom_transPati_number}>
            <div
              className={
                styles.hospital_list_card_bottom_transPati_number_current
              }
            >
              {trans_pati}
            </div>
            <div
              className={styles.hospital_list_card_bottom_transPati_number_unit}
            >
              명
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
