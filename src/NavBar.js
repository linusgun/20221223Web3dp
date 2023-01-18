import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from "./img/3DPE png positivo no spaces.png"
import NavCSS from "./NavBar.module.css"
// import 'https://fonts.googleapis.com/icon?family=Material+Icons';

function NavBar() {
  return (
    <nav>
      <div className={NavCSS.main_nav}>
        <Link to="/home">
          <img
            className={NavCSS.logo}
            src={logo}
            alt="logo de 3D Printing Peru"
          />
        </Link>
        <div className={NavCSS.dropdown}>
          <button className={NavCSS.link}>Industrias</button>
          <div className={[NavCSS.dropdownMenu, NavCSS.industria].join(" ")}>
            <CustomLink to="/joyeria">Joyeria</CustomLink>
            <CustomLink to="/fundicion">Fundicion</CustomLink>
          </div>
        </div>
        <div className={NavCSS.dropdown}>
          <button className={NavCSS.link}>Salud</button>
          <div className={[NavCSS.dropdownMenu, NavCSS.salud].join(" ")}>
            <CustomLink to="/dispo_medicos">Dispositivos medicos</CustomLink>
            <CustomLink to="/bioprinting">Bioprinting</CustomLink>
          </div>
        </div>

        <div className={NavCSS.dropdown}>
          <button className={NavCSS.link}>Impresoras</button>
          <div className={[NavCSS.dropdownMenu, NavCSS.impresoras].join(" ")}>
            <CustomLink to="/plasticos">Plasticos</CustomLink>
            <CustomLink to="/metales">Metales</CustomLink>
          </div>
        </div>

        <div className={NavCSS.dropdown}>
          <button className={NavCSS.link}>Materiales</button>
          <div className={[NavCSS.dropdownMenu, NavCSS.materiales].join(" ")}>
            <CustomLink to="/buscador_mat">Buscador</CustomLink>
          </div>
        </div>

        <button className={NavCSS.link}>Servicios</button>
      </div>
      {/* <div className='aux_nav'>
                <ul>
                    <li>Soporte</li>
                    <li>Contactanos</li>
                </ul>
            </div> */}
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  let classn = ""
  if (isActive) {
    classn = classn.concat("active")
  }

  return (
    <div className={classn}>
      <Link to={to}>{children}</Link>
    </div>
  )
}

export default NavBar
