import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";

import Login from "./components/shared/Login";

import ProfileSetting from "./components/shared/profileSetting";

import LayoutChart from "./components/shared/Basic chart/LayoutChart";
import AdvanceChart from "./components/shared/AdvanceChart/AdvanceChart";
import LayoutAdvanace from "./components/shared/AdvanceChart/LayoutAdvanceChart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Layout />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/profile" element={<ProfileSetting />}></Route>
        <Route path="/charts" element={<LayoutChart />}></Route>
        <Route path="/Advancechart" element={<LayoutAdvanace />}></Route>
        
      </Routes>
    </Router>
  );
}
export default App;
