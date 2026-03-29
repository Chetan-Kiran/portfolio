import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import favicon from "./favicon2.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chetan Kiran | Software Developer & ML Enthusiast",
  description: "Portfolio of Chetan Kiran — Software Developer specializing in Java, Machine Learning, and building intelligent systems, developer tools, and scalable architectures.",
  keywords: ["Chetan Kiran", "Software Developer", "Machine Learning", "Java", "Portfolio", "Full Stack Developer"],
  authors: [{ name: "Chetan Kiran" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Chetan Kiran | Software Developer & ML Enthusiast",
    description: "I build intelligent systems, developer tools and scalable software that transforms ideas into reality.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
