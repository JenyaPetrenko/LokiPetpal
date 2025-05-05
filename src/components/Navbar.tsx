/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <div id="navbar">
        <Image src="/img/logo.png" alt="logo" width={40} height={40} />
        <div id="navbar-links">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/products">Products</a>
          <a href="/reviews">Reviews</a>
          <a href="/kontakt">Contact</a>
        </div>
      </div>
    </nav>
  );
}
