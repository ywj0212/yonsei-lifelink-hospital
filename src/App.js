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
        title = "";
        metaDescription = "";
        break;
      case "/totalpage":
        title = "";
        metaDescription = "";
        break;
      case "/doctorpage":
        title = "";
        metaDescription = "";
        break;
      case "/hospitalpage":
        title = "";
        metaDescription = "";
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
