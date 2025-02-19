import type { Metadata } from "next";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/features/common/app-sidebar";
import { cookies } from "next/headers";
import { Header } from "@/components/features/common/header";

export const metadata: Metadata = {
  title: "Slotit - Booking",
  description: "Booking App",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  return (
    <main>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <div className="flex flex-col w-full">
          <Header />
          <div className="p-6 bg-gray-50 h-full">{children}</div>
        </div>
      </SidebarProvider>
    </main>
  );
}
