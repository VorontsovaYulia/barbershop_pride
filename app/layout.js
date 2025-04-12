import { Archivo, Archivo_Black } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const archivo = Archivo({
  subsets: ["latin"], // если нужна кириллица
  style: ["normal", "italic"],    // обязательно, если хочешь Italic
  weight: ["400"],         // 400 — Regular, 700 — Bold (можно выбрать нужные)
  variable: "--font-archivo",
  display: "swap",
});

export const archivoBlack = Archivo_Black({
  weight: ["400"], // Archivo_Black поддерживает только одно начертание (Black)
  subsets: ["latin"],
  style: ["normal"], 
  variable: "--font-archivo-black",
  display: "swap",
});

export const metadata = {
  title: "Барбершоп Pride",
  description: "Мужская парикмахерская в центре Киева. Барбершоп Pride предлагает стильные стрижки, бритьё опасной бритвой и уход за бородой. Мы рядом с метро Позняки.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body
        className={`${archivo.variable} ${archivoBlack.variable} antialiased bg-black text-main text-sm xl:text-xl max-w-[375px] xl:max-w-[1440px] mx-auto`}
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
