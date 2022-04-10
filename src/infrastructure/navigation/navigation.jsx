import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../../features/Dashboard/Dashboard.screens";

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route exact element={<Dashboard />} path="/" />
        {/* <Route exact element={<Dashboard />} path="/" />
        <Route exact element={<Dashboard />} path="/" />
        <Route exact element={<Dashboard />} path="/" />
        <Route exact element={<Dashboard />} path="/" />
        <Route exact element={<Dashboard />} path="/" /> */}
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's No Page like this!!!</p>
            </main>
          }
        />
      </Routes>
    </Router>
  );
};

export default Navigation;
