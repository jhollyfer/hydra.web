import { createFileRoute } from "@tanstack/react-router";
import { About } from "./-components/about";
import { Festival } from "./-components/festival";
import { Footer } from "./-components/footer";
import { Hero } from "./-components/hero";
import { Join } from "./-components/join";
export const Route = createFileRoute("/_landing-page/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Festival />
      s <About />
      <Join />
      <Footer />
    </main>
  );
}
