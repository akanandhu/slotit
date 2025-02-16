import type { Metadata } from "next";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/features/common/app-sidebar";
import { cookies } from "next/headers";
import { Suspense } from "react";
import { NavProjectsSkeleton } from "@/components/features/common/app-sidebar-skelton";
import { Header } from "@/components/features/common/header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <Suspense fallback={<NavProjectsSkeleton />}>
          <AppSidebar />
        </Suspense>
        <div className="flex flex-col w-full">
          <Header />
          <div className="p-6 bg-gray-50 h-full">{children}</div>
        </div>
      </SidebarProvider>
    </main>
  );
}
