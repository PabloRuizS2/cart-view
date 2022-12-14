import React from 'react'
import { Link } from 'react-router-dom'

function Li(props) {
  return (
    <li>
      <a href="#/">{props.title}</a>
    </li>
  )
}
function NavBar() {
  const navItems = ['Home', 'categoria', 'favoritos', 'historial', 'ofertas']
  return (
    <nav className="lf-navbar">
      <ul className="lf-navUl">
        {navItems.map(title => {
          let route
          title == 'Home' ? (route = '/') : (route = `/${title}`)

          return (
            <Link to={route} key={title}>
              <Li title={title} />
            </Link>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavBar
