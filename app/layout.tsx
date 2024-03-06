import type { Metadata } from "next";
import {
  Bai_Jamjuree,
  DM_Sans,
  Inter,
  Inter_Tight,
  Manrope,
} from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { BsFillTelephoneFill, BsPhone } from "react-icons/bs";

const bai_jam = Bai_Jamjuree({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-baijam",
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "800"],
  variable: "--font-manrope",
});
const dm_san = DM_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-dmsans",
});
const inter_var = Inter_Tight({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "SU Care LED LCD TV Repair | TV Repair in Delhi & Gurgaon",
  },
  description:
    "Discover expert LCD and LED TV repair services in Gurgaon, Delhi.TV repair service at your doorstep in Delhi, Gurgaon, Gurugram - Get in touch with Our TV Service Professional of Delhi,Gurgaon 9811214881 Contact us for top-tier LCD and LED TV repairs today.",
  keywords: [
    "LCD",
    "LED",
    "TV",
    "LCD Tv Reparing",
    "Led Tv Reparing",
    "Led Tv Repair in Delhi",
    "Led Tv Repair in Gurgaon",
    "Led Tv Reparing near me",
    "Lcd Tv Reparing near me",
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
       
{/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-793H8PYW16">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){
  dataLayer.push(arguments)
  }
  gtag('js', new Date());

  gtag('config', 'G-793H8PYW16');
</script> */}
      </head>

      <body
        className={`${manrope.variable} ${bai_jam.variable} ${dm_san.variable} ${inter_var.variable} font-sans`}
      >
        <Navbar />
        <div className="relative block sm:hidden">
          <div className="fixed bottom-10 left-7 z-50 bg-green-500 h-14 w-14 rounded-full flex items-center justify-center">
            <a href="tel:+919811214881">
              <BsFillTelephoneFill className="text-xl cursor-pointer animate-spin text-white" />
            </a>
          </div>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
