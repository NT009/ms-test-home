import type { Metadata } from "next";
import "./globals.scss";
import { ConfigProvider } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
// import localFont from "next/font/local";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "MS test Home",
  description: "MS test Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <ConfigProvider theme={{
          token: {
            fontFamily:"Poppins-Regular",
            // colorPrimary: "#171717",
          }
        }}>{children}</ConfigProvider>
      </body>
    </html>
  );
}
