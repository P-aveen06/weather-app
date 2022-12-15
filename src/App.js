import "./App.css";
import "primereact/resources/themes/saga-orange/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Weather from "./Components/Pages/Weather";
import Settings from "./Components/Pages/settings";
import About from "./Components/Pages/About";
import { Provider } from "./Context";
import Home from "./Components/Pages/Home";
import Header from "./Components/Shared/Header";
import Error from "./Components/Pages/Errors";
function App() {
  const isAccent = {
    color: JSON.parse(localStorage.getItem("accent")),
    border: `2px solid ${JSON.parse(localStorage.getItem("accent"))}`
  }
  const isSecondary = {
    color: JSON.parse(localStorage.getItem("secondary")),
  };
  document.body.style.backgroundColor = JSON.parse(
    localStorage.getItem("primary")
  );
  return (
    <BrowserRouter>
      <Provider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Header/>}>
              <Route path="/app/home" element={<Home/>}/>
              <Route path="/app/settings" element={<Settings/>}/>
              <Route path="/app/about" element={<About/>}/>
              <Route path="/app/weather" element={<Weather/>}/>
            </Route>
            <Route path="/app/home" element={<Home/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
