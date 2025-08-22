import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Sidebar } from "./-sidebar";

export const Route = createFileRoute("/_private")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SidebarProvider>
      <Sidebar />
      <SidebarInset className="relative flex flex-col h-screen w-screen overflow-hidden px-[60px] py-12 flex-1">
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
