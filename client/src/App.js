import { Routes, Route } from "react-router-dom";
import MainDisplay from "./pages/main/MainDisplay.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainDisplay />}/>
    </Routes>
  );
}

export default App;
