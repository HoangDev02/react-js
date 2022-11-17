import { Link } from "react-router-dom";
import { useEffect } from "react";
// import Logo from "../../assets/images/logo.png";
function Header() {
  /**
   *  Listener events scroll
   */
  useEffect(() => {
    document.querySelector(".btn").onclick = () => {};
    const navigation = document.querySelector(".navigation-wrapper");
    window.onscroll = (e) => {
      if (window.scrollY > 550) {
        const navigation = document.querySelector(".navigation-wrapper");
        navigation.classList.add("scroll");
      } else {
        navigation.classList.remove("scroll");
      }
    };
  }, []);
  return (
    <header className="header-wrapper">
      <section className="navigation-wrapper container-lg">
        <Link to="#" className="navigation-logo">
          {/* <img src={Logo} alt="" /> */}
          <h1>Booking</h1>
        </Link>
        <nav className="navbar">
          <Link to="/" className="nav-link">
            home
          </Link>
          <Link to="#" className="nav-link">
            pages
          </Link>
          <Link to="/rooms" className="nav-link">
            features
          </Link>
          <Link to="/" className="nav-link ">
            offer & package
          </Link>
          <Link to="/rooms" className="nav-link active">
            room
          </Link>
          <Link to="#" className="nav-link">
            element
          </Link>
          <Link to="#" className="nav-link">
            news
          </Link>
        </nav>
        <button className="btn btn-primary" data-set="book now">
          book now
        </button>
      </section>
      <section className="slogan">
        <h1 className="heading">royal room</h1>
        <p className="slogan-detail">
          " apartments tailored to your highest standards "
        </p>
      </section>
    </header>
  );
}

export default Header;
