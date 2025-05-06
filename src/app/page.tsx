/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";

export default function Home() {
  return (
    <div className="index">
      <header>
        <nav>
          <div id="navbar">
            <Image src="/img/logo.png" alt="logo" width={50} height={50} />
          </div>
          <div id="navbar-links">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/products">Products</a>
            <a href="/reviews">Reviews</a>
            <a href="/kontakt">Contact</a>
          </div>
        </nav>
      </header>
      <main>
        <h2>For Animals. For Smiles.</h2>
        <p>
          Petpal connects pet owners seeking temporary homes with those eager to
          embrace pet companionship.
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
  );
}
