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
function App() {
  const isAccent = {
   color: JSON.parse(localStorage.getItem("accent"))
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
          <navbar>
            <Header isAccent={isAccent} />
          </navbar>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />}></Route>
            <Route
              path="/home"
              element={
                <Home
                  isAccent={isAccent}
                  isSecondary={isSecondary}
                />
              }
            ></Route>
            <Route
              path="/weather"
              element={
                <Weather
                  isAccent={isAccent}
                  isSecondary={isSecondary}
                />
              }
            ></Route>
            <Route
              path="/settings"
              element={
                <Settings
                  isAccent={isAccent}
                  isSecondary={isSecondary}
                />
              }
            ></Route>
            <Route
              path="/about"
              element={
                <About
                  isAccent={isAccent}
                  isSecondary={isSecondary}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
