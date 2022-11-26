import "./App.css";
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Weather from "./Components/Weather";
import Settings from './Components/settings';
import {Provider} from './Context';
// import HomeTheme from "./Components/HomeTheme";
function App() {
  return (
    <Provider>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/weather" element={<Weather />}></Route>
          {/* <Route path="/hometheme" element={<HomeTheme />}></Route> */}
          <Route path="/settings" element={<Settings/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
