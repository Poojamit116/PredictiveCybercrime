import { Link } from "react-router-dom";

import {
  LayoutDashboard,
  FileText,
  Map,
  Bell,
  TrendingUp,
  Activity,
  Users,
  Clock,
  ShieldCheck,
  Search,
  RefreshCw,
  Maximize,
  MapPin,
  AlertTriangle,
  Zap,
  BarChart3,
  FilePlus,
  ArrowRight,
  Info
} from "lucide-react";

function Dashboard() {
  const predictedLocations = [
    {
      number: 1,
      location: "Kharadi (ATM Cluster)",
      district: "Pune",
      risk: "91%",
      confidence: "High",
      window: "14:00 – 18:00",
      level: "high"
    },
    {
      number: 2,
      location: "Hadapsar",
      district: "Pune",
      risk: "84%",
      confidence: "High",
      window: "12:00 – 16:00",
      level: "high"
    },
    {
      number: 3,
      location: "Viman Nagar",
      district: "Pune",
      risk: "76%",
      confidence: "Medium",
      window: "16:00 – 20:00",
      level: "medium"
    },
    {
      number: 4,
      location: "Wakad",
      district: "Pune",
      risk: "68%",
      confidence: "Medium",
      window: "13:00 – 17:00",
      level: "medium"
    },
    {
      number: 5,
      location: "Shivaji Nagar",
      district: "Pune",
      risk: "62%",
      confidence: "Medium",
      window: "15:00 – 19:00",
      level: "medium"
    },
    {
      number: 6,
      location: "Koregaon Park",
      district: "Pune",
      risk: "58%",
      confidence: "Low",
      window: "17:00 – 21:00",
      level: "low"
    },
    {
      number: 7,
      location: "Hinjawadi",
      district: "Pune",
      risk: "55%",
      confidence: "Low",
      window: "12:00 – 16:00",
      level: "low"
    },
    {
      number: 8,
      location: "Aundh",
      district: "Pune",
      risk: "52%",
      confidence: "Low",
      window: "14:00 – 18:00",
      level: "low"
    }
  ];

  const recentAlerts = [
    {
      time: "11:18",
      caseId: "CC-2026-4381",
      location: "Hadapsar",
      type: "Suspicious Withdrawal",
      severity: "High",
      status: "New",
      assigned: "Unassigned"
    },
    {
      time: "10:42",
      caseId: "CC-2026-4378",
      location: "Viman Nagar",
      type: "Multiple Linked Accounts",
      severity: "High",
      status: "Acknowledged",
      assigned: "Insp. A. Patil"
    },
    {
      time: "09:56",
      caseId: "CC-2026-4371",
      location: "Kharadi",
      type: "Unusual Transaction Pattern",
      severity: "Medium",
      status: "Investigating",
      assigned: "PSI R. Singh"
    },
    {
      time: "09:21",
      caseId: "CC-2026-4369",
      location: "Wakad",
      type: "Possible Mule Account",
      severity: "Medium",
      status: "New",
      assigned: "Unassigned"
    },
    {
      time: "08:47",
      caseId: "CC-2026-4361",
      location: "Shivaji Nagar",
      type: "High Velocity Transactions",
      severity: "Low",
      status: "Resolved",
      assigned: "PSI K. Jadhav"
    }
  ];

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

          <h2>Predictive Cybercrime Intelligence Platform</h2>

          <p>
            From Complaints to Actionable Intelligence
          </p>

        </div>

        <div className="header-right-section">

          <div className="safety-text">
            <strong>Safer Citizens | Safer India</strong>
            <span>सुरक्षित नागरिक | सुरक्षित भारत</span>
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
              <strong>Insp. A. Patil</strong>
              <span>Maharashtra Police</span>
            </div>

            <span className="profile-arrow">
              ⌄
            </span>

          </div>

        </div>

      </header>


      {/* TOP NAVIGATION */}

      <nav className="top-navigation">

        <div className="nav-left">

          <Link
            className="nav-home active-nav"
            to="/dashboard"
          >
            <LayoutDashboard size={17} />
          </Link>

          <Link
            className="active-nav"
            to="/dashboard"
          >
            Dashboard
          </Link>

          <Link to="/cases">
            Cases
          </Link>

          <Link to="/predictions">
            Predictions
          </Link>

          <Link to="/gis">
            GIS Intelligence
          </Link>

          <Link to="/alerts">
            Alerts
          </Link>

          <Link to="/reports">
            Reports
          </Link>

          <Link to="/users">
            Users
          </Link>

          <Link to="/audit-logs">
            Audit Logs
          </Link>

        </div>

        <div className="nav-search">

          <input
            type="text"
            placeholder="Search cases, locations, accounts..."
          />

          <Search size={18} />

        </div>

      </nav>


      {/* MAIN CONTENT */}

      <main className="reference-content">

        {/* PAGE HEADING */}

        <div className="reference-page-heading">

          <div>

            <h1>Dashboard</h1>

            <p>
              Real-time overview of cybercrime cases and predictive intelligence
            </p>

          </div>

          <div className="dashboard-controls">

            <span>
              Last Updated: 15 Sep 2026, 11:24 AM
            </span>

            <button className="refresh-button">
              <RefreshCw size={16} />
            </button>

            <select>
              <option>Last 7 Days</option>
              <option>Last 24 Hours</option>
              <option>Last 30 Days</option>
            </select>

          </div>

        </div>


        {/* KPI CARDS */}

        <div className="reference-stats">

          <div className="reference-stat-card blue-stat">

            <div className="reference-stat-icon">
              <FileText size={27} />
            </div>

            <div>
              <strong>1,248</strong>
              <span>Total Cases</span>
              <small className="positive-change">
                ▲ 12% from last month
              </small>
            </div>

          </div>


          <div className="reference-stat-card red-stat">

            <div className="reference-stat-icon">
              <AlertTriangle size={27} />
            </div>

            <div>
              <strong>186</strong>
              <span>High Risk Cases</span>
              <small className="positive-change">
                ▲ 5% from last week
              </small>
            </div>

          </div>


          <div className="reference-stat-card orange-stat">

            <div className="reference-stat-icon">
              <Bell size={27} />
            </div>

            <div>
              <strong>64</strong>
              <span>Active Alerts</span>
              <small className="negative-change">
                ▲ 23 unacknowledged
              </small>
            </div>

          </div>


          <div className="reference-stat-card green-stat">

            <div className="reference-stat-icon">
              <BarChart3 size={27} />
            </div>

            <div>
              <strong>92</strong>
              <span>Predictions Today</span>
              <small>
                Across 14 districts
              </small>
            </div>

          </div>

        </div>


        {/* MAP + PREDICTIONS */}

        <div className="dashboard-two-column">

          {/* MAP */}

          <section className="reference-card map-section">

            <div className="reference-card-header">

              <div className="card-title">

                <Map size={20} />

                <div>
                  <h3>
                    Cybercrime Risk Map (Last 7 Days)
                  </h3>
                </div>

              </div>

              <div className="map-controls">

                <label>
                  Region

                  <select>
                    <option>Pune</option>
                    <option>Mumbai</option>
                    <option>Delhi</option>
                  </select>

                </label>

                <label>
                  Crime Type

                  <select>
                    <option>All</option>
                    <option>Financial Fraud</option>
                    <option>UPI Fraud</option>
                  </select>

                </label>

                <button>
                  <Maximize size={16} />
                </button>

              </div>

            </div>


            <div className="reference-map">

              <div className="map-city-label">
                Pune
              </div>

              <div className="map-place hinjawadi">
                Hinjawadi
              </div>

              <div className="map-place baner">
                Baner
              </div>

              <div className="map-place pashan">
                Pashan
              </div>

              <div className="map-place kharadi">
                Kharadi
              </div>

              <div className="map-place viman">
                Viman Nagar
              </div>

              <div className="map-place hadapsar">
                Hadapsar
              </div>

              <div className="map-place magarpatta">
                Magarpatta
              </div>

              <div className="risk-zone red-zone zone-one"></div>
              <div className="risk-zone red-zone zone-two"></div>
              <div className="risk-zone orange-zone zone-three"></div>
              <div className="risk-zone orange-zone zone-four"></div>
              <div className="risk-zone green-zone zone-five"></div>
              <div className="risk-zone green-zone zone-six"></div>

              <MapPin
                className="map-marker marker-one"
                size={24}
              />

              <MapPin
                className="map-marker marker-two"
                size={24}
              />

              <MapPin
                className="map-marker marker-three"
                size={24}
              />

              <MapPin
                className="map-marker marker-four"
                size={24}
              />

              <MapPin
                className="map-marker marker-five"
                size={24}
              />

              <div className="map-zoom-controls">

                <button>+</button>

                <button>−</button>

                <button>
                  <MapPin size={15} />
                </button>

              </div>


              <div className="map-legend">

                <div>
                  <span className="legend-dot red-dot"></span>
                  High Risk Zone
                </div>

                <div>
                  <span className="legend-dot orange-dot"></span>
                  Medium Risk Zone
                </div>

                <div>
                  <span className="legend-dot green-dot"></span>
                  Low Risk Zone
                </div>

                <div>
                  <span className="legend-marker">
                    <MapPin size={13} />
                  </span>
                  ATM / Location
                </div>

              </div>


              <div className="map-road road-one">
                45
              </div>

              <div className="map-road road-two">
                65
              </div>

              <div className="map-road road-three">
                753F
              </div>

              <div className="map-distance">

                <span></span>

                5 km

              </div>

            </div>

          </section>


          {/* PREDICTED LOCATIONS */}

          <section className="reference-card prediction-location-card">

            <div className="reference-card-header">

              <div className="card-title">

                <MapPin size={20} />

                <h3>
                  Top Predicted Locations (Next 24 Hours)
                </h3>

              </div>

              <Link to="/predictions">
                View All
                <ArrowRight size={15} />
              </Link>

            </div>


            <div className="prediction-table-wrapper">

              <table className="reference-table">

                <thead>

                  <tr>
                    <th>#</th>
                    <th>Location / Area</th>
                    <th>District</th>
                    <th>Risk Score</th>
                    <th>Confidence</th>
                    <th>Prediction Window</th>
                  </tr>

                </thead>

                <tbody>

                  {predictedLocations.map((location) => (

                    <tr key={location.number}>

                      <td>
                        {location.number}
                      </td>

                      <td>
                        <strong>
                          {location.location}
                        </strong>
                      </td>

                      <td>
                        {location.district}
                      </td>

                      <td>

                        <span
                          className={`score-badge ${location.level}`}
                        >
                          {location.risk}
                        </span>

                      </td>

                      <td>

                        <span
                          className={`confidence-badge ${location.level}`}
                        >
                          {location.confidence}
                        </span>

                      </td>

                      <td>
                        {location.window}
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </section>

        </div>


        {/* ALERTS + QUICK ACTIONS */}

        <div className="dashboard-two-column bottom-dashboard-grid">

          {/* RECENT ALERTS */}

          <section className="reference-card">

            <div className="reference-card-header">

              <div className="card-title">

                <Bell size={20} />

                <h3>
                  Recent Alerts
                </h3>

              </div>

              <Link to="/alerts">
                View All
                <ArrowRight size={15} />
              </Link>

            </div>


            <div className="alerts-table-wrapper">

              <table className="reference-table alerts-table">

                <thead>

                  <tr>
                    <th>Time</th>
                    <th>Case ID</th>
                    <th>Location</th>
                    <th>Alert Type</th>
                    <th>Severity</th>
                    <th>Status</th>
                    <th>Assigned To</th>
                  </tr>

                </thead>

                <tbody>

                  {recentAlerts.map((alert) => (

                    <tr key={alert.caseId}>

                      <td>
                        {alert.time}
                      </td>

                      <td>

                        <strong className="case-link">
                          {alert.caseId}
                        </strong>

                      </td>

                      <td>
                        {alert.location}
                      </td>

                      <td>
                        {alert.type}
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
                        {alert.assigned}
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </section>


          {/* QUICK ACTIONS */}

          <section className="reference-card quick-actions-card">

            <div className="reference-card-header">

              <div className="card-title">

                <Zap size={20} />

                <h3>
                  Quick Actions
                </h3>

              </div>

            </div>


            <div className="quick-actions-grid">

              <Link
                to="/cases"
                className="quick-action"
              >

                <div className="quick-action-icon">
                  <FilePlus size={23} />
                </div>

                <div>
                  <strong>
                    Register New Case
                  </strong>

                  <span>
                    Add a new complaint / case
                  </span>
                </div>

                <ArrowRight size={19} />

              </Link>


              <Link
                to="/gis"
                className="quick-action"
              >

                <div className="quick-action-icon">
                  <Map size={23} />
                </div>

                <div>
                  <strong>
                    View GIS Map
                  </strong>

                  <span>
                    Explore risk locations
                  </span>
                </div>

                <ArrowRight size={19} />

              </Link>


              <Link
                to="/predictions"
                className="quick-action"
              >

                <div className="quick-action-icon">
                  <BarChart3 size={23} />
                </div>

                <div>
                  <strong>
                    Run Prediction
                  </strong>

                  <span>
                    Generate location predictions
                  </span>
                </div>

                <ArrowRight size={19} />

              </Link>


              <Link
                to="/reports"
                className="quick-action"
              >

                <div className="quick-action-icon">
                  <FileText size={23} />
                </div>

                <div>
                  <strong>
                    Generate Report
                  </strong>

                  <span>
                    Create investigative report
                  </span>
                </div>

                <ArrowRight size={19} />

              </Link>

            </div>


            <div className="dashboard-info-note">

              <Info size={20} />

              <p>
                This platform provides predictive risk estimates
                to support investigations. Predictions are
                decision-support tools and not proof of criminal
                activity.
              </p>

              <Link to="/predictions">
                Learn More
                <ArrowRight size={15} />
              </Link>

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;