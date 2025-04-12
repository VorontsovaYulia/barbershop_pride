import { Archivo, Archivo_Black } from "next/font/google";
import "./globals.css";

export const archivo = Archivo({
  subsets: ["latin", "cyrillic"], // если нужна кириллица
  style: ["normal", "italic"],    // обязательно, если хочешь Italic
  weight: ["400"],         // 400 — Regular, 700 — Bold (можно выбрать нужные)
  variable: "--font-archivo",
  display: "swap",
});

export const archivoBlack = Archivo_Black({
  weight: ["400"], // Archivo_Black поддерживает только одно начертание (Black)
  subsets: ["latin", "cyrillic"],
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
        className={`${archivo.variable} ${archivoBlack.variable} antialiased bg-black xl:bg-red-400`}
        
      >
        {children}
      </body>
    </html>
  );
}
