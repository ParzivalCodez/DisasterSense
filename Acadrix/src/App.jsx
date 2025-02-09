import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./stylesheet/style.css";
import Home from "./pages/main/Home.jsx";
import StudentDashboard from "./pages/dashboards/StudentDashboard.jsx";
import CourseHome from "./pages/course/CourseHome.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/CourseHome" element={<CourseHome />} />
      </Routes>
    </Router>
  );
}

export default App;
