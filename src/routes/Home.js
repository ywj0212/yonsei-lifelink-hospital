import style1 from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={style1.homePage}>
      <Link to="/totalpage" className={style1.linkText}>
        <div className={style1.move_totalPage}>
          <div className={style1.home_Compo_Child} />
          <img className={style1.total_Compo_Item} alt="" src="/group-1.svg" />
          <div className={style1.total_Compo_Text}>종합상황판</div>
        </div>
      </Link>
      <Link to="/hospitalpage">
        <div className={style1.move_hospitalPage}>
          <div className={style1.home_Compo_Child} />
          <img
            className={style1.hospital_Compo_Item}
            alt=""
            src="/group-2.svg"
          />
          <div className={style1.hospital_Compo_Text}>이송 응급실 검색</div>
        </div>
      </Link>
      <Link to="/doctorpage" className={style1.linkText}>
        <div className={style1.move_doctorPage}>
          <div className={style1.home_Compo_Child} />
          <img className={style1.doctor_Compo_Item} alt="" src="/group-3.svg" />
          <div className={style1.doctor_Compo_Text}>의료진 검색</div>
        </div>
      </Link>
      <div className={style1.div_logo}>
        <div className={style1.lifeLink}>LiFE LiNK</div>
        <img className={style1.vectorIcon} alt="" src="/vector.svg" />
        <img className={style1.vectorIcon1} alt="" src="/vector1.svg" />
        <img className={style1.vectorIcon2} alt="" src="/vector2.svg" />
        <img className={style1.vectorIcon3} alt="" src="/vector3.svg" />
        <img className={style1.vectorIcon4} alt="" src="/vector4.svg" />
      </div>
    </div>
  );
};

export default Home;
