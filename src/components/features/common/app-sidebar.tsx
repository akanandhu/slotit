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

// Menu items.
const menus = [
  {
    label: "Applications",
    items: [
      {
        title: "Dashboard",
        url: "#",
        icon: LayoutDashboard,
      },
      {
        title: "Analytics",
        url: "#",
        icon: ChartColumnBig,
      },
      {
        title: "Booking",
        url: "#",
        icon: ShoppingBag,
      },
      {
        title: "Room",
        url: "#",
        icon: Hotel,
      },
      {
        title: "Serives",
        url: "#",
        icon: SquareChartGantt,
      },
      {
        title: "Staff",
        url: "#",
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
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="items-center mt-2">
        <Image src={BrandLogo} alt="Logo" width={186} className="w-2/3" />
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
                        <SidebarMenuButton asChild>
                          <a
                            className="flex gap-4 items-center"
                            href={option.url}
                          >
                            <option.icon />
                            <span>{option.title}</span>
                          </a>
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
              <SidebarMenuButton asChild>
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
