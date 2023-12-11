import Script from "next/script";
import "./reset.css";
import "./globals.css";
import "./style.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Addtask from "./components/calender/Addtask";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calender-Ngoc Nhi",
  description: "Hehehee hihihi haha U map",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hiệu Ứng Ảnh Tan Biến</title>
        {/* <script src="//cdnjs.cloudflare.com/ajax/libs/three.js/r75/three.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></script>
        <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/bas.js"></script>
        <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/OrbitControls-2.js"></script>
        <script src="/app/slide/javascript.js"></script> */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
