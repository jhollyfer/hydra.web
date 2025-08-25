import { createFileRoute } from "@tanstack/react-router";
import { About } from "./-components/about";
import { Festival } from "./-components/festival";
import { Footer } from "./-components/footer";
import { Hero } from "./-components/hero";
import { Join } from "./-components/join";
export const Route = createFileRoute("/_landing-page/")({
  component: RouteComponent,
  head: () => ({
    // Meta tags básicas
    meta: [
      {
        title: "Mangangá",
        description: "Site oficial do Boi Bumbá Manganga",
      },
      {
        name: "robots",
        content: "index, follow",
      },
      // Open Graph
      {
        property: "og:title",
        content: "Mangangá",
      },
      {
        property: "og:description",
        content: "Site oficial do Boi Bumbá Manganga",
      },
      {
        property: "og:url",
        content: "https://www.manganga.maiyu.com.br/og-image.jpg",
      },
      {
        property: "og:site_name",
        content: "Mangangá",
      },
      {
        property: "og:locale",
        content: "pt-BR",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:image",
        content: "https://www.manganga.maiyu.com.br/og-image.jpg",
      },
      {
        property: "og:image:width",
        content: "800",
      },
      {
        property: "og:image:height",
        content: "600",
      },
      {
        property: "og:image:alt",
        content: "Mangangá",
      },
      // Twitter Cards (opcional)
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Mangangá",
      },
      {
        name: "twitter:description",
        content: "Site oficial do Boi Bumbá Manganga",
      },
      {
        name: "twitter:image",
        content: "https://www.manganga.maiyu.com.br/og-image.jpg",
      },
    ],
  }),
});

function RouteComponent() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Festival />
      <About />
      <Join />
      <Footer />
    </main>
  );
}
