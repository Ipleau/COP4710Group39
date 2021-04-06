import { useLocation, NavLink } from "react-router-dom";

/*

	name of the app										role basis :: super admin | admin | student
	
	super admin: create university
	admin: create event
	student: create rso, view events

*/

const tabs = [
  [{ name: "Create University", route: "/CreateUniversity" }],
  [{ name: "Create Event", route: "/CreateEvent" }],
  [
    { name: "Create RSO", route: "/CreateRSO" },
    { name: "View Events", route: "/ViewEvent" },
  ],
];

function Navbar({ handleLogout, role }) {
  return (
    <div className="navigation">
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Event Planning</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <div className="navbar">
        {tabs[role || 0].map((tab) => (
          <NavLink
            exact
            to={tab.route}
            className="main-nav"
            activeClassName="main-nav-active"
          >
            {tab.name}
          </NavLink>
        ))}
        <NavLink
          exact
          to="/SuperAdmin"
          className="main-nav"
          activeClassName="main-nav-active"
        >
          Super Admin
        </NavLink>
        <NavLink
          exact
          to="/Admin"
          className="main-nav"
          activeClassName="main-nav-active"
        >
          Admin
        </NavLink>
        <NavLink
          exact
          to="/Student"
          className="main-nav"
          activeClassName="main-nav-active"
        >
          Student
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
