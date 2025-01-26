import { HashRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import ListPage from "./pages/ListPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<ListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
