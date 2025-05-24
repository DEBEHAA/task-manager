"use client"

import React, { useContext } from "react"
import { FaBars, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link,useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

const Header = ({ toggleSidebar }) => {
  const { user, logout } = useContext(AuthContext)
  const [dropdownOpen, setDropdownOpen] = React.useState(false)
    const navigate = useNavigate()

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }
const handleLogout = () => {
    logout()
    setDropdownOpen(false)
    navigate("/login") // 👈 Redirect to login after logout
  }
  return (
    <header className="header">
      <button className="mobile-toggle" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <h1>Smart Task Manager</h1>
      <div className="user-info">
        <div className="dropdown">
          <button onClick={toggleDropdown} className="btn btn-secondary">
            {user?.name} <FaUser className="ml-2" />
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/profile" onClick={() => setDropdownOpen(false)}>
                Profile
              </Link>
             <button className="logout-btn" onClick={handleLogout}>
                <FaSignOutAlt /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
