import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Header } from "./-layout/header";
import { Sidebar } from "./-layout/sidebar";

export const Route = createFileRoute("/_private")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SidebarProvider>
      <Sidebar />
      <SidebarInset className="relative flex flex-col h-screen w-screen overflow-hidden flex-1 px-4 sm:px-2">
        <Header />
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
