import "../styles/globals.css";
import "../styles/legacy.css";
// import Navbar from "@/components/Navbar/Navbar";
// import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "LokiPetpal",
  description: "Find your pet's perfect match",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
