import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <Image
            src="/img/hero-1.jpg"
            alt="hero"
            className="hero"
            width={600}
            height={400}
          />
          <h2>For Animals, For Smiles</h2>
          <p>
            We dedicate to offering a safe and trustworthy community for pet
            enthusiasts, supporting new adventures for pets. <br />
            Petpal is the gateway to a world of shared pet love and connections.
            Whether a pet owner looking to find a temporary home or someone
            eager to embrace the joys of pet companionship, Petpals brings you
            together.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
