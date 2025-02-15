import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Page",
  description: "Login Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
