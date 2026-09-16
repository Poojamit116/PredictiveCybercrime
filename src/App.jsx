import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Cases from "./Pages/Cases";
import CaseDetails from "./Pages/CaseDetails";
import GISIntelligence from "./Pages/GISIntelligence";
import Alerts from "./Pages/Alerts";
import Predictions from "./Pages/Predictions";
import Reports from "./Pages/Reports";
import Users from "./Pages/Users";
import AuditLogs from "./Pages/AuditLogs";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Main Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Case Management */}
        <Route path="/cases" element={<Cases />} />
        <Route path="/case-details" element={<CaseDetails />} />

        {/* Intelligence */}
        <Route path="/gis" element={<GISIntelligence />} />
        <Route path="/predictions" element={<Predictions />} />

        {/* Alerts */}
        <Route path="/alerts" element={<Alerts />} />

        {/* Reports */}
        <Route path="/reports" element={<Reports />} />

        {/* Administration */}
        <Route path="/users" element={<Users />} />
        <Route path="/audit-logs" element={<AuditLogs />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;