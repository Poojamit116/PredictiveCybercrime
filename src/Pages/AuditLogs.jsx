import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Bell,
  ChevronDown,
  Activity,
  CheckCircle,
  XCircle,
  Eye,
  X,
  RefreshCw,
} from "lucide-react";

const initialLogs = [
  {
    id: "AUD-2026-0916-001",
    date: "16 Sep 2026, 15:12",
    user: "Admin Officer",
    action: "LOGIN",
    target: "System",
    status: "Success",
    ip: "10.24.18.21",
  },
  {
    id: "AUD-2026-0916-002",
    date: "16 Sep 2026, 14:48",
    user: "Insp. A. Patil",
    action: "VIEW CASE",
    target: "CC-2026-4378",
    status: "Success",
    ip: "10.24.18.35",
  },
  {
    id: "AUD-2026-0916-003",
    date: "16 Sep 2026, 14:32",
    user: "PSI R. Singh",
    action: "ACKNOWLEDGE ALERT",
    target: "ALT-2026-006",
    status: "Success",
    ip: "10.24.18.42",
  },
  {
    id: "AUD-2026-0916-004",
    date: "16 Sep 2026, 13:55",
    user: "S. Kulkarni",
    action: "VIEW GIS",
    target: "Pune Risk Map",
    status: "Success",
    ip: "10.24.18.51",
  },
  {
    id: "AUD-2026-0916-005",
    date: "16 Sep 2026, 12:40",
    user: "N. Deshmukh",
    action: "DOWNLOAD REPORT",
    target: "RPT-2026-0914",
    status: "Success",
    ip: "10.24.18.67",
  },
  {
    id: "AUD-2026-0916-006",
    date: "16 Sep 2026, 11:25",
    user: "Unknown User",
    action: "LOGIN",
    target: "System",
    status: "Failed",
    ip: "172.16.44.19",
  },
];

function AuditLogs() {
  const [logs, setLogs] = useState(initialLogs);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [selectedLog, setSelectedLog] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const filteredLogs = logs.filter((log) => {
    const text =
      `${log.id} ${log.user} ${log.action} ${log.target}`.toLowerCase();

    return (
      text.includes(search.toLowerCase()) &&
      (status === "All" || log.status === status)
    );
  });

  const refreshLogs = () => {
    setLogs([...initialLogs]);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <div className="reference-dashboard">

      {/* HEADER */}
      <header className="reference-header">

        <div className="team-brand">
          <div className="team-logo-placeholder">🛡</div>

          <div>
            <strong>CYBER INTELLIGENCE CELL</strong>
            <span>Predictive Cybercrime Analytics</span>
          </div>
        </div>

        <div className="platform-brand">
          <h2>Cybercrime Predictive Intelligence Platform</h2>
          <p>Law Enforcement Intelligence &amp; Analytics</p>
        </div>

        <div className="header-right-section">
          <span className="safety-text">
            SECURE • AUTHORIZED ACCESS ONLY
          </span>

          <div className="header-divider"></div>

          <Bell size={18} />

          <div className="profile-section">
            <div className="profile-avatar">AO</div>

            <div>
              <strong>Admin Officer</strong>
              <span>Cyber Intelligence Cell</span>
            </div>

            <ChevronDown size={15} />
          </div>
        </div>

      </header>

      {/* NAVIGATION */}
      <nav className="top-navigation">

        <div className="nav-left">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/cases">Cases</Link>
          <Link to="/predictions">Predictions</Link>
          <Link to="/gis">GIS Intelligence</Link>
          <Link to="/alerts">Alerts</Link>
          <Link to="/reports">Reports</Link>
          <Link to="/users">Users</Link>
          <Link to="/audit-logs" className="active-nav">
            Audit Logs
          </Link>
        </div>

        <div className="nav-search">
          <Search size={14} />
          <input placeholder="Search cases, locations, reports..." />
        </div>

      </nav>

      {/* CONTENT */}
      <main className="reference-content">

        <div className="reference-page-heading">
          <div>
            <h1>Audit Logs</h1>
            <p>
              Monitor user activity and security events across the platform.
            </p>
          </div>

          <button
            onClick={refreshLogs}
            style={{
              border: "1px solid #cdddea",
              background: "white",
              color: "#0b4f82",
              padding: "8px 12px",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              cursor: "pointer",
              fontSize: "12px",
            }}
          >
            <RefreshCw size={14} />
            Refresh
          </button>
        </div>

        {/* SUMMARY */}
        <div className="audit-summary-grid">

          <div className="audit-summary-card">
            <div className="audit-summary-icon">
              <Activity size={21} />
            </div>

            <div>
              <span>Total Events</span>
              <strong>{logs.length}</strong>
              <small>Recorded</small>
            </div>
          </div>

          <div className="audit-summary-card">
            <div className="audit-summary-icon">
              <CheckCircle size={21} />
            </div>

            <div>
              <span>Successful</span>
              <strong>
                {logs.filter((l) => l.status === "Success").length}
              </strong>
              <small>Events</small>
            </div>
          </div>

          <div className="audit-summary-card">
            <div className="audit-summary-icon">
              <XCircle size={21} />
            </div>

            <div>
              <span>Failed</span>
              <strong>
                {logs.filter((l) => l.status === "Failed").length}
              </strong>
              <small>Events</small>
            </div>
          </div>

          <div className="audit-summary-card">
            <div className="audit-summary-icon">
              <Activity size={21} />
            </div>

            <div>
              <span>Active Users</span>
              <strong>5</strong>
              <small>Today</small>
            </div>
          </div>

        </div>

        {/* FILTERS */}
        <div className="audit-toolbar">

          <div className="audit-search">
            <Search size={15} />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search audit logs..."
            />
          </div>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Success">Success</option>
            <option value="Failed">Failed</option>
          </select>

        </div>

        {/* TABLE */}
        <div className="audit-card">

          <div className="audit-table-wrapper">

            <table className="audit-table">

              <thead>
                <tr>
                  <th>Log ID</th>
                  <th>Date &amp; Time</th>
                  <th>User</th>
                  <th>Action</th>
                  <th>Target</th>
                  <th>Status</th>
                  <th>IP Address</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {filteredLogs.map((log) => (

                  <tr key={log.id}>

                    <td className="audit-log-id">
                      {log.id}
                    </td>

                    <td className="audit-date">
                      {log.date}
                    </td>

                    <td>
                      {log.user}
                    </td>

                    <td className="audit-action">
                      {log.action}
                    </td>

                    <td className="audit-target">
                      {log.target}
                    </td>

                    <td>
                      {log.status === "Success" ? (
                        <span className="audit-success">
                          Success
                        </span>
                      ) : (
                        <span className="audit-failed">
                          Failed
                        </span>
                      )}
                    </td>

                    <td>
                      {log.ip}
                    </td>

                    <td>
                      <button
                        className="view-audit-button"
                        onClick={() => setSelectedLog(log)}
                        style={{
                          border: "1px solid #cdddea",
                          background: "#f7fafc",
                          color: "#0b4f82",
                          borderRadius: "5px",
                          padding: "6px 10px",
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "5px",
                          fontSize: "11px",
                        }}
                      >
                        <Eye size={14} />
                        View
                      </button>
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </main>

      {/* VIEW MODAL */}
      {selectedLog && (

        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(8,35,58,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >

          <div
            style={{
              width: "440px",
              background: "white",
              borderRadius: "9px",
              boxShadow: "0 12px 35px rgba(0,0,0,0.2)",
            }}
          >

            <div
              style={{
                padding: "17px 20px",
                borderBottom: "1px solid #e0e7ed",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  color: "#173f63",
                }}
              >
                Audit Event Details
              </h3>

              <X
                size={19}
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedLog(null)}
              />
            </div>

            <div style={{ padding: "20px" }}>

              <Detail label="Log ID" value={selectedLog.id} />
              <Detail label="Date & Time" value={selectedLog.date} />
              <Detail label="User" value={selectedLog.user} />
              <Detail label="Action" value={selectedLog.action} />
              <Detail label="Target" value={selectedLog.target} />
              <Detail label="Status" value={selectedLog.status} />
              <Detail label="IP Address" value={selectedLog.ip} />

            </div>

          </div>

        </div>

      )}

      {/* TOAST */}
      {showToast && (

        <div
          style={{
            position: "fixed",
            right: "25px",
            bottom: "25px",
            background: "#173f63",
            color: "white",
            padding: "12px 17px",
            borderRadius: "7px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "13px",
            zIndex: 1100,
          }}
        >
          <CheckCircle size={16} />
          Audit logs refreshed
        </div>

      )}

    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "11px 0",
        borderBottom: "1px solid #edf1f4",
        gap: "20px",
      }}
    >
      <span
        style={{
          color: "#71808d",
          fontSize: "12px",
        }}
      >
        {label}
      </span>

      <strong
        style={{
          color: "#173f63",
          fontSize: "12px",
          textAlign: "right",
        }}
      >
        {value}
      </strong>
    </div>
  );
}

export default AuditLogs;