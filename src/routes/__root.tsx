import { createRootRoute, HeadContent, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <HeadContent />
      <Outlet />
    </>
  ),
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
        property: "og:type",
        content: "website",
      },
      {
        property: "og:site_name",
        content: "Mangangá",
      },
      {
        property: "og:title",
        content: "Mangangá - Site Oficial do Boi Bumbá",
      },
      {
        property: "og:description",
        content:
          "Site oficial do Boi Bumbá Mangangá - Tradição, cultura e festa popular brasileira",
      },
      {
        property: "og:url",
        content: "https://www.manganga.maiyu.com.br",
      },
      {
        property: "og:image",
        content: "https://www.manganga.maiyu.com.br/og-image.jpg",
      },
      {
        property: "og:image:type",
        content: "image/jpeg",
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      {
        property: "og:image:alt",
        content: "Logotipo do Boi Bumbá Mangangá",
      },
      {
        property: "og:locale",
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
