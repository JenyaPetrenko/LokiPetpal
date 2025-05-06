"use client";

import Image from "next/image";
import Link from "next/link";
import "../styles/legacy.css";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <div className="index">
      <header>
        <nav>
          <div id="navbar">
            <Image src="/img/logo.png" alt="logo" width={100} height={100} />
          </div>
          <div id="navbar-links">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/products">Products</Link>
            <Link href="/reviews">Reviews</Link>
            <Link href="/kontakt">Contact</Link>
          </div>
        </nav>
      </header>
      <div className="wrapper">
        <main>
          <h2>For Animals. For Smiles.</h2>
          <p>
            Petpal connects pet owners seeking temporary homes with those eager
            to embrace pet companionship.
          </p>
          <Link href="/products">
            <button className="CTA">To the Service</button>
          </Link>
        </main>
      </div>
      <Footer />
    </div>
  );
}
