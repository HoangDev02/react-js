import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

function Footer() {
  return (
    <footer className="footer-wrapper">
      <ul className="footers container-sm">
        <li className="footer-item">
          <Link to="#" className="logo">
            <img src={Logo} alt="" />
          </Link>
          <ul className="footer-infor">
            <li className="item-footer-infor">
              <p className="item-footer-infor-title">
                <ion-icon name="mail"></ion-icon>
                email address
              </p>
              <Link to="#" className="item-footer-infor-link">
                INFO@WEBHOTEL.VN
              </Link>
            </li>
            <li className="item-footer-infor">
              <p className="item-footer-infor-title">
                <ion-icon name="call"></ion-icon>
                phone number
              </p>
              <Link to="#" className="item-footer-infor-link">
                0242 242 0777
              </Link>
            </li>
            <li className="item-footer-infor">
              <p className="item-footer-infor-title">
                <ion-icon name="location"></ion-icon>
                hotel address
              </p>
              <Link to="#" className="item-footer-infor-link">
                4th Floor, 147 Mai Dich Street, Cau Giay District, Hanoi
              </Link>
            </li>
          </ul>
        </li>
        <li className="footer-item">
          <p className="footer-item-title">sign up for special offers</p>
          <div className="footer-email-form">
            <input type="text" placeholder="Enter your email..." />
            <button className="btn btn-primary">subscribe</button>
          </div>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
