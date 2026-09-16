import { Link, useSearchParams } from "react-router-dom";

import {
  LayoutDashboard,
  FileText,
  Map,
  Bell,
  TrendingUp,
  Search,
  ShieldCheck,
  ArrowLeft,
  AlertTriangle,
  MapPin,
  User,
  Clock,
  IndianRupee,
  Activity,
  CheckCircle,
  FileSearch,
} from "lucide-react";

function CaseDetails() {
  const [searchParams] = useSearchParams();

  const caseId =
    searchParams.get("id") || "CC-2026-4381";

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
          </Link>

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link
            className="active-nav"
            to="/cases"
          >
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

      {/* MAIN */}
      <main className="reference-content">

        <Link
          to="/cases"
          className="back-to-cases"
        >
          <ArrowLeft size={17} />
          Back to Cases
        </Link>

        {/* HEADING */}
        <div className="case-details-heading">

          <div>

            <div className="case-title-row">

              <h1>
                Case {caseId}
              </h1>

              <span className="severity-table-badge high">
                High Risk
              </span>

            </div>

            <p>
              UPI Fraud • Registered on 15 Sep 2026
            </p>

          </div>

          <div className="case-heading-actions">

            <button className="case-action-button">
              Assign Officer
            </button>

            <button className="case-action-button primary">
              Update Case
            </button>

          </div>

        </div>

        {/* SUMMARY */}
        <div className="case-summary-grid">

          <div className="case-summary-card">

            <MapPin size={22} />

            <div>

              <span>Location</span>

              <strong>
                Hadapsar, Pune
              </strong>

            </div>

          </div>

          <div className="case-summary-card">

            <IndianRupee size={22} />

            <div>

              <span>Amount Involved</span>

              <strong>
                ₹85,000
              </strong>

            </div>

          </div>

          <div className="case-summary-card">

            <Activity size={22} />

            <div>

              <span>Risk Score</span>

              <strong className="risk-score-text">
                91%
              </strong>

            </div>

          </div>

          <div className="case-summary-card">

            <User size={22} />

            <div>

              <span>Assigned Officer</span>

              <strong>
                Unassigned
              </strong>

            </div>

          </div>

        </div>

        {/* DETAILS GRID */}
        <div className="case-details-grid">

          {/* LEFT */}
          <div>

            {/* CASE INFORMATION */}
            <section className="reference-card case-detail-card">

              <div className="reference-card-header">

                <div className="card-title">

                  <FileText size={20} />

                  <h3>
                    Case Information
                  </h3>

                </div>

              </div>

              <div className="case-information-grid">

                <div>
                  <span>Case ID</span>
                  <strong>{caseId}</strong>
                </div>

                <div>
                  <span>Complaint Type</span>
                  <strong>UPI Fraud</strong>
                </div>

                <div>
                  <span>Registration Date</span>
                  <strong>15 Sep 2026</strong>
                </div>

                <div>
                  <span>Current Status</span>

                  <strong>
                    <span className="status-table-badge new">
                      New
                    </span>
                  </strong>

                </div>

                <div>
                  <span>Transaction Channel</span>
                  <strong>UPI</strong>
                </div>

                <div>
                  <span>Reported Location</span>
                  <strong>Hadapsar, Pune</strong>
                </div>

                <div>
                  <span>Financial Institution</span>
                  <strong>Demo National Bank</strong>
                </div>

                <div>
                  <span>Complaint Source</span>
                  <strong>Cyber Crime Portal</strong>
                </div>

              </div>

            </section>

            {/* PREDICTIVE INTELLIGENCE */}
            <section className="reference-card case-detail-card">

              <div className="reference-card-header">

                <div className="card-title">

                  <TrendingUp size={20} />

                  <h3>
                    Predictive Intelligence
                  </h3>

                </div>

                <Link to="/predictions">
                  View Prediction
                </Link>

              </div>

              <div className="prediction-highlight">

                <div className="prediction-risk-circle">
                  91%
                </div>

                <div className="prediction-content">

                  <span className="prediction-label">
                    Predicted Withdrawal Risk
                  </span>

                  <h3>
                    High probability of withdrawal activity
                  </h3>

                  <p>
                    The predictive model identifies a high-risk
                    withdrawal window based on historical transaction
                    patterns and location signals.
                  </p>

                </div>

              </div>

              <div className="prediction-details">

                <div>
                  <Clock size={18} />
                  <span>Predicted Window</span>
                  <strong>14:00 – 18:00</strong>
                </div>

                <div>
                  <MapPin size={18} />
                  <span>Predicted Area</span>
                  <strong>Hadapsar ATM Cluster</strong>
                </div>

                <div>
                  <Activity size={18} />
                  <span>Model Confidence</span>
                  <strong>High</strong>
                </div>

              </div>

            </section>

            {/* TIMELINE */}
            <section className="reference-card case-detail-card">

              <div className="reference-card-header">

                <div className="card-title">

                  <Clock size={20} />

                  <h3>
                    Case Timeline
                  </h3>

                </div>

              </div>

              <div className="case-timeline">

                <div className="timeline-item">

                  <div className="timeline-icon">
                    <CheckCircle size={17} />
                  </div>

                  <div>
                    <strong>
                      Complaint Registered
                    </strong>

                    <span>
                      15 Sep 2026 • 08:32 AM
                    </span>
                  </div>

                </div>

                <div className="timeline-item">

                  <div className="timeline-icon">
                    <Activity size={17} />
                  </div>

                  <div>
                    <strong>
                      Risk Analysis Completed
                    </strong>

                    <span>
                      15 Sep 2026 • 09:05 AM
                    </span>
                  </div>

                </div>

                <div className="timeline-item">

                  <div className="timeline-icon">
                    <TrendingUp size={17} />
                  </div>

                  <div>
                    <strong>
                      Prediction Generated
                    </strong>

                    <span>
                      15 Sep 2026 • 09:18 AM
                    </span>
                  </div>

                </div>

                <div className="timeline-item">

                  <div className="timeline-icon">
                    <AlertTriangle size={17} />
                  </div>

                  <div>
                    <strong>
                      High Risk Alert Created
                    </strong>

                    <span>
                      15 Sep 2026 • 09:20 AM
                    </span>
                  </div>

                </div>

              </div>

            </section>

          </div>

          {/* RIGHT */}
          <div>

            {/* RISK ASSESSMENT */}
            <section className="reference-card case-detail-card">

              <div className="reference-card-header">

                <div className="card-title">

                  <AlertTriangle size={20} />

                  <h3>
                    Risk Assessment
                  </h3>

                </div>

              </div>

              <div className="risk-assessment">

                <div className="risk-score-large">

                  <strong>
                    91%
                  </strong>

                  <span>
                    Overall Risk
                  </span>

                </div>

                <div className="risk-bar">
                  <div></div>
                </div>

                <div className="risk-factors">

                  <div>
                    <span>Transaction Pattern</span>
                    <strong>High</strong>
                  </div>

                  <div>
                    <span>Location Risk</span>
                    <strong>High</strong>
                  </div>

                  <div>
                    <span>Account Linkage</span>
                    <strong>Medium</strong>
                  </div>

                  <div>
                    <span>Historical Similarity</span>
                    <strong>High</strong>
                  </div>

                </div>

              </div>

            </section>

            {/* PREDICTED WITHDRAWAL */}
            <section className="reference-card case-detail-card">

              <div className="reference-card-header">

                <div className="card-title">

                  <Map size={20} />

                  <h3>
                    Predicted Withdrawal
                  </h3>

                </div>

              </div>

              <div className="predicted-location-box">

                <MapPin size={25} />

                <div>

                  <strong>
                    Hadapsar ATM Cluster
                  </strong>

                  <span>
                    Pune, Maharashtra
                  </span>

                </div>

              </div>

              <div className="location-details">

                <div>
                  <span>Prediction Window</span>
                  <strong>14:00 – 18:00</strong>
                </div>

                <div>
                  <span>Risk Score</span>
                  <strong>91%</strong>
                </div>

                <div>
                  <span>Nearby Cases</span>
                  <strong>17</strong>
                </div>

              </div>

              <Link
                to="/gis"
                className="view-map-button"
              >
                <Map size={17} />
                View on GIS Map
              </Link>

            </section>

            {/* EVIDENCE */}
            <section className="reference-card case-detail-card">

              <div className="reference-card-header">

                <div className="card-title">

                  <FileSearch size={20} />

                  <h3>
                    Evidence & Documents
                  </h3>

                </div>

              </div>

              <div className="evidence-list">

                <div className="evidence-item">

                  <FileText size={18} />

                  <div>

                    <strong>
                      Complaint Report
                    </strong>

                    <span>
                      PDF • 245 KB
                    </span>

                  </div>

                </div>

                <div className="evidence-item">

                  <FileText size={18} />

                  <div>

                    <strong>
                      Transaction Summary
                    </strong>

                    <span>
                      PDF • 128 KB
                    </span>

                  </div>

                </div>

                <div className="evidence-item">

                  <FileText size={18} />

                  <div>

                    <strong>
                      Risk Analysis Report
                    </strong>

                    <span>
                      PDF • 310 KB
                    </span>

                  </div>

                </div>

              </div>

            </section>

          </div>

        </div>

      </main>

    </div>
  );
}

export default CaseDetails;