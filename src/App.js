import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./routes/Home";
import TotalPage from "./routes/TotalPage";
import HospitalPage from "./routes/HospitalPage";
import DoctorPage from "./routes/DoctorPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Life-Link 메인페이지";
        metaDescription = "Life-Link 병원 관리자 사이트 메인화면입니다.";
        break;
      case "/totalpage":
        title = "Life-Link 종합상황판";
        metaDescription = "Life-Link 병원 관리자 사이트의 병원 현황 페이지입니다.";
        break;
      case "/doctorpage":
        title = "Life-Link 의료진 검색";
        metaDescription = "Life-Link 병원 관리자 사이트의 의료진 검색 페이지입니다.";
        break;
      case "/hospitalpage":
        title = "Life-Link 주변 응급실";
        metaDescription = "Life-Link 병원 관리자 사이트의 주변 이송 가능한 응급실을 확인할 수 있는 페이지입니다.";
        break;
      default:
        title = "Life-Link";
        metaDescription = "응급 의료 종합 시스템 Life-Link의 병원용 관리자 사이트입니다.";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/totalpage" element={<TotalPage />} />
      <Route path="/hospitalpage" element={<HospitalPage />} />
      <Route path="/doctorpage" element={<DoctorPage />} />
    </Routes>
  );
}

export default App;
