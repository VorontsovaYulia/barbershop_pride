import { Open_Sans, Archivo_Black } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const openSans = Open_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"], 
  weight: ["400"],
  variable: "--font-open-sans",
  display: "swap",
});

export const archivoBlack = Archivo_Black({
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal"], 
  variable: "--font-archivo-black",
  display: "swap",
});

export const metadata = {
  title: "Барбершоп Pride | Барбершоп Нивки",
  description: "Чоловіча перукарня у Києві на Нивках. Барбершоп Pride пропонує стильні стрижки, гоління небезпечною бритвою та догляд за бородою. Ми поряд із метро Нивки. ЖК Нивки Парк",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body
        className={`${openSans.variable} ${archivoBlack.variable} antialiased bg-black text-main text-sm xl:text-xl max-w-[375px] xl:max-w-[1440px] font-openSans font-normal mx-auto`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
