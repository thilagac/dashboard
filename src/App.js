import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";

import Login from "./components/shared/Login";

import ProfileSetting from "./components/shared/profileSetting";

import LayoutChart from "./components/shared/Basic chart/LayoutChart";
import AdvanceChart from "./components/shared/AdvanceChart/AdvanceChart";
import LayoutAdvanace from "./components/shared/AdvanceChart/LayoutAdvanceChart";
import TanStackTable from "./components/shared/Table/TanStackTable";
import BasicTable from "./components/shared/Table/BasicTable";
import AdvanceTable from "./components/shared/Table/AdvanceTable";
import BasicFrom from "./components/shared/Form/BasicForm";
import LayoutBasicForm from "./components/shared/Form/LayoutBasicForm";

import AdvanceLayoutForm from "./components/shared/Form/AdvanceLayoutForm";
import LayoutCalcender from "./components/shared/Calcender/LayoutCalcender";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Layout />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/profile" element={<ProfileSetting />}></Route>
        <Route path="/charts" element={<LayoutChart />}></Route>
        <Route path="/Advancechart" element={<LayoutAdvanace />}></Route>
        <Route path="/AdvanceTable" element={<AdvanceTable/>}></Route>
        <Route path="/basicTable" element={<BasicTable/>}></Route>
        <Route path="/basicForm" element={<LayoutBasicForm/>}></Route>
        <Route path="/AdvanceForm" element={<AdvanceLayoutForm/>}></Route>
        <Route path="/list" element={<LayoutCalcender/>}></Route>
        
      </Routes>
    </Router>
  );
}
export default App;
