import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Bell,
  ChevronDown,
  Users as UsersIcon,
  UserPlus,
  ShieldCheck,
  Activity,
  X,
  CheckCircle,
  Eye,
} from "lucide-react";

const initialUsers = [
  {
    id: 1,
    name: "Admin Officer",
    role: "Administrator",
    department: "Cyber Intelligence Cell",
    email: "admin@cic.gov.in",
    status: "Active",
    lastLogin: "16 Sep 2026, 15:12",
  },
  {
    id: 2,
    name: "Insp. A. Patil",
    role: "Investigator",
    department: "Pune Cyber Cell",
    email: "a.patil@cic.gov.in",
    status: "Active",
    lastLogin: "16 Sep 2026, 14:48",
  },
  {
    id: 3,
    name: "PSI R. Singh",
    role: "Investigator",
    department: "Pune Cyber Cell",
    email: "r.singh@cic.gov.in",
    status: "Active",
    lastLogin: "16 Sep 2026, 13:25",
  },
  {
    id: 4,
    name: "PSI K. Jadhav",
    role: "Investigator",
    department: "Pune Cyber Cell",
    email: "k.jadhav@cic.gov.in",
    status: "Active",
    lastLogin: "15 Sep 2026, 18:40",
  },
  {
    id: 5,
    name: "S. Kulkarni",
    role: "Analyst",
    department: "Intelligence Analysis",
    email: "s.kulkarni@cic.gov.in",
    status: "Active",
    lastLogin: "15 Sep 2026, 17:15",
  },
  {
    id: 6,
    name: "N. Deshmukh",
    role: "Analyst",
    department: "GIS Intelligence",
    email: "n.deshmukh@cic.gov.in",
    status: "Inactive",
    lastLogin: "12 Sep 2026, 11:30",
  },
];

function Users() {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const [newUser, setNewUser] = useState({
    name: "",
    role: "Investigator",
    department: "",
    email: "",
  });

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.department.toLowerCase().includes(search.toLowerCase());

    const matchesRole =
      roleFilter === "All" || user.role === roleFilter;

    const matchesStatus =
      statusFilter === "All" || user.status === statusFilter;

    return matchesSearch && matchesRole && matchesStatus;
  });

  const addUser = () => {
    if (!newUser.name || !newUser.email || !newUser.department) {
      return;
    }

    const user = {
      id: users.length + 1,
      name: newUser.name,
      role: newUser.role,
      department: newUser.department,
      email: newUser.email,
      status: "Active",
      lastLogin: "Never",
    };

    setUsers([...users, user]);

    setNewUser({
      name: "",
      role: "Investigator",
      department: "",
      email: "",
    });

    setShowAddModal(false);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2500);
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

          <Link to="/dashboard">
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

          <Link to="/users" className="active-nav">
            Users
          </Link>

          <Link to="/audit-logs">
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
            <h1>Users</h1>

            <p>
              Manage authorized users and access permissions.
            </p>
          </div>

          <div
            style={{
              fontSize: "12px",
              color: "#647687",
            }}
          >
            Last updated: 16 Sep 2026, 15:30
          </div>

        </div>

        {/* SUMMARY */}
        <div className="user-summary-grid">

          <div className="user-summary-card">
            <div className="user-summary-icon">
              <UsersIcon size={21} />
            </div>

            <div>
              <span>Total Users</span>
              <strong>{users.length}</strong>
              <small>Registered</small>
            </div>
          </div>

          <div className="user-summary-card">
            <div className="user-summary-icon">
              <ShieldCheck size={21} />
            </div>

            <div>
              <span>Active Users</span>
              <strong>
                {users.filter((u) => u.status === "Active").length}
              </strong>
              <small>Authorized</small>
            </div>
          </div>

          <div className="user-summary-card">
            <div className="user-summary-icon">
              <Activity size={21} />
            </div>

            <div>
              <span>Investigators</span>
              <strong>
                {users.filter((u) => u.role === "Investigator").length}
              </strong>
              <small>Field access</small>
            </div>
          </div>

          <div className="user-summary-card">
            <div className="user-summary-icon">
              <UsersIcon size={21} />
            </div>

            <div>
              <span>Analysts</span>
              <strong>
                {users.filter((u) => u.role === "Analyst").length}
              </strong>
              <small>Intelligence access</small>
            </div>
          </div>

        </div>

        {/* TOOLBAR */}
        <div className="users-toolbar">

          <div className="user-search">
            <Search size={15} />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search users..."
            />
          </div>

          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
          >
            <option value="All">All Roles</option>
            <option value="Administrator">Administrator</option>
            <option value="Investigator">Investigator</option>
            <option value="Analyst">Analyst</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <button
            className="add-user-button"
            onClick={() => setShowAddModal(true)}
          >
            <UserPlus size={16} />
            Add New User
          </button>

        </div>

        {/* TABLE */}
        <div className="users-table-wrapper">

          <table className="users-table">

            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Department</th>
                <th>Email</th>
                <th>Status</th>
                <th>Last Login</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredUsers.map((user) => (

                <tr key={user.id}>

                  <td>
                    <strong>{user.name}</strong>
                  </td>

                  <td>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "4px 8px",
                        borderRadius: "4px",
                        background: "#eaf2f9",
                        color: "#0b4f82",
                        fontSize: "11px",
                        fontWeight: "600",
                      }}
                    >
                      {user.role}
                    </span>
                  </td>

                  <td>{user.department}</td>

                  <td>{user.email}</td>

                  <td>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "4px 9px",
                        borderRadius: "12px",
                        background:
                          user.status === "Active"
                            ? "#e7f5ed"
                            : "#f1f3f5",
                        color:
                          user.status === "Active"
                            ? "#28734b"
                            : "#6b7280",
                        fontSize: "11px",
                        fontWeight: "600",
                      }}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td>{user.lastLogin}</td>

                  <td>

                    <button
                      onClick={() => setSelectedUser(user)}
                      style={{
                        border: "1px solid #cdddea",
                        background: "#f7fafc",
                        color: "#0b4f82",
                        borderRadius: "5px",
                        padding: "6px 10px",
                        fontSize: "11px",
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "5px",
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

      </main>

      {/* ADD USER MODAL */}
      {showAddModal && (

        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(8, 35, 58, 0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >

          <div
            style={{
              width: "460px",
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
                alignItems: "center",
              }}
            >
              <div>
                <h3
                  style={{
                    margin: 0,
                    color: "#173f63",
                    fontSize: "17px",
                  }}
                >
                  Add New User
                </h3>

                <p
                  style={{
                    margin: "4px 0 0",
                    color: "#71808d",
                    fontSize: "12px",
                  }}
                >
                  Create an authorized platform account.
                </p>
              </div>

              <X
                size={19}
                style={{ cursor: "pointer" }}
                onClick={() => setShowAddModal(false)}
              />
            </div>

            <div style={{ padding: "20px" }}>

              <input
                placeholder="Full Name"
                value={newUser.name}
                onChange={(e) =>
                  setNewUser({
                    ...newUser,
                    name: e.target.value,
                  })
                }
                style={inputStyle}
              />

              <select
                value={newUser.role}
                onChange={(e) =>
                  setNewUser({
                    ...newUser,
                    role: e.target.value,
                  })
                }
                style={inputStyle}
              >
                <option>Investigator</option>
                <option>Analyst</option>
                <option>Administrator</option>
              </select>

              <input
                placeholder="Department"
                value={newUser.department}
                onChange={(e) =>
                  setNewUser({
                    ...newUser,
                    department: e.target.value,
                  })
                }
                style={inputStyle}
              />

              <input
                placeholder="Official Email"
                value={newUser.email}
                onChange={(e) =>
                  setNewUser({
                    ...newUser,
                    email: e.target.value,
                  })
                }
                style={inputStyle}
              />

              <button
                onClick={addUser}
                style={{
                  width: "100%",
                  border: "none",
                  background: "#0b4f82",
                  color: "white",
                  padding: "11px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Create User
              </button>

            </div>

          </div>

        </div>

      )}

      {/* VIEW USER MODAL */}
      {selectedUser && (

        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(8, 35, 58, 0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >

          <div
            style={{
              width: "430px",
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
                User Details
              </h3>

              <X
                size={19}
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedUser(null)}
              />

            </div>

            <div style={{ padding: "20px" }}>

              <Detail label="Name" value={selectedUser.name} />
              <Detail label="Role" value={selectedUser.role} />
              <Detail
                label="Department"
                value={selectedUser.department}
              />
              <Detail label="Email" value={selectedUser.email} />
              <Detail label="Status" value={selectedUser.status} />
              <Detail
                label="Last Login"
                value={selectedUser.lastLogin}
              />

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
            padding: "13px 18px",
            borderRadius: "7px",
            display: "flex",
            alignItems: "center",
            gap: "9px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.18)",
            fontSize: "13px",
            zIndex: 1100,
          }}
        >
          <CheckCircle size={17} />
          User created successfully
        </div>

      )}

    </div>
  );
}

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  border: "1px solid #dce3e9",
  background: "#f8fafc",
  padding: "10px 12px",
  borderRadius: "6px",
  marginBottom: "12px",
  outline: "none",
  fontSize: "13px",
  color: "#304454",
};

function Detail({ label, value }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
        padding: "11px 0",
        borderBottom: "1px solid #edf1f4",
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

export default Users;