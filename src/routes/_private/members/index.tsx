import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_private/members/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_private/members/"!</div>;
}
