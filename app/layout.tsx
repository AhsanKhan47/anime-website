import "./style/globals.css";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";
import { Space_Grotesk } from "@next/font/google";
const roboto = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={roboto.className}>
        <Nav />
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
