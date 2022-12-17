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
import Error from "./Components/Pages/Errors";
import WeatherApp from "./WeatherApp";
import Pages from "./Pages";
function App() {
  const isAccent = {
    color: JSON.parse(localStorage.getItem("accent")),
    border: `2px solid ${JSON.parse(localStorage.getItem("accent"))}`,
  };
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
            <Route path="/app" element={<WeatherApp />}>
              <Route index path="home" element={<Home isAccent={isAccent} isSecondary={isSecondary}/>} />
              <Route path="settings" element={<Settings isAccent={isAccent} isSecondary={isSecondary}/>} />
              <Route path="about" element={<About isAccent={isAccent} isSecondary={isSecondary}/>} />
              <Route path="weather" element={<Weather isAccent={isAccent} isSecondary={isSecondary}/>
              }/>
            </Route>
            <Route path="/pages" element={<Pages />}>
              <Route path="error" element={<Error />} />
            </Route>
            <Route path="*" element={<Navigate to="/pages/error" />} />
            <Route path="/" element={<Navigate to="/app" />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
