import {
  Sidebar as Root,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LogOutIcon } from "lucide-react";

// import Logo from "@/assets/laca-logo.webp";
import { Badge } from "@/components/ui/badge";
import { Link, useLocation } from "@tanstack/react-router";
import { AppMenuRoute } from "./menu";

export function Sidebar() {
  const { state, setOpenMobile } = useSidebar();
  const location = useLocation({
    select: (location) => location.pathname,
  });

  const menu = AppMenuRoute;

  return (
    <Root collapsible="icon" variant="sidebar" className="p-0">
      <SidebarHeader className="border-b h-32 p-0 flex justify-center items-center">
        {/* <img src={Logo} alt="Laca Guinchos Logo" /> */}
        HYDRA
      </SidebarHeader>

      <SidebarContent className="p-0">
        {menu?.map((props) => (
          <SidebarGroup className="p-0">
            <SidebarGroupLabel>{props.title}</SidebarGroupLabel>
            <SidebarMenu>
              {props.items.map((item) => {
                const to = String(item?.url?.toString() ?? "/").replace(
                  /\/$/,
                  ""
                );

                return (
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      className="group data-[active=true]:bg-primary data-[active=true]:text-primary-foreground dark:data-[active=true]:text-secondary-foreground rounded-none h-16 pl-6"
                      isActive={location.includes(to)}
                      tooltip={item.title}
                    >
                      <Link to={to} onClick={() => setOpenMobile(false)}>
                        {item.icon && (
                          <item.icon
                            className="text-primary group-data-[active=true]:text-primary-foreground"
                            width={32}
                          />
                        )}
                        <span className="text-lg">{item.title}</span>
                        {item.badge && (
                          <Badge className="rounded-full px-1 py-0 text-xs">
                            {item.badge}
                          </Badge>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroup>
        ))}
        <SidebarGroup className="p-0">
          <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    // onClick={() => deslogarMutation.mutateAsync()}
                    // onClick={logout}
                    className="w-full h-16 rounded-none pl-6 cursor-pointer"
                  >
                    <LogOutIcon className="text-primary" />
                    <span className="text-lg">Sair</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </TooltipTrigger>
            {state === "collapsed" && (
              <TooltipContent side="right">Sair</TooltipContent>
            )}
          </Tooltip>
        </SidebarGroup>
      </SidebarContent>
    </Root>
  );
}
