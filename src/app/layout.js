import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "ecommerce/components/navbar";
import { UserDataProvider } from "ecommerce/contexts/userDataContext";
import { Footer } from "ecommerce/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BrickHaven",
  description: "A cozy spot for all things LEGO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserDataProvider>
          <Navbar />
          <div className="flex flex-col justify-center items-center mx-auto p-4 w-full mt-20">
            {children}
          </div>
          <Footer />
        </UserDataProvider>
      </body>
    </html>
  );
}