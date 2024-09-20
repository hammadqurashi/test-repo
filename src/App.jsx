import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
