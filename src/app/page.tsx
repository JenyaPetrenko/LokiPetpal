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
          <button
            className="CTA"
            onClick={() => setIsLoginOpen(true)} // Відкриваємо модальне вікно
          >
            To the Service
          </button>
        </main>
      </div>
      {/* Логіка для модальних вікон */}
      {/* Модальне вікно для логіну */}
      <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
        <LoginForm onSuccess={() => setIsLoginOpen(false)} />
      </Modal>

      {/* Модальне вікно для реєстрації */}
      <Modal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)}>
        <RegisterForm onSuccess={() => setIsRegisterOpen(false)} />
      </Modal>
      <Footer />
    </div>
  );
}
