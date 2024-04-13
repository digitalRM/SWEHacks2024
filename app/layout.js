import { Inter } from "next/font/google";
import { CookiesProvider } from 'next-client-cookies/server';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Particle",
  description: "An app to help children with speech impediments.",
};

export default function RootLayout({ children }) {
  return (
    <CookiesProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </CookiesProvider>
  );
}

