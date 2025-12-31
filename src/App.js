import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Careers from "./Pages/Careers";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import NavBar from "./component/NavBar";
import JobDetails from "./component/JobDetails";
import { JobProvider } from "./Context/JobContext";

function App() {
  return (
    <Router>
      <JobProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Careers" element={<Careers />} />
            <Route path="/careers/:id" element={<JobDetails />} />
          </Routes>
        </div>
      </JobProvider>
    </Router>
  );
}

export default App;
