"use client";

import React, { useState } from "react"; // Додано useState
import Image from "next/image";
import Link from "next/link";

import "../styles/legacy.css";
import { Footer } from "@/components/Footer";
import Modal from "@/components/Modal/Modal";
import LoginForm from "@/components/AuthForm/LoginForm";
import RegisterForm from "@/components/AuthForm/RegisterForm";

export default function Home() {
  // Додано стани для модальних вікон
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

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
            <Link href="/contacts">Contact</Link>
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
      {/* Логіка для модальних вікон */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-3xl font-bold mb-6">Welcome to Pet Service</h1>
        <button
          onClick={() => setIsLoginOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Log In
        </button>
        <button
          onClick={() => setIsRegisterOpen(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-md mt-4"
        >
          Register
        </button>

        <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
          <LoginForm onSuccess={() => setIsLoginOpen(false)} />
        </Modal>

        <Modal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)}>
          <RegisterForm onSuccess={() => setIsRegisterOpen(false)} />
        </Modal>
      </div>
      <Footer />
    </div>
  );
}
