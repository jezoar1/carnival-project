import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route}from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Adminlogin from './Component/Admin/Adminlogin';
import Adminnavbar from './Component/Admin/Adminnavbar';
import Adminhome from './Component/Admin/Adminhome';
import Adminaddblog from './Component/Admin/Adminaddblog';
import Adminaddevent from './Component/Admin/Adminaddevent';
import Footer from './Component/Footer';
import Studentlogin from './Component/Student/Studentlogin';
import Studentnavbar from './Component/Student/Studentnavbar';
import Studentprofile from './Component/Student/Studentprofile';
import Studentedit from './Component/Student/Studentedit';
import Studenthome from './Component/Student/Studenthome';
import Studentsignup from './Component/Student/Studentsignup';
import Studentregistration from './Component/Student/Studentregistration';
import Gameregistration from './Component/Student/Gameregistration';
import Adminaddresult from './Component/Admin/Adminaddresult';
import HomePage from './Component/Student/Home';
import About from './Component/Student/About';
import Resultview from './Component/Student/Resultview';


function App() {
  return (
    <BrowserRouter>
    <div >
      <Routes>
        <Route path="/Alogin" element={<Adminlogin/>}></Route> 
        <Route path="/Anavbar" element={<Adminnavbar/>}></Route> 
        <Route path="/Ahome" element={<Adminhome/>}></Route>
        <Route path="/Ablog" element={<Adminaddblog/>}></Route> 
        <Route path="/Aevent" element={<Adminaddevent/>}></Route>
        <Route path="/Aresult" element={<Adminaddresult/>}></Route>
        <Route path="/footer" element={<Footer/>}></Route> 
        <Route path="/slogin" element={<Studentlogin/>}></Route> 
        <Route path="/snavbar" element={<Studentnavbar/>}></Route> 
        <Route path="/shome" element={<Studenthome/>}></Route> 
        <Route path="/sprofile" element={<Studentprofile/>}></Route>
        <Route path="/sedit" element={<Studentedit/>}></Route>
        <Route path="/ssign" element={<Studentsignup/>}></Route>
        <Route path="/sregistration" element={<Studentregistration/>}></Route>
        <Route path="/gregistration" element={<Gameregistration/>}></Route>
        <Route path="/" element={<HomePage/>}></Route>
           <Route path="/about" element={<About/>}></Route>
             <Route path="/rview" element={<Resultview/>}></Route>

        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
