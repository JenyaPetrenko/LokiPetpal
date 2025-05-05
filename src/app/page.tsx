/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="index">
      <header>
        <nav>
          <div id="navbar">
            <Image
              src="/img/logo.png"
              alt="logo"
              width={50}
              height={50} // Задайте розміри логотипу
            />
            <svg
              id="hamburger"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-align-justify"
            >
              <line x1="21" y1="10" x2="3" y2="10"></line>
              <line x1="21" y1="6" x2="3" y2="6"></line>
              <line x1="21" y1="14" x2="3" y2="14"></line>
              <line x1="21" y1="18" x2="3" y2="18"></line>
            </svg>
          </div>
          <div id="navbar-links" className="display">
            <a id="link_home" href="/">
              Home
            </a>
            <a id="link_about" href="/about">
              About Us
            </a>
            <a id="link_product" href="/products">
              Products
            </a>
            <a id="link_review" href="/reviews">
              Reviews
            </a>
            <a id="link_kontakt" href="/contact">
              Contact
            </a>
          </div>
        </nav>
      </header>
      <div className="wrapper">
        <main>
          <h2>For Animals.</h2>
          <h2>For Smiles.</h2>
          <p>
            Petpal connects pet owners seeking temporary homes with those eager
            to embrace pet companionship.
          </p>
          <button
            type="button"
            onClick={() => (window.location.href = "/products")}
            className="CTA"
          >
            To the Service
          </button>
        </main>
      </div>
      <footer className="footer">
        <div className="address">
          <div className="address-item">
            <Image
              src="/img/icon_addres.png"
              alt="Address icon"
              width={20}
              height={20}
            />
            <span>Sveavägen, 11</span>
          </div>
          <div className="address-item">
            <Image
              src="/img/icone_phone.png"
              alt="Phone icon"
              width={20}
              height={20}
            />
            <span>(000) 000 00 00</span>
          </div>
        </div>
        <hr className="line" />
        <div className="footer-container">
          <div className="footer-links">
            <Image src="/img/logo.png" alt="Logo" width={50} height={50} />
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/products">Products</a>
            <a href="/reviews">Reviews</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="CopyAndSocial">
            <p>©Petpals</p>
            <div className="footer-social">
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
