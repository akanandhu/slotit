import { SidebarMenu, SidebarMenuItem, SidebarMenuSkeleton } from "../../ui/sidebar";

export function NavProjectsSkeleton() {
    return (
      <SidebarMenu>
        {Array.from({ length: 5 }).map((_, index) => (
          <SidebarMenuItem key={index}>
            <SidebarMenuSkeleton />
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    )
  }
  