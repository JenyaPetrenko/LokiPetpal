import "../styles/globals.css";
import "../styles/legacy.css";

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
      <body>{children}</body>
    </html>
  );
}
