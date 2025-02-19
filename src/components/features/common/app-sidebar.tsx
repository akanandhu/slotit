"use client";
import {
  Hotel,
  ChartColumnBig,
  ShoppingBag,
  UsersRound,
  SquareChartGantt,
  LayoutDashboard,
  Settings,
  Info,
  LogOut,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import Image from "next/image";
import BrandLogo from "~/svg/logos/BrandLogo.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Menu items.
const menus = [
  {
    label: "Applications",
    items: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Analytics",
        url: "/analytics",
        icon: ChartColumnBig,
      },
      {
        title: "Booking",
        url: "/bookings",
        icon: ShoppingBag,
      },
      {
        title: "Room",
        url: "/room",
        icon: Hotel,
      },
      {
        title: "Services",
        url: "/services",
        icon: SquareChartGantt,
      },
      {
        title: "Staff",
        url: "/staff",
        icon: UsersRound,
      },
    ],
  },
  {
    label: "General",
    items: [
      {
        title: "Settings",
        url: "#",
        icon: Settings,
      },
      {
        title: "Info & Help",
        url: "#",
        icon: Info,
      },
    ],
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  function handleClick() {
    if (window.innerWidth < 768) {
      const trigger = document.querySelector('[data-trigger="sidebar"]');
      if (trigger instanceof HTMLElement) {
        trigger.click();
      }
    }
  }
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="items-center mt-2">
        <Link className="flex justify-center w-full" href={"/dashboard"}>
          <Image src={BrandLogo} alt="Logo" width={186} className="w-2/3" />
        </Link>
      </SidebarHeader>
      <SidebarContent className="justify-between">
        <div>
          {menus.map((menu, index) => (
            <SidebarGroup key={menu.label}>
              {index !== 0 && <SidebarSeparator className="my-2" />}
              <SidebarGroupContent className="flex flex-col gap-2">
                {menu.items.map((option) => {
                  return (
                    <SidebarMenu key={option.title}>
                      <SidebarMenuItem>
                        <SidebarMenuButton
                          asChild
                          isActive={pathname.includes(option.url)}
                        >
                          <Link
                            className="flex gap-4 items-center"
                            href={option.url}
                            onClick={handleClick}
                          >
                            <option.icon />
                            <span>{option.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  );
                })}
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </div>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild onClick={handleClick}>
                <a href="/login" className="flex gap-4 items-center">
                  <LogOut />
                  <span>Logout</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}
