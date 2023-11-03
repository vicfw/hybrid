import AuthCheckProvider from "@/components/providers/AuthCheckProvider";
import { ToastProvider } from "@/components/providers/ToasterProvider";
import { appName } from "@/lib/constants/appName";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: appName,
  description: "Hybrid Task",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <ToastProvider />
        <AuthCheckProvider />
      </body>
    </html>
  );
}
