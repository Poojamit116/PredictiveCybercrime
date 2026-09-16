import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Map,
  Bell,
  TrendingUp,
  Users,
  Search,
  RefreshCw,
  Eye,
  Filter,
  ShieldCheck,
  CheckCircle,
  Clock,
  AlertTriangle,
  X,
} from "lucide-react";

import { useState } from "react";

function Alerts() {
  const initialAlerts = [
    {
      id: "AL-2026-0318",
      time: "15 Sep 2026, 14:32",
      type: "Cash Withdrawal Risk",
      location: "Hadapsar, Pune",
      description:
        "Predicted high-risk cash withdrawal location detected.",
      severity: "High",
      status: "Unacknowledged",
      caseId: "CC-2026-4381",
    },
    {
      id: "AL-2026-0317",
      time: "15 Sep 2026, 13:48",
      type: "Suspicious Transaction",
      location: "Viman Nagar, Pune",
      description:
        "Multiple suspicious transactions detected within a short time window.",
      severity: "High",
      status: "Acknowledged",
      caseId: "CC-2026-4378",
    },
    {
      id: "AL-2026-0316",
      time: "15 Sep 2026, 12:15",
      type: "ATM Risk",
      location: "Kharadi, Pune",
      description:
        "High-risk ATM cluster identified by predictive model.",
      severity: "High",
      status: "Unacknowledged",
      caseId: "CC-2026-4371",
    },
    {
      id: "AL-2026-0315",
      time: "15 Sep 2026, 11:42",
      type: "Pattern Detected",
      location: "Wakad, Pune",
      description:
        "Similar complaint pattern detected across multiple cases.",
      severity: "Medium",
      status: "Acknowledged",
      caseId: "CC-2026-4369",
    },
    {
      id: "AL-2026-0314",
      time: "15 Sep 2026, 10:26",
      type: "Location Risk",
      location: "Aundh, Pune",
      description:
        "Increased predicted cybercrime activity detected in the area.",
      severity: "Medium",
      status: "Resolved",
      caseId: "CC-2026-4354",
    },
    {
      id: "AL-2026-0313",
      time: "15 Sep 2026, 09:58",
      type: "Transaction Alert",
      location: "Baner, Pune",
      description:
        "Transaction behaviour matched an existing risk pattern.",
      severity: "Low",
      status: "Resolved",
      caseId: "CC-2026-4348",
    },
  ];

  const [alerts, setAlerts] = useState(initialAlerts);

  const [search, setSearch] = useState("");
  const [severityFilter, setSeverityFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const [selectedAlert, setSelectedAlert] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const filteredAlerts = alerts.filter((alert) => {
    const matchesSearch =
      alert.id.toLowerCase().includes(search.toLowerCase()) ||
      alert.type.toLowerCase().includes(search.toLowerCase()) ||
      alert.location.toLowerCase().includes(search.toLowerCase());

    const matchesSeverity =
      severityFilter === "All" ||
      alert.severity === severityFilter;

    const matchesStatus =
      statusFilter === "All" ||
      alert.status === statusFilter;

    return (
      matchesSearch &&
      matchesSeverity &&
      matchesStatus
    );
  });

  const showMessage = (message) => {
    setSuccessMessage(message);

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  const acknowledgeAlert = (alertId) => {
    setAlerts((previous) =>
      previous.map((alert) =>
        alert.id === alertId
          ? {
              ...alert,
              status: "Acknowledged",
            }
          : alert
      )
    );

    setSelectedAlert((previous) =>
      previous && previous.id === alertId
        ? {
            ...previous,
            status: "Acknowledged",
          }
        : previous
    );

    showMessage(`${alertId} acknowledged successfully.`);
  };

  const resolveAlert = (alertId) => {
    setAlerts((previous) =>
      previous.map((alert) =>
        alert.id === alertId
          ? {
              ...alert,
              status: "Resolved",
            }
          : alert
      )
    );

    setSelectedAlert((previous) =>
      previous && previous.id === alertId
        ? {
            ...previous,
            status: "Resolved",
          }
        : previous
    );

    showMessage(`${alertId} marked as resolved.`);
  };

  const activeCount = alerts.filter(
    (alert) => alert.status !== "Resolved"
  ).length;

  const highSeverityCount = alerts.filter(
    (alert) => alert.severity === "High"
  ).length;

  const unacknowledgedCount = alerts.filter(
    (alert) => alert.status === "Unacknowledged"
  ).length;

  const resolvedCount = alerts.filter(
    (alert) => alert.status === "Resolved"
  ).length;

  return (
    <div className="reference-dashboard">

      {/* HEADER */}
      <header className="reference-header">

        <div className="team-brand">

          <div className="team-logo-placeholder">
            <ShieldCheck size={27} />
          </div>

          <div>
            <strong>Cyber Intelligence Team</strong>
            <span>Predictive Analytics Division</span>
          </div>

        </div>

        <div className="platform-brand">

          <h2>
            Predictive Cybercrime Intelligence Platform
          </h2>

          <p>
            From Complaints to Actionable Intelligence
          </p>

        </div>

        <div className="header-right-section">

          <div className="safety-text">

            <strong>
              Safer Citizens | Safer India
            </strong>

            <span>
              सुरक्षित नागरिक | सुरक्षित भारत
            </span>

          </div>

          <div className="header-divider"></div>

          <div className="notification">

            <Bell size={21} />

            <span>
              {unacknowledgedCount}
            </span>

          </div>

          <div className="profile">

            <div className="profile-avatar">
              AP
            </div>

            <div className="profile-info">

              <strong>
                Insp. A. Patil
              </strong>

              <span>
                Maharashtra Police
              </span>

            </div>

            <span className="profile-arrow">
              ⌄
            </span>

          </div>

        </div>

      </header>

      {/* NAVIGATION */}
      <nav className="top-navigation">

        <div className="nav-left">

          <Link to="/dashboard">
            <LayoutDashboard size={17} />
            Dashboard
          </Link>

          <Link to="/cases">
            <FileText size={17} />
            Cases
          </Link>

          <Link to="/predictions">
            <TrendingUp size={17} />
            Predictions
          </Link>

          <Link to="/gis">
            <Map size={17} />
            GIS Intelligence
          </Link>

          <Link
            className="active-nav"
            to="/alerts"
          >
            <Bell size={17} />
            Alerts
          </Link>

          <Link to="/reports">
            Reports
          </Link>

          <Link to="/users">
            <Users size={17} />
            Users
          </Link>

          <Link to="/audit-logs">
            Audit Logs
          </Link>

        </div>

        <div className="nav-search">

          <Search size={18} />

          <input
            type="text"
            placeholder="Search alerts, cases, locations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </nav>

      {/* SUCCESS MESSAGE */}
      {successMessage && (
        <div
          style={{
            position: "fixed",
            top: "90px",
            right: "25px",
            zIndex: 3000,
            background: "#e8f7ee",
            border: "1px solid #9bd5b1",
            color: "#176b3a",
            padding: "13px 18px",
            borderRadius: "8px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          ✓ {successMessage}
        </div>
      )}

      {/* MAIN */}
      <main className="reference-content">

        {/* PAGE HEADING */}
        <div className="reference-page-heading">

          <div>

            <h1>
              Alert Management
            </h1>

            <p>
              Monitor and respond to real-time cybercrime intelligence alerts
            </p>

          </div>

          <div className="dashboard-controls">

            <span>
              Last Updated: 16 Sep 2026, 03:31 PM
            </span>

            <button
              type="button"
              className="refresh-button"
              onClick={() => window.location.reload()}
            >
              <RefreshCw size={16} />
            </button>

          </div>

        </div>

        {/* KPI CARDS */}
        <div className="reference-stats">

          <div className="reference-stat-card blue-stat">

            <div className="reference-stat-icon">
              <Bell size={27} />
            </div>

            <div>

              <strong>
                {activeCount}
              </strong>

              <span>
                Active Alerts
              </span>

              <small>
                Requires monitoring
              </small>

            </div>

          </div>

          <div className="reference-stat-card red-stat">

            <div className="reference-stat-icon">
              <AlertTriangle size={27} />
            </div>

            <div>

              <strong>
                {highSeverityCount}
              </strong>

              <span>
                High Severity
              </span>

              <small>
                Immediate attention
              </small>

            </div>

          </div>

          <div className="reference-stat-card orange-stat">

            <div className="reference-stat-icon">
              <Clock size={27} />
            </div>

            <div>

              <strong>
                {unacknowledgedCount}
              </strong>

              <span>
                Unacknowledged
              </span>

              <small>
                Awaiting officer action
              </small>

            </div>

          </div>

          <div className="reference-stat-card green-stat">

            <div className="reference-stat-icon">
              <CheckCircle size={27} />
            </div>

            <div>

              <strong>
                {resolvedCount}
              </strong>

              <span>
                Resolved
              </span>

              <small>
                Alerts closed
              </small>

            </div>

          </div>

        </div>

        {/* ALERT TABLE */}
        <section className="reference-card">

          <div className="reference-card-header">

            <div className="card-title">

              <Bell size={20} />

              <div>

                <h3>
                  Active Intelligence Alerts
                </h3>

                <p>
                  Real-time alerts generated by the predictive engine
                </p>

              </div>

            </div>

          </div>

          {/* FILTERS */}
          <div className="case-filters">

            <div className="case-search">

              <Search size={18} />

              <input
                type="text"
                placeholder="Search alert ID, type or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

            </div>

            <div className="filter-select">

              <Filter size={17} />

              <select
                value={severityFilter}
                onChange={(e) =>
                  setSeverityFilter(e.target.value)
                }
              >

                <option value="All">
                  All Severity
                </option>

                <option value="High">
                  High
                </option>

                <option value="Medium">
                  Medium
                </option>

                <option value="Low">
                  Low
                </option>

              </select>

            </div>

            <select
              className="case-status-filter"
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value)
              }
            >

              <option value="All">
                All Status
              </option>

              <option value="Unacknowledged">
                Unacknowledged
              </option>

              <option value="Acknowledged">
                Acknowledged
              </option>

              <option value="Resolved">
                Resolved
              </option>

            </select>

          </div>

          {/* TABLE */}
          <div className="prediction-table-wrapper">

            <table className="reference-table">

              <thead>

                <tr>

                  <th>Alert ID</th>
                  <th>Time</th>
                  <th>Alert Type</th>
                  <th>Location</th>
                  <th>Severity</th>
                  <th>Status</th>
                  <th>Case</th>
                  <th>Action</th>

                </tr>

              </thead>

              <tbody>

                {filteredAlerts.map((alert) => (

                  <tr key={alert.id}>

                    <td>

                      <strong className="case-link">
                        {alert.id}
                      </strong>

                    </td>

                    <td>
                      {alert.time}
                    </td>

                    <td>
                      {alert.type}
                    </td>

                    <td>
                      {alert.location}
                    </td>

                    <td>

                      <span
                        className={`severity-table-badge ${alert.severity.toLowerCase()}`}
                      >
                        {alert.severity}
                      </span>

                    </td>

                    <td>

                      <span
                        className={`status-table-badge ${alert.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {alert.status}
                      </span>

                    </td>

                    <td>

                      <Link
                        to={`/case-details?id=${alert.caseId}`}
                        style={{
                          color: "#175b92",
                          fontWeight: "600",
                          textDecoration: "none",
                        }}
                      >
                        {alert.caseId}
                      </Link>

                    </td>

                    <td>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "7px",
                        }}
                      >

                        <button
                          type="button"
                          onClick={() =>
                            setSelectedAlert(alert)
                          }
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            padding: "7px 10px",
                            border: "1px solid #ccd5df",
                            borderRadius: "5px",
                            background: "#ffffff",
                            color: "#23445f",
                            cursor: "pointer",
                            fontSize: "12px",
                            fontWeight: "600",
                          }}
                        >
                          <Eye size={14} />
                          View
                        </button>

                        {alert.status ===
                          "Unacknowledged" && (

                          <button
                            type="button"
                            onClick={() =>
                              acknowledgeAlert(alert.id)
                            }
                            style={{
                              padding: "7px 10px",
                              border: "none",
                              borderRadius: "5px",
                              background: "#123b63",
                              color: "#ffffff",
                              cursor: "pointer",
                              fontSize: "12px",
                              fontWeight: "600",
                            }}
                          >
                            Acknowledge
                          </button>

                        )}

                        {alert.status ===
                          "Acknowledged" && (

                          <button
                            type="button"
                            onClick={() =>
                              resolveAlert(alert.id)
                            }
                            style={{
                              padding: "7px 10px",
                              border: "none",
                              borderRadius: "5px",
                              background: "#2d7d52",
                              color: "#ffffff",
                              cursor: "pointer",
                              fontSize: "12px",
                              fontWeight: "600",
                            }}
                          >
                            Resolve
                          </button>

                        )}

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

            {filteredAlerts.length === 0 && (

              <div className="no-cases">
                No alerts found matching your filters.
              </div>

            )}

          </div>

        </section>

        {/* INFO NOTE */}
        <div
          style={{
            marginTop: "18px",
            padding: "15px 18px",
            borderRadius: "7px",
            background: "#eef6fc",
            border: "1px solid #c8dfef",
            display: "flex",
            alignItems: "flex-start",
            gap: "12px",
          }}
        >

          <AlertTriangle
            size={19}
            style={{
              color: "#175b92",
              marginTop: "2px",
              flexShrink: 0,
            }}
          />

          <div>

            <strong
              style={{
                display: "block",
                color: "#174d78",
                marginBottom: "4px",
              }}
            >
              Intelligence Alert Notice
            </strong>

            <span
              style={{
                fontSize: "13px",
                color: "#526b80",
                lineHeight: "1.5",
              }}
            >
              Alerts shown here are generated from predictive
              analytics and should be verified by authorized
              personnel before operational action.
            </span>

          </div>

        </div>

      </main>

      {/* VIEW ALERT MODAL */}
      {selectedAlert && (

        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedAlert(null);
            }
          }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(8, 25, 43, 0.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            zIndex: 4000,
          }}
        >

          <div
            style={{
              width: "100%",
              maxWidth: "560px",
              background: "#ffffff",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
            }}
          >

            {/* MODAL HEADER */}
            <div
              style={{
                background: "#123b63",
                color: "#ffffff",
                padding: "20px 23px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >

              <div>

                <h2
                  style={{
                    margin: 0,
                    fontSize: "20px",
                  }}
                >
                  Alert Details
                </h2>

                <p
                  style={{
                    margin: "5px 0 0",
                    fontSize: "13px",
                    opacity: 0.85,
                  }}
                >
                  {selectedAlert.id}
                </p>

              </div>

              <button
                type="button"
                onClick={() => setSelectedAlert(null)}
                style={{
                  width: "34px",
                  height: "34px",
                  border: "none",
                  borderRadius: "6px",
                  background: "rgba(255,255,255,0.12)",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <X size={19} />
              </button>

            </div>

            {/* MODAL CONTENT */}
            <div
              style={{
                padding: "23px",
              }}
            >

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  marginBottom: "20px",
                }}
              >

                <div>
                  <small
                    style={{
                      color: "#728496",
                    }}
                  >
                    Alert Type
                  </small>

                  <strong
                    style={{
                      display: "block",
                      marginTop: "4px",
                      color: "#26384a",
                    }}
                  >
                    {selectedAlert.type}
                  </strong>
                </div>

                <div>
                  <small
                    style={{
                      color: "#728496",
                    }}
                  >
                    Location
                  </small>

                  <strong
                    style={{
                      display: "block",
                      marginTop: "4px",
                      color: "#26384a",
                    }}
                  >
                    {selectedAlert.location}
                  </strong>
                </div>

                <div>
                  <small
                    style={{
                      color: "#728496",
                    }}
                  >
                    Severity
                  </small>

                  <strong
                    style={{
                      display: "block",
                      marginTop: "4px",
                    }}
                  >
                    <span
                      className={`severity-table-badge ${selectedAlert.severity.toLowerCase()}`}
                    >
                      {selectedAlert.severity}
                    </span>
                  </strong>
                </div>

                <div>
                  <small
                    style={{
                      color: "#728496",
                    }}
                  >
                    Status
                  </small>

                  <strong
                    style={{
                      display: "block",
                      marginTop: "4px",
                      color: "#26384a",
                    }}
                  >
                    {selectedAlert.status}
                  </strong>
                </div>

              </div>

              <div
                style={{
                  padding: "15px",
                  background: "#f5f8fb",
                  border: "1px solid #e0e7ed",
                  borderRadius: "7px",
                  marginBottom: "20px",
                }}
              >

                <strong
                  style={{
                    display: "block",
                    marginBottom: "7px",
                    color: "#26384a",
                  }}
                >
                  Intelligence Summary
                </strong>

                <p
                  style={{
                    margin: 0,
                    color: "#53697c",
                    fontSize: "14px",
                    lineHeight: "1.55",
                  }}
                >
                  {selectedAlert.description}
                </p>

              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "9px",
                }}
              >

                <button
                  type="button"
                  onClick={() => setSelectedAlert(null)}
                  style={{
                    padding: "10px 17px",
                    border: "1px solid #ccd5df",
                    borderRadius: "6px",
                    background: "#ffffff",
                    color: "#34495e",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                >
                  Close
                </button>

                {selectedAlert.status ===
                  "Unacknowledged" && (

                  <button
                    type="button"
                    onClick={() =>
                      acknowledgeAlert(selectedAlert.id)
                    }
                    style={{
                      padding: "10px 17px",
                      border: "none",
                      borderRadius: "6px",
                      background: "#123b63",
                      color: "#ffffff",
                      cursor: "pointer",
                      fontWeight: "600",
                    }}
                  >
                    Acknowledge Alert
                  </button>

                )}

                {selectedAlert.status ===
                  "Acknowledged" && (

                  <button
                    type="button"
                    onClick={() =>
                      resolveAlert(selectedAlert.id)
                    }
                    style={{
                      padding: "10px 17px",
                      border: "none",
                      borderRadius: "6px",
                      background: "#2d7d52",
                      color: "#ffffff",
                      cursor: "pointer",
                      fontWeight: "600",
                    }}
                  >
                    Resolve Alert
                  </button>

                )}

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Alerts;