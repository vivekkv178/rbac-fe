import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import "@vivekkv178/library/dist/style.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import StoreProvider from "@/lib/StoreProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RBAC | Role-Based Access Control",
  description:
    "Unlock precise access control with Role-Based Access Control (RBAC) — ensure security and efficiency by assigning permissions based on user roles. Empower your organization with seamless, scalable access management tailored to every user",
  metadataBase: new URL(
    `${process.env.NEXT_PUBLIC_CDN_PATH}/rbac/Thumbnail.png`,
  ),
  openGraph: {
    title: "RBAC | Role-Based Access Control",
    description:
      "Unlock precise access control with Role-Based Access Control (RBAC) — ensure security and efficiency by assigning permissions based on user roles.",
    url: "https://rbac-vivekkv.vercel.app/",
    siteName: "RBAC",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CDN_PATH}/rbac/Thumbnail.png`, // Must be an absolute URL
        width: 800,
        height: 1000,
      },
      {
        url: `${process.env.NEXT_PUBLIC_CDN_PATH}/rbac/Thumbnail.png`, // Must be an absolute URL
        width: 1800,
        height: 2000,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <StoreProvider>{children}</StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
