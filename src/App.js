import "./App.css";
import "primereact/resources/themes/saga-orange/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Weather from "./Components/Pages/Weather";
import Settings from './Components/Pages/settings';
import About from "./Components/Shared/About";
import {Provider} from './Context';
import Home from "./Components/Pages/Home";
function App() {
 document.body.style.backgroundColor=JSON.parse(localStorage.getItem('primary'))
  return (
    <Provider>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/weather" element={<Weather />}></Route>
          <Route path="/settings" element={<Settings/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </BrowserRouter> 
    </div>
    </Provider>
  );
}

export default App;
