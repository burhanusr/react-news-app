import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__left">
          <a href="#" className="footer__logo">
            myNEWS
          </a>
          <p className="footer__caption">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <p className="footer__copyright">
            &copy; 2024 Burhanu Sultan Ramadan
          </p>
        </div>
        <div className="footer__right">
          <nav className="footer__nav">
            <h2 className="footer__nav-title">Categories</h2>
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <a href="#" className="footer__nav-link">
                  Bussiness
                </a>
              </li>
              <li className="footer__nav-item">
                <a href="#" className="footer__nav-link">
                  Lifestyle
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
