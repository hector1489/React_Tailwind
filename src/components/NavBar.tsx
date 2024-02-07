import { NavLink } from 'react-router-dom'

const Nav = () => {


  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" >Home</NavLink>
          </li>
          <li>
            <details>
              <summary>
                Parent
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                <NavLink to="gallery" >Gallery</NavLink>
                </li>
                <li>
                <NavLink to="testimonials" >Testimonials</NavLink>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav