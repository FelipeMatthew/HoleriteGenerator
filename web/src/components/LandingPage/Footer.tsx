import logoImage from '../../assets/Header.png';

export function Footer() 
{
    return (
        <footer className="wrapper">
              <span className="alinhador">
                <img src={logoImage} alt="" />
              </span>
              <nav className="alinhador">

                <ul className="flex lista">
                  <a>Home</a>
                  <a>About</a>
                  <a>Docs</a>
                  <a>GitHub</a>
                </ul>
              </nav>
              <nav className="alinhador">
                <ul className="flex lista2">
                  <li><i className="fa-brands fa-github"></i></li>
                  <li> <i className="fa-brands fa-facebook"></i></li>
                  <li> <i className="fa-brands fa-twitter"></i></li>
                  <li><i className="fa-brands fa-youtube"></i></li>
                  <li><i className="fa-brands fa-linkedin"></i></li>
                  <li><i className="fa-solid fa-envelope"></i></li>
                </ul>
              </nav>
              <div className="creditos ">
                <p>© Copyright 2022. Powered with ♥ by </p>
                <span className="alinhador">
                  <a>@MarkesZks | @FelipeMatthew</a>
                </span>
              </div>
            </footer>
    )
} 