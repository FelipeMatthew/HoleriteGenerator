import logoImage from '../../assets/Header.png';

export function Header()
{
  return(
      <nav className="navbar">
        <section className="flex wrapper">
          <a href="#">
            <img src={logoImage} alt="" />
          </a>

          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#" className="nav-link">Perfil</a>
            </li>
            <li className="nav-item">
              <a href='' className="nav-link">Cadastro</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Gerador</a>
            </li>
          </ul>

          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </section>
      </nav>   
  )
}