import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

export const metadata = {
  title: "Eventify",
  description: "Meeting Scheduling App",
};

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
          {children}
        </main>
        <footer className="py-12 bg-blue-100">
          <div className="container px-4 mx-auto text-center text-gray-600">
            <p>Made with 💗 by Praveen Raj</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
