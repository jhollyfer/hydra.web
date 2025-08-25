import { createFileRoute } from "@tanstack/react-router";
import { About } from "./-components/about";
import { Festival } from "./-components/festival";
import { Footer } from "./-components/footer";
import { Hero } from "./-components/hero";
import { Join } from "./-components/join";

export const Route = createFileRoute("/_landing-page/")({
  component: RouteComponent,
  head: () => ({
    meta: [
      // Meta tags básicas,

      {
        name: "description",
        content:
          "Site oficial do Boi Bumbá Mangangá - Tradição, cultura e festa popular brasileira",
      },
      {
        title: "Mangangá - Site Oficial do Boi Bumbá",
      },
      {
        name: "robots",
        content: "index, follow",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      },

      // Open Graph Protocol
      {
        name: "og:type",
        content: "website",
      },
      {
        name: "og:site_name",
        content: "Mangangá",
      },
      {
        name: "og:title",
        content: "Mangangá - Site Oficial do Boi Bumbá",
      },
      {
        name: "og:description",
        content:
          "Site oficial do Boi Bumbá Mangangá - Tradição, cultura e festa popular brasileira",
      },
      {
        name: "og:url",
        content: "https://www.manganga.maiyu.com.br",
      },
      {
        name: "og:image",
        content: "https://www.manganga.maiyu.com.br/og-image.jpg",
      },
      {
        name: "og:image:type",
        content: "image/jpeg",
      },
      {
        name: "og:image:width",
        content: "1200",
      },
      {
        name: "og:image:height",
        content: "630",
      },
      {
        name: "og:image:alt",
        content: "Logotipo do Boi Bumbá Mangangá",
      },
      {
        name: "og:locale",
        content: "pt_BR",
      },

      // Twitter Cards
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:site",
        content: "@manganga", // Substitua pelo handle do Twitter se existir
      },
      {
        name: "twitter:creator",
        content: "@manganga", // Substitua pelo handle do Twitter se existir
      },
      {
        name: "twitter:title",
        content: "Mangangá - Site Oficial do Boi Bumbá",
      },
      {
        name: "twitter:description",
        content:
          "Site oficial do Boi Bumbá Mangangá - Tradição, cultura e festa popular brasileira",
      },
      {
        name: "twitter:image",
        content: "https://www.manganga.maiyu.com.br/og-image.jpg",
      },
      {
        name: "twitter:image:alt",
        content: "Logotipo do Boi Bumbá Mangangá",
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
