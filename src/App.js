import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
     setAlert({
       msg:message,
       type:type
     })
      setTimeout(()=>{
      setAlert(null)
     },1000);
  }
    const[mode,setMode]=useState('light');//whether dark mode is enabled or not

    const toggleMode=()=>{
      if(mode==='light'){
        setMode('dark')
        document.body.style.backgroundColor ='#042743';
        showAlert("Dark Mode has been enabled", "success");
        //document.title="nything"--->change ur title dynamically
      }
      else{
        setMode('light')
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode has been enabled","success");
      }
    }
    
  return (
    <>
    <Router>
      < Navbar title = "TextManipulator" aboutText = "About"mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
        <Routes>
          < Route path = "/"
          element = {
              < Textform heading = "Try TextManipulator - word counter, remove extra spaces"
              showAlert = {
                showAlert
              }
              mode = {
                mode
              }
              />}/ >
          <Route  path="/about" element={<About mode={mode}/>}/> 
        </Routes>  
      </div>
   </Router>
    </>
  );
}

export default App;
