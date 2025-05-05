/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";

export default function Kontakt() {
  return (
    <div className="kontakt">
      <header>
        <nav>
          <div id="navbar">
            <Image src="/img/logo.png" alt="logo" width={40} height={40} />
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
            <a id="link_kontakt" href="/kontakt">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <div className="wrapper">
        <div className="images">
          <div className="display-none-mobile">
            <Image
              src="/img/office2.png"
              alt="office"
              width={400}
              height={300}
            />
          </div>
          <div className="display-none-desktop">
            <Image
              src="/img/office.png"
              alt="office"
              width={400}
              height={300}
            />
          </div>
        </div>

        <div className="form">
          <h1>Contact us</h1>
          <div className="contacts">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="number">Phone number</label>
            <input type="number" name="number" id="number" />
          </div>
          <div className="account-type">
            <p>Account Type</p>
            <div className="radio-options">
              <label htmlFor="owner">
                <input id="owner" type="radio" name="account-type" />
                Pet Owner
              </label>
              <label htmlFor="renter">
                <input id="renter" type="radio" name="account-type" />
                Caretaker
              </label>
            </div>
          </div>
          <div className="topic">
            <p>Topic of your mail</p>
            <select name="topic">
              <option value="">(select one)</option>
              <option value="1">Pet Owner Registration</option>
              <option value="2">Pet Availability</option>
              <option value="3">Feedback and Suggestions</option>
              <option value="4">Other</option>
            </select>
          </div>
          <textarea
            id="bio"
            name="message"
            rows={5}
            placeholder="Write the text..."
          ></textarea>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}
