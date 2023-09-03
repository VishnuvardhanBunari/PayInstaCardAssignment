import './index.css'

const Header = () => (
  <nav className="nav-container">
    <ul type="none" className="unordered-list">
      <div className="item-container">
        <li className="list-name">Home</li>
        <li className="list-name">About</li>
        <li className="list-name">Schedules</li>
        <li className="list-name">Membership</li>
        <li className="list-name">Pricing</li>
      </div>

      <div className="item-container-second">
        <li className="list-name">Offers</li>
        <li>
          <button type="button" className="button">
            Courses
          </button>
        </li>
      </div>
    </ul>
  </nav>
)

export default Header
