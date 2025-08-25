import { Pagination } from "@/components/pagination";
import { API } from "@/lib/api";
import { MetaDefault } from "@/lib/constant";
import type { Member, Paginated } from "@/lib/model";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, useSearch } from "@tanstack/react-router";
import { CreateMemberSheet } from "./-components/create-member-sheet";
import { Table } from "./-components/table";
import { TableSkeleton } from "./-components/table-skeleton";

interface SearchProps {
  page?: string;
  perPage?: string;
  search?: string;
}

export const Route = createFileRoute("/_private/members/")({
  component: RouteComponent,
  validateSearch: (params: SearchProps) => {
    return {
      page: Number(params.page ?? 1),
      perPage: Number(params?.perPage ?? 10),
      search: params?.search,
    };
  },

  head: () => ({
    // Meta tags básicas
    meta: [
      {
        title: "Mangangá | Members",
        description: "Pagina administrativa de membros do Boi Bumbá Mangangá",
      },
      {
        name: "robots",
        content: "index, follow",
      },
      // Open Graph
      {
        property: "og:title",
        content: "Mangangá | Members",
      },
      {
        property: "og:description",
        content: "Pagina administrativa de membros do Boi Bumbá Mangangá",
      },
      {
        property: "og:url",
        content: "https://www.manganga.maiyu.com.br/og-image.jpg",
      },
      {
        property: "og:site_name",
        content: "Mangangá | Members",
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
        content: "Mangangá | Members",
      },
      // Twitter Cards (opcional)
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Mangangá | Members",
      },
      {
        name: "twitter:description",
        content: "Pagina administrativa de membros do Boi Bumbá Mangangá",
      },
      {
        name: "twitter:image",
        content: "https://www.manganga.maiyu.com.br/og-image.jpg",
      },
    ],
  }),
});

function RouteComponent() {
  const { search, page, perPage } = useSearch({
    from: "/_private/members/",
  });

  const response = useQuery({
    queryKey: [
      "MEMBERS-LIST-PAGINATED",
      {
        page,
        perPage,
        ...(search && { search }),
      },
    ],
    queryFn: async function () {
      const route = "/administrator/members/paginated";
      const { data } = await API.get<Paginated<Member>>(route, {
        params: {
          page,
          perPage,
          ...(search && { search }),
        },
      });
      return data;
    },
  });

  const headers = ["Nome", "CPF", "RG", "Categoria"];

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex-shrink-0 p-2 flex flex-row justify-between gap-1 ">
        <h1 className="text-2xl font-medium ">Membros</h1>
        <CreateMemberSheet />
      </div>

      {response.status === "pending" && (
        <TableSkeleton headers={headers} rowCount={50} />
      )}

      {response.status === "success" && !(response?.data?.data?.length > 0) && (
        <div className="flex-1 flex flex-col min-h-0 overflow-auto relative border rounded-xl shadow-xs">
          <span className="opacity-50 font-semibold text-xl">
            Nenhum membro encontrado
          </span>
        </div>
      )}

      {response.status === "success" && response?.data?.data?.length > 0 && (
        <div className="flex-1 flex flex-col min-h-0 overflow-auto relative border rounded-xl shadow-xs">
          <Table data={response?.data?.data ?? []} headers={headers} />
        </div>
      )}

      <div className="flex-shrink-0 p-2">
        <Pagination meta={response?.data?.meta ?? MetaDefault} />
      </div>
    </div>
  );
}
