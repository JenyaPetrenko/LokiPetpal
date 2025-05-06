"use client";

import Image from "next/image";
import Link from "next/link";

export default function Products() {
  return (
    <div id="produkterBODY">
      <header>
        <nav>
          <div id="navbar">
            <Image src="/img/logo.png" alt="logo" width={50} height={50} />
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
            <Link id="link_home" href="/">
              Home
            </Link>
            <Link id="link_about" href="/about">
              About Us
            </Link>
            <Link id="link_product" href="/products">
              Products
            </Link>
            <Link id="link_review" href="/reviews">
              Reviews
            </Link>
            <Link id="link_kontakt" href="/kontakt">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section id="produkter">
          <Image
            src="/img/explanation.png"
            alt="explanation of service"
            width={800}
            height={400}
          />
          <h1>Connect with hundreds of owners and caretakers.</h1>
          <div className="container">
            <div className="productCard">
              <Image
                src="/img/Owner-A-(no-bg).png"
                alt="dog owner"
                className="productCard__img"
                width={300}
                height={300}
              />
              <h2>Owner</h2>
              <p className="productCard__info">
                Find a trusted person to care for your pet.
              </p>
              <button className="productCard__btn">Join</button>
            </div>
            <div className="productCard">
              <Image
                src="/img/Owner-B-(no-bg).png"
                alt="dog renter"
                className="productCard__img"
                width={300}
                height={300}
              />
              <h2>Caretaker</h2>
              <p className="productCard__info">
                Help others by spending time with pets.
              </p>
              <button className="productCard__btn">Join</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="address">
          <div className="address-item">
            <Image
              src="/img/icon_addres.png"
              alt="Address Icon"
              width={20}
              height={20}
            />
            <span>Sveavägen, 11</span>
          </div>
          <div className="address-item">
            <Image
              src="/img/icone_phone.png"
              alt="Phone Icon"
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
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/products">Products</Link>
            <Link href="/reviews">Reviews</Link>
            <Link href="/kontakt">Contact</Link>
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
