import "./App.css";
import "primereact/resources/themes/saga-orange/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Weather from "./Components/Pages/Weather";
import Settings from './Components/Pages/settings';
import About from "./Components/Pages/About";
import { Provider } from './Context';
import Home from "./Components/Pages/Home";
import Header from "./Components/Shared/Header";
function App() {
  const isAccent = {
    backgroundColor: JSON.parse(localStorage.getItem("accent")),
    color: "black",
  };
  const isNotAccent = {
    backgroundColor: "none",
    color: "black",
  };
  document.body.style.backgroundColor = JSON.parse(localStorage.getItem('primary'))
  return (
    <Provider>
      <div className="App">
        <BrowserRouter>
          <navbar>
            <Header 
            isAccent={isAccent}
            isNotAccent={isNotAccent} />
          </navbar>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/weather" element={<Weather />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
