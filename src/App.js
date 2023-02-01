import  './App.css';
import Header from "./Components/Header/Header";
import Section1 from "./Components/Main/Section1/Section1";
import {Route, Routes} from "react-router-dom";
import {MenBar} from "./Components/Men_menu/Men_menu";
import Section2 from "./Components/Main/Section2/Section2";
import data from "../src/data";
import Section3 from "./Components/Main/Section3/Section3";
import Section4 from "./Components/Main/Section4/Section4";
import Footer from "./Components/Footer/Footer";
import {WomenBar} from "./Components/Main/Women_menu/Women_menu";
import NewArrivals from "./Components/Main/NewArrivals/NewArrivals";
import Watches from "./Components/Watches/Watches";


function App() {

  return (
        <div>
             <Header/>
            <Routes>
                <Route path="/men" element={<MenBar data={data.collection}/>}/>
                <Route path="/women" element={<WomenBar data={data.WomenCollection}/>}/>
                <Route path="/new" element={<NewArrivals data={data.section}/>}/>
                <Route path="/watches" element={<Watches data={data.watches}/>}/>
            </Routes>
            <Section1/>
            <Section2 data={data.section}/>
            <Section3/>
            <Section4/>
            <Footer/>
        </div>

  );
}

export default App;
