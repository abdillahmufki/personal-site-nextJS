import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/app/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToggleDarkMode from "@/components/ToogleDarkMode";

export const metadata: Metadata = {
  title: "Personal Site Abdillah Mufki Auzan Mubin",
  description: "This my peroanl site, you can see my portfolio and blog here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div className="fixed top-4 right-7 z-50">
            <ToggleDarkMode />
          </div>
          <main className="relative overflow-hidden">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
