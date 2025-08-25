import { createRootRoute, HeadContent, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <main
      // className="relative flex flex-col h-screen w-full overflow-hidden"
      className="relative flex flex-col h-screen w-full"
    >
      <HeadContent />
      <Outlet />
    </main>
  ),
  head: () => ({
    meta: [
      {
        title: "Mangangá",
        description: "Página principal do Boi Bumbá Mangangá ",
      },
    ],
  }),
});
