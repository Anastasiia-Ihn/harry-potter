import { SideNav } from "./components/SideNav/SideNav";
import { catamaran } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "Simple app",
  description: "Simple description",
  keywords: "learn Next.js, SEO App, Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={catamaran.className}>
        <SideNav />
        {children}
      </body>
    </html>
  );
}
