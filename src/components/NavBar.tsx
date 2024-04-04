import { NavLink } from 'react-router-dom'

const Nav = () => {


  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 px-1">
        <NavLink to="/" >E-commerce</NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <NavLink to="/" >Home</NavLink>
          </li>
          <li>
            <NavLink to="gallery" >Gallery</NavLink>
          </li>
          <li>
            <NavLink to="testimonials" >Testimonials</NavLink>
          </li>
          <li>
            <NavLink to="cart" > 🛒 </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav