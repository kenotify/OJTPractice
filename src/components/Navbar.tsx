import './Navbar.css';
import { useState } from 'react';

function Navbar() {
  const [activeLink, setActiveLink] = useState<string>('');

  const handleNavLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} aria-current="page" href="/" onClick={() => handleNavLinkClick('home')}>Home</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} href="./About" onClick={() => handleNavLinkClick('about')}>About</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === 'portfolio' ? 'active' : ''}`} href="./Portfolio" onClick={() => handleNavLinkClick('portfolio')}>Portfolio</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`} href="./ContactUs" onClick={() => handleNavLinkClick('contact')}>ContactUs</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === 'experience' ? 'active' : ''}`} href="./Experience" onClick={() => handleNavLinkClick('experience')}>Experience</a>
            </li>
            <li className="nav-item dropdown">
              <a className={`nav-link dropdown-toggle ${activeLink === 'dropdown' ? 'active' : ''}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => handleNavLinkClick('dropdown')}>
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

