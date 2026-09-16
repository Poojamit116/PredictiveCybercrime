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
  RefreshCw,
  MapPin,
  AlertTriangle,
  Activity,
  Clock,
} from "lucide-react";

import {
  MapContainer,
  TileLayer,
  Circle,
  Marker,
  Popup,
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

function GISIntelligence() {
  const locations = [
    {
      name: "Kharadi ATM Cluster",
      area: "Kharadi",
      score: 91,
      risk: "High",
      cases: 24,
      window: "14:00 – 18:00",
      position: [18.5514, 73.9397],
    },
    {
      name: "Hadapsar",
      area: "Hadapsar",
      score: 84,
      risk: "High",
      cases: 19,
      window: "12:00 – 16:00",
      position: [18.5089, 73.926],
    },
    {
      name: "Viman Nagar",
      area: "Viman Nagar",
      score: 76,
      risk: "Medium",
      cases: 15,
      window: "16:00 – 20:00",
      position: [18.5679, 73.9143],
    },
    {
      name: "Wakad",
      area: "Wakad",
      score: 68,
      risk: "Medium",
      cases: 11,
      window: "13:00 – 17:00",
      position: [18.5975, 73.7898],
    },
    {
      name: "Shivaji Nagar",
      area: "Shivaji Nagar",
      score: 62,
      risk: "Medium",
      cases: 9,
      window: "15:00 – 19:00",
      position: [18.5308, 73.8475],
    },
    {
      name: "Aundh",
      area: "Aundh",
      score: 52,
      risk: "Low",
      cases: 6,
      window: "14:00 – 18:00",
      position: [18.559, 73.807],
    },
  ];

  const createMarkerIcon = (risk) => {
    let className = "gis-marker";

    if (risk === "High") {
      className += " gis-marker-high";
    } else if (risk === "Medium") {
      className += " gis-marker-medium";
    } else {
      className += " gis-marker-low";
    }

    return L.divIcon({
      className: "",
      html: `<div class="${className}"></div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
    });
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

          <Link to="/predictions">
            Predictions
          </Link>

          <Link
            className="active-nav"
            to="/gis"
          >
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

        {/* HEADING */}
        <div className="reference-page-heading">

          <div>
            <h1>GIS Intelligence</h1>

            <p>
              Geospatial analysis of cybercrime risk and predicted
              withdrawal locations
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

          <div className="reference-stat-card red-stat">

            <div className="reference-stat-icon">
              <AlertTriangle size={27} />
            </div>

            <div>
              <strong>12</strong>
              <span>High Risk Zones</span>
              <small>Require attention</small>
            </div>

          </div>

          <div className="reference-stat-card orange-stat">

            <div className="reference-stat-icon">
              <MapPin size={27} />
            </div>

            <div>
              <strong>25</strong>
              <span>Medium Risk Zones</span>
              <small>Under monitoring</small>
            </div>

          </div>

          <div className="reference-stat-card blue-stat">

            <div className="reference-stat-icon">
              <Activity size={27} />
            </div>

            <div>
              <strong>37</strong>
              <span>Predicted Locations</span>
              <small>Next 24 hours</small>
            </div>

          </div>

          <div className="reference-stat-card green-stat">

            <div className="reference-stat-icon">
              <Map size={27} />
            </div>

            <div>
              <strong>14</strong>
              <span>Districts Covered</span>
              <small>Active monitoring</small>
            </div>

          </div>

        </div>

        {/* GIS LAYOUT */}
        <div className="gis-layout">

          {/* MAP */}
          <section className="reference-card gis-map-card">

            <div className="reference-card-header">

              <div className="card-title">

                <Map size={20} />

                <h3>Cybercrime Risk Heatmap</h3>

              </div>

              <div className="gis-header-controls">

                <select>
                  <option>Pune</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                </select>

                <select>
                  <option>All Crime Types</option>
                  <option>UPI Fraud</option>
                  <option>Banking Fraud</option>
                  <option>Phishing</option>
                </select>

              </div>

            </div>

            <div className="gis-map-wrapper">

              <MapContainer
                center={[18.5505, 73.8955]}
                zoom={12}
                scrollWheelZoom={true}
                className="gis-map"
              >

                <TileLayer
                  attribution='&copy; OpenStreetMap contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* RISK ZONES */}

                <Circle
                  center={[18.5514, 73.9397]}
                  radius={2200}
                  pathOptions={{
                    color: "#dc3545",
                    fillColor: "#dc3545",
                    fillOpacity: 0.18,
                  }}
                />

                <Circle
                  center={[18.5089, 73.926]}
                  radius={1800}
                  pathOptions={{
                    color: "#dc3545",
                    fillColor: "#dc3545",
                    fillOpacity: 0.18,
                  }}
                />

                <Circle
                  center={[18.5679, 73.9143]}
                  radius={1600}
                  pathOptions={{
                    color: "#f59e0b",
                    fillColor: "#f59e0b",
                    fillOpacity: 0.17,
                  }}
                />

                <Circle
                  center={[18.5975, 73.7898]}
                  radius={1500}
                  pathOptions={{
                    color: "#f59e0b",
                    fillColor: "#f59e0b",
                    fillOpacity: 0.17,
                  }}
                />

                <Circle
                  center={[18.559, 73.807]}
                  radius={1300}
                  pathOptions={{
                    color: "#22a06b",
                    fillColor: "#22a06b",
                    fillOpacity: 0.15,
                  }}
                />

                {/* MARKERS */}

                {locations.map((location) => (

                  <Marker
                    key={location.name}
                    position={location.position}
                    icon={createMarkerIcon(location.risk)}
                  >

                    <Popup>

                      <div className="gis-popup">

                        <strong>
                          {location.name}
                        </strong>

                        <span>
                          Risk Score: {location.score}%
                        </span>

                        <span>
                          Risk Level: {location.risk}
                        </span>

                        <span>
                          Nearby Cases: {location.cases}
                        </span>

                        <span>
                          Prediction: {location.window}
                        </span>

                      </div>

                    </Popup>

                  </Marker>

                ))}

              </MapContainer>

              {/* MAP LEGEND */}
              <div className="gis-legend">

                <strong>Risk Level</strong>

                <div>
                  <span className="gis-legend-dot high"></span>
                  High Risk
                </div>

                <div>
                  <span className="gis-legend-dot medium"></span>
                  Medium Risk
                </div>

                <div>
                  <span className="gis-legend-dot low"></span>
                  Low Risk
                </div>

              </div>

            </div>

          </section>

          {/* LOCATION LIST */}
          <section className="reference-card gis-location-card">

            <div className="reference-card-header">

              <div className="card-title">

                <MapPin size={20} />

                <h3>
                  Predicted Locations
                </h3>

              </div>

              <Link to="/predictions">
                View All
              </Link>

            </div>

            <div className="gis-location-list">

              {locations.map((location) => (

                <div
                  className="gis-location-item"
                  key={location.name}
                >

                  <div
                    className={`gis-location-icon ${location.risk.toLowerCase()}`}
                  >
                    <MapPin size={18} />
                  </div>

                  <div className="gis-location-content">

                    <strong>
                      {location.name}
                    </strong>

                    <span>
                      {location.area}, Pune
                    </span>

                    <div className="gis-location-meta">

                      <span>
                        Risk {location.score}%
                      </span>

                      <span>
                        {location.cases} cases
                      </span>

                    </div>

                  </div>

                  <div className="gis-location-risk">

                    <span
                      className={`severity-table-badge ${location.risk.toLowerCase()}`}
                    >
                      {location.risk}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </section>

        </div>

        {/* FILTERS */}
        <section className="reference-card gis-filter-card">

          <div className="reference-card-header">

            <div className="card-title">

              <Search size={20} />

              <h3>Geospatial Filters</h3>

            </div>

          </div>

          <div className="gis-filters">

            <label>
              Date Range

              <select>
                <option>Last 7 Days</option>
                <option>Last 24 Hours</option>
                <option>Last 30 Days</option>
              </select>
            </label>

            <label>
              Crime Category

              <select>
                <option>All Categories</option>
                <option>Financial Fraud</option>
                <option>UPI Fraud</option>
                <option>Banking Fraud</option>
                <option>Phishing</option>
              </select>
            </label>

            <label>
              Risk Level

              <select>
                <option>All Risk Levels</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </label>

            <label>
              Prediction Window

              <select>
                <option>Next 24 Hours</option>
                <option>Next 12 Hours</option>
                <option>Next 48 Hours</option>
              </select>
            </label>

          </div>

        </section>

        {/* INFO */}
        <div className="dashboard-info-note">

          <MapPin size={20} />

          <p>
            GIS intelligence combines historical complaint patterns,
            transaction signals and predictive risk scores to
            identify locations requiring proactive monitoring.
          </p>

        </div>

      </main>

    </div>
  );
}

export default GISIntelligence;