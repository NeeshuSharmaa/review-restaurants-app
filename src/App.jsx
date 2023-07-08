import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/home/Home";
import Restaurant from "./pages/restaurant/Restaurant";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants/:id" element={<Restaurant />} />
      </Routes>
    </div>
  );
}

export default App;
