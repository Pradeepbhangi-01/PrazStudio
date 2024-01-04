import React from "react";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import "./Footer.scss";
import creditcardImg from "../../assets/creditcardicons.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content">
          <div className="footer-left">
            <h3 className="title">Follow Us</h3>
            <ul className="follow ">
              <li className="hover-link">
                <a href="https://www.instagram.com/prazstudio/" target="_blank">
                  <FaInstagram />
                </a>
              </li>
              <li className="hover-link">
                <a
                  href="https://www.youtube.com/channel/UCIHRFNikrz30H10k3skim9Q"
                  target="_blank"
                >
                  <FaYoutube />
                </a>
              </li>

              <li className="hover-link">
                <FaTwitter />
              </li>
            </ul>
          </div>
          <div className="footer-right">
            <h3 className="title">Company</h3>
            <ul className="company">
              <li className="hover-link">Contact Us</li>
              <li className="hover-link">Privacy Policy</li>

              <li className="hover-link">Terms and Conditions</li>
            </ul>
          </div>
        </div>
        <div className="subfooter center">
          <div className="credit-card-img">
            <img src={creditcardImg} alt="credit card img" />
          </div>
          <p>
            Copyright {new Date().getFullYear()}©<strong>PrazStudio</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
