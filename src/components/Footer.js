import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/global.png";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
  var year = new Date().getFullYear();
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best vacation deals! No Spam.
        </p>
        <p className="footer-subscription-text">You can unsubscribe at any time.</p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe!</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/contact">Phone</Link>
            <Link to="/">Address</Link>
            <Link to="/">Branchs</Link>
            <Link to="/">Support</Link>
            <Link to="/">Sponsorships</Link>
          </div>
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/plans">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investments</Link>
            <Link to="/">Terms & Conditions</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              TRAVELX
              <img className="logo-img" src={Logo} alt="logo" />
            </Link>
          </div>
          <small class="website-rights">
            LAKSHIT SOMANI © {year}-{year - 1999}
          </small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to={{ pathname: "https://www.facebook.com/profile.php?id=100009450172921"}}
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to={{ pathname: "https://www/instagram.com/._pixelated"}}
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link github"
              to={{ pathname: "https://www.github.com/lakshits11" }}
              target="_blank"
              aria-label="Github"
            >
              <i class="fab fa-github" />
            </Link>

            <Link
              class="social-icon-link linkedin"
              to={{ pathname: "https://www.linkedin.com/in/lakshit-somani/"}}
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
