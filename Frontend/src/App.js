import logo from './logo.svg';
import './App.css';
import {useNavigate} from "react-router";
import {Routes,Route} from "react-router";
import {Phonedata} from "./components/phonedata"

function App(){
  return (
    <div className = "App">
     <Routes>
       <Route path = "/" element = { <Phonedata/>}></Route>
     </Routes>
      </div>
      
    
  );
}

export default App;
