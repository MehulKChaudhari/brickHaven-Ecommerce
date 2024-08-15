import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "ecommerce/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BrickHaven",
  description: "A cozy spot for all things LEGO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}