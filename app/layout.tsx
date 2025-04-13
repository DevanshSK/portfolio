import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Header from "@/components/header";

// const inter = Inter({ subsets: ["latin"] });
const generalSans = localFont({
  src: [
    {
      path: '../lib/fonts/GeneralSans-Variable.ttf',
      style: 'normal'
    },
    {
      path: '../lib/fonts/GeneralSans-VariableItalic.ttf',
      style: 'italic'
    },
  ]
});

export const metadata: Metadata = {
  title: "Devansh Portfolio",
  description: "Portfolio website of Devansh Singh Kushwah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=general-sans@200,201,300,301,400,401,500,501,600,601,700,701,1,2&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={generalSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>

      </body>
    </html>
  );
}
