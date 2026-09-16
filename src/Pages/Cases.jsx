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
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  X,
  Plus,
} from "lucide-react";

import { useState } from "react";

function Cases() {
  const initialCases = [
    {
      id: "CC-2026-4381",
      date: "15 Sep 2026",
      type: "UPI Fraud",
      location: "Hadapsar, Pune",
      amount: "₹85,000",
      risk: "High",
      score: "91%",
      status: "New",
      officer: "Unassigned",
    },
    {
      id: "CC-2026-4378",
      date: "15 Sep 2026",
      type: "Banking Fraud",
      location: "Viman Nagar, Pune",
      amount: "₹1,25,000",
      risk: "High",
      score: "87%",
      status: "Investigating",
      officer: "Insp. A. Patil",
    },
    {
      id: "CC-2026-4371",
      date: "14 Sep 2026",
      type: "Investment Fraud",
      location: "Kharadi, Pune",
      amount: "₹2,40,000",
      risk: "High",
      score: "84%",
      status: "Investigating",
      officer: "PSI R. Singh",
    },
    {
      id: "CC-2026-4369",
      date: "14 Sep 2026",
      type: "Phishing",
      location: "Wakad, Pune",
      amount: "₹46,500",
      risk: "Medium",
      score: "72%",
      status: "New",
      officer: "Unassigned",
    },
    {
      id: "CC-2026-4361",
      date: "13 Sep 2026",
      type: "Card Fraud",
      location: "Shivaji Nagar, Pune",
      amount: "₹32,000",
      risk: "Medium",
      score: "68%",
      status: "Acknowledged",
      officer: "PSI K. Jadhav",
    },
    {
      id: "CC-2026-4354",
      date: "13 Sep 2026",
      type: "UPI Fraud",
      location: "Aundh, Pune",
      amount: "₹18,500",
      risk: "Medium",
      score: "61%",
      status: "Investigating",
      officer: "Insp. A. Patil",
    },
    {
      id: "CC-2026-4348",
      date: "12 Sep 2026",
      type: "OTP Fraud",
      location: "Baner, Pune",
      amount: "₹12,000",
      risk: "Low",
      score: "42%",
      status: "Resolved",
      officer: "PSI R. Singh",
    },
    {
      id: "CC-2026-4339",
      date: "12 Sep 2026",
      type: "Online Shopping Fraud",
      location: "Pashan, Pune",
      amount: "₹9,800",
      risk: "Low",
      score: "35%",
      status: "Resolved",
      officer: "PSI K. Jadhav",
    },
  ];

  const [cases, setCases] = useState(initialCases);

  const [search, setSearch] = useState("");
  const [riskFilter, setRiskFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    type: "UPI Fraud",
    location: "",
    amount: "",
    description: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const filteredCases = cases.filter((item) => {
    const matchesSearch =
      item.id.toLowerCase().includes(search.toLowerCase()) ||
      item.type.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase());

    const matchesRisk =
      riskFilter === "All" || item.risk === riskFilter;

    const matchesStatus =
      statusFilter === "All" || item.status === statusFilter;

    return matchesSearch && matchesRisk && matchesStatus;
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleRegisterCase = (e) => {
    e.preventDefault();

    const newNumber = 4382 + (cases.length - initialCases.length);

    const newCase = {
      id: `CC-2026-${newNumber}`,
      date: "16 Sep 2026",
      type: formData.type,
      location: formData.location,
      amount: `₹${Number(formData.amount).toLocaleString("en-IN")}`,
      risk: "Medium",
      score: "Pending",
      status: "New",
      officer: "Unassigned",
    };

    setCases((previous) => [newCase, ...previous]);

    setFormData({
      type: "UPI Fraud",
      location: "",
      amount: "",
      description: "",
    });

    setShowForm(false);

    setSuccessMessage(
      `${newCase.id} registered successfully.`
    );

    setTimeout(() => {
      setSuccessMessage("");
    }, 3500);
  };

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

            <span>3</span>

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

          <Link
            className="active-nav"
            to="/cases"
          >
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

          <Link to="/alerts">
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
            placeholder="Search cases, locations, accounts..."
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
            zIndex: 2000,
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

      {/* MAIN CONTENT */}
      <main className="reference-content">

        {/* PAGE HEADING */}
        <div className="reference-page-heading">

          <div>

            <h1>
              Case Management
            </h1>

            <p>
              Monitor, investigate and manage cybercrime complaints
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

        {/* SUMMARY CARDS */}
        <div className="reference-stats">

          <div className="reference-stat-card blue-stat">

            <div className="reference-stat-icon">
              <FileText size={27} />
            </div>

            <div>
              <strong>
                {1248 + (cases.length - initialCases.length)}
              </strong>

              <span>
                Total Cases
              </span>

              <small>
                All registered complaints
              </small>
            </div>

          </div>

          <div className="reference-stat-card red-stat">

            <div className="reference-stat-icon">
              <Bell size={27} />
            </div>

            <div>
              <strong>186</strong>

              <span>
                High Risk
              </span>

              <small>
                Require immediate attention
              </small>
            </div>

          </div>

          <div className="reference-stat-card orange-stat">

            <div className="reference-stat-icon">
              <TrendingUp size={27} />
            </div>

            <div>
              <strong>427</strong>

              <span>
                Under Investigation
              </span>

              <small>
                Currently active cases
              </small>
            </div>

          </div>

          <div className="reference-stat-card green-stat">

            <div className="reference-stat-icon">
              <Users size={27} />
            </div>

            <div>
              <strong>635</strong>

              <span>
                Resolved
              </span>

              <small>
                Successfully closed cases
              </small>
            </div>

          </div>

        </div>

        {/* CASE MANAGEMENT CARD */}
        <section className="reference-card cases-management-card">

          <div className="reference-card-header">

            <div className="card-title">

              <FileText size={20} />

              <div>

                <h3>
                  Cybercrime Cases
                </h3>

              </div>

            </div>

            {/* REGISTER BUTTON */}
            <button
              type="button"
              onClick={() => setShowForm(true)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "7px",
                padding: "10px 17px",
                border: "none",
                borderRadius: "6px",
                background: "#123b63",
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                position: "relative",
                zIndex: 50,
                boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
              }}
            >
              <Plus size={17} />
              Register New Case
            </button>

          </div>

          {/* FILTERS */}
          <div className="case-filters">

            <div className="case-search">

              <Search size={18} />

              <input
                type="text"
                placeholder="Search Case ID, type or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

            </div>

            <div className="filter-select">

              <Filter size={17} />

              <select
                value={riskFilter}
                onChange={(e) =>
                  setRiskFilter(e.target.value)
                }
              >

                <option value="All">
                  All Risk Levels
                </option>

                <option value="High">
                  High Risk
                </option>

                <option value="Medium">
                  Medium Risk
                </option>

                <option value="Low">
                  Low Risk
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

              <option value="New">
                New
              </option>

              <option value="Acknowledged">
                Acknowledged
              </option>

              <option value="Investigating">
                Investigating
              </option>

              <option value="Resolved">
                Resolved
              </option>

            </select>

          </div>

          {/* TABLE */}
          <div className="prediction-table-wrapper">

            <table className="reference-table cases-table">

              <thead>

                <tr>
                  <th>Case ID</th>
                  <th>Date</th>
                  <th>Crime Type</th>
                  <th>Location</th>
                  <th>Amount</th>
                  <th>Risk</th>
                  <th>Risk Score</th>
                  <th>Status</th>
                  <th>Assigned To</th>
                  <th>Action</th>
                </tr>

              </thead>

              <tbody>

                {filteredCases.map((item) => (

                  <tr key={item.id}>

                    <td>
                      <strong className="case-link">
                        {item.id}
                      </strong>
                    </td>

                    <td>
                      {item.date}
                    </td>

                    <td>
                      {item.type}
                    </td>

                    <td>
                      {item.location}
                    </td>

                    <td>
                      <strong>
                        {item.amount}
                      </strong>
                    </td>

                    <td>

                      <span
                        className={`severity-table-badge ${item.risk.toLowerCase()}`}
                      >
                        {item.risk}
                      </span>

                    </td>

                    <td>

                      <span
                        className={`score-badge ${
                          item.risk.toLowerCase()
                        }`}
                      >
                        {item.score}
                      </span>

                    </td>

                    <td>

                      <span
                        className={`status-table-badge ${item.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {item.status}
                      </span>

                    </td>

                    <td>
                      {item.officer}
                    </td>

                    <td>

                      <Link
                        to={`/case-details?id=${item.id}`}
                        className="view-case-button"
                      >
                        <Eye size={15} />
                        View
                      </Link>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

            {filteredCases.length === 0 && (

              <div className="no-cases">
                No cases found matching your filters.
              </div>

            )}

          </div>

          {/* PAGINATION */}
          <div className="case-pagination">

            <span>
              Showing {filteredCases.length} of {cases.length} cases
            </span>

            <div>

              <button type="button">
                <ChevronLeft size={17} />
              </button>

              <button
                type="button"
                className="page-active"
              >
                1
              </button>

              <button type="button">
                2
              </button>

              <button type="button">
                3
              </button>

              <button type="button">
                <ChevronRight size={17} />
              </button>

            </div>

          </div>

        </section>

      </main>

      {/* REGISTER CASE MODAL */}
      {showForm && (

        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowForm(false);
            }
          }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(8, 25, 43, 0.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 3000,
            padding: "20px",
          }}
        >

          <div
            style={{
              width: "100%",
              maxWidth: "560px",
              background: "#ffffff",
              borderRadius: "10px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
              overflow: "hidden",
            }}
          >

            {/* MODAL HEADER */}
            <div
              style={{
                background: "#123b63",
                color: "#ffffff",
                padding: "20px 24px",
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
                  Register New Case
                </h2>

                <p
                  style={{
                    margin: "5px 0 0",
                    fontSize: "13px",
                    opacity: 0.85,
                  }}
                >
                  Enter the complaint details below
                </p>

              </div>

              <button
                type="button"
                onClick={() => setShowForm(false)}
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

            {/* FORM */}
            <form
              onSubmit={handleRegisterCase}
              style={{
                padding: "24px",
              }}
            >

              {/* CRIME TYPE */}
              <div style={{ marginBottom: "17px" }}>

                <label
                  style={{
                    display: "block",
                    marginBottom: "7px",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#26384a",
                  }}
                >
                  Crime Type
                </label>

                <select
                  name="type"
                  value={formData.type}
                  onChange={handleFormChange}
                  required
                  style={{
                    width: "100%",
                    padding: "11px 12px",
                    border: "1px solid #ccd5df",
                    borderRadius: "6px",
                    fontSize: "14px",
                    background: "#ffffff",
                    boxSizing: "border-box",
                  }}
                >
                  <option>UPI Fraud</option>
                  <option>Banking Fraud</option>
                  <option>Investment Fraud</option>
                  <option>Phishing</option>
                  <option>Card Fraud</option>
                  <option>OTP Fraud</option>
                  <option>Online Shopping Fraud</option>
                </select>

              </div>

              {/* LOCATION */}
              <div style={{ marginBottom: "17px" }}>

                <label
                  style={{
                    display: "block",
                    marginBottom: "7px",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#26384a",
                  }}
                >
                  Location
                </label>

                <input
                  type="text"
                  name="location"
                  placeholder="Example: Hadapsar, Pune"
                  value={formData.location}
                  onChange={handleFormChange}
                  required
                  style={{
                    width: "100%",
                    padding: "11px 12px",
                    border: "1px solid #ccd5df",
                    borderRadius: "6px",
                    fontSize: "14px",
                    boxSizing: "border-box",
                  }}
                />

              </div>

              {/* AMOUNT */}
              <div style={{ marginBottom: "17px" }}>

                <label
                  style={{
                    display: "block",
                    marginBottom: "7px",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#26384a",
                  }}
                >
                  Amount Involved
                </label>

                <input
                  type="number"
                  name="amount"
                  placeholder="Example: 85000"
                  min="0"
                  value={formData.amount}
                  onChange={handleFormChange}
                  required
                  style={{
                    width: "100%",
                    padding: "11px 12px",
                    border: "1px solid #ccd5df",
                    borderRadius: "6px",
                    fontSize: "14px",
                    boxSizing: "border-box",
                  }}
                />

              </div>

              {/* DESCRIPTION */}
              <div style={{ marginBottom: "22px" }}>

                <label
                  style={{
                    display: "block",
                    marginBottom: "7px",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#26384a",
                  }}
                >
                  Complaint Description
                </label>

                <textarea
                  name="description"
                  placeholder="Enter a brief description of the complaint..."
                  value={formData.description}
                  onChange={handleFormChange}
                  required
                  rows="4"
                  style={{
                    width: "100%",
                    padding: "11px 12px",
                    border: "1px solid #ccd5df",
                    borderRadius: "6px",
                    fontSize: "14px",
                    resize: "vertical",
                    fontFamily: "inherit",
                    boxSizing: "border-box",
                  }}
                />

              </div>

              {/* ACTION BUTTONS */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "10px",
                }}
              >

                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  style={{
                    padding: "10px 18px",
                    border: "1px solid #ccd5df",
                    borderRadius: "6px",
                    background: "#ffffff",
                    color: "#34495e",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "7px",
                    padding: "10px 18px",
                    border: "none",
                    borderRadius: "6px",
                    background: "#123b63",
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  <Plus size={17} />
                  Register Case
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}

export default Cases;