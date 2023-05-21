import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Common/NavBar";

import Home from "./Pages/Home";
import IndexLogs from "./Pages/IndexLogs";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logs" element={<IndexLogs />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
