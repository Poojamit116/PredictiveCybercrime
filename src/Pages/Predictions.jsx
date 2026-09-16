import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Map,
  Bell,
  TrendingUp,
  Users,
  Search,
  ShieldCheck,
  Activity,
  MapPin,
  Clock,
  Brain,
  BarChart3,
  RefreshCw,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Predictions() {
  const riskData = [
    { name: "Mon", high: 12, medium: 18, low: 9 },
    { name: "Tue", high: 15, medium: 21, low: 12 },
    { name: "Wed", high: 19, medium: 17, low: 10 },
    { name: "Thu", high: 14, medium: 24, low: 13 },
    { name: "Fri", high: 22, medium: 20, low: 11 },
    { name: "Sat", high: 17, medium: 16, low: 8 },
    { name: "Sun", high: 13, medium: 19, low: 10 },
  ];

  const accuracyData = [
    { name: "Week 1", accuracy: 82 },
    { name: "Week 2", accuracy: 85 },
    { name: "Week 3", accuracy: 87 },
    { name: "Week 4", accuracy: 89 },
    { name: "Week 5", accuracy: 91 },
    { name: "Week 6", accuracy: 92 },
  ];

  const predictions = [
    {
      id: "PR-2026-092",
      location: "Kharadi ATM Cluster",
      district: "Pune",
      score: "91%",
      confidence: "High",
      window: "14:00 – 18:00",
      risk: "High",
    },
    {
      id: "PR-2026-091",
      location: "Hadapsar",
      district: "Pune",
      score: "84%",
      confidence: "High",
      window: "12:00 – 16:00",
      risk: "High",
    },
    {
      id: "PR-2026-090",
      location: "Viman Nagar",
      district: "Pune",
      score: "76%",
      confidence: "Medium",
      window: "16:00 – 20:00",
      risk: "Medium",
    },
    {
      id: "PR-2026-089",
      location: "Wakad",
      district: "Pune",
      score: "68%",
      confidence: "Medium",
      window: "13:00 – 17:00",
      risk: "Medium",
    },
    {
      id: "PR-2026-088",
      location: "Shivaji Nagar",
      district: "Pune",
      score: "62%",
      confidence: "Medium",
      window: "15:00 – 19:00",
      risk: "Medium",
    },
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
          <p>From Complaints to Actionable Intelligence</p>
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
            <div className="profile-avatar">AP</div>

            <div className="profile-info">
              <strong>Insp. A. Patil</strong>
              <span>Maharashtra Police</span>
            </div>

            <span className="profile-arrow">⌄</span>
          </div>

        </div>

      </header>

      {/* NAVIGATION */}
      <nav className="top-navigation">

        <div className="nav-left">

          <Link to="/dashboard">
            <LayoutDashboard size={17} />
          </Link>

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/cases">
            Cases
          </Link>

          <Link
            className="active-nav"
            to="/predictions"
          >
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

      {/* MAIN */}
      <main className="reference-content">

        {/* PAGE HEADING */}
        <div className="reference-page-heading">

          <div>
            <h1>Predictive Analytics</h1>

            <p>
              AI-driven risk predictions for proactive cybercrime intervention
            </p>
          </div>

          <div className="dashboard-controls">

            <span>
              Last Updated: 15 Sep 2026, 11:24 AM
            </span>

            <button className="refresh-button">
              <RefreshCw size={16} />
            </button>

          </div>

        </div>

        {/* SUMMARY */}
        <div className="reference-stats">

          <div className="reference-stat-card blue-stat">

            <div className="reference-stat-icon">
              <BarChart3 size={27} />
            </div>

            <div>
              <strong>92</strong>
              <span>Predictions Today</span>
              <small>Across 14 districts</small>
            </div>

          </div>

          <div className="reference-stat-card red-stat">

            <div className="reference-stat-icon">
              <AlertTriangle size={27} />
            </div>

            <div>
              <strong>24</strong>
              <span>High Risk</span>
              <small>Require attention</small>
            </div>

          </div>

          <div className="reference-stat-card orange-stat">

            <div className="reference-stat-icon">
              <MapPin size={27} />
            </div>

            <div>
              <strong>37</strong>
              <span>Risk Locations</span>
              <small>Predicted locations</small>
            </div>

          </div>

          <div className="reference-stat-card green-stat">

            <div className="reference-stat-icon">
              <Activity size={27} />
            </div>

            <div>
              <strong>92%</strong>
              <span>Model Accuracy</span>
              <small>Current validation score</small>
            </div>

          </div>

        </div>

        {/* CHARTS */}
        <div className="dashboard-two-column">

          {/* RISK DISTRIBUTION */}
          <section className="reference-card prediction-chart-card">

            <div className="reference-card-header">

              <div className="card-title">

                <BarChart3 size={20} />

                <h3>
                  Risk Prediction Distribution
                </h3>

              </div>

              <select>
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>

            </div>

            <div className="prediction-chart">

              <ResponsiveContainer
                width="100%"
                height={300}
              >
                <BarChart data={riskData}>

                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis dataKey="name" />

                  <YAxis />

                  <Tooltip />

                  <Bar
                    dataKey="high"
                    name="High Risk"
                    fill="#dc3545"
                  />

                  <Bar
                    dataKey="medium"
                    name="Medium Risk"
                    fill="#f59e0b"
                  />

                  <Bar
                    dataKey="low"
                    name="Low Risk"
                    fill="#22a06b"
                  />

                </BarChart>
              </ResponsiveContainer>

            </div>

          </section>

          {/* MODEL ACCURACY */}
          <section className="reference-card prediction-chart-card">

            <div className="reference-card-header">

              <div className="card-title">

                <TrendingUp size={20} />

                <h3>
                  Model Performance
                </h3>

              </div>

              <span className="model-status">
                Active
              </span>

            </div>

            <div className="prediction-chart">

              <ResponsiveContainer
                width="100%"
                height={300}
              >
                <LineChart data={accuracyData}>

                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis dataKey="name" />

                  <YAxis domain={[70, 100]} />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="accuracy"
                    name="Accuracy %"
                    stroke="#1558a6"
                    strokeWidth={3}
                  />

                </LineChart>

              </ResponsiveContainer>

            </div>

          </section>

        </div>

        {/* MODEL INFORMATION */}
        <section className="reference-card model-information-card">

          <div className="reference-card-header">

            <div className="card-title">

              <Brain size={20} />

              <div>
                <h3>Prediction Model Information</h3>
                <span className="model-version">
                  Production Model v2.4
                </span>
              </div>

            </div>

            <span className="model-status">
              Active
            </span>

          </div>

          <div className="model-info-grid">

            <div>
              <span>Algorithm</span>
              <strong>Gradient Boosting</strong>
            </div>

            <div>
              <span>Training Data</span>
              <strong>1.8M Transactions</strong>
            </div>

            <div>
              <span>Features</span>
              <strong>47</strong>
            </div>

            <div>
              <span>Validation Accuracy</span>
              <strong>92%</strong>
            </div>

            <div>
              <span>Last Trained</span>
              <strong>10 Sep 2026</strong>
            </div>

            <div>
              <span>Prediction Horizon</span>
              <strong>24 Hours</strong>
            </div>

          </div>

        </section>

        {/* PREDICTIONS TABLE */}
        <section className="reference-card">

          <div className="reference-card-header">

            <div className="card-title">

              <MapPin size={20} />

              <h3>
                Latest Location Predictions
              </h3>

            </div>

            <Link to="/gis">

              View GIS Map

              <ArrowRight size={15} />

            </Link>

          </div>

          <div className="prediction-table-wrapper">

            <table className="reference-table">

              <thead>

                <tr>
                  <th>Prediction ID</th>
                  <th>Location</th>
                  <th>District</th>
                  <th>Risk Score</th>
                  <th>Confidence</th>
                  <th>Prediction Window</th>
                  <th>Risk Level</th>
                </tr>

              </thead>

              <tbody>

                {predictions.map((prediction) => (

                  <tr key={prediction.id}>

                    <td>
                      <strong className="case-link">
                        {prediction.id}
                      </strong>
                    </td>

                    <td>
                      <strong>
                        {prediction.location}
                      </strong>
                    </td>

                    <td>
                      {prediction.district}
                    </td>

                    <td>
                      <span
                        className={`score-badge ${prediction.risk.toLowerCase()}`}
                      >
                        {prediction.score}
                      </span>
                    </td>

                    <td>
                      <span
                        className={`confidence-badge ${prediction.confidence.toLowerCase()}`}
                      >
                        {prediction.confidence}
                      </span>
                    </td>

                    <td>
                      <span className="prediction-time">
                        <Clock size={14} />
                        {prediction.window}
                      </span>
                    </td>

                    <td>
                      <span
                        className={`severity-table-badge ${prediction.risk.toLowerCase()}`}
                      >
                        {prediction.risk}
                      </span>
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </section>

        {/* INFORMATION NOTE */}
        <div className="dashboard-info-note">

          <Brain size={20} />

          <p>
            Predictions are generated using historical cybercrime
            patterns, transaction behaviour, location signals and
            other available features. They are intended to support
            investigation and proactive intervention and should
            not be treated as proof of criminal activity.
          </p>

        </div>

      </main>

    </div>
  );
}

export default Predictions;